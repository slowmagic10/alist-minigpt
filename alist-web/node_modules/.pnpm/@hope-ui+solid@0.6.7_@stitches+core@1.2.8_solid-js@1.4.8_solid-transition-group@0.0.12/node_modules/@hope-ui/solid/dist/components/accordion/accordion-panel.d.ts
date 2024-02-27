import { ElementType, HTMLHopeProps } from "../types";
export declare type AccordionPanelProps<C extends ElementType = "div"> = HTMLHopeProps<C>;
/**
 * Accordion panel that holds the content for each accordion.
 * It shows and hides based on the state from the `AccordionItem`.
 *
 * It uses the `Collapse` component to animate its height.
 */
export declare function AccordionPanel<C extends ElementType = "div">(props: AccordionPanelProps<C>): import("solid-js").JSX.Element;
export declare namespace AccordionPanel {
    var toString: () => string;
}
//# sourceMappingURL=accordion-panel.d.ts.map