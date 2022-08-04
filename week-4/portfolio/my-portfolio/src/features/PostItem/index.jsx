import React from 'react';
import PropTypes from 'prop-types';
import "./PostItem.scss"

const PostItem =(props)=>{
    const {header, time, type, content, className} = props;
    return (
        <li className={`post__item me-2 `+ className}>
        <h3 className="header"><a href='#'>{header}</a></h3>
        <div className="description d-flex flex-row">
            <div>{time}</div>
            <span className="ms-3 me-3">|</span>
            <div>{type}</div>
        </div>
        <p className="mt-4">{content}</p>
    </li>
    )
}

PostItem.propTypes = {
    header: PropTypes.string,
    time: PropTypes.string,
    type: PropTypes.string,
    content: PropTypes.string,
    className: PropTypes.string
};

export default PostItem;