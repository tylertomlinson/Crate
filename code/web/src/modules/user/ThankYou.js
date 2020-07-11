// Imports
import React from "react";
import PropTypes from "prop-types";
import userRoutes from "../../setup/routes/user";
import { Link } from "react-router-dom";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import { H4 } from "../../ui/typography";
import Button from "../../ui/button";

// Component
const ThankYou = ({ style }) => (
  <div>
    <Grid>
      <GridCell style={{ padding: "2em", textAlign: "center" }}>
        <H4 style={{ marginBottom: "0.5em" }}>
          Thank you for taking the survey!
        </H4>
        <H4 style={{ marginBottom: "0.5em" }}>Your style is: {style}</H4>
        <Link
          to={userRoutes.subscriptions.path}
          style={{
            backgroundColor: "grey",
            color: "white",
            borderRadius: "1em",
            width: "5em",
          }}
        >
          <Button theme="primary">Confirm subscription</Button>
        </Link>
      </GridCell>
    </Grid>
  </div>
);

// Component Properties
ThankYou.propTypes = {
  style: PropTypes.string.isRequired,
};

export default ThankYou;
