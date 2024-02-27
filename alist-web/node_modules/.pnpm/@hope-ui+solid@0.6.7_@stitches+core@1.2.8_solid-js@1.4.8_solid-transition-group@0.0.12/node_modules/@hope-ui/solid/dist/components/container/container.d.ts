import { ElementType, HTMLHopeProps } from "../types";
import { ContainerVariants } from "./container.styles";
export declare type ContainerProps<C extends ElementType = "div"> = HTMLHopeProps<C, ContainerVariants>;
/**
 * Layout component used to wrap app or website content
 *
 * By default it sets `margin-left` and `margin-right` to `auto`,
 * to keep its content centered.
 */
export declare function Container<C extends ElementType = "div">(props: ContainerProps<C>): import("solid-js").JSX.Element;
export declare namespace Container {
    var toString: () => string;
}
//# sourceMappingURL=container.d.ts.map