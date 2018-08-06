import React, { Component } from "react";
import AuthorCard from "./authorCard";

class AuthorList extends Component {
  render() {
    const NewAuthors = this.props.authors.map(author => (
      <AuthorCard key={author.first_name} author={author} />
    ));
    return (
      <div className="authors">
        <div className="row">{NewAuthors}</div>
      </div>
    );
  }
}

export default AuthorList;
