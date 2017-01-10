import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class Auth0List extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidUpdate() {
    console.log(this.props.users);
  }
  removeUser(user) {
    console.log(user);
    Meteor.call('removeUser', user, (err, data)=>{
      if(!err) {
        console.log('user removed');
      }
    });
  }
  renderUsers() {
    let sl = 1;
    return this.props.users.map((user) => {
      return (
        <tr key={user._id}>
          <td>{sl++}</td>
          <td>{user.email}</td>
          <td>{user.name}</td>
          <td>{user.identities[0].connection}</td>
          <td><button className="btn btn-danger" onClick={this.removeUser.bind(this,user)}>Remove</button></td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref="subtitle">Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Email</th>
              <th>Name</th>
              <th>Connection</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderUsers()}
          </tbody>
        </table>
      </div>
    )
  }
}