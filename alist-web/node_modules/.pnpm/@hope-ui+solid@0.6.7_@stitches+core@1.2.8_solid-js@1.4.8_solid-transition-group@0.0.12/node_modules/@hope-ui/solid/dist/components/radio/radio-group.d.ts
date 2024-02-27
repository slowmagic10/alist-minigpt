import { JSX } from "solid-js";
import { ElementType, HTMLHopeProps } from "../types";
import { ThemeableRadioOptions } from "./radio";
interface RadioGroupOptions extends ThemeableRadioOptions {
    /**
     * The `name` attribute forwarded to each `radio` element.
     */
    name?: string;
    /**
     * The value of the radio to be `checked`.
     * (in controlled mode)
     */
    value?: string | number;
    /**
     * The value of the radio to be `checked` initially.
     * (in uncontrolled mode)
     */
    defaultValue?: string | number;
    /**
     * If `true`, all wrapped radio inputs will be marked as required,
     * and `required` attribute will be added.
     */
    required?: boolean;
    /**
     * If `true`, all wrapped radio inputs will be disabled.
     */
    disabled?: boolean;
    /**
     * If `true`, all wrapped radio inputs will have `aria-invalid` set to `true`.
     */
    invalid?: boolean;
    /**
     * If `true`, all wrapped radio inputs will be readonly.
     */
    readOnly?: boolean;
    /**
     * Callback invoked once a radio is checked.
     * @param value the value of the checked radio
     */
    onChange?: (value: string) => void;
}
export declare type RadioGroupProps<C extends ElementType = "div"> = HTMLHopeProps<C, RadioGroupOptions>;
interface RadioGroupState extends Omit<RadioGroupOptions, "name" | "onChange"> {
    /**
     * The `name` attribute forwarded to each `radio` element.
     */
    name: string;
    /**
     * The value of the radio to be `checked`.
     * (in uncontrolled mode)
     */
    _value?: string | number;
    /**
     * If `true`, the radio group is in controlled mode.
     * (have value and onChange props)
     */
    isControlled: boolean;
}
/**
 * RadioGroup provides context for all its radio childrens.
 */
export declare function RadioGroup<C extends ElementType = "div">(props: RadioGroupProps<C>): JSX.Element;
export declare namespace RadioGroup {
    var toString: () => string;
}
interface RadioGroupContextValue {
    state: RadioGroupState;
    /**
     * The callback invoked when the checked state of a `Radio` in `RadioGroup` changes.
     */
    onChange: JSX.EventHandlerUnion<HTMLInputElement, Event>;
}
export declare function useRadioGroupContext(): RadioGroupContextValue | undefined;
export {};
//# sourceMappingURL=radio-group.d.ts.map