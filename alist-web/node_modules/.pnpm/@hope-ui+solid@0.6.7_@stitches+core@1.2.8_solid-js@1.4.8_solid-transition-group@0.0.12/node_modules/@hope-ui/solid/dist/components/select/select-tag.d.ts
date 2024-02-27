import { ElementType, HTMLHopeProps } from "../types";
import { SelectTagVariants } from "./select.styles";
export declare type SelectTagProps<C extends ElementType = "span"> = HTMLHopeProps<C, SelectTagVariants>;
/**
 * Tag representing a selected value in a multi-select.
 */
export declare function SelectTag<C extends ElementType = "span">(props: SelectTagProps<C>): import("solid-js").JSX.Element;
export declare namespace SelectTag {
    var toString: () => string;
}
//# sourceMappingURL=select-tag.d.ts.map