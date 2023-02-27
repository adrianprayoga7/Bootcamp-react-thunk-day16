import React, { Component } from "react";
import { connect } from "react-redux";

//class untuk pengeceekan berdasarkan name 
class UserList extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

//untuk koneksi antara store dengan komponen dengan mengacu ke user id
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(UserList);
