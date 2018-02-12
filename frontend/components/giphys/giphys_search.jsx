import React from 'react';
import GiphysIndex from './giphys_index';


class GiphySearch extends React.Component {
  constructor(props) {
    super();

    this.state = { searchTerm: "Sports Fail" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchGiphys(this.state.searchTerm);
  }

  handleChange(e) {
    e.preventDefault();
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
      <div className="main-giphy-search">
        <section className='giphy-search-field'>
          <input
            type="text"
            placeholder={this.state.searchTerm}
            onChange={this.handleChange}
            />
          <button onClick={this.handleSubmit}>Search</button>
        </section>
        <GiphysIndex giphys={giphys} handleImg={handleImg} />
      </div>
    );
  }

}

export default GiphySearch;
