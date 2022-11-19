import { Component } from "react";

class Home extends Component {
  state = {
    searhInput: "",
  };

  onChangeInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    const { searchInput } = this.state;
    return (
      <>
        <input type="text" value={searchInput} onChange={this.onChangeInput} />
        <p>{searchInput}</p>
      </>
    );
  }
}
export default Home;
