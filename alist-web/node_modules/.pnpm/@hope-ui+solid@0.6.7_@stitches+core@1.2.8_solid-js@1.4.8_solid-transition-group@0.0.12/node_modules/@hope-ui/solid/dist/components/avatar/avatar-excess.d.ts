import { ElementType, HTMLHopeProps } from "../types";
import { AvatarExcessVariants } from "./avatar.styles";
export declare type AvatarExcessProps<C extends ElementType = "span"> = HTMLHopeProps<C, AvatarExcessVariants>;
/**
 * Component to show the remaining number of avatars in a group.
 */
export declare function AvatarExcess<C extends ElementType = "span">(props: AvatarExcessProps<C>): import("solid-js").JSX.Element;
export declare namespace AvatarExcess {
    var toString: () => string;
}
//# sourceMappingURL=avatar-excess.d.ts.map