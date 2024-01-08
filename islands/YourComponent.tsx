import { h, Component } from 'preact';

class YourComponent extends Component {
  constructor() {
    super();
    // Initialize state with an empty string for the input value
    this.state = {
      inputValue: '',
    };

    // Bind the event handler to the component instance
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // Event handler function to update the state when the input changes
  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  // Your component render method
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onInput={this.handleInputChange}
        />
        <p>Input value: {this.state.inputValue}</p>
      </div>
    );
  }
}

export default YourComponent;
