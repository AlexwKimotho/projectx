import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar';
import Logo from '/public/images/logo2.png'
import Newslatter from '../../components/Newslatter/Newslatter';
import Scrollbar from '../../components/scrollbar'
import BlogList from '../../components/BlogList';
import Footer from '../../components/footer';

const BlogPageLeft = (props) => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'} />
            <BlogList blLeft={'order-lg-1'} blRight={'order-lg-2'} />
            <Newslatter nClass={'section-bg'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPageLeft;
