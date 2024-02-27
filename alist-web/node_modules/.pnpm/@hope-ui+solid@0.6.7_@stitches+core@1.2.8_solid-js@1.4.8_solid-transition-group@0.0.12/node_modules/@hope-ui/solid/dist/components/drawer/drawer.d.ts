import { SystemStyleObject } from "../../styled-system/types";
import { OverrideProps } from "../../utils/types";
import { CloseButtonProps, ThemeableCloseButtonOptions } from "../close-button/close-button";
import { ModalProps } from "../modal/modal";
import { ModalBodyProps } from "../modal/modal-body";
import { ModalFooterProps } from "../modal/modal-footer";
import { ModalHeaderProps } from "../modal/modal-header";
import { ElementType } from "../types";
import { DrawerDialogVariants } from "./drawer.styles";
export declare type DrawerPlacement = "top" | "right" | "bottom" | "left";
interface DrawerOptions extends DrawerDialogVariants {
    /**
     * The placement of the drawer
     */
    placement?: DrawerPlacement;
    /**
     * If `true`, the drawer will appear without any transition.
     */
    disableMotion?: boolean;
}
export declare type DrawerProps = OverrideProps<Omit<ModalProps, "scrollBehavior" | "centered" | "motionPreset">, DrawerOptions>;
declare type ThemeableDrawerOptions = Pick<DrawerProps, "placement" | "size" | "fullHeight" | "disableMotion" | "blockScrollOnMount" | "closeOnEsc" | "closeOnOverlayClick" | "preserveScrollBarGap" | "trapFocus">;
export interface DrawerStyleConfig {
    baseStyle?: {
        overlay?: SystemStyleObject;
        content?: SystemStyleObject;
        closeButton?: SystemStyleObject;
        header?: SystemStyleObject;
        body?: SystemStyleObject;
        footer?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableDrawerOptions;
        closeButton?: ThemeableCloseButtonOptions;
    };
}
export declare function Drawer(props: DrawerProps): import("solid-js").JSX.Element;
export declare function useDrawerContext(): Required<DrawerOptions>;
export declare function DrawerCloseButton(props: CloseButtonProps): import("solid-js").JSX.Element;
export declare function DrawerBody<C extends ElementType = "div">(props: ModalBodyProps<C>): import("solid-js").JSX.Element;
export declare function DrawerHeader<C extends ElementType = "header">(props: ModalHeaderProps<C>): import("solid-js").JSX.Element;
export declare function DrawerFooter<C extends ElementType = "footer">(props: ModalFooterProps<C>): import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=drawer.d.ts.map