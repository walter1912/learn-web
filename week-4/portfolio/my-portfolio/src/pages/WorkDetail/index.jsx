import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './WorkDetail.scss';

const dataPost = {
    title: "Designing Dashboards with usability in mind",
    descriptionTitle: {
        time: "2020",
        type: "Dashboard, User Experience Design",
    },
    img: [
        "https://s3-alpha-sig.figma.com/img/ee4c/417f/e09e58bc78b83e1727fd5b43287859c1?Expires=1660521600&Signature=Wqq-hIuYDdHZeW7m2za5J4AWZ4RyyoiMBBfrIgtkJGfbsNtaJMFgBfPBYsehSvUgTBCEBMV64j4A1p0E50Jt3N44pqHBgjvFyFFNcwo40ACchizHIRlXfQ62GLPPOhe3hT~1j88oyxMK2brznfZEifxKThD2Z5aJrkAoTE8KZtB8N5ZE~impkGO7IXI4msYuk5O3AmP6LxJsdFOB~uL0njUk2ja~tyR7zO2iyJm3ggG2qbjU8pBlTJCN0n~7ykyflNzq8Z~tyk9-LE~56PvEjt-qxIizyehTiIMhM4SRx-O7tdJ3x6Fs1XB2jngCH5sHysaMFuY37GPD6i1Rg-pTSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "https://s3-alpha-sig.figma.com/img/d986/ab1f/884ac19526fd2491ea0b40e9bee97049?Expires=1660521600&Signature=ar5POn6FjP4hUBWLwKoNIRRqhwuV3DoY8tgbDQEJX01AVtrMyhCaNIZVRgRBKvs1g70buAve4qeQl7x81WlWJjoLYIQXywRcfHBaGHi27Dct5s61Zka-0hbfkV2OrPpMgwF-Jq7fHz4VZjXjMdmr76btVuSjP2kGLKTjQbV5fCmmHPgUqiAJ79L~TAsXV2FO9vJB9yYysJH45YApx4SIHl7yW1mXZaP-b3F~sebBm5XYWAam0ynZYBjTbeO7Hr9rEz45jZdTRDcHvmQY2NfLJlzTnnrd-tbK8fQXSyuee0kI3KzQ2z-y6hkZNMeh0nDCqekzAdFTL2xl1KBNXjJq6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "https://s3-alpha-sig.figma.com/img/b4e7/6714/252f22ce390e5bad81de4a04a3446a45?Expires=1660521600&Signature=FqzyiQekG-20cToPKzrI2xlLO2Nh4skDiRp6mPtzGspssjxWc4qQ78DWxqJfCosPzZPVa7aMX9d9cwKnoPz2i-xFzddsgeHkO5XZj4KHcwwqBZyDVj7pX2uTX~F8KWuDiKCA5gxLixF3c7ud9kRP8s252DBT6X-HF3oaG2U8fUNSU9bRhUFPmLP8tOTj9-p4sh-WKonhb4GBvGCteiN2St0tfDYH5BXSxdMjiM~pPEZtPlj9GO~-WdzsT9G9sQuCgECTjSz2KbiPpdTzqmjI~uK6SFVCdIdsp-Ff4uZdRJfN7vvgykb-W3jMxH6BWsFiQIDRhoMNDAHxBmOzB8WoAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    ],
    content:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    heading: {
        h1: "Heading 1",
        h2: "Heading 2",
    },
}

const  WorkDetail = (props) =>{
    const {title, descriptionTitle, img, content, heading} = dataPost;
    return (
        <>
            <Header />
            <div className="container col-sm-8 col-10">
                <h1 className="title">{title}</h1>
                <div className="descriptionTitle">
                    <span className="time">{descriptionTitle.time}</span>
                    <span className='type'>{descriptionTitle.type}</span>
                </div>
                <p className="content">{content}</p>
                <img src={img[0]} alt="" className="img"/>
                <h2 className="heading1">{heading.h1}</h2>
                <h3 className="heading2">{heading.h2}</h3>
                <p className="content">{content}</p>
                <img src={img[1]} alt="" className="img"/>
                <img src={img[2]} alt="" className="img"/>
            </div>
            <Footer />
        </>
    );
}
WorkDetail.propTypes = {
    
};

export default WorkDetail;