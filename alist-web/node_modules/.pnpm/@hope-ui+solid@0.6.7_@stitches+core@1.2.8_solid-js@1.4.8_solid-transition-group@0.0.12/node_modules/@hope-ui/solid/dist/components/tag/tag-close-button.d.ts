import { ElementType, HTMLHopeProps } from "../types";
interface TagCloseButtonOptions {
    "aria-label"?: string;
}
export declare type TagCloseButtonProps<C extends ElementType = "button"> = HTMLHopeProps<C, TagCloseButtonOptions>;
/**
 * TagCloseButton is used to close "remove" the tag
 */
export declare function TagCloseButton<C extends ElementType = "button">(props: TagCloseButtonProps<C>): import("solid-js").JSX.Element;
export declare namespace TagCloseButton {
    var toString: () => string;
}
export {};
//# sourceMappingURL=tag-close-button.d.ts.map