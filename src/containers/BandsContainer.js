import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map((band, i) => <li key={i}>{band.name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: payload => dispatch({ type: "ADD_BAND", payload })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
