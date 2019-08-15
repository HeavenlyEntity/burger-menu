import { connect } from "react-redux";
import NavBar from "../components/NavBar/NavBar";
import {
    hideSideNavigationMenu
} from "../actions/BurgerAction";

const mapStateToProps = ( state, ownProps) => {
    return {
        visibleSideMenu: state.BurgerMenuReducer.visibleSideMenu,
        ...ownProps
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHideSideNavigationMenu: () => dispatch(hideSideNavigationMenu())
    }
};

const NavBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);

export default NavBarContainer;
