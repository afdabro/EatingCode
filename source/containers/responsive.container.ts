import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveResponsive } from "../actions/responsive.actions";
import { ResponsiveComponent } from "../components/responsive/responsive.component";
import { IResponsiveProps } from "../models/responsive.model";

function mapStateToProps(state) {
  return state.responsiveReducer.toObject();
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveResponsive }, dispatch);
}

// tslint:disable-next-line:variable-name
export const ResponsiveContainer = connect(mapStateToProps, mapDispatchToProps)(ResponsiveComponent) as React.ComponentClass<IResponsiveProps>;
