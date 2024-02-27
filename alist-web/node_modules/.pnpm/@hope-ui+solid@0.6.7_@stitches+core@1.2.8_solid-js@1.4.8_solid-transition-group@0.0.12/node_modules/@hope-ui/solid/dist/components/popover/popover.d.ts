import type { Placement } from "@floating-ui/dom";
import { Accessor, JSX } from "solid-js";
import { SystemStyleObject } from "../../styled-system/types";
import { ThemeableCloseButtonOptions } from "../close-button/close-button";
interface PopoverChildrenRenderPropParams {
    opened: Accessor<boolean>;
    onClose: () => void;
}
declare type PopoverChildrenRenderProp = (props: PopoverChildrenRenderPropParams) => JSX.Element;
declare type PopoverMotionPreset = "scale" | "none";
export interface PopoverProps {
    /**
     * Placement of the popover
     */
    placement?: Placement;
    /**
     * Offset between the popover and the reference (trigger) element.
     */
    offset?: number;
    /**
     * The amount of padding to apply when the popover might go off screen.
     * @see https://floating-ui.com/docs/shift
     */
    shiftPadding?: number;
    /**
     * The id of the popover content.
     */
    id?: string;
    /**
     * If `true`, the popover will be shown.
     * (in controlled mode)
     */
    opened?: boolean;
    /**
     * If `true`, the popover will be initially shown
     * (in uncontrolled mode)
     */
    defaultOpened?: boolean;
    /**
     * The interaction that triggers the popover.
     *
     * `hover` - means the popover will open when you hover with mouse or
     * focus with keyboard on the popover trigger
     *
     * `click` - means the popover will open on click or
     * press `Enter` to `Space` on keyboard
     */
    triggerMode?: "hover" | "click";
    /**
     * If `true`, apply floating-ui `inline` middleware.
     * Useful for inline reference elements that span over multiple lines, such as hyperlinks or range selections.
     */
    inline?: boolean;
    /**
     * The padding between the arrow and the edges of the popover.
     */
    arrowPadding?: number;
    /**
     * Delay (in ms) before showing the popover
     */
    openDelay?: number;
    /**
     * Delay (in ms) before hiding the popover
     */
    closeDelay?: number;
    /**
     * If `true`, the popover will close when the user blur out it by clicking outside or tabbing out
     */
    closeOnBlur?: boolean;
    /**
     * If `true`, the popover will close when the user hit the `Esc` key.
     */
    closeOnEsc?: boolean;
    /**
     * If `true`, the focus will be locked into the popover.
     */
    trapFocus?: boolean;
    /**
     * A query selector string targeting the element to receive focus when the popover opens.
     */
    initialFocus?: string;
    /**
     * Popover opening/closing transition.
     */
    motionPreset?: PopoverMotionPreset;
    /**
     * Children of the popover.
     */
    children?: JSX.Element | PopoverChildrenRenderProp;
    /**
     * Callback fired when the popover opens.
     */
    onOpen?: () => void;
    /**
     * Callback fired when the popover closes.
     */
    onClose?: () => void;
}
declare type ThemeablePopoverOptions = Pick<PopoverProps, "placement" | "offset" | "arrowPadding" | "openDelay" | "closeDelay" | "motionPreset" | "closeOnEsc" | "closeOnBlur" | "trapFocus">;
interface PopoverState extends Required<Pick<PopoverProps, "triggerMode" | "offset" | "inline" | "arrowPadding" | "openDelay" | "closeDelay" | "opened" | "motionPreset" | "closeOnBlur" | "closeOnEsc" | "trapFocus">>, Pick<PopoverProps, "initialFocus"> {
    /**
     * If `true`, the popover will be shown.
     * (in uncontrolled mode)
     */
    _opened: boolean;
    /**
     * If `true`, the popover is in controlled mode.
     * (have opened, onOpen and onClose prop)
     */
    isControlled: boolean;
    /**
     * If `true`, the popover trigger or content is hovered.
     */
    isHovering: boolean;
    /**
     * If `true`, the trigger mode is `click`.
     */
    triggerOnClick: boolean;
    /**
     * If `true`, the trigger mode is `hover`.
     */
    triggerOnHover: boolean;
    /**
     * The inital popover placement that you requested.
     */
    initialPlacement: Placement;
    /**
     * The final popover placement after all floating-ui middleware has been applied.
     */
    finalPlacement: Placement;
    /**
     * The `id` of the popover trigger.
     */
    triggerId: string;
    /**
     * The `id` of the popover content.
     */
    contentId: string;
    /**
     * The `id` of the popover content header.
     */
    headerId: string;
    /**
     * The `id` of the popover content body.
     */
    bodyId: string;
    /**
     * If `true`, notify that the popover header component is rendered.
     */
    headerMounted: boolean;
    /**
     * If `true`, notify that the popover body component is rendered.
     */
    bodyMounted: boolean;
}
/**
 * Popover provides context, theming, and accessibility properties
 * to all other popover components.
 *
 * It doesn't render any DOM node.
 */
export declare function Popover(props: PopoverProps): JSX.Element;
interface PopoverContextValue {
    state: PopoverState;
    /**
     * Callback to assign the popover anchor ref.
     */
    assignAnchorRef: (el: HTMLElement) => void;
    /**
     * Callback to assign the popover trigger ref.
     */
    assignTriggerRef: (el: HTMLElement) => void;
    /**
     * Callback to assign the popover content ref.
     */
    assignPopoverRef: (el: HTMLElement) => void;
    /**
     * Callback to assign the popover arrow ref.
     */
    assignArrowRef: (el: HTMLElement) => void;
    /**
     * Callback function to open the popover.
     */
    openWithDelay: () => void;
    /**
     * Callback function to close the popover.
     */
    closeWithDelay: () => void;
    /**
     * Callback function to set if the popover trigger or content is hovered.
     */
    setIsHovering: (value: boolean) => void;
    /**
     * Callback function to set if the popover header is mounted.
     */
    setHeaderMounted: (value: boolean) => void;
    /**
     * Callback function to set if the popover body is mounted.
     */
    setBodyMounted: (value: boolean) => void;
    /**
     * Callback function to update the popover position.
     */
    updatePopoverPosition: () => void;
    /**
     * Callback invoked after the popover content appears.
     */
    afterPopoverOpen: () => void;
    /**
     * Callback invoked after the popover content disappears.
     */
    afterPopoverClose: () => void;
    /**
     * Callback invoked when the mouse leaves the popover trigger.
     */
    onTriggerMouseLeave: () => void;
    /**
     * Callback invoked when the mouse leaves the popover content.
     */
    onPopoverMouseLeave: () => void;
    /**
     * Callback invoked when the popover trigger loses focus.
     */
    onTriggerBlur: JSX.EventHandlerUnion<HTMLElement, FocusEvent>;
    /**
     * Callback invoked when the focus moves out of the popover content.
     */
    onPopoverFocusOut: JSX.EventHandlerUnion<HTMLElement, FocusEvent>;
}
export declare function usePopoverContext(): PopoverContextValue;
export interface PopoverStyleConfig {
    baseStyle?: {
        content?: SystemStyleObject;
        arrow?: SystemStyleObject;
        closeButton?: SystemStyleObject;
        header?: SystemStyleObject;
        body?: SystemStyleObject;
        footer?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeablePopoverOptions;
        closeButton?: ThemeableCloseButtonOptions;
    };
}
export {};
//# sourceMappingURL=popover.d.ts.map