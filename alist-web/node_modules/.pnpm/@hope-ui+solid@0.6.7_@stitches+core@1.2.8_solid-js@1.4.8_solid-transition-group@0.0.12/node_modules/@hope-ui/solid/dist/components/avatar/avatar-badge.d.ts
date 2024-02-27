import { ElementType, HTMLHopeProps } from "../types";
import { AvatarBadgeVariants } from "./avatar.styles";
declare type AvatarBadgeOptions = AvatarBadgeVariants;
export declare type AvatarBadgeProps<C extends ElementType = "div"> = HTMLHopeProps<C, AvatarBadgeOptions>;
/**
 * AvatarBadge used to show extra badge to the top-right
 * or bottom-right corner of an avatar.
 */
export declare function AvatarBadge<C extends ElementType = "div">(props: AvatarBadgeProps<C>): import("solid-js").JSX.Element;
export declare namespace AvatarBadge {
    var toString: () => string;
}
export {};
//# sourceMappingURL=avatar-badge.d.ts.map