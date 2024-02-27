import { ElementType, HTMLHopeProps, SinglePartComponentStyleConfig } from "../types";
import { HeadingVariants } from "./heading.styles";
declare type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6 | "1" | "2" | "3" | "4" | "5" | "6";
interface HeadingOptions extends HeadingVariants {
    /**
     * The level of heading to be rendered. For example `3` will render an h3.
     */
    level?: HeadingLevel;
}
export declare type HeadingProps<C extends ElementType = "h2"> = HTMLHopeProps<C, HeadingOptions>;
export declare type HeadingStyleConfig = SinglePartComponentStyleConfig<HeadingOptions>;
/**
 * Headings are used for rendering headlines.
 * It renders an <h2> tag by default.
 */
export declare function Heading<C extends ElementType = "h2">(props: HeadingProps<C>): import("solid-js").JSX.Element;
export declare namespace Heading {
    var toString: () => string;
}
export {};
//# sourceMappingURL=heading.d.ts.map