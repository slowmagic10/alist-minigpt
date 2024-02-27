import { ElementType, HTMLHopeProps } from "../types";
export interface SelectOptGroupContextValue {
    setAriaLabelledBy: (id: string) => void;
}
export declare type SelectOptGroupProps<C extends ElementType = "div"> = HTMLHopeProps<C>;
/**
 * Component used to group multiple options.
 */
export declare function SelectOptGroup<C extends ElementType = "div">(props: SelectOptGroupProps<C>): import("solid-js").JSX.Element;
export declare namespace SelectOptGroup {
    var toString: () => string;
}
export declare function useSelectOptGroupContext(): SelectOptGroupContextValue | undefined;
//# sourceMappingURL=select-optgroup.d.ts.map