import React from "react";

const CommentDetail = (props) => {
    let name = props.name;
    let time = props.time;
    let comment = props.comment;
    props = {
        name: 'default',
        time: (new Date()).getDate(),
        comment: 'TimePass comment!'
    }
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
            <img src='https://via.placeholder.com/35' alt='tp' />
            </a>
            <div className='content'>
                <a href='/' className='author'>{name}</a>
                <p className='metadata'>
                <span className='date'>{time}</span>
                </p>
                <p className='text'>
                {comment}
                </p>
            </div>
        </div>
        )
}

export default CommentDetail