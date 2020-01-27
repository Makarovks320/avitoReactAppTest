import React from 'react';
import s from './Modal.module.css';
import { connect } from 'react-redux';
import {closePopupAC} from './../../redux/appReducer';
import {NavLink} from 'react-router-dom'
import PhotoCard from './PhotoCard/PhotoCard'

const Modal = (props) => {
    if(!!props.modal){
  return (
    <div>
      <div className={s.modalOverlay}></div>
      <div className={s.popup}>
        <PhotoCard />
        <NavLink className={s.modalClose} to={''} onClick={props.closePopup}></NavLink>
      </div>
    </div>
  )
} else {
  return <div className={s.empty}></div>
}
}

let mapStateToProps = (state) => ({modal: state.gallery.modal})
let mapDispatchToProps = (dispatch) => {
  return {
    closePopup: () => dispatch(closePopupAC())
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Modal);