import React from 'react';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      image_url: "",
      description: "",
      content_type: "Photo",
      user_id: this.props.currentUser.id
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, type) {
    this.setState({
      [type]: e.target.value
    });
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
    if (this.props.isOpen === false) {
      return null;
    } else {
      return (
        <div>
          <section className="backdrop" onClick={this.props.closeModal}></section>
          <form className="modal">
            {this.renderErrors()}

            <input
              className="modal-title"
              type="text"
              value={this.state.title}
              placeholder="Title of your Photo"
              onChange={(e) => this.handleChange(e, 'title')}
              />

            <input
              className="modal-url"
              type="text"
              value={this.state.image_url}
              placeholder="...Link to your Photo to share"
              onChange={(e) => this.handleChange(e, 'image_url')}
              />

            <input
              className="modal-description"
              type="text"
              value={this.state.description}
              placeholder="Optional Description of your Photo"
              onChange={(e) => this.handleChange(e, 'description')}
              />

            <section className="modal-buttons">
              <button onClick={(e) => this.handleSubmit(e)}>Post</button>
              <button onClick={this.props.closeModal}>Cancel</button>
            </section>
          </form>
        </div>
      );
    }
  }

}

export default PhotoForm;
