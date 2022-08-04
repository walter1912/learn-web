import React from 'react';
import PropTypes from 'prop-types';
import "./WorkItem.scss";

const WorkItem =(props)=>{
    const {img, header, time, type, content} = props
    return (
        <li className="work__item">
        <img src={img} alt="img" className="work__item__img" width="246px" height="180px" />
        <div className="work__item__content">
            <a href="#" className="header">{header}</a>
            <div className="description">
                <span className="work__item__time">{time}</span>
                <span className="work__item__detail">{type}</span>
            </div>
            <p className="content">{content}
            </p>
        </div>
    </li>
    )
}
WorkItem.propTypes = {
    img: PropTypes.string,
    header: PropTypes.string,
    time: PropTypes.string,
    type: PropTypes.string,
    content: PropTypes.string,
};

export default WorkItem;