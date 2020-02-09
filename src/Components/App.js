import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import { Excercises } from "./Excercises";
import { topsix, titleData } from "../store.js";
import CssBaseline from "@material-ui/core/CssBaseline";

export default class extends Component {
  state = {
    titleData
  };

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Header />

        <Excercises topsix={topsix} />

        <Footer />
      </Fragment>
    );
  }
}
