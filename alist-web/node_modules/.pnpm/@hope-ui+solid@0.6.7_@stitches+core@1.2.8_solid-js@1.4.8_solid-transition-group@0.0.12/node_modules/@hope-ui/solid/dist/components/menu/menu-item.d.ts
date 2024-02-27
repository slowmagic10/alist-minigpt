import { JSX } from "solid-js";
import { MarginProps } from "../../styled-system/props/margin";
import { ElementType, HTMLHopeProps } from "../types";
import { MenuItemVariants } from "./menu.styles";
import { MenuItemData } from "./menu.utils";
declare type MenuItemOptions = Partial<Omit<MenuItemData, "key">> & MenuItemVariants & {
    /**
     * The icon to display next to the menu item text.
     */
    icon?: JSX.Element;
    /**
     * The space between the icon and the menu item text.
     */
    iconSpacing?: MarginProps["marginRight"];
    /**
     * Right-aligned label text content, useful for displaying hotkeys.
     */
    command?: string;
    /**
     * The space between the command and the menu item text.
     */
    commandSpacing?: MarginProps["marginLeft"];
};
export declare type MenuItemProps<C extends ElementType = "div"> = HTMLHopeProps<C, MenuItemOptions>;
/**
 * The component that contains a menu item.
 */
export declare function MenuItem<C extends ElementType = "div">(props: MenuItemProps<C>): JSX.Element;
export declare namespace MenuItem {
    var toString: () => string;
}
export {};
//# sourceMappingURL=menu-item.d.ts.map