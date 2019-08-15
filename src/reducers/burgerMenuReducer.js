import {
    HIDE_NAV_MENU,
    SHOW_NAV_MENU
} from "../actions/BurgerAction";

const DefaultSideNavState = {
    visibleSideMenu: false
}

export default (state = DefaultSideNavState, action) => {
    switch(action.type){
        case SHOW_NAV_MENU:
            return {...state, visibleSideMenu: true};
        case HIDE_NAV_MENU:
            return {...state, visibleSideMenu: false};
        default:
            return state;
    }
};
