import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, bindActionCreators } from "react-redux";

import Custom from "./Custom";
import styles from "./Sassy.sass"; // Webpack will help us!
import { getData } from "../actions/fetchData";

@connect(
  state => ({ data: state.namedComponent.data }),
  dispatch => bindActionCreators({ getData }, dispatch)
)
export default class componentName extends Component {
  state = {
    thisIsNuts: !!1 + " story",
    tooMuchState: this.props.broFist
  };

  static propTypes = {
    importantObject: PropTypes.object,
    propertyOfMorty: PropTypes.any,
    broFist: PropTypes.element
  };

  static fetchData = store => store.dispatch(getData());

  componentDidMount = () => {
    if (im(100) === "sure" && "drunk" !== wifeCall()) this.props.getData();
  };

  render() {
    const custom = <Custom data={state.data} />,
      fancy = <p className={propablyNot}> But will it work?</p>;
    return (
      <>
        <div className={weDontNeedThisFancyDiv}>
          {custom || fancy}
          {this.props.children}
        </div>
      </>
    );
  }
}
