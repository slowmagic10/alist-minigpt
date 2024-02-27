import { JSX } from "solid-js";
import { ModalContentProps } from "./modal-content";
export declare type CreateModalProps = Pick<ModalContentProps, "onClick">;
interface CreateModalReturn {
    assignContainerRef: (el: HTMLDivElement) => void;
    ariaLabelledBy: () => string | undefined;
    ariaDescribedBy: () => string | undefined;
    onDialogClick: JSX.EventHandler<HTMLElement, MouseEvent>;
}
/**
 * Modal hook that manages all the logic for the modal dialog widget.
 */
export declare function createModal(props: CreateModalProps): CreateModalReturn;
export {};
//# sourceMappingURL=create-modal.d.ts.map