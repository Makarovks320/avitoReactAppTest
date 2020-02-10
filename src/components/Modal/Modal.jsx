import React from 'react';
import s from './Modal.module.css';
import { connect } from 'react-redux';
import {closePopupAC} from './../../redux/appReducer';
import {NavLink, withRouter} from 'react-router-dom';

class Modal extends React.Component {
  componentDidMount () {
    window.addEventListener('keydown', this.onPopupEscPress);
  };
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onPopupEscPress);
  };
  onPopupEscPress = (evt) => {
    if (evt.keyCode === 27) {
      this.props.closePopup();
      this.props.history.push('');
    };
  };
  onOverlayClick = () => {
    this.props.closePopup();
    this.props.history.push('');
  };
  render() {
    if(!!this.props.modal){
  return (
    <div>
      <div className={s.modalOverlay} onClick={this.onOverlayClick}></div>
      <div className={s.popup}>
        {this.props.children}
        <NavLink className={s.modalClose} to={''} onClick={this.props.closePopup}></NavLink>
      </div>
    </div>
         )} 
         else {
    return <div className={s.empty}></div>
    };
  };
};

let mapStateToProps = (state) => ({modal: state.gallery.modal});
let mapDispatchToProps = (dispatch) => {
  return {
    closePopup: () => dispatch(closePopupAC())
  };
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(Modal));