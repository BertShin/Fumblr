import React from 'react';
import GiphysIndex from './giphys_index';


class GiphySearch extends React.Component {
  constructor(props) {
    super();

    this.state = { searchTerm: "Sports" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchGiphys(this.state.searchTerm);
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(' ').join('+');
    return this.props.fetchSearchGiphys(searchTerm);
  }


  render () {
    let { giphys, handleImg } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1>Pick a Gif to Post!</h1>
          </label>
          <br></br>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            />
          <button>Search</button>
        </form>
        <br></br>
        <GiphysIndex giphys={giphys} handleImg={handleImg} />
      </div>
    );
  }

}

export default GiphySearch;
