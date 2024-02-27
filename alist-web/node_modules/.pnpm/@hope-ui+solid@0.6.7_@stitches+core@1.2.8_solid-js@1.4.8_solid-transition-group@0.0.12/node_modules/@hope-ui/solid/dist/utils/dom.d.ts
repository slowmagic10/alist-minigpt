import { EventKeys } from "./types";
export declare function isElement(el: any): el is Element;
export declare function isHTMLElement(el: any): el is HTMLElement;
export declare function getOwnerDocument(node?: Element | null): Document;
export declare function isValidEvent(event: any, element?: HTMLElement): boolean;
/**
 * Get the normalized event key across all browsers
 */
export declare function normalizeEventKey(event: Pick<KeyboardEvent, "key" | "keyCode">): EventKeys;
export declare function getActiveElement(node?: HTMLElement): HTMLElement;
export declare function contains(parent: HTMLElement | undefined, child: HTMLElement): boolean;
export declare function getRelatedTarget(event: Pick<FocusEvent, "relatedTarget" | "target" | "currentTarget">): HTMLElement;
/**
 * Check if an element is currently scrollable
 */
export declare function isScrollable(element: HTMLElement): boolean;
/**
 * Ensure a given child element is within the parent's visible scroll area
 * if the child is not visible, scroll the parent
 */
export declare function maintainScrollVisibility(activeElement: HTMLElement, scrollParent: HTMLElement): void;
//# sourceMappingURL=dom.d.ts.map