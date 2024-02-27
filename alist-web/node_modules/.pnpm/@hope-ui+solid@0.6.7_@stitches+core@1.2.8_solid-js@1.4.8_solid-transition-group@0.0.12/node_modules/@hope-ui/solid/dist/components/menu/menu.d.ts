import type { Placement } from "@floating-ui/dom";
import { Accessor, JSX } from "solid-js";
import { SystemStyleObject } from "../../styled-system/types";
import { MenuItemData } from "./menu.utils";
declare type MenuMotionPreset = "scale-top-left" | "scale-top-right" | "scale-bottom-left" | "scale-bottom-right" | "none";
declare type MenuChildrenRenderProp = (props: {
    opened: Accessor<boolean>;
}) => JSX.Element;
interface ThemeableMenuOptions {
    /**
     * If `true`, the menu will close when a menu item is selected.
     */
    closeOnSelect?: boolean;
    /**
     * Offset between the menu content and the reference (trigger) element.
     */
    offset?: number;
    /**
     * Placement of the menu content.
     */
    placement?: Placement;
    /**
     * Menu content opening/closing transition.
     */
    motionPreset?: MenuMotionPreset;
}
export interface MenuProps extends ThemeableMenuOptions {
    /**
     * The `id` of the menu.
     */
    id?: string;
    /**
     * Children of the menu.
     */
    children?: JSX.Element | MenuChildrenRenderProp;
}
interface MenuState {
    /**
     * If `true`, the menu will be open.
     */
    opened: boolean;
    /**
     * If `true`, the menu will close when a menu item is clicked.
     */
    closeOnSelect: boolean;
    /**
     * The id of the current `aria-activedescendent` element.
     */
    activeDescendantId?: string;
    /**
     * The `id` of the `MenuTrigger`.
     */
    triggerId: string;
    /**
     * The `id` of the `MenuContent`.
     */
    menuContentId: string;
    /**
     * The prefix of the group labels (`MenuLabel`) `id`.
     */
    labelIdPrefix: string;
    /**
     * The prefix of the menutiems (`MenuItem`) `id`.
     */
    itemIdPrefix: string;
    /**
     * The list of available item.
     */
    items: MenuItemData[];
    /**
     * Menu opening/closing transition.
     */
    motionPreset?: MenuMotionPreset;
    /**
     * Index of the active `MenuItem`.
     */
    activeIndex: number;
    /**
     * If `true`, prevent the blur event when clicking a `MenuItem`.
     */
    ignoreBlur: boolean;
    /**
     * The string to search for in the `MenuContent`.
     */
    searchString: string;
    /**
     * The timeout id of the search functionnality.
     */
    searchTimeoutId?: number;
}
/**
 * The wrapper component that provides context for all its children.
 */
export declare function Menu(props: MenuProps): JSX.Element;
interface MenuContextValue {
    state: MenuState;
    /**
     * Check if the item is the current active-descendant by comparing its index with the active index.
     */
    isItemActiveDescendant: (index: number) => boolean;
    /**
     * Callback to assign the `MenuTrigger` ref.
     */
    assignTriggerRef: (el: HTMLButtonElement) => void;
    /**
     * Callback to assign the `MenuContent` ref.
     */
    assignContentRef: (el: HTMLDivElement) => void;
    /**
     * Scroll to the active item.
     */
    scrollToItem: (itemRef: HTMLDivElement) => void;
    /**
     * Callback to notify the context that a `MenuItem` is mounted.
     * @return The index of the item.
     */
    registerItem: (itemData: MenuItemData) => number;
    /**
     * Callback invoked when the `MenuTrigger` loose focus.
     */
    onTriggerBlur: (event: FocusEvent) => void;
    /**
     * Callback invoked when the user click on the `MenuTrigger`.
     */
    onTriggerClick: (event: MouseEvent) => void;
    /**
     * Callback invoked when the user trigger the `MenuTrigger` with keyboard.
     */
    onTriggerKeyDown: (event: KeyboardEvent) => void;
    /**
     * Callback invoked when the user click on a `MenuItem`.
     */
    onItemClick: (index: number) => void;
    /**
     * Callback invoked when the user cursor move on a `MenuItem`.
     */
    onItemMouseMove: (index: number) => void;
    /**
     * Callback invoked when the user click on a `MenuItem`.
     */
    onItemMouseDown: () => void;
    /**
     * Callback invoked when the user click outside the `MenuContent`.
     */
    onContentClickOutside: (target: HTMLElement) => void;
    /**
     * Callback invoked when the user cursor leave the `MenuContent`.
     */
    onContentMouseLeave: () => void;
}
export declare function useMenuContext(): MenuContextValue;
export interface MenuStyleConfig {
    baseStyle?: {
        trigger?: SystemStyleObject;
        content?: SystemStyleObject;
        group?: SystemStyleObject;
        label?: SystemStyleObject;
        item?: SystemStyleObject;
        itemText?: SystemStyleObject;
        itemIconWrapper?: SystemStyleObject;
        itemCommand?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableMenuOptions;
    };
}
export {};
//# sourceMappingURL=menu.d.ts.map