import { Property } from "csstype";
import { SizeScaleValue, SystemStyleObject } from "../../styled-system";
import { ColorProps } from "../../styled-system/props/color";
import { SizeProps } from "../../styled-system/props/size";
import { ProgressState } from "../progress/progress";
import { ElementType, HTMLHopeProps } from "../types";
import { ThemeableCircularProgressIndicatorOptions } from "./circular-progress-indicator";
interface CircularProgressState extends ProgressState {
    /**
     * The size of the circular progress.
     */
    size: SizeProps["boxSize"];
    /**
     * The thickness of the circles.
     */
    thickness: Property.StrokeWidth<SizeScaleValue> | number;
    /**
     * If `true`, the circular progress indicator will be visible.
     * Used to prevent showing the indicator when value is 0 in Safari.
     */
    isIndicatorVisible: boolean;
}
interface CircularProgressOptions extends Partial<Omit<CircularProgressState, "percent" | "ariaValueText" | "isIndicatorVisible">> {
    /**
     * The color of the circular progress track.
     */
    trackColor?: ColorProps["color"];
    /**
     * The desired valueText to use in place of the value
     */
    valueText?: string;
}
declare type ThemeableCircularProgressOptions = Pick<CircularProgressOptions, "size" | "thickness" | "trackColor">;
export declare type CircularProgressProps<C extends ElementType = "div"> = HTMLHopeProps<C, CircularProgressOptions>;
export interface CircularProgressStyleConfig {
    baseStyle?: {
        root?: SystemStyleObject;
        track?: SystemStyleObject;
        indicator?: SystemStyleObject;
        label?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableCircularProgressOptions;
        indicator?: ThemeableCircularProgressIndicatorOptions;
    };
}
interface CircularProgressContextValue {
    state: CircularProgressState;
}
/**
 * Progress (Circular)
 *
 * CircularProgress is used to display the progress status for a task that takes a long
 * time or consists of several steps.
 *
 * It includes accessible attributes to help assistive technologies understand
 * and speak the progress values.
 */
export declare function CircularProgress<C extends ElementType = "div">(props: CircularProgressProps<C>): import("solid-js").JSX.Element;
export declare namespace CircularProgress {
    var toString: () => string;
}
export declare function useCircularProgressContext(): CircularProgressContextValue;
export {};
//# sourceMappingURL=circular-progress.d.ts.map