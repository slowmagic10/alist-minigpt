import { Accessor, JSX } from "solid-js";
import { ElementType, HTMLHopeProps } from "../types";
declare type CheckboxPrimitiveChildrenRenderProp = (props: {
    state: Accessor<CheckboxPrimitiveState>;
}) => JSX.Element;
interface CheckboxPrimitiveOptions {
    /**
     * The ref to be passed to the internal <input> tag.
     */
    ref?: HTMLInputElement | ((el: HTMLInputElement) => void);
    /**
     * The id to be passed to the internal <input> tag.
     */
    id?: string;
    /**
     * The css class to be passed to the internal <input> tag.
     */
    inputClass?: string;
    /**
     * The name to be passed to the internal <input> tag.
     */
    name?: string;
    /**
     * The value to be used in the checkbox input.
     * This is the value that will be returned on form submission.
     */
    value?: string | number;
    /**
     * If `true`, the checkbox will be checked.
     * You'll need to pass `onChange` to update its value (since it is now controlled)
     */
    checked?: boolean;
    /**
     * If `true`, the checkbox will be initially checked.
     */
    defaultChecked?: boolean;
    /**
     * If `true`, the checkbox will be indeterminate.
     * This only affects the icon shown inside checkbox
     * and does not modify the checked property.
     */
    indeterminate?: boolean;
    /**
     * If `true`, the checkbox input is marked as required,
     * and `required` attribute will be added
     */
    required?: boolean;
    /**
     * If `true`, the checkbox will be disabled
     */
    disabled?: boolean;
    /**
     * If `true`, the input will have `aria-invalid` set to `true`
     */
    invalid?: boolean;
    /**
     * If `true`, the checkbox will be readonly
     */
    readOnly?: boolean;
    /**
     * The children of the checkbox.
     */
    children?: JSX.Element | CheckboxPrimitiveChildrenRenderProp;
    /**
     * The callback invoked when the checked state of the checkbox changes.
     */
    onChange?: JSX.EventHandlerUnion<HTMLInputElement, Event>;
    /**
     * The callback invoked when the checkbox is focused
     */
    onFocus?: JSX.EventHandlerUnion<HTMLInputElement, FocusEvent>;
    /**
     * The callback invoked when the checkbox is blurred (loses focus)
     */
    onBlur?: JSX.EventHandlerUnion<HTMLInputElement, FocusEvent>;
}
export declare type CheckboxPrimitiveProps<C extends ElementType = "label"> = HTMLHopeProps<C, CheckboxPrimitiveOptions>;
export interface CheckboxPrimitiveState {
    /**
     * The `checked` state of the checkbox.
     * (In uncontrolled mode)
     */
    _checked: boolean;
    /**
     * If `true`, the checkbox is in controlled mode.
     * (have checked and onChange props)
     */
    isControlled: boolean;
    /**
     * If `true`, the checkbox is currently focused.
     */
    isFocused: boolean;
    /**
     * The `checked` state of the checkbox.
     * (In controlled mode)
     */
    checked: boolean;
    /**
     * The value to be used in the checkbox input.
     * This is the value that will be returned on form submission.
     */
    value?: string | number;
    /**
     * The id of the input field in a checkbox.
     */
    id?: string;
    /**
     * The name of the input field in a checkbox.
     */
    name?: string;
    /**
     * If `true`, the checkbox input is marked as required,
     * and `required` attribute will be added
     */
    required?: boolean;
    /**
     * If `true`, the checkbox will be indeterminate.
     * This only affects the icon shown inside checkbox
     * and does not modify the checked property.
     */
    indeterminate?: boolean;
    /**
     * If `true`, the checkbox will be disabled
     */
    disabled?: boolean;
    /**
     * If `true`, the input will have `aria-invalid` set to `true`
     */
    invalid?: boolean;
    /**
     * If `true`, the checkbox will be readonly
     */
    readOnly?: boolean;
    "aria-required"?: boolean;
    "aria-disabled"?: boolean;
    "aria-invalid"?: boolean;
    "aria-readonly"?: boolean;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-describedby"?: string;
    "data-indeterminate"?: string;
    "data-focus"?: string;
    "data-checked"?: string;
    "data-required"?: string;
    "data-disabled"?: string;
    "data-invalid"?: string;
    "data-readonly"?: string;
}
/**
 * Contains all the parts of a checkbox.
 * It renders a `label` with a visualy hidden `input[type=checkbox]`.
 * You can style this element directly, or you can use it as a wrapper to put other components into, or both.
 */
export declare function CheckboxPrimitive<C extends ElementType = "label">(props: CheckboxPrimitiveProps<C>): JSX.Element;
interface CheckboxPrimitiveContextValue {
    state: CheckboxPrimitiveState;
}
export declare function useCheckboxPrimitiveContext(): CheckboxPrimitiveContextValue;
export {};
//# sourceMappingURL=checkbox-primitive.d.ts.map