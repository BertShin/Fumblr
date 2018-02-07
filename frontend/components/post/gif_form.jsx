import React from 'react';
import GiphysSearchContainer from '../giphys/giphys_search_container';

class GifForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      image_url: "",
      content_type: "GIF",
      user_id: this.props.currentUser.id
    };
    this.handleImg = this.handleImg.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleImg(e) {
    this.setState({
      image_url: e.target.src
    });
  }


  handleChange(e, type) {
    this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = this.state;
    this.props.createPost(post).then(() =>  this.handleClose(e));
  }

  handleClose(e) {
    if (this.props.errors.length === 0) {
      this.setState({
        title: "",
        content: "",
        description: "",
      });
      this.props.closeModal();
    }
  }

  renderErrors() {
    if (this.props.errors === null) {
      return (
        []
      );
    }
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    const handleImg = this.handleImg;
    if (this.props.isOpen === false) {
      return null;
    } else {
      return (
        <div>
          <section className="backdrop" onClick={this.props.closeModal}></section>
          <form className='modal'>
            {this.renderErrors()}
            <input
              className="modal-title"
              type="text"
              value={this.state.title}
              onChange={(e) => this.handleChange(e, 'title')}
              placeholder="...A title for your Giphy!"
              />
            <input
              className="modal-url"
              type="text"
              value={this.state.image_url}
              placeholder="Just click a Giphy to paste here!"
              onChange={(e) => this.handleChange(e, 'image_url')}
              />
            <input
              className="modal-description"
              type="text"
              value={this.state.description}
              onChange={(e) => this.handleChange(e, 'description')}
              placeholder="Optional Description of your Giphy"
              />
            <section className="modal-buttons">
              <button onClick={(e) => this.handleSubmit(e)}>Post</button>
              <button onClick={this.props.closeModal}>Cancel</button>
            </section>
            <GiphysSearchContainer handleImg={handleImg}/>
          </form>
        </div>
      );
    }
  }
}

export default GifForm;
