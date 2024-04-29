import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {Link , useParams} from 'react-router-dom';
import './Particularblog.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import parse from 'html-react-parser'

const Particularblog = () => {

    const {id} = useParams();
    const [blogData , setBlogData] = useState(null);
    const [blogTitle, setBlogTitle] = useState('');
    const [para1, setPara1] = useState('');
    const [heading2, setHeading2] = useState('');
    const [para2, setPara2] = useState('');
    const [heading3, setHeading3] = useState('');
    const [para3, setPara3] = useState('');
    const [heading4, setHeading4] = useState('');
    const [para4, setPara4] = useState('');


    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await fetch(`http://localhost:1337/api/singleblogs/${id}?populate=*`);
                const data = await response.json();
                setBlogData(data.data.attributes.cover.data.attributes);
                setBlogTitle(data.data.attributes.title)
                setPara1(data.data.attributes.para1)
                setHeading2(data.data.attributes.heading2)
                setPara2(data.data.attributes.para2?.[0].children.map((text) => <p>{text.children?.[0].text}</p>))
                setHeading3(data.data.attributes.heading3)
                setPara3(data.data.attributes.para3?.[0].children.map((text) => <p>{text.children?.[0].text}</p>))
                setHeading4(data.data.attributes.heading4)
                setPara4(data.data.attributes.para4?.[0].children.map((text) => <p>{text.children?.[0].text}</p>))
                console.log(data.data.attributes)
            } catch (error){
                console.log('Error fetching blog data:', error);
            }
        };
        fetchBlogData();
    }, [id]);
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
        <div className='toc'>
            <h3>Table of content</h3>
        </div>
    </div>
    <div className='blog-center'>
        <div className='center-heading'>
            <div className='para-1'>
                <p>{para1}</p>
            </div>
            <div className='para-2'>
                <h1>{heading2}</h1>
                <p>{para2}</p>
            </div>
            <div className='para-3'>
                <h1>{heading3}</h1>
                <p>{para3}</p>
            </div>
            <div className='para-4'>
                <h1>{heading4}</h1>
                <p>{para4}</p>
            </div>
        </div>
    </div>
    <div className='blog-right'>
        <div className='right-heading'>
        <h2>Let's work together</h2>
        </div>
        <input type='text' placeholder='Your Name' />
        <input type='text' placeholder='Your Email' />
        <input type='text' placeholder='Your Phno:' />

        <button className='connect-btn'>Let's Connect</button>

        
    </div>
    </div>
    
  )
}

export default Particularblog


// import React, { useState, useEffect } from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import { Link, useParams } from 'react-router-dom';
// import './Particularblog.scss';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import parse from 'html-react-parser'; // Import html-react-parser

// const Particularblog = () => {
//   const { id } = useParams();
//   const [blogData, setBlogData] = useState(null);
//   const [blogTitle, setBlogTitle] = useState('');
//   const [para1, setPara1] = useState('');
//   const [heading2, setHeading2] = useState('');
//   const [para2, setPara2] = useState([]);
//   const [heading3, setHeading3] = useState('');
//   const [para3, setPara3] = useState([]);
//   const [heading4, setHeading4] = useState('');
//   const [para4, setPara4] = useState([]);

//   useEffect(() => {
//     const fetchBlogData = async () => {
//       try {
//         const response = await fetch(`http://localhost:1337/api/singleblogs/${id}?populate=*`);
//         const data = await response.json();
//         setBlogData(data.data.attributes.cover.data.attributes);
//         setBlogTitle(data.data.attributes.title);
//         setPara1(data.data.attributes.para1);
//         setHeading2(data.data.attributes.heading2);
//         setPara2(data.data.attributes.para2?.[0]?.children || []); // Ensure it's an array
//         setHeading3(data.data.attributes.heading3);
//         setPara3(data.data.attributes.para3?.[0]?.children || []); // Ensure it's an array
//         setHeading4(data.data.attributes.heading4);
//         setPara4(data.data.attributes.para4?.[0]?.children || []); // Ensure it's an array
//         console.log(data.data.attributes);
//       } catch (error) {
//         console.log('Error fetching blog data:', error);
//       }
//     };

//     fetchBlogData();
//   }, [id]);

//   if (!blogData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='particular-blog'>
//       <div className='navbar'>
//         <Navbar />
//       </div>
//       <div className='breadcrumb'>
//         <div className='breadcrumb1'>
//           <Link to={'/allblogs'}>
//             <h4>Blogs</h4>
//           </Link>
//         </div>
//         <div className='breadcrumb2'>
//           <Link to={'/allblogs'}>
//             <h4>{'>'} MVP Development</h4>
//           </Link>
//         </div>
//         <div className='breadcrumb3'>
//           <Link to={'/allblogs'}>
//             <h4>{'>'} Top Tech Stacks for Building a Successful MVP </h4>
//           </Link>
//         </div>
//       </div>
//       <div className='blog-head'>
//         <h1>{blogTitle}</h1>
//         <h4>MAY 15, 2023 • 24 MIN READ</h4>
//         <h5>by Murtuza Kutub</h5>
//       </div>
//       <div className='article-icon'>
//         <h3>Share this article</h3>
//         <div className='icons'>
//           <FacebookIcon />
//           <XIcon />
//           <LinkedInIcon />
//         </div>
//       </div>
//       <div className='img-container'>
//         <img className='inner-img' src={`http://localhost:1337${blogData.url}`} alt='techstack' />
//       </div>
//       <div className='blog-left'>
//         <div className='toc'>
//           <h3>Table of content</h3>
//         </div>
//       </div>
//       <div className='blog-center'>
//         <div className='center-heading'>
//           <div className='para-1'>
//             <p>{para1}</p>
//           </div>
//           <div className='para-2'>
//             <h1>{heading2}</h1>
//             {para2.map((text, index) => (
//               <p key={index}>{text.children?.[0]?.text}</p>
//             ))}
//           </div>
//           <div className='para-3'>
//             <h1>{heading3}</h1>
//             {para3.map((text, index) => (
//               <p key={index}>{text.children?.[0]?.text}</p>
//             ))}
//           </div>
//           <div className='para-4'>
//             <h1>{heading4}</h1>
//             {para4.map((text, index) => (
//               <p key={index}>{text.children?.[0]?.text}</p>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className='blog-right'>
//         <div className='right-heading'>
//           <h2>Let's work together</h2>
//         </div>
//         <input type='text' placeholder='Your Name' />
//         <input type='text' placeholder='Your Email' />
//         <input type='text' placeholder='Your Phno:' />
//         <button className='connect-btn'>Let's Connect</button>
//       </div>
//     </div>
//   );
// };

// export default Particularblog;

