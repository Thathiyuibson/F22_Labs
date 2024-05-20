import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'
import {Link , useParams} from 'react-router-dom';
import './Particularblog.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import parse from 'html-react-parser';
import ReactMarkdown from 'react-markdown';
import { Otherblogdata } from './Otherblogdata';


const Particularblog = () => {

    const {id} = useParams();
    const[tableOfContent, setTableOfContent] = useState('');
    const[author, setAuthor] = useState('');
    const [blogData , setBlogData] = useState(null);
    const [blogImg1 , setBlogImg1] = useState(null);
    const [blogTitle, setBlogTitle] = useState('');
    const [para1, setPara1] = useState('');
    const [heading2, setHeading2] = useState('');
    const [para2, setPara2] = useState('');
    const [heading3, setHeading3] = useState('');
    const [para3, setPara3] = useState('');
    const [heading4, setHeading4] = useState('');
    const [para4, setPara4] = useState('');
    const [heading5, setHeading5] = useState('');
    const [para5, setPara5] = useState('');
    const [heading6, setHeading6 ] = useState('');
    const [para6, setPara6] = useState('');
    const [heading7, setHeading7 ] = useState('');
    const [para7, setPara7] = useState('');
    const [isLeftFixed, setIsLeftFixed] = useState(false);
    const [isRightFixed, setIsRightFixed] = useState(false);

  useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await fetch(`http://localhost:1337/api/singleblogs/${id}?populate=*`);
                const data = await response.json();
                setBlogData(data.data.attributes.cover.data.attributes);
                setBlogImg1(data.data.attributes.img1.data.attributes);
                setBlogTitle(data.data.attributes.title)
                setTableOfContent(data.data.attributes.tableofcontent);
                setPara1(data.data.attributes.para1)
                setHeading2(data.data.attributes.heading2)
                setPara2(data.data.attributes.para2?.[0].children.map((text) => <p>{text.children?.[0].text}</p>))
                setHeading3(data.data.attributes.heading3)
                setPara3(data.data.attributes.para3?.[0].children.map((text) => <p>{text.children?.[0].text}</p>))
                setHeading4(data.data.attributes.heading4)
                setPara4(data.data.attributes.para4)
                setHeading5(data.data.attributes.heading5)
                setPara5(data.data.attributes.para5?.[0].children.map((text) => <p>{text.children?.[0].text}</p>))
                setHeading6(data.data.attributes.heading6)
                setPara6(data.data.attributes.para6)
                setHeading7(data.data.attributes.heading7)
                setPara7(data.data.attributes.para7)
                setAuthor(data.data.attributes.author)

                console.log(data.data.attributes)
            } catch (error){
                console.log('Error fetching blog data:', error);
            }
        };
        fetchBlogData();
    }, [id]);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.body.clientHeight;

          const leftTableThreshold = 1100;
          const leftTableStop = documentHeight - windowHeight-1970;
    
          // Adjust this value according to when you want the table of contents to become fixed
          if (scrollPosition > leftTableThreshold && scrollPosition < leftTableStop) {
            setIsLeftFixed(true);
          } else {
            setIsLeftFixed(false);
          }

          const rightBlogThreshold = 950; // Adjust this value based on your layout
          const rightBlogStop = documentHeight - windowHeight- 1700;
    
          if (scrollPosition > rightBlogThreshold && scrollPosition < rightBlogStop) {
            setIsRightFixed(true);
          } else {
            setIsRightFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    
    if (!blogData) {
        return <div>Loading...</div>;
      }

      console.log(blogData.url)
    
  return (
    <div className='particular-blog'>
    <div className='navbar'>
        <Navbar />
    </div>
    <div className='breadcrumb'>
        <div className='breadcrumb1'>
        <Link to={'/allblogs'}><h4>Blogs</h4></Link>
        </div>
        <div className='breadcrumb2'>
        <Link to={'/allblogs'}><h4>{'>'}  MVP Development</h4></Link>
        </div>
        <div className='breadcrumb3'>
        <Link to={'/allblogs'}><h4>{'>'}  Top Tech Stacks for Building a Successful MVP </h4></Link>
        </div>
        
    </div>
    <div className='blog-head'>
        <h1>{blogTitle}</h1>
        <h4>MAY 15, 2023 • 24 MIN READ</h4>
        <h5>by Murtuza Kutub</h5>
    </div>
    <div className='article-icon'>
        <h3>Share this article</h3>
        <div className='icons'>
        <FacebookIcon />
        <XIcon />
        <LinkedInIcon />
        </div>

    </div>
    <div className='img-container'>
        <img className='inner-img' src= {`http://localhost:1337${blogData.url}`} alt='techstack' />
    </div>
    <div className='blog-left'>
        <div className={`toc ${isLeftFixed ? 'fixed' : ''}`}>
            <h3>Table of content</h3>
            <ReactMarkdown>{tableOfContent}</ReactMarkdown>
        </div>
    </div>
    <div className='blog-center'>
        <div className='center-heading'>
            <div className='para-1'>
                <ReactMarkdown>{para1}</ReactMarkdown>
            </div>
            <div className='para-2'>
                <h1>{heading2}</h1>
                <p>{para2}</p>
            </div>
            <div className='img-container2'>
            <img className='factor-img' src= {`http://localhost:1337${blogImg1.url}`} alt='factor image' />
            </div>
            <div className='para-3'>
                <h1>{heading3}</h1>
                <p>{para3}</p>

            </div>
            <div className='para-4'>
                <h1>{heading4}</h1>
                <ReactMarkdown className='markdown-content' style={{fontFamily: 'sans-serif'}}>
                    {para4}
                </ReactMarkdown>
            </div>
            <div className='para-5'>
                <h1>{heading5}</h1>
                <p>{para5}</p>
            </div>
            <div className='para-6'>
                <h1>{heading6}</h1>
                <ReactMarkdown>{para6}</ReactMarkdown>
            </div>
            <div className='para-7'>
                <h1>{heading7}</h1>
                <ReactMarkdown>{para7}</ReactMarkdown>
            </div>
            <div className='author-details'>
                <ReactMarkdown>{author}</ReactMarkdown>
            </div>
        </div>
    </div>
    <div className= {`blog-right ${isRightFixed ? 'fixed' : ''}`}>
        <div className='right-heading'>
        <h2>Let's work together</h2>
        </div>
        <input type='text' placeholder='Your Name' />
        <input type='text' placeholder='Your Email' />
        <input type='text' placeholder='Your Phno:' />

        <button className='connect-btn'>Let's Connect</button>

        
    </div>
    <div className='other-blogs'>
        <h2 className='other-title'>Next for you</h2>
        <div className='other-blog'>
            {Otherblogdata.map(blog => (
                <div className='blog-4' key={blog.id}>
                    <Link to={`/singleblog/${blog.id}`}>
                        <img className='blog-img' src={blog.img} alt='img4' />
                    </Link>
                    <div className='blog-text'>
                        <h2>{blog.text1}</h2>
                        <h3>{blog.text2}</h3>
                        <h5>{blog.date}</h5>
                        <h4>{blog.text3}</h4>
                    </div>
                </div>
            ))}
        </div>
    </div>
    <div className='footer'>
    <Footer/>
    </div>
    </div>
    
  )
}

export default Particularblog


