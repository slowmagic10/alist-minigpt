import { Accessor, JSX } from "solid-js";
import { ElementType, HTMLHopeProps } from "../types";
declare type AccordionItemChildrenRenderProp = (props: {
    expanded: Accessor<boolean>;
    disabled: Accessor<boolean>;
}) => JSX.Element;
interface AccordionItemOptions {
    /**
     * If `true`, the accordion item will be disabled.
     */
    disabled?: boolean;
    /**
     * The children of the accordion item.
     */
    children?: JSX.Element | AccordionItemChildrenRenderProp;
}
export declare type AccordionItemProps<C extends ElementType = "div"> = HTMLHopeProps<C, AccordionItemOptions>;
interface AccordionItemState {
    /**
     * The index of the accordion item.
     */
    index: number;
    /**
     * The id of the accordion button.
     */
    buttonId: string;
    /**
     * The id of the accordion panel.
     */
    panelId: string;
    /**
     * If `true`, the accordion item will be expanded.
     */
    expanded: boolean;
    /**
     * If `true`, the accordion item will be disabled.
     */
    disabled: boolean;
}
/**
 * AccordionItem is a single accordion that provides the open-close
 * behavior when the accordion button is clicked.
 *
 * It also provides context for the accordion button and panel.
 */
export declare function AccordionItem<C extends ElementType = "div">(props: AccordionItemProps<C>): JSX.Element;
export declare namespace AccordionItem {
    var toString: () => string;
}
interface AccordionItemContextValue {
    state: AccordionItemState;
    /**
     * Callback to set the accordion item button to the accordion context.
     */
    registerButton: (el: HTMLButtonElement) => void;
    /**
     * Callback to notify the accordion context that this item has focus.
     */
    setFocusedIndex: () => void;
    /**
     * Callback to toggle the expanded state of the accordion item.
     */
    toggleExpandedState: () => void;
    /**
     * Manage keyboard navigation between accordion items.
     */
    onButtonKeyDown: JSX.EventHandlerUnion<HTMLButtonElement, KeyboardEvent>;
}
export declare function useAccordionItemContext(): AccordionItemContextValue;
export {};
//# sourceMappingURL=accordion-item.d.ts.map