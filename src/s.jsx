import React from "react/addons";
import assign from "object-assign";
import Radium from "radium";
import Base from "./base";

@Radium
class S extends Base {
  render() {
    let styles = this.getStyles();
    if (this.props.type.indexOf("strikethrough") !== -1) {
      styles = assign(styles, {textDecoration: "line-through"});
    }
    if (this.props.type.indexOf("underline") !== -1) {
      styles = assign(styles, {textDecoration: "underline"});
    }
    if (this.props.type.indexOf("bold") !== -1) {
      styles = assign(styles, {fontWeight: "bold"});
    }
    if (this.props.type.indexOf("italic") !== -1) {
      styles = assign(styles, {fontStyle: "italic"});
    }
    if (this.props.type.indexOf("normal") !== -1) {
      styles = assign(styles, {
        fontStyle: "normal",
        fontWeight: "normal",
      });
    }
    return (
      <span style={[styles, this.context.styles.components.s[this.props.type]]}>
        {this.props.children}
      </span>
    );
  }
}

S.propTypes = {
  children: React.PropTypes.node,
  type: React.PropTypes.array
};

S.contextTypes = {
  styles: React.PropTypes.object
};

export default S;
