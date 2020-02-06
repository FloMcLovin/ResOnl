import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import { Excercises } from "./Excercises";
import { topsix, restaurant } from "../store.js";
import { Grid, Paper, Container } from "@material-ui/core";

export default class extends Component {
  state = {
    restaurant
  };

  render() {
    return (
      <Fragment>
        <Header />

        <Footer />
      </Fragment>
    );
  }
}
