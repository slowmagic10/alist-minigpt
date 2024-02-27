import { Property } from "csstype";
import { BorderProps } from "../../styled-system/props/border";
import { ColorProps } from "../../styled-system/props/color";
import { ElementType, HTMLHopeProps, SinglePartComponentStyleConfig } from "../types";
import { SpinnerVariants } from "./spinner.styles";
interface SpinnerOptions extends SpinnerVariants {
    /**
     * The color of the spinner
     */
    color?: ColorProps["color"];
    /**
     * The color of the empty area in the spinner
     */
    emptyColor?: ColorProps["color"];
    /**
     * The thickness of the spinner
     * @example
     * ```jsx
     * <Spinner thickness="4px"/>
     * ```
     */
    thickness?: BorderProps["borderWidth"];
    /**
     * The speed of the spinner.
     * @example
     * ```jsx
     * <Spinner speed="0.2s"/>
     * ```
     */
    speed?: Property.TransitionDuration;
    /**
     * For accessibility, it is important to add a fallback loading text.
     * This text will be visible to screen readers.
     */
    label?: string;
}
export declare type SpinnerProps<C extends ElementType = "div"> = HTMLHopeProps<C, SpinnerOptions>;
export declare type SpinnerStyleConfig = SinglePartComponentStyleConfig<SpinnerOptions>;
export declare function Spinner<C extends ElementType = "div">(props: SpinnerProps<C>): import("solid-js").JSX.Element;
export declare namespace Spinner {
    var toString: () => string;
}
export {};
//# sourceMappingURL=spinner.d.ts.map