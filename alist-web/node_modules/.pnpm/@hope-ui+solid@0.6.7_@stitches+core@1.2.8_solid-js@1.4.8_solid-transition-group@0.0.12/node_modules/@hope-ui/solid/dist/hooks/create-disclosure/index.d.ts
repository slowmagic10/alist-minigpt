export interface CreateDisclosureProps {
    id?: string;
    isOpen?: boolean;
    defaultIsOpen?: boolean;
    onOpen?(): void;
    onClose?(): void;
}
/**
 * Custom hook used to help handle common open, close, or toggle scenarios.
 * It can be used to control component such as Modal, Drawer, etc.
 */
export declare function createDisclosure(props?: CreateDisclosureProps): {
    isControlled: () => boolean;
    isOpen: () => boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    triggerProps: () => {
        "aria-expanded": boolean;
        "aria-controls": string;
    };
    disclosureProps: () => {
        id: string;
        hidden: boolean;
    };
};
//# sourceMappingURL=index.d.ts.map