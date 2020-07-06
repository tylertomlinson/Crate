// Imports
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import { H3 } from "../../ui/typography";
import { grey, grey2 } from "../../ui/common/colors";
import Survey from "../../ui/survey/Survey";

// App Imports
import { getListByUser } from "../subscription/api/actions";
import Loading from "../common/Loading";
import EmptyMessage from "../common/EmptyMessage";
import SubscriptionItem from "../subscription/Item";

// Component
class StylePreferences extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }



  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Style Survey!</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: "2em", textAlign: "center" }}>
            <H3 font="secondary">Fill out your survey profile</H3>

            <p style={{ marginTop: "1em", color: grey2 }}>Tell your personal stylist about style preferences.</p>
          </GridCell>
        </Grid>

        {/* Product list */}
        <Grid>
          <GridCell>
                <Survey />
          </GridCell>
        </Grid>
      </div>
    );
  }
}

export default StylePreferences;
