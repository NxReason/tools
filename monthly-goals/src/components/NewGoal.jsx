import React from 'react';

class NewGoal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { goalName: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const isDisabled = this.state.goalName === '';

    return (
      <form className="new-goal" onSubmit={this.handleSubmit}>
        <input
          placeholder="Enter goal name"
          type="text"
          className="new-goal-input"
          value={this.state.goalName}
          onChange={(e) => this.setState({ goalName: e.target.value })}
        />
        <button className="new-goal-btn" disabled={isDisabled}>NEW</button>
      </form>
    );
  }
}

export default NewGoal;
