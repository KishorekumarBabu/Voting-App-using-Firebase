import React, { Component } from "react";
import ContestantList from "../contestants/contestantsList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ContestantDetails from "../contestants/contestantsDetails";
import ShowVideo from "../contestants/showVideo";

class Dashboard extends Component {
  render() {
    const { firseStoreContestants, contestant = {} } = this.props;

    return (
      <div className="container">
        <div className="section contestant-details">
          {Object.entries(contestant).length !== 0 ? (
            <ContestantDetails />
          ) : (
            <ShowVideo />
          )}
        </div>
        <div className="section contestant-list">
          <h6 className="blue-text text-darken-3">Contestants List</h6>
          <ContestantList contestants={firseStoreContestants} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firseStoreContestants: state.firestore.ordered.contestants,
    contestant: state.contestant
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "contestants" }])
)(Dashboard);
