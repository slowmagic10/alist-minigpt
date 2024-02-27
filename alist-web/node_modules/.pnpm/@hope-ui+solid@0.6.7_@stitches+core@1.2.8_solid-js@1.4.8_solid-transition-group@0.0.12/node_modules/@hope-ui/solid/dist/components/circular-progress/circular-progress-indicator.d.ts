import { ColorProps } from "../../styled-system/props/color";
import { HTMLHopeProps } from "../types";
export interface ThemeableCircularProgressIndicatorOptions {
    /**
     * The stroke color of the progress indicator.
     */
    color?: ColorProps["color"];
    /**
     * If `true`, the caps of the progress indicator will be rounded.
     */
    withRoundCaps?: boolean;
}
declare type CircularProgressIndicatorOptions = ThemeableCircularProgressIndicatorOptions;
declare type CircularProgressIndicatorProps = HTMLHopeProps<"svg", CircularProgressIndicatorOptions>;
/**
 * ProgressIndicator (Circular)
 *
 * The progress component that visually indicates the current level of the circular progress bar.
 */
export declare function CircularProgressIndicator(props: CircularProgressIndicatorProps): import("solid-js").JSX.Element;
export declare namespace CircularProgressIndicator {
    var toString: () => string;
}
export {};
//# sourceMappingURL=circular-progress-indicator.d.ts.map