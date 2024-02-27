import { JSX } from "solid-js";
import { SystemStyleObject } from "../../styled-system/types";
import { ThemeableCloseButtonOptions } from "../close-button/close-button";
import { ModalContainerVariants, ModalDialogVariants } from "./modal.styles";
declare type ModalMotionPreset = "fade-in-bottom" | "scale" | "none";
export interface ModalProps extends ModalContainerVariants, ModalDialogVariants {
    /**
     * If `true`, the modal will be open.
     */
    opened: boolean;
    /**
     * Callback invoked to close the modal.
     */
    onClose: () => void;
    /**
     * The `id` of the modal dialog
     */
    id?: string;
    /**
     * If `true`, the modal will close when the overlay is clicked
     */
    closeOnOverlayClick?: boolean;
    /**
     * If `true`, the modal will close when the `Esc` key is pressed
     */
    closeOnEsc?: boolean;
    /**
     * If `false`, focus lock will be disabled completely.
     *
     * This is useful in situations where you still need to interact with
     * other surrounding elements.
     *
     * 🚨Warning: We don't recommend doing this because it hurts the
     * accessibility of the modal, based on WAI-ARIA specifications.
     */
    trapFocus?: boolean;
    /**
     * A query selector string targeting the element to receive focus when the modal opens.
     */
    initialFocus?: string;
    /**
     * If `true`, scrolling will be disabled on the `body` when the modal opens.
     */
    blockScrollOnMount?: boolean;
    /**
     * If `true`, a `padding-right` will be applied to the body element
     * that's equal to the width of the scrollbar.
     *
     * This can help prevent some unpleasant flickering effect
     * and content adjustment when the modal opens
     */
    preserveScrollBarGap?: boolean;
    /**
     * Modal opening/closing transition.
     */
    motionPreset?: ModalMotionPreset;
    /**
     * Children of the Modal
     */
    children?: JSX.Element;
    /**
     * Callback fired when the overlay is clicked.
     */
    onOverlayClick?: () => void;
    /**
     * Callback fired when the escape key is pressed and focus is within modal
     */
    onEsc?: () => void;
}
declare type ThemeableModalOptions = Pick<ModalProps, "scrollBehavior" | "centered" | "motionPreset" | "size" | "blockScrollOnMount" | "closeOnEsc" | "closeOnOverlayClick" | "preserveScrollBarGap" | "trapFocus">;
interface ModalState extends Required<Pick<ModalProps, "opened" | "motionPreset" | "size" | "centered" | "scrollBehavior" | "closeOnOverlayClick" | "closeOnEsc" | "trapFocus" | "blockScrollOnMount" | "preserveScrollBarGap">>, Pick<ModalProps, "initialFocus"> {
    /**
     * The `id` of the modal dialog
     */
    dialogId: string;
    /**
     * The `id` of the modal dialog header
     */
    headerId: string;
    /**
     * The `id` of the modal dialog body
     */
    bodyId: string;
    /**
     * If `true`, notify that the modal header component is rendered
     */
    headerMounted: boolean;
    /**
     * If `true`, notify that the modal body component is rendered
     */
    bodyMounted: boolean;
}
/**
 * Modal provides context, theming, and accessibility properties
 * to all other modal components.
 *
 * It doesn't render any DOM node.
 */
export declare function Modal(props: ModalProps): JSX.Element;
export interface ModalContextValue {
    state: ModalState;
    /**
     * Callback invoked to close the modal.
     */
    onClose: () => void;
    /**
     * Callback invoked when the overlay is clicked.
     */
    onOverlayClick: (event: MouseEvent) => void;
    /**
     * Callback invoked when a `mouseDown` is fired on the modal container.
     */
    onMouseDown: (event: MouseEvent) => void;
    /**
     * Callback invoked when a `keyDown` is fired on the modal container.
     */
    onKeyDown: (event: KeyboardEvent) => void;
    /**
     * Callback function to unmount the modal's portal.
     */
    unmountPortal: () => void;
    /**
     * Callback function to set if the modal header is mounted
     */
    setHeaderMounted: (value: boolean) => void;
    /**
     * Callback function to set if the modal body is mounted
     */
    setBodyMounted: (value: boolean) => void;
}
export declare function useModalContext(): ModalContextValue;
export interface ModalStyleConfig {
    baseStyle?: {
        overlay?: SystemStyleObject;
        content?: SystemStyleObject;
        closeButton?: SystemStyleObject;
        header?: SystemStyleObject;
        body?: SystemStyleObject;
        footer?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableModalOptions;
        closeButton?: ThemeableCloseButtonOptions;
    };
}
export {};
//# sourceMappingURL=modal.d.ts.map