import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Img, ImgWork } from '../../assets/constants';
import { posts } from '../../assets/dataPost';
import "./Home.scss";
import PostItem from '../../features/PostItem';
import WorkItem from '../../features/WorkItem';
import { works } from '../../assets/dataWork';

const Home = props => {
    const newPosts = posts.filter((post, index) => (index < 2));
    const newWorks = works.filter((work, index) => (index < 3));
    return (
        <div>
            <Header />
            <div className="container">
                <section className="introduce d-flex">
                    <div className="introduce__infor d-flex">
                        <h2 className="header">Hi, I am John,
                            Creative Technologist</h2>
                        <p className="content ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <button className="download">Download Resume</button>
                    </div>
                    <img src={Img.avt} alt="avatar" className="introduce__img flex-center" width="243px"
                        height="243px" />
                </section>
                <section className="post d-flex">
                    <div className="post__header header-body d-flex">
                        <span>Recent post</span>
                        <Link to="/blogs">view all</Link>
                    </div>
                    <ul className="post__list d-flex">
                        {
                            newPosts.map((post) => (
                                <PostItem
                                    {...post}
                                />
                            ))
                        }
                    </ul>
                </section>
                <section className="work">
                    <Link to='/works' className="work__header header-body">Featured works</Link>
                    <ul className="work__list">
                    {
                            newWorks.map((work) => (
                                <WorkItem
                                    {...work}
                                />
                            ))
                        }
                    </ul>
                </section>
            </div>
            <Footer />
        </div>
    );
};

Home.propTypes = {

};

export default Home;