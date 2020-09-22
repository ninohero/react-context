import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? "tan" : "beige",
      height: "100vh",
      width: "100vw",
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}
