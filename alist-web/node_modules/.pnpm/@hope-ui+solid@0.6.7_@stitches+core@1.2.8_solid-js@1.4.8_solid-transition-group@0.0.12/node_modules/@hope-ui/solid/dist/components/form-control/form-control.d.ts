import { SystemStyleObject } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
import { FormLabelOptions } from "./form-label";
export interface FormControlOptions {
    /**
     * The custom `id` to use for the form control. This is passed directly to the form element (e.g, Input).
     * - The form element (e.g Input) gets the `id`
     * - The form label id: `${id}-label`
     * - The form error text id: `${id}-error-message`
     * - The form helper text id: `${id}-helper-text`
     */
    id?: string;
    /**
     * If `true`, the form control will be required. This has 2 side effects:
     * - The `FormLabel` will show a required indicator
     * - The form element (e.g, Input) will have `aria-required` set to `true`
     */
    required?: boolean;
    /**
     * If `true`, the form control will be disabled. This has 2 side effects:
     * - The `FormLabel` will have `data-disabled` attribute
     * - The form element (e.g, Input) will be disabled
     */
    disabled?: boolean;
    /**
     * If `true`, the form control will be invalid. This has 2 side effects:
     * - The `FormLabel` and `FormErrorMessage` will have `data-invalid` set to `true`
     * - The form element (e.g, Input) will have `aria-invalid` set to `true`
     */
    invalid?: boolean;
    /**
     * If `true`, the form control will be readonly
     */
    readOnly?: boolean;
}
export interface FormControlState extends FormControlOptions {
    /**
     * The custom `id` passed to the form label (e.g, FormLabel).
     */
    labelId: string;
    /**
     * The custom `id` passed to the form helper text (e.g, FormHelperText).
     */
    helperTextId: string;
    /**
     * The custom `id` passed to the form error message (e.g, FormErrorMessage).
     */
    errorMessageId: string;
    /**
     * Track whether the `FormHelperText` has been rendered.
     * We use this to append its id the the `aria-describedby` of the `input`.
     */
    hasHelperText: boolean;
    /**
     * Track whether the `FormErrorMessage` has been rendered.
     * We use this to append its id the the `aria-describedby` of the `input`.
     */
    hasErrorMessage: boolean;
    /**
     * Track whether the form element (e.g, `input`) has focus.
     */
    isFocused: boolean;
    /**
     * data attribute used in others `FormControl` related components
     * to reflect that the form element (e.g, Input) is currently focused.
     */
    "data-focus"?: string;
    /**
     * data attribute used in others `FormControl` related components
     * to reflect that the form element (e.g, Input) is currently disabled.
     */
    "data-disabled"?: string;
    /**
     * data attribute used in others `FormControl` related components
     * to reflect that the form element (e.g, Input) is currently invalid.
     */
    "data-invalid"?: string;
    /**
     * data attribute used in others `FormControl` related components
     * to reflect that the form element (e.g, Input) is currently readonly.
     */
    "data-readonly"?: string;
}
export interface FormControlContextValue {
    state: FormControlState;
    /**
     * Action to change form control state `hasHelperText`.
     */
    setHasHelperText: (value: boolean) => void;
    /**
     * Action to change form control state `hasErrorMessage`.
     */
    setHasErrorMessage: (value: boolean) => void;
    /**
     * Trigger when the field is focused.
     */
    onFocus: () => void;
    /**
     * Trigger when the field loose focus.
     */
    onBlur: () => void;
}
export declare const FormControlContext: import("solid-js").Context<FormControlContextValue | undefined>;
export declare type FormControlProps<C extends ElementType = "div"> = HTMLHopeProps<C, FormControlOptions>;
export interface FormControlStyleConfig {
    baseStyle?: {
        root?: SystemStyleObject;
        label?: SystemStyleObject;
        helperText?: SystemStyleObject;
        errorMessage?: SystemStyleObject;
    };
    defaultProps?: {
        label?: FormLabelOptions;
    };
}
export declare function FormControl<C extends ElementType = "div">(props: FormControlProps<C>): import("solid-js").JSX.Element;
export declare namespace FormControl {
    var toString: () => string;
}
export declare function useFormControlContext(): FormControlContextValue | undefined;
//# sourceMappingURL=form-control.d.ts.map