/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 718:
/***/ ((__unused_webpack_module, exports) => {

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 996:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_163__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERunType = void 0;
__exportStar(__nested_webpack_require_163__(246), exports);
__exportStar(__nested_webpack_require_163__(799), exports);
var types_1 = __nested_webpack_require_163__(886);
Object.defineProperty(exports, "ERunType", ({ enumerable: true, get: function () { return types_1.ERunType; } }));


/***/ }),

/***/ 799:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_1287__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.withHitbox = void 0;
var Game_1 = __importDefault(__nested_webpack_require_1287__(513));
var common_types_1 = __nested_webpack_require_1287__(475);
function drawObjectWithHitbox(shape) {
    return function (canvas) {
        var _a = this.state, _b = _a.sprite, imageX = _b.imageX, imageY = _b.imageY, realImageWidth = _b.realImageWidth, realImageHeight = _b.realImageHeight, imageWidth = _b.imageWidth, imageHeight = _b.imageHeight, _c = _b.hitboxWidth, hitboxWidth = _c === void 0 ? imageWidth : _c, _d = _b.hitboxHeight, hitboxHeight = _d === void 0 ? imageHeight : _d, _e = _b.hitboxLeft, hitboxLeft = _e === void 0 ? 0 : _e, _f = _b.hitboxTop, hitboxTop = _f === void 0 ? 0 : _f, x = _a.x, y = _a.y;
        if (shape === common_types_1.EHitboxShape.Rect) {
            this.object = canvas.drawRect({
                fillStyle: 'transparent',
                strokeStyle: Game_1.default.isShowHitbox ? this.gridColor : 'transparent',
                x: x,
                y: y,
                width: hitboxWidth,
                height: hitboxHeight,
            });
        }
        if (shape === common_types_1.EHitboxShape.Ellipse) {
            this.object = canvas.drawEllipse({
                fillStyle: 'transparent',
                strokeStyle: Game_1.default.isShowHitbox ? this.gridColor : 'transparent',
                x: x + imageWidth / 2,
                y: y + imageHeight / 2,
                radiusX: hitboxWidth / 2,
                radiusY: hitboxHeight / 2,
                startAngle: 0,
                endAngle: 180,
                rotation: 0,
            });
        }
        canvas.drawImage(this.sprite, imageX, imageY, realImageWidth, realImageHeight, x - hitboxLeft, y - hitboxTop, imageWidth, imageHeight);
    };
}
/**
 *
 * @param CanvasObjectClass
 * @description Класс должен иметь поле sprite, стейт sprite со свойствами imageX, imageY, realImageWidth, realImageHeight, imageWidth, imageHeight, hitboxWidth, hitboxHeight, hitboxLeft, hitboxTop
 */
var withHitbox = function (CanvasObjectClass, shape) {
    if (shape === void 0) { shape = common_types_1.EHitboxShape.Rect; }
    return /** @class */ (function (_super) {
        __extends(CanvasObjectWithHitbox, _super);
        function CanvasObjectWithHitbox() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this.draw = drawObjectWithHitbox.bind(_this)(shape);
            return _this;
        }
        return CanvasObjectWithHitbox;
    }(CanvasObjectClass));
};
exports.withHitbox = withHitbox;


/***/ }),

/***/ 117:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.INTERVAL = void 0;
exports.INTERVAL = 50;


/***/ }),

/***/ 246:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_5195__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.withRun = void 0;
var types_1 = __nested_webpack_require_5195__(886);
var runCathet_1 = __importDefault(__nested_webpack_require_5195__(777));
var runDiagonal_1 = __importDefault(__nested_webpack_require_5195__(814));
var runSmartCathet_1 = __importDefault(__nested_webpack_require_5195__(191));
/**
 *
 * @param type
 * @param changeStateFields
 */
var withRun = function (type, changeStateFields) {
    if (type === void 0) { type = types_1.ERunType.Diagonal; }
    /**
     *
     * @param CanvasObjectClass - Класс должен иметь поле step, стейты x, y
     */
    return function (CanvasObjectClass) { return /** @class */ (function (_super) {
        __extends(CanvasObjectWithRun, _super);
        function CanvasObjectWithRun() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._interval = null;
            switch (type) {
                case types_1.ERunType.Cathet: {
                    _this.run = (0, runCathet_1.default)(changeStateFields).bind(_this);
                    break;
                }
                case types_1.ERunType.Diagonal: {
                    _this.run = (0, runDiagonal_1.default)(changeStateFields).bind(_this);
                    break;
                }
                case types_1.ERunType.SmartCathet: {
                    _this.run = (0, runSmartCathet_1.default)(changeStateFields).bind(_this);
                    break;
                }
            }
            return _this;
        }
        return CanvasObjectWithRun;
    }(CanvasObjectClass)); };
};
exports.withRun = withRun;


/***/ }),

/***/ 777:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_7928__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var constants_1 = __nested_webpack_require_7928__(117);
var runCathet = function (changeStateFields) {
    return function (_a) {
        var _this = this;
        var toX = _a.x, toY = _a.y;
        if (this._interval) {
            clearInterval(this._interval);
        }
        var yPath = toY - this.state.y;
        var xPath = toX - this.state.x;
        var xSign = xPath / Math.abs(xPath) * this.step;
        var ySign = yPath / Math.abs(yPath) * this.step;
        this._interval = setInterval(function () {
            _this.setState(function (currentState) {
                if (currentState.x === toX && currentState.y === toY)
                    clearInterval(_this._interval);
                var newState = __assign({ x: currentState.x, y: currentState.y }, changeStateFields({ dX: xSign, dY: ySign }));
                if (Math.abs(currentState.x - toX) >= _this.step)
                    newState.x = currentState.x + xSign;
                else
                    newState.x = toX;
                if (Math.abs(currentState.y - toY) >= _this.step)
                    newState.y = currentState.y + ySign;
                else
                    newState.y = toY;
                return newState;
            });
        }, constants_1.INTERVAL);
    };
};
exports["default"] = runCathet;


/***/ }),

/***/ 814:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_9775__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var constants_1 = __nested_webpack_require_9775__(117);
var runDiagonal = function (changeStateFields) {
    return function (_a) {
        var _this = this;
        var toX = _a.x, toY = _a.y;
        if (this._interval) {
            clearInterval(this._interval);
        }
        var yPath = toY - this.state.y;
        var xPath = toX - this.state.x;
        var xSign = xPath / Math.abs(xPath) * this.step;
        var ySign = yPath / Math.abs(yPath) * this.step;
        this._interval = setInterval(function () {
            _this.setState(function (currentState) {
                var newState = {};
                if (Math.abs(yPath) > Math.abs(xPath)) {
                    if (Math.abs(toY - _this.state.y) >= _this.step) {
                        newState = __assign({ y: currentState.y + ySign, x: currentState.x + Math.abs(xPath / yPath) * xSign }, changeStateFields({ dX: xSign, dY: ySign }));
                    }
                    else {
                        newState = __assign({ y: toY, x: toX }, changeStateFields({ dX: xSign, dY: ySign, isLast: true }));
                        clearInterval(_this._interval);
                    }
                }
                else {
                    if (Math.abs(toX - _this.state.x) >= _this.step) {
                        newState = __assign({ x: currentState.x + xSign, y: currentState.y + Math.abs(yPath / xPath) * ySign }, changeStateFields({ dX: xSign, dY: ySign }));
                    }
                    else {
                        newState = __assign({ y: toY, x: toX }, changeStateFields({ dX: xSign, dY: ySign, isLast: true }));
                        clearInterval(_this._interval);
                    }
                }
                return newState;
            });
        }, constants_1.INTERVAL);
    };
};
exports["default"] = runDiagonal;


/***/ }),

/***/ 191:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_12155__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __nested_webpack_require_12155__(147);
var constants_1 = __nested_webpack_require_12155__(117);
var runSmartCathet = function (changeStateFields) {
    return function (_a) {
        var _this = this;
        var toX = _a.x, toY = _a.y;
        if (this._interval) {
            clearInterval(this._interval);
        }
        var path = findPath.call(this, { x: this.state.x, y: this.state.y, cost: 0 }, { x: toX, y: toY, cost: 0 });
        var currentIndex = path.length - 1;
        var prevPoint = path[currentIndex];
        this._interval = setInterval(function () {
            var point = path[currentIndex];
            if (!point) {
                _this.setState(__assign({}, changeStateFields({ dX: 0, dY: 0, isLast: true })));
                clearInterval(_this._interval);
                return;
            }
            var xSign = point.x - prevPoint.x;
            var ySign = point.y - prevPoint.y;
            if (point) {
                _this.setState(__assign({ x: point.x, y: point.y }, changeStateFields({ dX: xSign, dY: ySign })));
            }
            currentIndex--;
            prevPoint = point;
        }, constants_1.INTERVAL);
    };
};
function findPath(startNode, endNode) {
    var _a;
    console.log('findPath');
    var reachable = (_a = {}, _a[(0, utils_1.getMapKey)(startNode.x, startNode.y)] = startNode, _a);
    var explored = {};
    while (Object.keys(reachable).length) {
        var node = chooseNode(reachable);
        var nodeKey = (0, utils_1.getMapKey)(node.x, node.y);
        if (node.x === endNode.x && node.y === endNode.y) {
            return buildPath(node);
        }
        explored[nodeKey] = node;
        delete reachable[nodeKey];
        var newReachable = omitNodes(getAdjacentNodes.call(this, node), explored);
        for (var adjacentKey in newReachable) {
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
    console.log('Путь не найден');
    return [];
}
function getAdjacentNodes(node) {
    var _this = this;
    var isExistPoint = function (x, y) { return !!_this.map[(0, utils_1.getMapKey)(x, y)]; };
    var isOwnPoints = function (x, y) { return _this.map[(0, utils_1.getMapKey)(x, y)].id === _this.id; };
    var isInfinity = function (x, y) { return _this.map[(0, utils_1.getMapKey)(x, y)].cost === Infinity; };
    var nodes = {};
    for (var x = -1; x <= 1; x++) {
        for (var y = -1; y <= 1; y++) {
            if (x === 0 && y === 0)
                continue;
            var itemX = node.x + x;
            var itemY = node.y + y;
            var isAllow = true;
            for (var oX = 0; oX < this.state.sprite.hitboxWidth; oX++) {
                for (var oY = 0; oY < this.state.sprite.hitboxHeight; oY++) {
                    var xInObjectWidth = itemX + oX;
                    var yInObjectHeight = itemY + oY;
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
                nodes[(0, utils_1.getMapKey)(itemX, itemY)] = __assign(__assign({}, this.map[(0, utils_1.getMapKey)(itemX, itemY)]), { cost: 0 });
            }
        }
    }
    return nodes;
}
var omitNodes = function (map, omitted) {
    return Object.entries(map).reduce(function (prev, _a) {
        var _b;
        var key = _a[0], value = _a[1];
        if (!omitted[key]) {
            return __assign(__assign({}, prev), (_b = {}, _b[key] = value, _b));
        }
        return prev;
    }, {});
};
var buildPath = function (goalNode) {
    var path = [];
    while (goalNode) {
        path.push(goalNode);
        goalNode = goalNode.previous;
    }
    return path;
};
var chooseNode = function (reachable) {
    var bestNode = null;
    for (var key in reachable) {
        if (bestNode === null || bestNode.cost > reachable[key].cost) {
            bestNode = reachable[key];
        }
    }
    return bestNode;
};
exports["default"] = runSmartCathet;


/***/ }),

/***/ 886:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERunType = void 0;
var ERunType;
(function (ERunType) {
    ERunType["Diagonal"] = "diagonal";
    ERunType["Cathet"] = "cathet";
    ERunType["SmartCathet"] = "smart-cathet";
})(ERunType = exports.ERunType || (exports.ERunType = {}));


/***/ }),

/***/ 475:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EHitboxShape = exports.ECanvasEventType = exports.ActionTypes = void 0;
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["MouseDown"] = "mousedown";
    ActionTypes["MouseUp"] = "mouseup";
    ActionTypes["MouseOver"] = "mouseover";
    ActionTypes["MouseOut"] = "mouseout";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));
var ECanvasEventType;
(function (ECanvasEventType) {
    ECanvasEventType["Click"] = "click";
})(ECanvasEventType = exports.ECanvasEventType || (exports.ECanvasEventType = {}));
var EHitboxShape;
(function (EHitboxShape) {
    EHitboxShape["Rect"] = "rect";
    EHitboxShape["Ellipse"] = "ellipse";
})(EHitboxShape = exports.EHitboxShape || (exports.EHitboxShape = {}));


/***/ }),

/***/ 612:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_18504__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Abyss = void 0;
var GameObject_1 = __nested_webpack_require_18504__(607);
var abyss_png_1 = __importDefault(__nested_webpack_require_18504__(889));
var HOCs_1 = __nested_webpack_require_18504__(996);
var common_types_1 = __nested_webpack_require_18504__(475);
var abyssSprite = new Image(935, 1133);
abyssSprite.src = abyss_png_1.default;
var _Abyss = /** @class */ (function (_super) {
    __extends(_Abyss, _super);
    function _Abyss(_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var _this = _super.call(this) || this;
        _this.sprite = abyssSprite;
        _this.gridColor = 'green';
        _this.id = "abyss";
        _this.state = {
            x: x,
            y: y,
            sprite: {
                imageX: 0,
                imageY: 0,
                imageWidth: width,
                imageHeight: height,
                realImageWidth: 1868,
                realImageHeight: 917,
                hitboxWidth: width,
                hitboxHeight: height,
            },
        };
        return _this;
        // this.addEventListener(ActionTypes.MouseOver, () => this.setState(state => ({
        //   sprite: {
        //     ...state.sprite,
        //     imageX: 34,
        //   }
        // })));
        //
        // this.addEventListener(ActionTypes.MouseOut, () => this.setState(state => ({
        //   sprite: {
        //     ...state.sprite,
        //     imageX: 0,
        //   }
        // })));
    }
    return _Abyss;
}(GameObject_1.CanvasObject));
exports.Abyss = (0, HOCs_1.withHitbox)(_Abyss, common_types_1.EHitboxShape.Ellipse);
exports["default"] = exports.Abyss;


/***/ }),

/***/ 172:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_21182__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Canvas = void 0;
var common_types_1 = __nested_webpack_require_21182__(475);
var constants_1 = __nested_webpack_require_21182__(396);
var Grid_1 = __importDefault(__nested_webpack_require_21182__(904));
var Game_1 = __importDefault(__nested_webpack_require_21182__(513));
var Canvas = /** @class */ (function () {
    function Canvas(id) {
        var _this = this;
        this.objects = [];
        this.isRerender = true;
        this.render = function () {
            var main = function (_) {
                if (_this.isRerender) {
                    _this.drawObjects();
                    _this.updateMap();
                    _this.isRerender = false;
                }
                requestAnimationFrame(main);
            };
            main(0);
        };
        this.enableEventListeners = function () {
            _this.canvas.addEventListener('mousedown', function (e) {
                _this.objects.forEach(function (object) {
                    if (object.listeners[common_types_1.ActionTypes.MouseDown])
                        _this.objectEvents[common_types_1.ActionTypes.MouseDown](object, e);
                });
            });
            _this.canvas.addEventListener('mouseup', function (e) {
                _this.objects.forEach(function (object) {
                    if (object.listeners[common_types_1.ActionTypes.MouseUp])
                        _this.objectEvents[common_types_1.ActionTypes.MouseUp](object, e);
                });
            });
            _this.canvas.addEventListener('mousemove', function (e) {
                _this.objects.forEach(function (object) {
                    if (object.listeners[common_types_1.ActionTypes.MouseOver])
                        _this.objectEvents[common_types_1.ActionTypes.MouseOver](object, e);
                    if (object.listeners[common_types_1.ActionTypes.MouseOut])
                        _this.objectEvents[common_types_1.ActionTypes.MouseOut](object, e);
                });
            });
        };
        this.setObject = function (object) {
            _this.objects.push(object);
            object.map = _this.grid.cells;
            object.setState = function (arg) {
                if (object.isCb(arg)) {
                    object.state = __assign(__assign({}, object.state), arg(object.state));
                }
                else {
                    object.state = __assign(__assign({}, object.state), arg);
                }
                _this.isRerender = true;
            };
            _this.isRerender = true;
        };
        this.updateMap = function () {
            _this.grid.draw(_this);
            _this.objects.forEach(function (object) {
                var _a, _b, _c, _d;
                if (((_b = (_a = object.state) === null || _a === void 0 ? void 0 : _a.sprite) === null || _b === void 0 ? void 0 : _b.hitboxWidth) && ((_d = (_c = object.state) === null || _c === void 0 ? void 0 : _c.sprite) === null || _d === void 0 ? void 0 : _d.hitboxHeight) && object.state.x !== undefined && object.state.y !== undefined) {
                    var _e = object.state, _f = _e.sprite, hitboxWidth = _f.hitboxWidth, hitboxHeight = _f.hitboxHeight, objectX = _e.x, objectY = _e.y;
                    for (var x = 0; x < hitboxWidth; x++) {
                        for (var y = 0; y < hitboxHeight; y++) {
                            var currentX = objectX + x;
                            var currentY = objectY + y;
                            _this.grid.updateCell(currentX, currentY, { x: currentX, y: currentY, cost: Infinity, id: object.id }, _this, object.gridColor);
                        }
                    }
                }
            });
        };
        this.removeObject = function (object) {
            object.setState = function () { };
            _this.objects = _this.objects.filter(function (o) { return o !== object; });
            _this.isRerender = true;
            _this.updateMap();
        };
        this.drawObjects = function () {
            _this.context.clearRect(0, 0, _this.canvasWidth, _this.canvasHeight);
            _this.objects.forEach(function (object) {
                object.draw(_this);
            });
        };
        this.drawRect = function (_a) {
            var _b = _a.fillStyle, fillStyle = _b === void 0 ? 'transparent' : _b, _c = _a.strokeStyle, strokeStyle = _c === void 0 ? 'transparent' : _c, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
            var object = new Path2D();
            _this.context.fillStyle = fillStyle;
            _this.context.strokeStyle = strokeStyle;
            object.rect(x * _this.grid.width, y * _this.grid.height, width * _this.grid.width, height * _this.grid.height);
            _this.context.stroke(object);
            _this.context.fill(object);
            return object;
        };
        this.drawEllipse = function (_a) {
            var _b = _a.fillStyle, fillStyle = _b === void 0 ? 'transparent' : _b, _c = _a.strokeStyle, strokeStyle = _c === void 0 ? 'transparent' : _c, x = _a.x, y = _a.y, radiusX = _a.radiusX, _d = _a.radiusY, radiusY = _d === void 0 ? radiusX : _d, rotation = _a.rotation, counterclockwise = _a.counterclockwise, startAngle = _a.startAngle, endAngle = _a.endAngle;
            var object = new Path2D();
            _this.context.fillStyle = fillStyle;
            _this.context.strokeStyle = strokeStyle;
            object.ellipse(x * _this.grid.width, y * _this.grid.height, radiusX * _this.grid.width, radiusY * _this.grid.height, rotation, startAngle, endAngle, counterclockwise);
            _this.context.stroke(object);
            _this.context.fill(object);
            return object;
        };
        this.drawImage = function (image, sx, sy, sw, sh, dx, dy, dw, dh) {
            _this.context.drawImage(image, sx, sy, sw, sh, dx * _this.grid.width, dy * _this.grid.height, dw * _this.grid.width, dh * _this.grid.height);
        };
        this.objectEvents = {
            mousedown: function (object, e) {
                var isMouseDown = _this.context.isPointInPath(object.object, _this.getCoordinate(e, 'x'), _this.getCoordinate(e, 'y'));
                if (isMouseDown) {
                    object.listeners[common_types_1.ActionTypes.MouseDown](e);
                }
            },
            mouseup: function (object, e) {
                var isMouseUp = _this.context.isPointInPath(object.object, _this.getCoordinate(e, 'x'), _this.getCoordinate(e, 'y'));
                if (isMouseUp) {
                    object.listeners[common_types_1.ActionTypes.MouseUp](e);
                }
            },
            mouseover: function (object, e) {
                var isMouseOver = _this.context.isPointInPath(object.object, _this.getCoordinate(e, 'x'), _this.getCoordinate(e, 'y')) && !object.isOver;
                if (isMouseOver) {
                    console.log('mouseover');
                    object.isOver = true;
                    object.listeners[common_types_1.ActionTypes.MouseOver](e);
                }
            },
            mouseout: function (object, e) {
                var isMouseOut = !_this.context.isPointInPath(object.object, _this.getCoordinate(e, 'x'), _this.getCoordinate(e, 'y')) && object.isOver;
                if (isMouseOut) {
                    console.log('mouseout');
                    object.isOver = false;
                    object.listeners[common_types_1.ActionTypes.MouseOut](e);
                }
            },
        };
        this.getCoordinate = function (e, type) {
            return (e[type] - _this.canvas.getBoundingClientRect()[type]) * Game_1.default.scale;
        };
        this.addEventListener = function (type, listener) {
            switch (type) {
                case common_types_1.ECanvasEventType.Click: {
                    _this.canvas.addEventListener('click', function (e) {
                        listener({ naturalEvent: e, x: Math.floor(_this.getCoordinate(e, 'x') / _this.grid.width), y: Math.floor(_this.getCoordinate(e, 'y') / _this.grid.height) });
                    });
                    break;
                }
            }
        };
        this.canvas = document.getElementById(id);
        if (!this.canvas)
            throw new Error('Canvas не найден');
        this.context = this.canvas.getContext('2d');
        this.setCanvasSize();
        this.grid = new Grid_1.default();
        this.setObject(this.grid);
        this.enableEventListeners();
        this.render();
    }
    Canvas.prototype.setCanvasSize = function () {
        this.canvas.width = constants_1.ORIGIN_PARAMS.canvasWidth;
        this.canvas.height = constants_1.ORIGIN_PARAMS.canvasHeight;
        this.canvas.style.width = '100%';
        this.canvas.style.height = 'auto';
        this.canvasWidth = constants_1.ORIGIN_PARAMS.canvasWidth;
        this.canvasHeight = constants_1.ORIGIN_PARAMS.canvasHeight;
    };
    return Canvas;
}());
exports.Canvas = Canvas;
exports["default"] = Canvas;


/***/ }),

/***/ 431:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_30830__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cell = void 0;
var GameObject_1 = __nested_webpack_require_30830__(607);
var CELL_VIEWS = {
    normal: {
        fillStyle: '#0059ff',
    },
    hover: {
        fillStyle: '#60000b',
    },
    click: {
        fillStyle: '#fff91f',
    }
};
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell(_a) {
        var x = _a.x, y = _a.y, disabled = _a.disabled;
        var _this = _super.call(this) || this;
        _this.draw = function (canvas) {
            console.log('draw');
            var viewParams = CELL_VIEWS[_this.state.currentView];
            _this.object = canvas.drawRect({
                fillStyle: viewParams.fillStyle,
                // strokeStyle: viewParams.fillStyle,
                x: _this.x,
                y: _this.y,
                width: Cell.width,
                height: Cell.height
            });
        };
        _this.state = {
            currentView: 'normal'
        };
        _this.x = x;
        _this.y = y;
        _this.disabled = disabled;
        if (!disabled) {
            // листенеры добавляются раньше чем реализовывается метод addEventListener
            // this.addEventListener(ActionTypes.MouseDown, () => this.setState({currentView: 'click'}));
            // this.addEventListener(ActionTypes.MouseUp, () => this.setState({currentView: 'normal'}));
            // this.addEventListener(ActionTypes.MouseOver, () => this.setState({currentView: 'hover'}));
            // this.addEventListener(ActionTypes.MouseOut, () => this.setState({currentView: 'normal'}));
        }
        return _this;
    }
    return Cell;
}(GameObject_1.CanvasObject));
exports.Cell = Cell;
exports["default"] = Cell;


/***/ }),

/***/ 112:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_33456__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CellsField = void 0;
var constants_1 = __nested_webpack_require_33456__(396);
var Cell_1 = __importDefault(__nested_webpack_require_33456__(431));
var CellsField = /** @class */ (function () {
    function CellsField() {
        var _this = this;
        this.x = 0;
        this.y = 0;
        this.WIDTH = constants_1.ORIGIN_PARAMS.canvasWidth / constants_1.ORIGIN_PARAMS.cellWidth;
        this.HEIGHT = constants_1.ORIGIN_PARAMS.canvasHeight / constants_1.ORIGIN_PARAMS.cellHeight;
        this.draw = function (canvas) {
            for (var i = 0; i < _this.WIDTH; i++) {
                for (var j = 0; j < _this.HEIGHT; j++) {
                    var cell = new Cell_1.default({
                        x: _this.x + i * Cell_1.default.width,
                        y: _this.y + j * Cell_1.default.height,
                    });
                    canvas.setObject(cell);
                    _this.cells[i][j] = cell;
                }
            }
        };
        this.cells = new Array(this.WIDTH);
        this.cells.fill(new Array(this.HEIGHT));
    }
    return CellsField;
}());
exports.CellsField = CellsField;
exports["default"] = CellsField;


/***/ }),

/***/ 513:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.showToolbox = function (root) {
            var form = document.createElement('form');
            form.style.padding = '10px 5px';
            form.style.background = '#2f2f2f';
            form.style.color = 'white';
            form.style.position = 'fixed';
            form.style.top = '50vh';
            form.style.left = '0';
            form.style.display = 'flex';
            form.style.flexDirection = 'column';
            var isShowHitboxCheckbox = _this.createCheckbox('Хитбокс', 'isShowHitbox');
            var isShowGridCheckbox = _this.createCheckbox('Сетка', 'isShowGrid');
            var isShowHitboxGridCheckbox = _this.createCheckbox('Сетка хитбокса', 'isShowHitboxGrid');
            form.append(isShowHitboxCheckbox);
            form.append(isShowGridCheckbox);
            form.append(isShowHitboxGridCheckbox);
            document.querySelector(root || 'body').append(form);
        };
        this.createCheckbox = function (innerText, name) {
            var checkbox = document.createElement('input');
            checkbox.name = name;
            checkbox.type = 'checkbox';
            // @ts-ignore
            checkbox.onchange = function () { return Game[name] = !Game[name]; };
            var label = document.createElement('label');
            label.innerText = innerText;
            label.append(checkbox);
            return label;
        };
        if (!Game.instance) {
            Game.instance = this;
        }
        return Game.instance;
    }
    return Game;
}());
exports.Game = Game;
exports["default"] = Game;


/***/ }),

/***/ 607:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasObject = void 0;
function addEventListener(type, cb) {
    this.listeners[type] = cb;
}
var CanvasObject = /** @class */ (function () {
    function CanvasObject() {
        this.isOver = false;
        this.listeners = {};
        this.addEventListener = addEventListener.bind(this);
        this.map = {};
        this.id = -1;
        this.gridColor = 'black';
        this.isCb = function (arg) { return typeof arg === 'function'; };
    }
    return CanvasObject;
}());
exports.CanvasObject = CanvasObject;


/***/ }),

/***/ 904:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_37401__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Grid = void 0;
var GameObject_1 = __nested_webpack_require_37401__(607);
var constants_1 = __nested_webpack_require_37401__(396);
var utils_1 = __nested_webpack_require_37401__(147);
var Game_1 = __importDefault(__nested_webpack_require_37401__(513));
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid() {
        var _this = _super.call(this) || this;
        _this.width = constants_1.ORIGIN_PARAMS.gridCellWidth;
        _this.height = constants_1.ORIGIN_PARAMS.gridCellHeight;
        _this.cells = {};
        _this.updateCell = function (x, y, data, canvas, gridColor) {
            _this.cells[(0, utils_1.getMapKey)(x, y)] = __assign(__assign({}, _this.cells[(0, utils_1.getMapKey)(x, y)]), data);
            if (Game_1.default.isShowHitboxGrid) {
                _this.drawCell(canvas)({
                    x: x,
                    y: y,
                    strokeStyle: gridColor,
                });
            }
        };
        _this.drawCell = function (canvas) { return function (params) {
            var object = new Path2D();
            canvas.context.fillStyle = 'transparent';
            canvas.context.strokeStyle = params.strokeStyle || '#8292ff';
            object.rect(params.x * _this.width, params.y * _this.height, _this.width, _this.height);
            canvas.context.stroke(object);
            canvas.context.fill(object);
        }; };
        _this.draw = function (canvas) {
            var xCount = constants_1.ORIGIN_PARAMS.canvasWidth / constants_1.ORIGIN_PARAMS.gridCellWidth;
            var yCount = constants_1.ORIGIN_PARAMS.canvasHeight / constants_1.ORIGIN_PARAMS.gridCellHeight;
            for (var x = 0; x < xCount; x++) {
                for (var y = 0; y < yCount; y++) {
                    if (Game_1.default.isShowGrid) {
                        _this.drawCell(canvas)({ x: x, y: y });
                    }
                    _this.cells[(0, utils_1.getMapKey)(x, y)] = {
                        x: x,
                        y: y,
                        cost: 0,
                        id: -1,
                    };
                }
            }
        };
        _this.width = constants_1.ORIGIN_PARAMS.gridCellWidth;
        _this.height = constants_1.ORIGIN_PARAMS.gridCellHeight;
        return _this;
    }
    return Grid;
}(GameObject_1.CanvasObject));
exports.Grid = Grid;
exports["default"] = Grid;


/***/ }),

/***/ 319:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_41227__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Man = void 0;
var GameObject_1 = __nested_webpack_require_41227__(607);
var man_png_1 = __importDefault(__nested_webpack_require_41227__(843));
var index_1 = __nested_webpack_require_41227__(996);
var manSprite = new Image(935, 1133);
manSprite.src = man_png_1.default;
var manStaticValues = {
    imageWidth: 6,
    imageHeight: 7,
    realImageWidth: 233.75,
    realImageHeight: 283.25,
    hitboxWidth: 3,
    hitboxHeight: 1,
    hitboxTop: 6,
    hitboxLeft: 1,
};
var _Man = /** @class */ (function (_super) {
    __extends(_Man, _super);
    function _Man(_a) {
        var x = _a.x, y = _a.y;
        var _this = _super.call(this) || this;
        _this.step = 1;
        _this.sprite = manSprite;
        _this.gridColor = 'red';
        _this.id = "man";
        _this.state = {
            x: x,
            y: y,
            sprite: __assign({ imageX: x, imageY: y }, manStaticValues),
        };
        return _this;
    }
    return _Man;
}(GameObject_1.CanvasObject));
var toLeft = [
    { sprite: __assign({ imageX: 0, imageY: 566.5 }, manStaticValues) },
    { sprite: __assign({ imageX: 233.75, imageY: 566.5 }, manStaticValues) },
    { sprite: __assign({ imageX: 467.5, imageY: 566.5 }, manStaticValues) },
    { sprite: __assign({ imageX: 701.25, imageY: 566.5 }, manStaticValues) },
];
var toRight = [
    { sprite: __assign({ imageX: 0, imageY: 849.75 }, manStaticValues) },
    { sprite: __assign({ imageX: 233.75, imageY: 849.75 }, manStaticValues) },
    { sprite: __assign({ imageX: 467.5, imageY: 849.75 }, manStaticValues) },
    { sprite: __assign({ imageX: 701.25, imageY: 849.75 }, manStaticValues) },
];
var toTop = [
    { sprite: __assign({ imageX: 0, imageY: 283.25 }, manStaticValues) },
    { sprite: __assign({ imageX: 233.75, imageY: 283.25 }, manStaticValues) },
    { sprite: __assign({ imageX: 467.5, imageY: 283.25 }, manStaticValues) },
    { sprite: __assign({ imageX: 701.25, imageY: 283.25 }, manStaticValues) },
];
var toBottom = [
    { sprite: __assign({ imageX: 0, imageY: 0 }, manStaticValues) },
    { sprite: __assign({ imageX: 233.75, imageY: 0 }, manStaticValues) },
    { sprite: __assign({ imageX: 467.5, imageY: 0 }, manStaticValues) },
    { sprite: __assign({ imageX: 701.25, imageY: 0 }, manStaticValues) },
];
var setView = function () {
    var currentState = -1;
    return function (_a) {
        var dX = _a.dX, dY = _a.dY, isLast = _a.isLast;
        if (isLast) {
            return { sprite: __assign({ imageX: 0, imageY: 0 }, manStaticValues) };
        }
        if (currentState === 4)
            currentState = 0;
        else
            currentState++;
        if (dX > 0) {
            return toRight[currentState];
        }
        else if (dX < 0) {
            return toLeft[currentState];
        }
        else {
            if (dY < 0) {
                return toTop[currentState];
            }
            else if (dY > 0) {
                return toBottom[currentState];
            }
            return { sprite: __assign({ imageX: 0, imageY: 0 }, manStaticValues) };
        }
    };
};
var ManWithHitbox = (0, index_1.withHitbox)(_Man);
exports.Man = (0, index_1.withRun)(index_1.ERunType.SmartCathet, setView())(ManWithHitbox);
exports["default"] = exports.Man;


/***/ }),

/***/ 789:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_45902__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nested_webpack_require_45902__(431), exports);
__exportStar(__nested_webpack_require_45902__(172), exports);
__exportStar(__nested_webpack_require_45902__(112), exports);
__exportStar(__nested_webpack_require_45902__(513), exports);
__exportStar(__nested_webpack_require_45902__(607), exports);
__exportStar(__nested_webpack_require_45902__(319), exports);
__exportStar(__nested_webpack_require_45902__(612), exports);
__exportStar(__nested_webpack_require_45902__(904), exports);


/***/ }),

/***/ 396:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BACKGROUND = exports.ORIGIN_PARAMS = void 0;
exports.ORIGIN_PARAMS = {
    canvasWidth: 1420,
    canvasHeight: 1020,
    gridCellWidth: 20,
    gridCellHeight: 20,
    cellWidth: 50,
    cellHeight: 50,
};
exports.BACKGROUND = '#b7f2ff';


/***/ }),

/***/ 341:
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_47523__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nested_webpack_require_47523__(789), exports);
__exportStar(__nested_webpack_require_47523__(996), exports);
__exportStar(__nested_webpack_require_47523__(475), exports);
__exportStar(__nested_webpack_require_47523__(396), exports);


/***/ }),

/***/ 147:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMapKey = void 0;
var getMapKey = function (x, y) { return "x".concat(x, "y").concat(y); };
exports.getMapKey = getMapKey;


/***/ }),

/***/ 889:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_48838__) => {

__nested_webpack_require_48838__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_48838__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/***/ }),

/***/ 843:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_2538170__) => {

__nested_webpack_require_2538170__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_2538170__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_2553607__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_2553607__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_2553607__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_2553607__.o(definition, key) && !__nested_webpack_require_2553607__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_2553607__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_2553607__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nested_webpack_require_2553607__(341);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;

/***/ }),

/***/ 402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(718);
/* harmony import */ var _dist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _dist__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _dist__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var gamevas_1 = __webpack_require__(402);
var backgroundCanvas = new gamevas_1.Canvas('background-canvas');
var game = new gamevas_1.Game();
game.showToolbox();
gamevas_1.Game.scale = gamevas_1.ORIGIN_PARAMS.canvasWidth / backgroundCanvas.canvas.getBoundingClientRect().width;
var manCanvas = new gamevas_1.Canvas('man-canvas');
var abyss1 = new gamevas_1.Abyss({ x: 0, y: 10, width: 60, height: 5 });
var abyss2 = new gamevas_1.Abyss({ x: 20, y: 20, width: 60, height: 5 });
var abyss3 = new gamevas_1.Abyss({ x: 0, y: 0, width: 71, height: 5 });
var abyss4 = new gamevas_1.Abyss({ x: 51, y: 30, width: 20, height: 5 });
var abyss5 = new gamevas_1.Abyss({ x: 27, y: 35, width: 20, height: 4 });
var abyss6 = new gamevas_1.Abyss({ x: 9, y: 30, width: 15, height: 6 });
manCanvas.setObject(abyss1);
manCanvas.setObject(abyss2);
manCanvas.setObject(abyss3);
manCanvas.setObject(abyss4);
manCanvas.setObject(abyss5);
manCanvas.setObject(abyss6);
var mans = [1, 2, 3, 4].map(function (_man, index) { return new gamevas_1.Man({ x: 0, y: 6 }); });
mans.forEach(function (man) {
    manCanvas.setObject(man);
});
manCanvas.addEventListener(gamevas_1.ECanvasEventType.Click, function (e) {
    mans.forEach(function (man, index) {
        // @ts-ignore
        if (document.forms.mansForm.man.value == index + 1) {
            man.run({ x: e.x, y: e.y });
        }
    });
});
setInterval(function () {
    var free = Object.values(manCanvas.grid.map).filter(function (_a) {
        var cost = _a.cost;
        return cost === 0;
    });
    mans.forEach(function (man) {
        var newPosition = free[Math.floor(Math.random() * free.length - 1)];
        man.run({
            x: newPosition.x,
            y: newPosition.y,
        });
    });
}, 10000);

})();

/******/ })()
;