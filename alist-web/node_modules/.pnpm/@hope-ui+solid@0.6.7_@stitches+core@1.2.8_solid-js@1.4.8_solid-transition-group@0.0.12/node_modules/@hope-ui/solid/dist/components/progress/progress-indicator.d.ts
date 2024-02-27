import { ColorProps } from "../../styled-system/props/color";
import { ElementType, HTMLHopeProps } from "../types";
import { ProgressIndicatorVariants } from "./progress.styles";
export interface ThemeableProgressIndicatorOptions extends Omit<ProgressIndicatorVariants, "indeterminate"> {
    /**
     * The color of the progress indicator.
     */
    color?: ColorProps["color"];
}
declare type ProgressIndicatorOptions = ThemeableProgressIndicatorOptions;
export declare type ProgressIndicatorProps<C extends ElementType = "div"> = HTMLHopeProps<C, ProgressIndicatorOptions>;
/**
 * ProgressIndicator (Linear)
 *
 * The progress component that visually indicates the current level of the progress bar.
 * It applies `background-color` and changes its width.
 */
export declare function ProgressIndicator<C extends ElementType = "div">(props: ProgressIndicatorProps<C>): import("solid-js").JSX.Element;
export declare namespace ProgressIndicator {
    var toString: () => string;
}
export {};
//# sourceMappingURL=progress-indicator.d.ts.map