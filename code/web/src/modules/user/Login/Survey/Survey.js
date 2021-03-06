//Imports
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//App Imports
import { APP_URL } from "../../../../setup/config/env";
import { surveyResponse } from "../../api/actions";

//UI Imports
import { Grid, GridCell } from "../../../../ui/grid";
import Input from "../../../../ui/input/Input";
import Button from "../../../../ui/button";
import ImageTile from "../../../../ui/image/Tile";
import { level1 } from "../../../../ui/common/shadows";
import H2 from "../../../../ui/typography/H2";

class Survey extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      gender: this.props.gender,
      id: this.props.id,
      user: this.props.user,
      selectedStyleValues: {
        tops: null,
        bottoms: null,
        dresses: null,
        accessories: null,
        shoes: null,
      },
    };
  }

  handleChange = (e, type) => {
    this.setState({
      selectedStyleValues: {
        ...this.state.selectedStyleValues,
        [type]: Number(e.target.value),
      },
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.surveyResponse(
      this.state.selectedStyleValues,
      this.state.id,
      this.state.user
    );
  };

  render() {
    let genderString = this.state.gender === 1 ? "mens" : "womens";
    let category = this.state.gender === 1 ? "suits" : "dresses";
    let categoryString = this.state.gender === 1 ? "Suits" : "Dresses";

    return (
      <form onSubmit={this.submitForm}>
        <GridCell gutter={true}>
          <H2>Tops</H2>
          <Grid alignCenter={true}>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/casual/${genderString}-tops-casual.jpg`}
              />
              <Input
                type="radio"
                required
                value={1}
                onChange={(e) => this.handleChange(e, "tops")}
                checked={this.state.selectedStyleValues.tops === 1}
              />
            </GridCell>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/classic/${genderString}-tops-classic.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={2}
                onChange={(e) => this.handleChange(e, "tops")}
                checked={this.state.selectedStyleValues.tops === 2}
              />
            </GridCell>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/exotic/${genderString}-tops-exotic.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={3}
                onChange={(e) => this.handleChange(e, "tops")}
                checked={this.state.selectedStyleValues.tops === 3}
              />
            </GridCell>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/vintage/${genderString}-tops-vintage.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={4}
                onChange={(e) => this.handleChange(e, "tops")}
                checked={this.state.selectedStyleValues.tops === 4}
              />
            </GridCell>
          </Grid>
          <H2>Bottoms</H2>
          <Grid alignCenter={true}>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/casual/${genderString}-bottoms-casual.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={1}
                onChange={(e) => this.handleChange(e, "bottoms")}
                checked={this.state.selectedStyleValues.bottoms === 1}
              />
            </GridCell>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/classic/${genderString}-bottoms-classic.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={2}
                onChange={(e) => this.handleChange(e, "bottoms")}
                checked={this.state.selectedStyleValues.bottoms === 2}
              />
            </GridCell>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/exotic/${genderString}-bottoms-exotic.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={3}
                onChange={(e) => this.handleChange(e, "bottoms")}
                checked={this.state.selectedStyleValues.bottoms === 3}
              />
            </GridCell>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/vintage/${genderString}-bottoms-vintage.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={4}
                onChange={(e) => this.handleChange(e, "bottoms")}
                checked={this.state.selectedStyleValues.bottoms === 4}
              />
            </GridCell>
          </Grid>
          <H2>{categoryString}</H2>
          <Grid alignCenter={true}>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/casual/${genderString}-${category}-casual.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={1}
                onChange={(e) => this.handleChange(e, "dresses")}
                checked={this.state.selectedStyleValues.dresses === 1}
              />
            </GridCell>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/classic/${genderString}-${category}-classic.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={2}
                onChange={(e) => this.handleChange(e, "dresses")}
                checked={this.state.selectedStyleValues.dresses === 2}
              />
            </GridCell>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/exotic/${genderString}-${category}-exotic.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={3}
                onChange={(e) => this.handleChange(e, "dresses")}
                checked={this.state.selectedStyleValues.dresses === 3}
              />
            </GridCell>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/vintage/${genderString}-${category}-vintage.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={4}
                onChange={(e) => this.handleChange(e, "dresses")}
                checked={this.state.selectedStyleValues.dresses === 4}
              />
            </GridCell>
          </Grid>
          <H2>Shoes</H2>
          <Grid alignCenter={true}>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/casual/${genderString}-shoes-casual.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={1}
                onChange={(e) => this.handleChange(e, "shoes")}
                checked={this.state.selectedStyleValues.shoes === 1}
              />
            </GridCell>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/classic/${genderString}-shoes-classic.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={2}
                onChange={(e) => this.handleChange(e, "shoes")}
                checked={this.state.selectedStyleValues.shoes === 2}
              />
            </GridCell>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/exotic/${genderString}-shoes-exotic.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={3}
                onChange={(e) => this.handleChange(e, "shoes")}
                checked={this.state.selectedStyleValues.shoes === 3}
              />
            </GridCell>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/vintage/${genderString}-shoes-vintage.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={4}
                onChange={(e) => this.handleChange(e, "shoes")}
                checked={this.state.selectedStyleValues.shoes === 4}
              />
            </GridCell>
          </Grid>
          <H2>Accessories</H2>
          <Grid alignCenter={true}>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/casual/${genderString}-accessories-casual.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={1}
                onChange={(e) => this.handleChange(e, "accessories")}
                checked={this.state.selectedStyleValues.accessories === 1}
              />
            </GridCell>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/classic/${genderString}-accessories-classic.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={2}
                onChange={(e) => this.handleChange(e, "accessories")}
                checked={this.state.selectedStyleValues.accessories === 2}
              />
            </GridCell>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/exotic/${genderString}-accessories-exotic.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={3}
                onChange={(e) => this.handleChange(e, "accessories")}
                checked={this.state.selectedStyleValues.accessories === 3}
              />
            </GridCell>
            <GridCell>
              <ImageTile
                width={250}
                height={250}
                shadow={level1}
                image={`${APP_URL}/images/survey/${genderString}/vintage/${genderString}-accessories-vintage.jpg`}
              />
              <Input
                type="radio"
                required="required"
                value={4}
                onChange={(e) => this.handleChange(e, "accessories")}
                checked={this.state.selectedStyleValues.accessories === 4}
              />
            </GridCell>
          </Grid>
        </GridCell>
        <Button
          type="submit"
          theme="primary"
          style={{ marginLeft: "1em" }}
        >
          Submit
        </Button>
      </form>
    );
  }
}

function profileState(state) {
  return {
    user: state.user,
  };
}
// Component Properties
Survey.propTypes = {
  gender: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  surveyResponse: PropTypes.func.isRequired,
};

export default connect(profileState, { surveyResponse })(withRouter(Survey));
