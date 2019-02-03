import React from "react";
import Match from "../components/Match";

class MatchesScreen extends React.Component {
  static navigationOptions = {
    title: "Matches"
  };

  render() {
    return (
      <Match></Match>
    );
  }
}

export default MatchesScreen;
