import React from "react";
import { connect } from "react-redux";


//mendefinisikan type increment,decrement, reset menggunakan dispatch
class App extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };

  reset = () => {
    this.props.dispatch({
      type: "RESET"
    })
  }

  //tampilan yang akan di display
  render() {
    return (
      <div className="App mt-5">
        <button onClick={this.increment} className="btn btn-success mr-5">
          Increment
        </button>
        <button onClick={this.decrement} className="btn btn-danger" style={{marginLeft:20}}>
          Decrement
        </button>
        <h2 className="mt-5 display-1">{this.props.count}</h2>
        <div>
        <button className="btn btn-dark resetBtn" onClick={this.reset} style={{marginTop:20}}>
          Reset
        </button>
      </div>
      </div>
    );
  }
}


//mapStateToProps untuk memanggil data store redux
//fungsi untuk menampilkan nilai hasil decrement,increment dan reset
const mapStateToProps = state => {
  return {
    count: state.count
  };
};


export default connect(mapStateToProps)(App);
