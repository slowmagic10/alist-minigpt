import { Accessor } from "solid-js";
import { ElementType, HTMLHopeProps } from "../types";
import { SelectOptionData } from "./select.utils";
export interface SelectOptionContextValue {
    selected: Accessor<boolean>;
}
declare type SelectOptionOptions = Required<Pick<SelectOptionData, "value">> & Partial<Pick<SelectOptionData, "textValue" | "disabled">>;
export declare type SelectOptionProps<C extends ElementType = "div"> = HTMLHopeProps<C, SelectOptionOptions>;
/**
 * The component that contains a select option.
 */
export declare function SelectOption<C extends ElementType = "div">(props: SelectOptionProps<C>): import("solid-js").JSX.Element;
export declare namespace SelectOption {
    var toString: () => string;
}
export declare function useSelectOptionContext(): SelectOptionContextValue;
export {};
//# sourceMappingURL=select-option.d.ts.map