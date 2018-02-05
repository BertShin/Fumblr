import React from 'react';
import TextForm from './text_form';
import PhotoForm from './photo_form';
import MdText from 'react-icons/lib/md/textsms';
import FaQuote from "react-icons/lib/fa/quote-right";
import MdPhoto from "react-icons/lib/md/add-a-photo";
import MdVideo from "react-icons/lib/md/ondemand-video";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textVisible: false,
      quoteVisible: false,
      videoVisible: false,
      photoVisible: false
    };
  }

  componentWillUnmount() {
    this.setState({
      textVisible: false,
      quoteVisible: false,
      videoVisible: false,
      photoVisible: false
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
    const modalVisible = this.state.modalVisible;
    const errors = this.props.errors;
    return (
      <div className="main-post-form animated postzoomInLeft">
        <section>
          <img id="currentUser-profile" src={currentUser.image_url} />
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
          <button className="post-buttons"onClick={() => this.openModal("videoVisible")}><MdVideo /> <h4>Video</h4></button>

      </section>
      </div>
    );
  }
}

export default PostForm;
