import { ColorProps } from "../../styled-system/props/color";
import { SystemStyleObject } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
import { ProgressVariants } from "./progress.styles";
import { ThemeableProgressIndicatorOptions } from "./progress-indicator";
export interface ProgressState {
    /**
     * Minimum value defining 'no progress' (must be lower than 'max')
     */
    min: number;
    /**
     * Maximum value defining 100% progress made (must be higher than 'min')
     */
    max: number;
    /**
     * Current progress (must be between min/max)
     */
    value: number;
    /**
     * If `true`, the progress will be indeterminate and the `value` prop will be ignored.
     */
    indeterminate: boolean;
    /**
     * The percentage of progress based on value, min and max.
     */
    percent: number;
    /**
     * The human readable text alternative of aria-valuenow.
     */
    ariaValueText?: string;
    /**
     * A function that returns the desired valueText to use in place of the value
     */
    getValueText?: (value: number, percent: number) => string;
}
interface ThemeableProgressOptions extends ProgressVariants {
    /**
     * The color of the progress track.
     */
    trackColor?: ColorProps["color"];
}
interface ProgressOptions extends ThemeableProgressOptions, Partial<Omit<ProgressState, "percent" | "ariaValueText">> {
    /**
     * The desired valueText to use in place of the value
     */
    valueText?: string;
}
export declare type ProgressProps<C extends ElementType = "div"> = HTMLHopeProps<C, ProgressOptions>;
export interface ProgressStyleConfig {
    baseStyle?: {
        root?: SystemStyleObject;
        indicator?: SystemStyleObject;
        label?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableProgressOptions;
        indicator?: ThemeableProgressIndicatorOptions;
    };
}
interface ProgressContextValue {
    state: ProgressState;
}
/**
 * Progress (Linear)
 *
 * Progress is used to display the progress status for a task that takes a long
 * time or consists of several steps.
 *
 * It includes accessible attributes to help assistive technologies understand
 * and speak the progress values.
 */
export declare function Progress<C extends ElementType = "div">(props: ProgressProps<C>): import("solid-js").JSX.Element;
export declare namespace Progress {
    var toString: () => string;
}
export declare function useProgressContext(): ProgressContextValue;
export {};
//# sourceMappingURL=progress.d.ts.map