import { JSX } from "solid-js";
import { FormControlOptions } from "./form-control";
export interface UseFormControlProps<T extends HTMLElement> extends FormControlOptions {
    "aria-describedby"?: string;
    onFocus?: JSX.EventHandlerUnion<T, FocusEvent>;
    onBlur?: JSX.EventHandlerUnion<T, FocusEvent>;
}
export interface UseFormControlReturn<T extends HTMLElement> {
    id?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    readOnly?: boolean;
    "aria-required"?: boolean;
    "aria-disabled"?: boolean;
    "aria-invalid"?: boolean;
    "aria-readonly"?: boolean;
    "aria-describedby"?: string;
    onFocus?: JSX.EventHandlerUnion<T, FocusEvent>;
    onBlur?: JSX.EventHandlerUnion<T, FocusEvent>;
}
/**
 * Hook that provides the props that should be spread on to
 * input fields (`input`, `select`, `textarea`, etc.).
 *
 * It provides a convenient way to control a form fields, validation
 * and helper text.
 *
 * @internal
 */
export declare function useFormControl<T extends HTMLElement>(props: UseFormControlProps<T>): UseFormControlReturn<T>;
//# sourceMappingURL=use-form-control.d.ts.map