import React from 'react';


class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      visible: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ visible: !prevState.visible}));
  }

  render() {
    return (
      <div className="main-post-form">
        <Button
          onClick={(e) => this.handleClick(e)}
          > aA </Button>
      </div>
    );
  }
}

export default PostForm;
