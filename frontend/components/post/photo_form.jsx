import React from 'react';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      description: "",
      content_type: "Photo",
      user_id: this.props.currentUser.id
    };
  }

  handleChange(e, type) {
    this.setState({
      [type]: e.target.value
    });
  }

  render () {
    return (
      <div>

      </div>
    );
  }

}

export default PhotoForm;
