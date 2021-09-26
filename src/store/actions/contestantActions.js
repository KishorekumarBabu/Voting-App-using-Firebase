import axios from "axios";

export const updateContestantsVotes = (contestant, votes) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    axios
      .put(
        `https://us-central1-bigg-boss-tamil-584db.cloudfunctions.net/updateContestantVote`,
        { contestant: contestant, votes: Number(votes) }
      )
      .then(contestant => {
        dispatch({
          type: "UPDATE_CONTESTANT_VOTES",
          contestant: contestant.data
        });
      })
      .catch(error => {
        dispatch({ type: "UPDATE_CONTESTANT_VOTES_ERROR", error });
      });
  };
};

export const displayContestant = contestant => {
  return dispatch => dispatch({ type: "DISPLAY_CONTESTANT", contestant });
};
