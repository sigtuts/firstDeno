import { h, Component } from 'preact';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
  }

  handleChange = (event) => {
    // 👇 Get input value from "event"
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          id="message"
          name="message"
          onChange={this.handleChange}
        />
        <h2>Message: {this.state.message}</h2>
      </div>
    );
  }
}
