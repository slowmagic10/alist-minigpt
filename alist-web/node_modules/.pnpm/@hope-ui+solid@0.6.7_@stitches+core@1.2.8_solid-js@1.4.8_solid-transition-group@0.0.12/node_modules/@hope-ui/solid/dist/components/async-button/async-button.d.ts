import { ButtonOptions } from "../button/button";
import { ElementType, HTMLHopeProps } from "../types";
export interface AsyncButtonOptions extends ButtonOptions {
    onClick?: (event: MouseEvent) => Promise<void>;
}
export declare type AsyncButtonProps<C extends ElementType = "button"> = HTMLHopeProps<C, AsyncButtonOptions>;
/**
 * AsyncButton renders regular Button component and manages loading state automatically.
 * Hence requires onClick handler to return a Promise.
 */
export declare function AsyncButton<C extends ElementType = "button">(props: AsyncButtonProps<C>): import("solid-js").JSX.Element;
export declare namespace AsyncButton {
    var toString: () => string;
}
//# sourceMappingURL=async-button.d.ts.map