import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar';
import Logo from '/public/images/logo2.png'
import Newslatter from '../../components/Newslatter/Newslatter';
import Scrollbar from '../../components/scrollbar'
import BlogList from '../../components/BlogList';
import Footer from '../../components/footer';


const BlogDetails = () => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'} />
            <BlogList/>
            <Newslatter nClass={'section-bg'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;
