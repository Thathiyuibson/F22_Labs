import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MVP from '../../components/MVP/MVP';
import CuratedBlog from '../../components/CuratedBlog/CuratedBlog';
import Mvpblogs from '../../components/Mvpblogs/Mvpblogs';

const Allblogs = () => {
  return (
    <div className=''>
      <Navbar />
      <CuratedBlog/>
      <MVP />
      <Mvpblogs />
      <Footer />
    </div>
  )
}

export default Allblogs
