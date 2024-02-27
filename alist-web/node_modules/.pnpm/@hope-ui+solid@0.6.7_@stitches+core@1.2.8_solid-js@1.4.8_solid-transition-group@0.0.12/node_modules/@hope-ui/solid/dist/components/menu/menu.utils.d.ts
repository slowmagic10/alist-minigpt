export interface MenuItemData {
    /**
     * A key that uniquely identify the menu item.
     */
    key: string;
    /**
     * Optional text used for typeahead purposes.
     * By default the typeahead behavior will use the `.textContent` of the `MenuItem`.
     * Use this when the content is complex, or you have non-textual content inside.
     */
    textValue: string;
    /**
     * If `true`, the item will be disabled.
     */
    disabled: boolean;
    /**
     * If `true`, the menu will close when the menu item is selected.
     */
    closeOnSelect: boolean;
    /**
     * Event handler called when the user selects an item (via mouse or keyboard).
     */
    onSelect?: () => void;
}
interface GetUpdatedIndexParams {
    /**
     * The current active index.
     */
    currentIndex: number;
    /**
     * The index of the last item.
     */
    maxIndex: number;
    /**
     * The initialy performed action.
     */
    initialAction: MenuActions;
    /**
     * Callback invoked to check if an item at a given index is diabled or not.
     */
    isItemDisabled: (index: number) => boolean;
}
/**
 * List of named menu actions
 */
export declare enum MenuActions {
    Close = 0,
    SelectAndClose = 1,
    First = 2,
    Last = 3,
    Next = 4,
    Open = 5,
    OpenAndFocusLast = 6,
    Previous = 7,
    Select = 8,
    Type = 9
}
/**
 * Return the index of an item from an array of items, based on a search string
 * if the filter is multiple iterations of the same letter (e.g "aaa"), then cycle through first-letter matches
 */
export declare function getIndexByLetter(items: MenuItemData[], filter: string, startIndex?: number): number;
/**
 * Map a key press to an action.
 */
export declare function getActionFromKey(event: KeyboardEvent, menuOpen: boolean): MenuActions.Close | MenuActions.SelectAndClose | MenuActions.First | MenuActions.Last | MenuActions.Next | MenuActions.Open | MenuActions.OpenAndFocusLast | MenuActions.Previous | MenuActions.Type | undefined;
/**
 * Get an updated item index after performing an action, ignoring "disabled" item.
 */
export declare function getUpdatedIndex(params: GetUpdatedIndexParams): number;
export {};
//# sourceMappingURL=menu.utils.d.ts.map