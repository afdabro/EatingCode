import { connect } from "react-redux";
import { NavComponent } from "../components/nav/nav.component";
import { IResponsiveModel } from "../models/responsive.model";

// Only care about responsive model for now...
function mapStateToProps(state) {
    return state.get("responsiveModel").toJS();
}

// tslint:disable-next-line:variable-name
export const NavContainer = connect(mapStateToProps)(NavComponent) as React.ComponentClass<IResponsiveModel>;
