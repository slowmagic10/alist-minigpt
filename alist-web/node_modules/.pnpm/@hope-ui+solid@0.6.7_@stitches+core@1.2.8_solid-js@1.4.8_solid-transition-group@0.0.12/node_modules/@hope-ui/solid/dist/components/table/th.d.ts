import { ElementType, HTMLHopeProps } from "../types";
import { TableColumnHeaderVariants } from "./table.styles";
export declare type ThProps<C extends ElementType = "th"> = HTMLHopeProps<C, Pick<TableColumnHeaderVariants, "numeric">>;
export declare function Th<C extends ElementType = "th">(props: ThProps<C>): import("solid-js").JSX.Element;
export declare namespace Th {
    var toString: () => string;
}
//# sourceMappingURL=th.d.ts.map