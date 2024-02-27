import { JSX } from "solid-js";
import { SystemStyleObject } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
import { RadioControlVariants, RadioWrapperVariants } from "./radio.styles";
declare type RadioChildrenRenderProp = (props: {
    checked: boolean;
}) => JSX.Element;
export declare type ThemeableRadioOptions = RadioWrapperVariants & RadioControlVariants;
interface RadioOptions extends ThemeableRadioOptions {
    /**
     * The ref to be passed to the internal <input> tag.
     */
    ref?: HTMLInputElement | ((el: HTMLInputElement) => void);
    /**
     * The id to be passed to the internal <input> tag.
     */
    id?: string;
    /**
     * The name to be passed to the internal <input> tag.
     */
    name?: string;
    /**
     * The value to be used in the radio input.
     * This is the value that will be returned on form submission.
     */
    value?: string | number;
    /**
     * If `true`, the radio will be checked.
     * You'll need to pass `onChange` to update its value (since it is now controlled)
     */
    checked?: boolean;
    /**
     * If `true`, the radio will be initially checked.
     */
    defaultChecked?: boolean;
    /**
     * If `true`, the radio input is marked as required,
     * and `required` attribute will be added
     */
    required?: boolean;
    /**
     * If `true`, the radio will be disabled
     */
    disabled?: boolean;
    /**
     * If `true`, the input will have `aria-invalid` set to `true`
     */
    invalid?: boolean;
    /**
     * If `true`, the radio will be readonly
     */
    readOnly?: boolean;
    /**
     * The children of the radio.
     */
    children?: JSX.Element | RadioChildrenRenderProp;
    /**
     * The callback invoked when the checked state of the radio changes.
     */
    onChange?: JSX.EventHandlerUnion<HTMLInputElement, Event>;
    /**
     * The callback invoked when the radio is focused
     */
    onFocus?: JSX.EventHandlerUnion<HTMLInputElement, FocusEvent>;
    /**
     * The callback invoked when the radio is blurred (loses focus)
     */
    onBlur?: JSX.EventHandlerUnion<HTMLInputElement, FocusEvent>;
}
export declare type RadioProps<C extends ElementType = "label"> = HTMLHopeProps<C, RadioOptions>;
interface RadioState extends Required<ThemeableRadioOptions> {
    /**
     * The `checked` state of the radio.
     * (In uncontrolled mode)
     */
    _checked: boolean;
    /**
     * If `true`, the radio is in controlled mode.
     * (have checked and onChange props)
     */
    isControlled: boolean;
    /**
     * If `true`, the radio is currently focused.
     */
    isFocused: boolean;
    /**
     * The `checked` state of the radio.
     * (In controlled mode)
     */
    checked: boolean;
    /**
     * The value to be used in the radio input.
     * This is the value that will be returned on form submission.
     */
    value?: string | number;
    /**
     * The id of the input field in a radio.
     */
    id?: string;
    /**
     * The name of the input field in a radio.
     */
    name?: string;
    /**
     * If `true`, the radio input is marked as required,
     * and `required` attribute will be added
     */
    required?: boolean;
    /**
     * If `true`, the radio will be disabled
     */
    disabled?: boolean;
    /**
     * If `true`, the input will have `aria-invalid` set to `true`
     */
    invalid?: boolean;
    /**
     * If `true`, the radio will be readonly
     */
    readOnly?: boolean;
    "aria-required"?: boolean;
    "aria-disabled"?: boolean;
    "aria-invalid"?: boolean;
    "aria-readonly"?: boolean;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-describedby"?: string;
    "data-focus"?: string;
    "data-checked"?: string;
    "data-required"?: string;
    "data-disabled"?: string;
    "data-invalid"?: string;
    "data-readonly"?: string;
}
/**
 * The component that provides context for all part of a `radio`.
 * It act as a container and renders a `label` with a visualy hidden `input[type=radio]`.
 */
export declare function Radio<C extends ElementType = "label">(props: RadioProps<C>): JSX.Element;
export declare namespace Radio {
    var toString: () => string;
}
interface RadioContextValue extends Required<Pick<RadioOptions, "onChange" | "onFocus" | "onBlur">> {
    state: RadioState;
}
export declare function useRadioContext(): RadioContextValue;
export interface RadioStyleConfig {
    baseStyle?: {
        root?: SystemStyleObject;
        group?: SystemStyleObject;
        control?: SystemStyleObject;
        label?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableRadioOptions;
        group?: ThemeableRadioOptions;
    };
}
export {};
//# sourceMappingURL=radio.d.ts.map