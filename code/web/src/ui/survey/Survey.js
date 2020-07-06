import React, { PureComponent } from "react";

class Survey extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.todo);
    this.setState({ todo: "" });
  };
  
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="radio"
          value={this.state.todo}
          placeholder="Add A Todo"
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Survey;
