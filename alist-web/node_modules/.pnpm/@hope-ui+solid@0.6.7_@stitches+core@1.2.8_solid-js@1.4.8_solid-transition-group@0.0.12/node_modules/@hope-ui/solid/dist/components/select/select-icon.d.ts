import { ElementType, HTMLHopeProps } from "../types";
interface SelectIconOptions {
    /**
     * If `true`, the icon will rotate when the select is open.
     */
    rotateOnOpen?: boolean;
}
declare type SelectIconProps<C extends ElementType = "svg"> = HTMLHopeProps<C, SelectIconOptions>;
/**
 * A small icon often displayed next to the value as a visual affordance for the fact it can be open.
 */
export declare function SelectIcon<C extends ElementType = "svg">(props: SelectIconProps<C>): import("solid-js").JSX.Element;
export declare namespace SelectIcon {
    var toString: () => string;
}
export {};
//# sourceMappingURL=select-icon.d.ts.map