import { JSX } from "solid-js";
import { SystemStyleObject } from "../../styled-system/types";
import { OverrideProps } from "../../utils";
import { ElementType } from "../types";
import { SwitchControlVariants, SwitchWrapperVariants } from "./switch.styles";
import { SwitchPrimitiveProps } from "./switch-primitive";
declare type ThemeableSwitchOptions = SwitchWrapperVariants & SwitchControlVariants;
interface SwitchOptions extends ThemeableSwitchOptions {
    /**
     * The children of the switch.
     */
    children?: JSX.Element;
}
export declare type SwitchProps<C extends ElementType = "label"> = OverrideProps<SwitchPrimitiveProps<C>, SwitchOptions>;
/**
 * Switches allow users to turn an individual option on or off.
 * They are usually used to activate or deactivate a specific setting.
 */
export declare function Switch<C extends ElementType = "label">(props: SwitchProps<C>): JSX.Element;
export declare namespace Switch {
    var toString: () => string;
}
export interface SwitchStyleConfig {
    baseStyle?: {
        root?: SystemStyleObject;
        control?: SystemStyleObject;
        label?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableSwitchOptions;
    };
}
export {};
//# sourceMappingURL=switch.d.ts.map