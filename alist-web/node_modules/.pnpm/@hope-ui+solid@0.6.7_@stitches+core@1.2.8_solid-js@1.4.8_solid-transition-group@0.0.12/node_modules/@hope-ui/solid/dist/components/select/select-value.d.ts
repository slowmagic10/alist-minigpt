import { JSX } from "solid-js";
import { ElementType, HTMLHopeProps } from "../types";
import { SelectOptionData } from "./select.utils";
declare type SelectValueChildrenRenderProp = (props: {
    selectedOptions: SelectOptionData[];
}) => JSX.Element;
interface SelectValueOptions {
    children?: JSX.Element | SelectValueChildrenRenderProp;
}
export declare type SelectValueProps<C extends ElementType = "div"> = HTMLHopeProps<C, SelectValueOptions>;
/**
 * The part that reflects the selected value.
 */
export declare function SelectValue<C extends ElementType = "div">(props: SelectValueProps<C>): JSX.Element;
export declare namespace SelectValue {
    var toString: () => string;
}
export {};
//# sourceMappingURL=select-value.d.ts.map