import { JSX } from "solid-js";
import { ElementType, HTMLHopeProps } from "../types";
import { ThemeableCheckboxOptions } from "./checkbox";
declare type CheckboxGroupValue = (string | number)[];
interface CheckboxGroupOptions extends ThemeableCheckboxOptions {
    /**
     * The `name` attribute forwarded to each `checkbox` element
     */
    name?: string;
    /**
     * The value of the checkbox group.
     * (in controlled mode)
     */
    value?: CheckboxGroupValue;
    /**
     * The initial value of the checkbox group.
     * (in uncontrolled mode)
     */
    defaultValue?: CheckboxGroupValue;
    /**
     * If `true`, all wrapped checkbox inputs will be marked as required,
     * and `required` attribute will be added.
     */
    required?: boolean;
    /**
     * If `true`, all wrapped checkbox inputs will be disabled.
     */
    disabled?: boolean;
    /**
     * If `true`, all wrapped checkbox inputs will have `aria-invalid` set to `true`.
     */
    invalid?: boolean;
    /**
     * If `true`, all wrapped checkbox inputs will be readonly.
     */
    readOnly?: boolean;
    /**
     * The children of the CheckboxGroup.
     */
    children?: JSX.Element;
    /**
     * Callback invoked once a checkbox is checked.
     * @param value the value of the checked checkbox
     */
    onChange?: (value: CheckboxGroupValue) => void;
}
export declare type CheckboxGroupProps<C extends ElementType = "div"> = HTMLHopeProps<C, CheckboxGroupOptions>;
interface CheckboxGroupState extends Omit<CheckboxGroupProps, "name" | "onChange"> {
    /**
     * The `name` attribute forwarded to each `radio` element.
     */
    name: string;
    /**
     * The value of the radio to be `checked`.
     * (in uncontrolled mode)
     */
    _value: CheckboxGroupValue;
    /**
     * If `true`, the radio group is in controlled mode.
     * (have value and onChange props)
     */
    isControlled: boolean;
}
export declare function CheckboxGroup<C extends ElementType = "div">(props: CheckboxGroupProps<C>): JSX.Element;
export declare namespace CheckboxGroup {
    var toString: () => string;
}
interface CheckboxGroupContextValue {
    state: CheckboxGroupState;
    /**
     * The callback invoked when the checked state of the `Checkbox` in `CheckboxGroup` changes.
     */
    onChange: JSX.EventHandlerUnion<HTMLInputElement, Event>;
}
export declare function useCheckboxGroupContext(): CheckboxGroupContextValue | undefined;
export {};
//# sourceMappingURL=checkbox-group.d.ts.map