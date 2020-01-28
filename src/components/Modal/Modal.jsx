import React from 'react';
import s from './Modal.module.css';
import { connect } from 'react-redux';
import {closePopupAC} from './../../redux/appReducer';
import {NavLink} from 'react-router-dom';
import PhotoCardContainer from './PhotoCard/PhotoCardContainer';

class Modal extends React.Component {
  componentDidMount () {
    window.addEventListener('keydown', this.onPopupEscPress);
  };
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onPopupEscPress);
  };
  onPopupEscPress = (evt) => {
    if (evt.keyCode === 27) this.props.closePopup();
  };
  render() {
    if(!!this.props.modal){
  return (
    <div>
      <div className={s.modalOverlay}></div>
      <div className={s.popup}>
        <PhotoCardContainer />
        <NavLink className={s.modalClose} to={''} onClick={this.props.closePopup}></NavLink>
      </div>
    </div>
         )} else {
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

export default connect( mapStateToProps, mapDispatchToProps)(Modal);