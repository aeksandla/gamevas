import {MapType, NodeType} from "../../common-types";
import {getMapKey} from "../../utils";
import { INTERVAL } from "./constants";
import {IRunContext} from "./types";

const runSmartCathet: IRunContext = (changeStateFields) => {
  return function ({x: toX, y: toY}) {
    if (this._interval) {
      clearInterval(this._interval);
    }

    const path = findPath.call(this, {x: this.state.x, y: this.state.y, cost: 0}, {x: toX, y: toY, cost: 0})
    let currentIndex = path.length - 1;
    let prevPoint = path[currentIndex];
    this._interval = setInterval(() => {
      const point = path[currentIndex];

      if (!point) {
        this.setState({...changeStateFields({dX: 0, dY: 0, isLast: true})})
        clearInterval(this._interval);
        return;
      }

      const xSign = point.x - prevPoint.x;
      const ySign = point.y - prevPoint.y;
      if (point) {
        this.setState({x: point.x, y: point.y, ...changeStateFields({dX: xSign, dY: ySign}),});
      }
      currentIndex--;
      prevPoint = point;
    }, INTERVAL);
  }
}

function findPath(startNode: NodeType, endNode: NodeType) {
  console.log('findPath');
  const reachable: MapType = {[getMapKey(startNode.x, startNode.y)]: startNode};
  const explored: MapType = {};

  while (Object.keys(reachable).length) {

    const node = chooseNode(reachable);
    const nodeKey = getMapKey(node.x, node.y);

    if (node.x === endNode.x && node.y === endNode.y) {
      return buildPath(node);
    }

    explored[nodeKey] = node;
    delete reachable[nodeKey];

    const newReachable: MapType = omitNodes(getAdjacentNodes.call(this, node), explored);
    for (const adjacentKey in newReachable) {
      if (!reachable[adjacentKey]) {
        newReachable[adjacentKey].previous = node;
        reachable[adjacentKey] = newReachable[adjacentKey];
      }

      if (node.cost + 1 < newReachable[adjacentKey].cost) {
        newReachable[adjacentKey].previous = node;
        newReachable[adjacentKey].cost = node.cost + 1;
      }
    }
  }

  console.log('Путь не найден')
  return [];
}

function getAdjacentNodes(node: NodeType) {
  const isExistPoint = (x: number, y: number) => !!this.map[getMapKey(x, y)];
  const isOwnPoints = (x: number, y: number) => this.map[getMapKey(x, y)].id === this.id;
  const isInfinity = (x: number, y: number) => this.map[getMapKey(x, y)].cost === Infinity;

  const nodes: MapType = {};
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      if (x === 0 && y === 0) continue;
      const itemX = node.x + x;
      const itemY = node.y + y;
      let isAllow = true;
      for (let oX = 0; oX < this.state.sprite.hitboxWidth; oX++) {
        for (let oY = 0; oY < this.state.sprite.hitboxHeight; oY++) {
          const xInObjectWidth = itemX + oX;
          const yInObjectHeight = itemY + oY;
          if (!isExistPoint(xInObjectWidth, yInObjectHeight)) {
            isAllow = false;
            continue;
          }
          if (isInfinity(xInObjectWidth, yInObjectHeight) && !isOwnPoints(xInObjectWidth, yInObjectHeight)) {
            isAllow = false;
          }
        }
      }

      if (isAllow) {
        nodes[getMapKey(itemX, itemY)] = {...this.map[getMapKey(itemX, itemY)], cost: 0};
      }
    }
  }

  return nodes;
}

const omitNodes = (map: MapType, omitted: MapType) => {
  return Object.entries(map).reduce((prev, [key, value]) => {
    if (!omitted[key]) {
      return {...prev, [key]: value}
    }
    return prev;
  }, {})
}

const buildPath = (goalNode: NodeType) => {
  const path = [];
  while (goalNode) {
    path.push(goalNode);
    goalNode = goalNode.previous;
  }
  return path;
}

const chooseNode = (reachable: MapType): NodeType => {
  let bestNode = null;

  for (const key in reachable) {

    if (bestNode === null || bestNode.cost > reachable[key].cost) {
      bestNode = reachable[key];
    }
  }
  return bestNode;
}

export default runSmartCathet;
