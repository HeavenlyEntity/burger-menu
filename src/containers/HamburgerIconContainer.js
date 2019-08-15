import { connect } from "react-redux";
import {hideSideNavigationMenu, showSideNavigationMenu} from "../actions/BurgerAction";

import HamburgerIcon from "../components/HamburgerIcon/HamburgerIcon";

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        onHideSideNavigationMenu: () => dispatch(hideSideNavigationMenu()),
        onShowSideNavigationMenu: () => dispatch(showSideNavigationMenu())
    }
};

const HamburgerIconContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HamburgerIcon);

export default HamburgerIconContainer;

