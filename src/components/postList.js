import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts, fetchPostsAndUsers } from "../actions/index";
import UserList from "./userList";


class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  //untuk menampilkan ke display website
  //penggunaan props untuk memberikan hak akses ke state
  renderList() {
    return this.props.posts.map((post) => (
      <div key={post.id} className="item">
        <i className="large middle aligned user  icon"></i>
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
          </div>
          <p>{post.body}</p>
          <UserList userId={post.userId} />
        </div>
      </div>
    ));
  }

  render() {
    if (!this.props.posts) {
      return null;
    }
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

//fungsi untuk koneksi store dengan bagian komponen
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};


export default connect(mapStateToProps, { fetchPosts, fetchPostsAndUsers })(
  PostList
);
