import { JSX } from "solid-js";
import { SystemStyleObject } from "../../styled-system";
import { UseFormControlReturn } from "../form-control/use-form-control";
import { SelectTriggerVariants } from "./select.styles";
import { SelectOptionData } from "./select.utils";
declare type SelectMotionPreset = "fade-in-top" | "none";
declare type Value = any | any[];
interface ThemeableSelectOptions extends SelectTriggerVariants {
    /**
     * Offset between the listbox and the reference (trigger) element.
     */
    offset?: number;
    /**
     * Select content opening/closing transition.
     */
    motionPreset?: SelectMotionPreset;
}
export interface SelectProps extends ThemeableSelectOptions {
    /**
     * The `id` of the internal select element.
     */
    id?: string;
    /**
     * Children of the select.
     */
    children?: JSX.Element;
    /**
     * If `true`, allow multi-selection.
     */
    multiple?: boolean;
    /**
     * The value of the select.
     * (in controlled mode)
     */
    value?: Value;
    /**
     * The value of the select when initially rendered.
     * (in uncontrolled mode)
     */
    defaultValue?: Value;
    /**
     * If `true`, the select will be required.
     */
    required?: boolean;
    /**
     * If `true`, the select will be disabled.
     */
    disabled?: boolean;
    /**
     * If `true`, the select will have `aria-invalid` set to `true`.
     */
    invalid?: boolean;
    /**
     * If `true`, the select will be readonly.
     */
    readOnly?: boolean;
    /**
     * A11y: id of the element that provides additional description to the select.
     */
    "aria-describedby"?: string;
    /**
     * Callback invoked when the selected value changes.
     * (in controlled mode)
     */
    onChange?: (value: Value) => void;
    /**
     * Callback invoked when the select trigger gain focus.
     */
    onFocus?: JSX.EventHandlerUnion<HTMLButtonElement, FocusEvent>;
    /**
     * Callback invoked when the select trigger loose focus.
     */
    onBlur?: JSX.EventHandlerUnion<HTMLButtonElement, FocusEvent>;
}
declare type SelectState = Required<Pick<SelectProps, "variant" | "size">> & Pick<SelectProps, "multiple" | "value" | "invalid" | "disabled" | "motionPreset"> & {
    /**
     * If `true`, the select has options selected.
     */
    hasSelectedOptions: boolean;
    /**
     * The id of the current `aria-activedescendent` element.
     */
    activeDescendantId?: string;
    /**
     * If `true`, the select is in controlled mode.
     */
    isControlled: boolean;
    /**
     * The `id` of the internal select element.
     * Also used as a prefix for other components ids.
     */
    baseId: string;
    /**
     * The `id` of the `SelectTrigger`.
     */
    triggerId: string;
    /**
     * The `id` of the `SelectListbox`.
     */
    listboxId: string;
    /**
     * The prefix of the group labels (`SelectLabel`) `id`.
     */
    labelIdPrefix: string;
    /**
     * The prefix of the options (`SelectOption`) `id`.
     */
    optionIdPrefix: string;
    /**
     * The list of available option.
     */
    options: SelectOptionData[];
    /**
     * The list of selected option.
     */
    selectedOptions: SelectOptionData[];
    /**
     * If `true`, the select will be open.
     */
    opened: boolean;
    /**
     * Index of the active `SelectOption`.
     */
    activeIndex: number;
    /**
     * If `true`, prevent the blur event when clicking a `SelectOption`.
     */
    ignoreBlur: boolean;
    /**
     * The string to search for in the `SelectListbox`.
     */
    searchString: string;
    /**
     * The timeout id of the search functionnality.
     */
    searchTimeoutId?: number;
};
/**
 * The wrapper component that provides context for all its children.
 */
export declare function Select(props: SelectProps): JSX.Element;
interface SelectContextValue {
    state: SelectState;
    /**
     * Props that should be spread on the select trigger to support embedding in `FormControl`.
     */
    formControlProps: UseFormControlReturn<HTMLButtonElement>;
    /**
     * Check if the option is a selected one.
     */
    isOptionSelected: (option: SelectOptionData) => boolean;
    /**
     * Check if the option is the current active-descendant by comparing its index with the active index.
     */
    isOptionActiveDescendant: (index: number) => boolean;
    /**
     * Callback to assign the `SelectTrigger` ref.
     */
    assignTriggerRef: (el: HTMLButtonElement) => void;
    /**
     * Callback to assign the `SelectContent` ref.
     */
    assignContentRef: (el: HTMLDivElement) => void;
    /**
     * Callback to assign the `SelectListbox` ref.
     */
    assignListboxRef: (el: HTMLDivElement) => void;
    /**
     * Scroll to the active option.
     */
    scrollToOption: (optionRef: HTMLElement) => void;
    /**
     * Register a `SelectOption` to the context.
     * @return The index of the option.
     */
    registerOption: (optionData: SelectOptionData) => number;
    /**
     * Callback to remove an option from the selected options.
     */
    unselectOption: (optionData: SelectOptionData) => void;
    /**
     * Callback invoked when the user click outside the `SelectContent`.
     */
    onContentClickOutside: (target: HTMLElement) => void;
    /**
     * Callback invoked when the `SelectTrigger` loose focus.
     */
    onTriggerBlur: (event: FocusEvent) => void;
    /**
     * Callback invoked when the user click on the `SelectTrigger`.
     */
    onTriggerClick: (event: MouseEvent) => void;
    /**
     * Callback invoked when the user trigger the `SelectTrigger` with keyboard.
     */
    onTriggerKeyDown: (event: KeyboardEvent) => void;
    /**
     * Callback invoked when the user click on a `SelectOption`.
     */
    onOptionClick: (index: number) => void;
    /**
     * Callback invoked when the user cursor move on a `SelectOption`.
     */
    onOptionMouseMove: (index: number) => void;
    /**
     * Callback invoked when the user click on a `SelectOption`.
     */
    onOptionMouseDown: () => void;
    /**
     * Callback invoked when the user cursor leave the `SelectListbox`.
     */
    onListboxMouseLeave: () => void;
}
export declare function useSelectContext(): SelectContextValue;
export interface SelectStyleConfig {
    baseStyle?: {
        trigger?: SystemStyleObject;
        placeholder?: SystemStyleObject;
        singleValue?: SystemStyleObject;
        multiValue?: SystemStyleObject;
        tag?: SystemStyleObject;
        tagCloseButton?: SystemStyleObject;
        icon?: SystemStyleObject;
        content?: SystemStyleObject;
        listbox?: SystemStyleObject;
        optgroup?: SystemStyleObject;
        label?: SystemStyleObject;
        option?: SystemStyleObject;
        optionText?: SystemStyleObject;
        optionIndicator?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableSelectOptions;
    };
}
export {};
//# sourceMappingURL=select.d.ts.map