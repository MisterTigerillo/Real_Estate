import { Component } from "react";
import styles from "./Counter.module.css";

class Counter extends Component {
  state = { value: 5 };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <div className={styles.Counter}>
        <span className={styles.CounterValue}>{this.state.value}</span>
        <div className="Counter__controls">
          <button onClick={this.handleIncrement} type="button">
            Increase by 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Decrease by 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
