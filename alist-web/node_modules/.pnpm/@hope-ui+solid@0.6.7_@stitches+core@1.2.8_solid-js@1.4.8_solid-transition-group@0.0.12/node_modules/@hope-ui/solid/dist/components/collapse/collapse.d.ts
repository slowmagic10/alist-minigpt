import { Property } from "csstype";
import { ElementType, HTMLHopeProps } from "../types";
interface CollapseOptions {
    /**
     * If `true`, the collapse will be expanded.
     */
    expanded?: boolean;
    /**
     * If `true`, the opacity of the content will be animated.
     */
    animateOpacity?: boolean;
    /**
     * Duration of the expand transition in ms.
     */
    expandDuration?: number;
    /**
     * Timing function of the expand transition.
     */
    expandTimingFunction?: Property.TransitionTimingFunction;
    /**
     * Duration of the collapse transition in ms.
     */
    collapseDuration?: number;
    /**
     * Duration of the expand collapse in ms.
     */
    collapseTimingFunction?: Property.TransitionTimingFunction;
    /**
     * If `true`, the element stays mounted when collapsed.
     */
    keepAlive?: boolean;
}
export declare type CollapseProps<C extends ElementType = "div"> = HTMLHopeProps<C, CollapseOptions>;
export declare function Collapse<C extends ElementType = "div">(props: CollapseProps<C>): import("solid-js").JSX.Element;
export declare namespace Collapse {
    var toString: () => string;
}
export {};
//# sourceMappingURL=collapse.d.ts.map