import { JSX } from "solid-js";
import { SystemStyleObject } from "../../styled-system/types";
import { OverrideProps } from "../../utils/types";
import { ElementType } from "../types";
import { CheckboxControlVariants, CheckboxWrapperVariants } from "./checkbox.styles";
import { CheckboxPrimitiveProps } from "./checkbox-primitive";
export declare type ThemeableCheckboxOptions = CheckboxWrapperVariants & CheckboxControlVariants;
interface CheckboxOptions extends ThemeableCheckboxOptions {
    /**
     * The checked icon to use.
     */
    iconChecked?: JSX.Element;
    /**
     * The indeterminate icon to use.
     */
    iconIndeterminate?: JSX.Element;
    /**
     * The children of the checkbox.
     */
    children?: JSX.Element;
}
export declare type CheckboxProps<C extends ElementType = "label"> = OverrideProps<CheckboxPrimitiveProps<C>, CheckboxOptions>;
/**
 * Checkboxes allow users to select multiple items from a list of individual items,
 * or to mark one individual item as selected.
 */
export declare function Checkbox<C extends ElementType = "label">(props: CheckboxProps<C>): JSX.Element;
export declare namespace Checkbox {
    var toString: () => string;
}
export interface CheckboxStyleConfig {
    baseStyle?: {
        root?: SystemStyleObject;
        group?: SystemStyleObject;
        control?: SystemStyleObject;
        label?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableCheckboxOptions;
        group?: ThemeableCheckboxOptions;
    };
}
export {};
//# sourceMappingURL=checkbox.d.ts.map