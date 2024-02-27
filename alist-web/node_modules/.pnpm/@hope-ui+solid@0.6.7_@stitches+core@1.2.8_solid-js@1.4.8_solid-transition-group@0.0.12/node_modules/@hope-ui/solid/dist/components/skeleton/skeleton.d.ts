import { Property } from "csstype";
import { ColorProps } from "../../styled-system/props/color";
import { ElementType, HTMLHopeProps } from "../types";
interface SkeletonOptions {
    /**
     * The color at the animation start.
     */
    startColor?: ColorProps["backgroundColor"];
    /**
     * The color at the animation end.
     */
    endColor?: ColorProps["backgroundColor"];
    /**
     * The animation speed in CSS unit.
     */
    speed?: Property.AnimationDuration;
    /**
     * The loaded children fadeIn animation duration in CSS unit.
     */
    fadeDuration?: Property.AnimationDuration;
    /**
     * If `true`, it'll render its children with a nice fade animation.
     */
    loaded?: boolean;
}
export declare type SkeletonProps<C extends ElementType = "div"> = HTMLHopeProps<C, SkeletonOptions>;
export declare const hopeSkeletonClass = "hope-skeleton";
export declare function Skeleton<C extends ElementType = "div">(props: SkeletonProps<C>): import("solid-js").JSX.Element;
export declare namespace Skeleton {
    var toString: () => string;
}
export {};
//# sourceMappingURL=skeleton.d.ts.map