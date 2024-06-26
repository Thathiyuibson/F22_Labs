import React from 'react'
import {Link} from 'react-router-dom';
import {mvpblogsdata} from './Mvpblogsdata';
import './Mvpblogs.scss'

const Mvpblogs = () => {
  return (
    <div>
    <div className='mvp-main'>
        <div className='mvp-blog'>
            {mvpblogsdata.map(blog => (
                <div className='mvp1' key={blog.id}>
                  <Link to={`/singleblog/${blog.id}`}>
                  <img className='mvp-image' src={blog.img} alt='mvp1'  />
                  </Link>
                    <div className='mvp-text'>
                    <h2>{blog.text1}</h2>
                    <h3>{blog.text2}</h3>
                    <h5>{blog.date}</h5>
                    <h4>{blog.text3}</h4>
                    </div>
                </div> 
            ))}
        </div>
    </div>
    <div className='mvp-categories'>
                {/* Render categories */}
                <div className='category-scroll'>
                    {[
                        'HEADLESS SHOPIFY',
                        'HIRE DEVELOPERS',
                        'MVP DEVELOPMENT',
                        'NO CODE',
                        'QUALITY ASSURANCE TESTING',
                        'SAAS DEVELOPMENT',
                        'SERVERLESS',
                        'TECHNOLOGY',
                        'GENERAL'
                    ].map((category, index) => (
                        <div className='category' key={index}>
                            <Link to={`/category/${category}`} className='category-link'>
                                {category}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <h1 className='upcoming-blogs'>More Blogs Coming Soon</h1>
    </div>
  )
}

export default Mvpblogs
