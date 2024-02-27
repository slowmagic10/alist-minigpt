import { Accessor } from "solid-js";
import { SystemStyleObject } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
import { AlertVariants } from "./alert.styles";
declare type ThemeableAlertOptions = AlertVariants;
export declare type AlertProps<C extends ElementType = "div"> = HTMLHopeProps<C, AlertVariants>;
/**
 * Alert is used to communicate the state or status of a page,
 * feature or action
 */
export declare function Alert<C extends ElementType = "div">(props: AlertProps<C>): import("solid-js").JSX.Element;
export declare namespace Alert {
    var toString: () => string;
}
declare type AlertContextValue = {
    status: Accessor<AlertVariants["status"]>;
};
export declare function useAlertContext(): AlertContextValue;
export interface AlertStyleConfig {
    baseStyle?: {
        root?: SystemStyleObject;
        icon?: SystemStyleObject;
        title?: SystemStyleObject;
        description?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableAlertOptions;
    };
}
export {};
//# sourceMappingURL=alert.d.ts.map