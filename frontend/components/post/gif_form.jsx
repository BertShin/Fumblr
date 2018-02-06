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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(e, type) {
    this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = this.state;
    this.props.createPost(post);
    if (this.props.errors.length === 0 ) {
      this.handleClose(e);
    }
  }

  handleClose(e) {
    this.setState({
      title: "",
      content: "",
      description: "",
    });
    this.props.closeModal();
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
    if (this.props.isOpen === false) {
      return null;
    } else {
      return (
        <div>
          <section className="backdrop" onClick={(e) => this.handleClose(e)}></section>
          <form className='modal'>
            {this.renderErrors()}
            <input
              className="modal-title"
              type="text"
              value={this.state.title}
              onChange={(e) => this.handleChange(e, 'title')}
              placeholder="Title..."
              />
            <input
              className="modal-url"
              type="text"
              value={this.state.image_url}
              placeholder="Attach an IMG or GIF?"
              onChange={(e) => this.handleChange(e, 'image_url')}
              />
            <input
              className="modal-description"
              type="text"
              value={this.state.description}
              onChange={(e) => this.handleChange(e, 'description')}
              placeholder="Optional Description"
              />
            <GiphysSearchContainer />
          </form>
        </div>
      );
    }
  }
}

export default GifForm;
