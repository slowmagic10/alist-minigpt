import { SystemStyleObject } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
import { ThemeableTableCaptionOptions } from "./table-caption";
export interface TableContextValue {
    /**
     * Set a neutral background color on odd or even row of table.
     */
    striped?: "odd" | "even";
    /**
     * If `true`, row will have less padding.
     */
    dense: boolean;
    /**
     * If `true`, row will have hover color.
     */
    highlightOnHover: boolean;
}
export declare type TableOptions = Partial<TableContextValue>;
export declare type TableProps<C extends ElementType = "table"> = HTMLHopeProps<C, TableOptions>;
export interface TableStyleConfig {
    baseStyle?: {
        root?: SystemStyleObject;
        caption?: SystemStyleObject;
        thead?: SystemStyleObject;
        tbody?: SystemStyleObject;
        tfoot?: SystemStyleObject;
        tr?: SystemStyleObject;
        th?: SystemStyleObject;
        td?: SystemStyleObject;
    };
    defaultProps?: {
        root?: TableOptions;
        caption?: ThemeableTableCaptionOptions;
    };
}
export declare function Table<C extends ElementType = "table">(props: TableProps<C>): import("solid-js").JSX.Element;
export declare namespace Table {
    var toString: () => string;
}
export declare function useTableContext(): TableContextValue;
//# sourceMappingURL=table.d.ts.map