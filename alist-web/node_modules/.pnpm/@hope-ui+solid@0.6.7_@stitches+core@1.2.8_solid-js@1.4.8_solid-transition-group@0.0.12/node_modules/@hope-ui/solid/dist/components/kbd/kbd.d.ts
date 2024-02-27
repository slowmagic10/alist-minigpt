import { ElementType, HTMLHopeProps, SinglePartComponentStyleConfig } from "../types";
export declare type KbdStyleConfig = SinglePartComponentStyleConfig<void>;
export declare type KbdProps<C extends ElementType = "kbd"> = HTMLHopeProps<C>;
/**
 * Semantic component to render a keyboard shortcut within an application.
 */
export declare function Kbd<C extends ElementType = "kbd">(props: KbdProps<C>): import("solid-js").JSX.Element;
export declare namespace Kbd {
    var toString: () => string;
}
//# sourceMappingURL=kbd.d.ts.map