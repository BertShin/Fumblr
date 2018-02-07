import React from 'react';
import TextForm from './text_form';
import PhotoForm from './photo_form';
import GifForm from './gif_form';
import CurrentUserPageContainer from '../users/current_user_container';
import MdText from 'react-icons/lib/md/textsms';
import FaQuote from "react-icons/lib/fa/quote-right";
import MdPhoto from "react-icons/lib/md/add-a-photo";
import MdGif from "react-icons/lib/md/gif";
import Modal from 'react-modal';
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
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
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
      <div className="main-post-form animated postflipInX">
        <section>
          <img
            onClick={() => this.openModal("userVisible")}
            id="currentUser-profile"
            src={currentUser.image_url} />
          <Modal
            isOpen={this.state.userVisible}
            className="backdrop"
            >
            <CurrentUserPageContainer
              closeModal={() => this.closeModal("userVisible")}
              />
          </Modal>
        </section>
        <section className="group-post-buttons">
          <button className="post-buttons"onClick={() => this.openModal("textVisible")}><MdText/> <h4>Text</h4></button>
          <Modal
            isOpen={this.state.textVisible}
            className="backdrop"
          >
            <TextForm
              closeModal={() => this.closeModal("textVisible")}
              ownProps={ownProps}
              createPost={createPost}
              currentUser={currentUser}
              content_type="Text"
              errors={errors}
              />
          </Modal>
          <button className="post-buttons"onClick={() => this.openModal("quoteVisible")}><FaQuote /> <h4>Quote</h4></button>
          <Modal
            isOpen={this.state.quoteVisible}
            className="backdrop"
          >
            <TextForm
              closeModal={() => this.closeModal("quoteVisible")}
              ownProps={ownProps}
              createPost={createPost}
              currentUser={currentUser}
              content_type="Quote"
              errors={errors}
              />
          </Modal>
          <button className="post-buttons"onClick={() => this.openModal("photoVisible")}><MdPhoto /> <h4>Photo</h4></button>
          <Modal
            isOpen={this.state.photoVisible}
            className="backdrop"
          >
            <PhotoForm
              closeModal={() => this.closeModal("photoVisible")}
              ownProps={ownProps}
              createPost={createPost}
              currentUser={currentUser}
              errors={errors}
              />
          </Modal>
          <button
            className="gif-button"
            onClick={() => this.openModal("gifVisible")}>
            <MdGif
              viewBox={"8 3 24 24"}
              />
            <img id="powered"
              src="https://raw.githubusercontent.com/cirla/vim-giphy/master/powered_by_giphy.gif"/>
          </button>
          <Modal
            isOpen={this.state.gifVisible}
            className="backdrop"
          >
            <GifForm
              closeModal={() => this.closeModal("gifVisible")}
              ownProps={ownProps}
              createPost={createPost}
              currentUser={currentUser}
              errors={errors}
              />
          </Modal>
      </section>
      </div>
    );
  }
}

export default PostForm;
