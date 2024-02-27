import { ElementType, HTMLHopeProps, SinglePartComponentStyleConfig } from "../types";
import { BadgeVariants } from "./badge.styles";
declare type ThemeableBadgeOptions = Pick<BadgeVariants, "variant" | "colorScheme">;
export declare type BadgeStyleConfig = SinglePartComponentStyleConfig<ThemeableBadgeOptions>;
export declare type BadgeProps<C extends ElementType = "span"> = HTMLHopeProps<C, BadgeVariants>;
/**
 * Badges are used to highlight an item's status for quick recognition.
 */
export declare function Badge<C extends ElementType = "span">(props: BadgeProps<C>): import("solid-js").JSX.Element;
export declare namespace Badge {
    var toString: () => string;
}
export {};
//# sourceMappingURL=badge.d.ts.map