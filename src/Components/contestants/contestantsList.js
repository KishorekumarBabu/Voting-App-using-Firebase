import React, { Component } from "react";
import { connect } from "react-redux";
import { displayContestant } from "../../store/actions/contestantActions";

class ContestantList extends Component {
  handleClick = contestant => {
    this.props.displayContestant(contestant);
  };

  render() {
    let { contestants } = this.props;
    if (contestants) {
      return (
        <div className="row">
          {contestants &&
            contestants.map(contestant => {
              return (
                <div className="col s3 m3 l3" key={contestant.id}>
                  <img
                    src={contestant.image}
                    className="circle responsive-img"
                    alt=""
                    onClick={() => this.handleClick(contestant)}
                  />
                  <label>{contestant.firstName}</label>
                </div>
              );
            })}
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
    displayContestant: contestant => dispatch(displayContestant(contestant))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ContestantList);
