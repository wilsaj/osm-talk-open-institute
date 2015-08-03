import React from "react/addons";
import Radium from "radium";
import Base from "./base";

@Radium
class Layout extends Base {
  render() {
    const styles = {
      display: "flex"
    };
    return (
      <div style={[styles, this.getStyles()]}>
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.node
};

export default Layout;
