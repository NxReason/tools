import React from 'react';
import { connect } from 'react-redux';

import { addGoal } from '../actions';

class NewGoal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { goalName: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addGoal(this.state.goalName);
    this.setState({ goalName: '' });
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
        <button
          className="new-goal-btn"
          disabled={isDisabled}
          onClick={this.handleSubmit}>
          NEW
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { goals: state.goals };
}

export default connect(null, { addGoal })(NewGoal);
