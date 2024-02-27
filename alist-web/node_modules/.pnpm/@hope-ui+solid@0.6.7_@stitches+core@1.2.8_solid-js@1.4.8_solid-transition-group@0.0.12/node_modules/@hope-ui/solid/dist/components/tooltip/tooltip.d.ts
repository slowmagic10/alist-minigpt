import type { Placement } from "@floating-ui/dom";
import { JSX } from "solid-js";
import { ElementType, HTMLHopeProps, SinglePartComponentStyleConfig } from "../types";
export interface TooltipOptions {
    /**
     * Placement of the tooltip
     */
    placement?: Placement;
    /**
     * Offset between the tooltip and the reference (trigger) element.
     */
    offset?: number;
    /**
     * The id of the tooltip.
     */
    id?: string;
    /**
     * If `true`, the tooltip will be shown.
     * (in controlled mode)
     */
    opened?: boolean;
    /**
     * If `true`, the tooltip will be initially shown
     * (in uncontrolled mode)
     */
    defaultOpened?: boolean;
    /**
     * If `true`, apply floating-ui `inline` middleware.
     * Useful for inline reference elements that span over multiple lines, such as hyperlinks or range selections.
     */
    inline?: boolean;
    /**
     * The label of the tooltip.
     */
    label?: JSX.Element;
    /**
     * The accessible, human friendly label to use for
     * screen readers.
     *
     * If passed, tooltip will show the content `label`
     * but expose only `aria-label` to assistive technologies
     */
    "aria-label"?: string;
    /**
     * If `true`, the tooltip will not show
     */
    disabled?: boolean;
    /**
     * If `true`, the tooltip will show an arrow tip
     */
    withArrow?: boolean;
    /**
     * Size of the arrow.
     */
    arrowSize?: number;
    /**
     * The padding between the arrow and the edges of the tooltip.
     */
    arrowPadding?: number;
    /**
     * Delay (in ms) before showing the tooltip
     * @default 0ms
     */
    openDelay?: number;
    /**
     * Delay (in ms) before hiding the tooltip
     * @default 0ms
     */
    closeDelay?: number;
    /**
     * If `true`, the tooltip will hide on click
     */
    closeOnClick?: boolean;
    /**
     * If `true`, the tooltip will hide while the mouse
     * is down
     */
    closeOnMouseDown?: boolean;
    /**
     * Callback to run when the tooltip shows
     */
    onOpen?(): void;
    /**
     * Callback to run when the tooltip hides
     */
    onClose?(): void;
}
declare type ThemeableTooltipOptions = Pick<TooltipOptions, "placement" | "offset" | "withArrow" | "arrowSize" | "arrowPadding" | "openDelay" | "closeDelay" | "closeOnClick" | "closeOnMouseDown">;
export declare type TooltipStyleConfig = SinglePartComponentStyleConfig<ThemeableTooltipOptions>;
export declare type TooltipProps<C extends ElementType = "div"> = HTMLHopeProps<C, TooltipOptions>;
export declare function Tooltip<C extends ElementType = "div">(props: TooltipProps<C>): JSX.Element;
export declare namespace Tooltip {
    var toString: () => string;
}
export {};
//# sourceMappingURL=tooltip.d.ts.map