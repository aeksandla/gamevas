
// export const render = (element: JSX.Element, container: any) => {
//     console.log('element', element);
//     console.log('container', container);
//     const dom =
//         element.type === "TEXT_ELEMENT"
//             ? document.createTextNode("")
//             : document.createElement(element.type);
//     const isProperty = (key: any) => key !== "children";
//     Object.keys(element.props)
//         .filter(isProperty)
//         .forEach((name) => {
//             dom[name] = element.props[name];
//         });
//     element.props.children.forEach((child: any) => render(child, dom));
//
//     container.appendChild(dom);
// }
//
// export function createElement(type: any, config: any) {
//     if (typeof type === "function") {
//         return type(config);
//     }
//     const { children = [], ...props } = config;
//     const childrenProps = [].concat(children);
//     return {
//         type,
//         props: {
//             ...props,
//             children: childrenProps.map((child) =>
//                 typeof child === "object" ? child : createTextElement(child)
//             ),
//         },
//     };
// }
// function createTextElement(text: any) {
//     return {
//         type: "TEXT_ELEMENT",
//         props: {
//             nodeValue: text,
//             children: [] as any,
//         },
//     };
// }


type Tag = string | ((props: any, children: any[]) => HTMLElement);
type Props = Record<string, string> | null;
type Children = (Node | string)[];

export const createElement = (tag: Tag, props: Props, ...children: Children): HTMLElement => {
    if (typeof tag === 'function') {
        return tag({ ... props }, children);
    }

    const el = document.createElement(tag);
    if (props) {
        Object.entries(props).forEach(([key, val]) => {
            if (key === 'className') {
                el.classList.add(...(val as string || '').trim().split(' '));
                return;
            }

            el.setAttribute(key, val);
        });
    }

    children.forEach((child) => {
        el.append(child);
    });

    return el;
};

export default {createElement};
