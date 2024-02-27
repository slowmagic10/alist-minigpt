import { ElementType, HTMLHopeProps, SinglePartComponentStyleConfig } from "../types";
export declare type AnchorStyleConfig = SinglePartComponentStyleConfig<void>;
interface AnchorOptions {
    external?: boolean;
}
export declare type AnchorProps<C extends ElementType = "a"> = HTMLHopeProps<C, AnchorOptions>;
/**
 * Anchors are accessible elements used primarily for navigation.
 * This component is styled to resemble a hyperlink and semantically renders an <a>.
 */
export declare function Anchor<C extends ElementType = "a">(props: AnchorProps<C>): import("solid-js").JSX.Element;
export declare namespace Anchor {
    var toString: () => string;
}
export {};
//# sourceMappingURL=anchor.d.ts.map