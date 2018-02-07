import React from 'react';


class TextForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      description: "",
      content_type: this.props.content_type,
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
    let contentPhrase;
    let placeHolder;
    if (this.props.content_type === 'Quote') {
      contentPhrase = "...To fumble or Not to fumble..";
      placeHolder = "This Quote's Author";
    } else {
      contentPhrase = "Whats on your Mind??";
      placeHolder = "Optional Description of your post";
    }
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
            <textarea
              className="modal-content"
              value={this.state.content}
              onChange={(e) => this.handleChange(e, 'content')}
              placeholder={contentPhrase}
              />
            <input
              className="modal-description"
              type="text"
              value={this.state.description}
              onChange={(e) => this.handleChange(e, 'description')}
              placeholder={placeHolder}
              />
            <section className="modal-buttons">
              <button onClick={(e) => this.handleSubmit(e)}>Post</button>
              <button onClick={(e) => this.handleClose(e)}>Cancel</button>
            </section>
          </form>
        </div>
      );
    }
  }
}

// { this.props.content_type === "Text" &&
//   <input
//     className="modal-url"
//     type="text"
//     value={this.state.image_url}
//     placeholder="Attach an IMG or GIF?"
//     onChange={(e) => this.handleChange(e, 'image_url')}
//     />
// }
export default TextForm;
