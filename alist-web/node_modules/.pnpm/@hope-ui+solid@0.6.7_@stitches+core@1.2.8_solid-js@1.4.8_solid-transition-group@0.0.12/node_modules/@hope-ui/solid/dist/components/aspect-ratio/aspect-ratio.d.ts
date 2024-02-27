import { ResponsiveValue } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
interface AspectRatioOptions {
    /**
     * The aspect ratio of the Box. Common values are:
     *
     * `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`
     */
    ratio?: ResponsiveValue<number>;
}
export declare type AspectRatioProps<C extends ElementType = "div"> = HTMLHopeProps<C, AspectRatioOptions>;
/**
 * Component used to cropping media (videos, images and maps)
 * to a desired aspect ratio.
 */
export declare function AspectRatio<C extends ElementType = "div">(props: AspectRatioProps<C>): import("solid-js").JSX.Element;
export declare namespace AspectRatio {
    var toString: () => string;
}
export {};
//# sourceMappingURL=aspect-ratio.d.ts.map