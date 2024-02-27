import { ElementType, HTMLHopeProps } from "../types";
export interface MenuGroupContextValue {
    setAriaLabelledBy: (id: string) => void;
}
export declare type MenuGroupProps<C extends ElementType = "div"> = HTMLHopeProps<C>;
/**
 * Component used to group multiple menu item.
 */
export declare function MenuGroup<C extends ElementType = "div">(props: MenuGroupProps<C>): import("solid-js").JSX.Element;
export declare namespace MenuGroup {
    var toString: () => string;
}
export declare function useMenuGroupContext(): MenuGroupContextValue | undefined;
//# sourceMappingURL=menu-group.d.ts.map