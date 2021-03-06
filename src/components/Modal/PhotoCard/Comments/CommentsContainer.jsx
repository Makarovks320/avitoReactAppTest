import React from 'react';
import s from './Comments.module.css';
import {connect} from 'react-redux';

const Comment = (props) => {
  let date = new Date(props.date);
  let month = ('0' + (date.getMonth() + 1)).slice(-2);
  let day = ('0' + (date.getDate() )).slice(-2);
  let fullYear = date.getFullYear();
  return (
    <div>
      <span>{`${day}.${month}.${fullYear}`}</span>
      <p>{props.text}</p>
    </div>
  );
};

const Comments = (props) => {
  let uniquekey = 0;
  let commentElements = props.comments.map( c => <Comment key={uniquekey++} text={c.text} date={c.date}/>)
  return (
    <div className={s.wrapper}>
      {commentElements}
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    comments: state.gallery.photoCardData.comments
  };
};

const CommentsContainer = connect(mapStateToProps)(Comments);

export default CommentsContainer;