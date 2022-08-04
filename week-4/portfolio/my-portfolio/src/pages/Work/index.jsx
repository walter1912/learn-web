import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import WorkItem from '../../features/WorkItem';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { works } from '../../assets/dataWork';
import Pagination from '../../features/Pagination';

let PageSize = 2;

const Work = props => {
    const [currentPage, setCurretPage] = useState(1);

    const currentWorksData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        return works.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <div>
            <Header />
            <div className="container">
                <h2>Works</h2>
                <ul>
                    {
                        currentWorksData.map((work) => (
                            <WorkItem
                                {...work}
                            />
                        ))
                    }
                </ul>
            </div>
            {/* phân trang real */}
            <Pagination
                className="d-flex justify-content-center align-items-center"
                currentPage={currentPage}
                totalCount={works.length}
                pageSize={PageSize}
                onPageChange={page => setCurretPage(page)}
            />
            <Footer />
        </div>
    );
};

Work.propTypes = {

};

export default Work;