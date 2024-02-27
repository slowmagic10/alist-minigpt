import { ElementType, HTMLHopeProps } from "../types";
import { TableCellVariants } from "./table.styles";
export declare type TdProps<C extends ElementType = "td"> = HTMLHopeProps<C, Pick<TableCellVariants, "numeric">>;
export declare function Td<C extends ElementType = "td">(props: TdProps<C>): import("solid-js").JSX.Element;
export declare namespace Td {
    var toString: () => string;
}
//# sourceMappingURL=td.d.ts.map