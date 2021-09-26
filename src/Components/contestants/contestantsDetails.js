import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { updateContestantsVotes } from "../../store/actions/contestantActions";

class ContestantDetails extends Component {
  state = {
    votes: 0,
    file: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      votes: 0
    });
    this.props.updateContestantsVotes(this.props.contestant, this.state.votes);
  };

  render() {
    let { contestant } = this.props;
    if (contestant) {
      return (
        <div className="row">
          <div className="col s12 m7">
            <h6 className="header">{contestant.firstName}</h6>
            <div className="card horizontal">
              <div className="card-image">
                <img src={contestant.image} alt="Loading..." />
              </div>
              <form onSubmit={this.handleSubmit} className="white">
                <div className="input-field">
                  <label htmlFor="votes">Vote</label>
                  <input
                    type="number"
                    id="votes"
                    min="0"
                    max="100"
                    onKeyUp={() => {
                      if (this.value > 99) {
                        this.value = "99";
                      } else if (this.value < 0) {
                        this.value = "0";
                      }
                    }}
                    step="1"
                    onChange={this.handleChange}
                    value={this.state.votes > 0 ? this.state.votes : ""}
                  />
                </div>
                <div className="input-field">
                  <button
                    className={
                      Number(this.state.votes)
                        ? "waves-effect waves-light btn-small"
                        : "waves-effect waves-light btn-small disabled"
                    }
                    type="submit"
                    name="action"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="card-content grey lighten-2 bold-text">
                <p className="grey-text">Total Votes: {contestant.votes}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateContestantsVotes: (contestant, votes) =>
      dispatch(updateContestantsVotes(contestant, votes))
  };
};

const mapStateToProps = state => {
  return {
    contestant: {
      id: state.contestant.id,
      ...state.firestore.data.contestants[state.contestant.id]
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    {
      collection: "contestants"
    }
  ])
)(ContestantDetails);
