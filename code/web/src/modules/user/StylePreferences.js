// Imports
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { surveyResponse } from "./api/actions";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import { H3 } from "../../ui/typography";
import { grey, grey2 } from "../../ui/common/colors";
import Survey from "./Survey";
import ThankYou from "./ThankYou";

// Component
class StylePreferences extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  surveyStore = (styleResults, id, user) => {
    this.props.surveyResponse(styleResults, id);
  };

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
            {!this.props.user.details.style && (
              <H3 font="secondary">Fill out your survey profile</H3>
            )}
            {this.props.user.details.style && (
              <H3 font="secondary">Thank you!</H3>
            )}

            {!this.props.user.details.style && (
              <p style={{ marginTop: "1em", color: grey2 }}>
                Tell your personal stylist about style preferences.
              </p>
            )}
          </GridCell>
        </Grid>

        <Grid>
          <GridCell>
            {!this.props.user.details.style && (
              <Survey
                gender={this.props.user.details.gender}
                id={this.props.user.details.id}
                user={this.props.user.details}
                survey={this.surveyStore}
              />
            )}
            {this.props.user.details.style && (
              <ThankYou style={this.props.user.details.style} />
            )}
          </GridCell>
        </Grid>
      </div>
    );
  }
}

// Component Properties
StylePreferences.propTypes = {
  user: PropTypes.object.isRequired,
  surveyResponse: PropTypes.func.isRequired
};

// Component State
function profileState(state) {
  return {
    user: state.user,
  };
}

export default connect(profileState, { surveyResponse })(StylePreferences);