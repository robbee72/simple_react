import React from 'react';

export default class Summary extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <p> Here where it starts </p>
        <a class="btn btn-default" href="#">Info</a>
      </div>
    );
  }
}
