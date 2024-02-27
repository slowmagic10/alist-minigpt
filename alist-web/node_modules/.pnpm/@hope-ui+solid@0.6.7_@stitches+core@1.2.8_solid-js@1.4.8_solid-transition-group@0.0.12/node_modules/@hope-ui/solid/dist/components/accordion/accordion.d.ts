import { SystemStyleObject } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
export declare type ExpandedIndex = number | number[];
interface AccordionOptions {
    /**
     * If `true`, multiple accordion items can be expanded at once.
     */
    allowMultiple?: boolean;
    /**
     * The index(es) of the expanded accordion item.
     * (in controlled mode)
     */
    index?: ExpandedIndex;
    /**
     * The initial index(es) of the expanded accordion item.
     * (in uncontrolled mode)
     */
    defaultIndex?: ExpandedIndex;
    /**
     * The callback invoked when accordion items are expanded or collapsed.
     */
    onChange?: (expandedIndex: ExpandedIndex) => void;
}
export declare type AccordionProps<C extends ElementType = "div"> = HTMLHopeProps<C, AccordionOptions>;
interface AccordionState {
    /**
     * The index(es) of the expanded accordion items.
     * (In uncontrolled mode)
     */
    _expandedIndex: ExpandedIndex;
    /**
     * If `true`, the accordion is in controlled mode.
     * (have index and onChange props)
     */
    isControlled: boolean;
    /**
     * The index(es) of the expanded accordion items.
     * (in controlled mode)
     */
    expandedIndex: ExpandedIndex;
    /**
     * The index of the focused accordion button.
     */
    focusedIndex: number;
}
/**
 * The wrapper that provides context and focus management for all accordion items.
 * It wraps all accordion items in a `div` for better grouping.
 */
export declare function Accordion<C extends ElementType = "div">(props: AccordionProps<C>): import("solid-js").JSX.Element;
export declare namespace Accordion {
    var toString: () => string;
}
interface AccordionContextValue {
    state: AccordionState;
    /**
     * Callback to set the focused accordion button index.
     */
    setFocusedIndex: (index: number) => void;
    /**
     * Callback to set the expanded accordion indexes.
     */
    setExpandedIndex: (index: number, isExpanded: boolean) => void;
    /**
     * Check if the accordion item at the given index is expanded or not.
     */
    isExpandedIndex: (index: number) => boolean;
    /**
     * Register a `AccordionButton` to the context.
     * @return The index of the accordion button.
     */
    registerAccordionButton: (node: HTMLButtonElement) => number;
    /**
     * Focus the previous non disabled accordion button.
     */
    focusPrevAccordionButton: () => void;
    /**
     * Focus the next non disabled accordion button.
     */
    focusNextAccordionButton: () => void;
    /**
     * Focus the first non disabled accordion button.
     */
    focusFirstAccordionButton: () => void;
    /**
     * Focus the last non disabled accordion button.
     */
    focusLastAccordionButton: () => void;
}
export declare function useAccordionContext(): AccordionContextValue;
export interface AccordionStyleConfig {
    baseStyle?: {
        root?: SystemStyleObject;
        item?: SystemStyleObject;
        button?: SystemStyleObject;
        icon?: SystemStyleObject;
        panel?: SystemStyleObject;
    };
}
export {};
//# sourceMappingURL=accordion.d.ts.map