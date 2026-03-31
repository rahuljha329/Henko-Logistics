import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Blogbanner from '../Components/Blog/BlogBanner'
import BlogContent from '../Components/Blog/BlogContent'

const BlogPage = () => {
  return (
    <div>
        <Navbar />
        <Blogbanner />
        <BlogContent />
        <Footer />
    </div>
  )
}

export default BlogPage