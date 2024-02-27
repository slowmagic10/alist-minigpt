import { Accessor } from "solid-js";
import { SystemStyleObject } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
import { TagVariants } from "./tag.styles";
declare type ThemeableTagOptions = Pick<TagVariants, "variant" | "colorScheme" | "size" | "dotPlacement">;
export interface TagStyleConfig {
    baseStyle?: {
        root?: SystemStyleObject;
        icon?: SystemStyleObject;
        label?: SystemStyleObject;
        closeButton?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableTagOptions;
    };
}
export declare type TagProps<C extends ElementType = "span"> = HTMLHopeProps<C, TagVariants>;
interface TagContextValue {
    size: Accessor<TagVariants["size"]>;
}
/**
 * Tag component is used for items that need to be labeled, categorized,
 * or organized using keywords that describe them.
 */
export declare function Tag<C extends ElementType = "span">(props: TagProps<C>): import("solid-js").JSX.Element;
export declare namespace Tag {
    var toString: () => string;
}
export declare function useTagContext(): TagContextValue;
export {};
//# sourceMappingURL=tag.d.ts.map