import { Accessor, JSX } from "solid-js";
import { ElementType, HTMLHopeProps } from "../types";
declare type SwitchPrimitiveChildrenRenderProp = (props: {
    state: Accessor<SwitchPrimitiveState>;
}) => JSX.Element;
interface SwitchPrimitiveOptions {
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
     * The value to be used in the switch input.
     * This is the value that will be returned on form submission.
     */
    value?: string | number;
    /**
     * If `true`, the switch will be checked.
     * You'll need to pass `onChange` to update its value (since it is now controlled)
     */
    checked?: boolean;
    /**
     * If `true`, the switch will be initially checked.
     */
    defaultChecked?: boolean;
    /**
     * If `true`, the switch input is marked as required,
     * and `required` attribute will be added
     */
    required?: boolean;
    /**
     * If `true`, the switch will be disabled
     */
    disabled?: boolean;
    /**
     * If `true`, the input will have `aria-invalid` set to `true`
     */
    invalid?: boolean;
    /**
     * If `true`, the switch will be readonly
     */
    readOnly?: boolean;
    /**
     * The children of the switch.
     */
    children?: JSX.Element | SwitchPrimitiveChildrenRenderProp;
    /**
     * The callback invoked when the checked state of the switch changes.
     */
    onChange?: JSX.EventHandlerUnion<HTMLInputElement, Event>;
    /**
     * The callback invoked when the switch is focused
     */
    onFocus?: JSX.EventHandlerUnion<HTMLInputElement, FocusEvent>;
    /**
     * The callback invoked when the switch is blurred (loses focus)
     */
    onBlur?: JSX.EventHandlerUnion<HTMLInputElement, FocusEvent>;
}
export declare type SwitchPrimitiveProps<C extends ElementType = "label"> = HTMLHopeProps<C, SwitchPrimitiveOptions>;
interface SwitchPrimitiveState {
    /**
     * The `checked` state of the switch.
     * (In uncontrolled mode)
     */
    _checked: boolean;
    /**
     * If `true`, the switch is in controlled mode.
     * (have checked and onChange props)
     */
    isControlled: boolean;
    /**
     * If `true`, the switch is currently focused.
     */
    isFocused: boolean;
    /**
     * The `checked` state of the switch.
     * (In controlled mode)
     */
    checked: boolean;
    /**
     * The value to be used in the switch input.
     * This is the value that will be returned on form submission.
     */
    value?: string | number;
    /**
     * The id of the input field in a switch.
     */
    id?: string;
    /**
     * The name of the input field in a switch.
     */
    name?: string;
    /**
     * If `true`, the switch input is marked as required,
     * and `required` attribute will be added
     */
    required?: boolean;
    /**
     * If `true`, the switch will be disabled
     */
    disabled?: boolean;
    /**
     * If `true`, the input will have `aria-invalid` set to `true`
     */
    invalid?: boolean;
    /**
     * If `true`, the switch will be readonly
     */
    readOnly?: boolean;
    "aria-required"?: boolean;
    "aria-disabled"?: boolean;
    "aria-invalid"?: boolean;
    "aria-readonly"?: boolean;
    "data-focus"?: string;
    "data-checked"?: string;
    "data-required"?: string;
    "data-disabled"?: string;
    "data-invalid"?: string;
    "data-readonly"?: string;
}
/**
 * Contains all the parts of a switch.
 * It renders a `label` with a visualy hidden `input[type=checkbox][role=switch]`.
 * You can style this element directly, or you can use it as a wrapper to put other components into, or both.
 */
export declare function SwitchPrimitive<C extends ElementType = "label">(props: SwitchPrimitiveProps<C>): JSX.Element;
interface SwitchPrimitiveContextValue {
    state: SwitchPrimitiveState;
}
export declare function useSwitchPrimitivehContext(): SwitchPrimitiveContextValue;
export {};
//# sourceMappingURL=switch-primitive.d.ts.map