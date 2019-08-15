export const SHOW_NAV_MENU = "SHOW_NAV_MENU";
export const HIDE_NAV_MENU = "HIDE_NAV_MENU";

export function showSideNavigationMenu() {

    return {
        type: SHOW_NAV_MENU,
    };
}

export function hideSideNavigationMenu() {
    return {
        type: HIDE_NAV_MENU,
    };
}
