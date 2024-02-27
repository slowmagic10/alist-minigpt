import { ElementType, HTMLHopeProps } from "../types";
export declare type SpacerProps<C extends ElementType = "div"> = HTMLHopeProps<C>;
/**
 * A flexible flex spacer that expands along the major axis of its containing flex layout.
 * It renders a `div` by default, and takes up any available space.
 */
export declare function Spacer<C extends ElementType = "div">(props: SpacerProps<C>): import("solid-js").JSX.Element;
export declare namespace Spacer {
    var toString: () => string;
}
//# sourceMappingURL=spacer.d.ts.map