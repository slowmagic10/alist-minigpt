import { ElementType, HTMLHopeProps, SinglePartComponentStyleConfig } from "../types";
import { TextVariants } from "./text.styles";
export declare type TextProps<C extends ElementType = "p"> = HTMLHopeProps<C, TextVariants>;
export declare type TextStyleConfig = SinglePartComponentStyleConfig<TextVariants>;
/**
 * Text component is the used to render text and paragraphs within an interface.
 * It renders a <p> tag by default.
 */
export declare function Text<C extends ElementType = "p">(props: TextProps<C>): import("solid-js").JSX.Element;
export declare namespace Text {
    var toString: () => string;
}
//# sourceMappingURL=text.d.ts.map