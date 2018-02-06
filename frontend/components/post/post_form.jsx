import React from 'react';
import TextForm from './text_form';
import PhotoForm from './photo_form';
import GifForm from './gif_form';
import MdText from 'react-icons/lib/md/textsms';
import FaQuote from "react-icons/lib/fa/quote-right";
import MdPhoto from "react-icons/lib/md/add-a-photo";
import MdGif from "react-icons/lib/md/gif";
import { Link } from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textVisible: false,
      quoteVisible: false,
      gifVisible: false,
      photoVisible: false,
      userVisible: false,
    };
  }

  componentWillUnmount() {
    this.setState({
      textVisible: false,
      quoteVisible: false,
      gifVisible: false,
      photoVisible: false,
      userVisible: false
    });
  }


  openModal(modalType) {
    this.setState({
      [modalType]: true,
    });
  }

  closeModal(modalType) {
    this.props.clearErrors();
    this.setState({
      [modalType]: false,
    });
  }

  render() {
    const { ownProps, createPost, currentUser } = this.props;
    const errors = this.props.errors;
    return (
      <div className="main-post-form animated postzoomInLeft">
        <section>
          <img
            onClick={() => this.openModal("userVisible")}
            id="currentUser-profile"
            src={currentUser.image_url} />
        </section>
        <section className="group-post-buttons">
          <button className="post-buttons"onClick={() => this.openModal("textVisible")}><MdText/> <h4>Text</h4></button>
          <TextForm
            isOpen={this.state.textVisible}
            closeModal={() => this.closeModal("textVisible")}
            ownProps={ownProps}
            createPost={createPost}
            currentUser={currentUser}
            content_type="Text"
            errors={errors}
            />
          <button className="post-buttons"onClick={() => this.openModal("quoteVisible")}><FaQuote /> <h4>Quote</h4></button>
          <TextForm
            isOpen={this.state.quoteVisible}
            closeModal={() => this.closeModal("quoteVisible")}
            ownProps={ownProps}
            createPost={createPost}
            currentUser={currentUser}
            content_type="Quote"
            errors={errors}
            />
          <button className="post-buttons"onClick={() => this.openModal("photoVisible")}><MdPhoto /> <h4>Photo</h4></button>
          <PhotoForm
            isOpen={this.state.photoVisible}
            closeModal={() => this.closeModal("photoVisible")}
            ownProps={ownProps}
            createPost={createPost}
            currentUser={currentUser}
            errors={errors}
            />
          <button className="gif-button" onClick={() => this.openModal("gifVisible")}><MdGif /></button>
          <GifForm
            isOpen={this.state.gifVisible}
            closeModal={() => this.closeModal("gifVisible")}
            ownProps={ownProps}
            createPost={createPost}
            currentUser={currentUser}
            errors={errors}
            />
      </section>
      </div>
    );
  }
}

export default PostForm;
