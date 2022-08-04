import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostItem from '../../features/PostItem';
import { posts } from '../../assets/dataPost';
import Pagination from '../../features/Pagination';

const PageSize = 4;

const Blog = props => {
    const [currentPage, setCurrentPage] = useState(1);
    const currentPostsData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        return posts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <div>
            <Header />
            <div className="container">
                <h2>Blog</h2>
                <ul>
                    {
                        currentPostsData.map((post) => (
                            <PostItem
                                className="border-secondary border-bottom"
                                {...post}
                            />
                        ))
                    }
                </ul>
            </div>
              {/* phân trang real */}
              <Pagination
                className="d-flex justify-content-center align-items-center"
                currentPage={currentPage}
                totalCount={posts.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
            <Footer />
        </div>
    );
};

Blog.propTypes = {

};

export default Blog;