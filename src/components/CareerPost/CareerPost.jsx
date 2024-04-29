// import React, { useState } from 'react'
// import './CareerPost.scss';
// import SearchIcon from '@mui/icons-material/Search';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { CareerData } from './CareerData';
// import { Link } from 'react-router-dom'; 

// const CareerPost = () => {
//     const[searchText, setSearchText] = useState('');

//     const handleSearchInputChange = (event) => {
//         setSearchText(event.target.value);
//     };

//     const filteredCareers = CareerData.filter((career) => {
//         return career.title.toLowerCase().includes(searchText.toLowerCase());
//     });

//   return (
//     <div className='careers'>
//         <div>
//             <h1 className='join'>Join us</h1>
//             <h2 className='openings'>Current Openings</h2>
//         </div>
//         <div className='left-career'>
//             <div className='filter-careers'>
//                 <h1 className='filter'>Filters</h1>
                
//                 <div className='inputcareer'>
//                 <h2 className='filter-heading'>Job Type</h2>
//                    <input type='checkbox' id='1' value={1} />
//                    <label htmlFor='1'>Full time (5)</label> 
//                 </div>
//             </div>
//         </div>
//         <div className='right-career'>
//             <div className='input-box'>
//                 <input type='text' placeholder='Job title or skill' value={searchText} onChange={handleSearchInputChange}/>
//                 <span className='search-icon'><SearchIcon/></span>
//             </div>
//             <div className='input-box'>
//                 <input type='text' placeholder='City/ State/ Country' />
//                 <span><LocationOnIcon /></span>
//             </div>
//             <button className='search-button'>Search</button>
//             <div className='career-card-container'>
//             <div className='career-card'>
//                 {filteredCareers.map(data => (
//                     <div className='job-card' key={data.id}>
//                         <div>
//                         <Link to={`/career/${data.id}`}>
//                         <h1>{data.title}</h1>
//                         </Link>
//                         <h3>{data.location}</h3>
//                         <p>{data.who_we_are}</p>
//                         </div>
//                         <div className='full-time'>
//                         <p> Full Time </p>
//                         <p>{data.Full_time}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default CareerPost


import React, { useState } from 'react';
import './CareerPost.scss';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CareerData } from './CareerData';
import { Link } from 'react-router-dom'; 

const CareerPost = () => {
    const [searchText, setSearchText] = useState('');
    const [locationText, setLocationText] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleLocationInputChange = (event) => {
        setLocationText(event.target.value);
    };

    const filteredCareers = CareerData.filter((career) => {
        const titleMatch = career.title.toLowerCase().includes(searchText.toLowerCase());
        const locationMatch = career.location.toLowerCase().includes(locationText.toLowerCase());
        return titleMatch && locationMatch;
    });

    return (
        <div className='careers'>
            <div>
                <h1 className='join'>Join us</h1>
                <h2 className='openings'>Current Openings</h2>
            </div>
            <div className='left-career'>
                <div className='filter-careers'>
                    <h1 className='filter'>Filters</h1>
                    <div className='inputcareer'>
                        <h2 className='filter-heading'>Job Type</h2>
                        <input type='checkbox' id='1' value={1} />
                        <label htmlFor='1'>Full time (5)</label> 
                    </div>
                </div>
            </div>
            <div className='right-career'>
                <div className='input-box'>
                    <input type='text' placeholder='Job title or skill' value={searchText} onChange={handleSearchInputChange}/>
                    <span className='search-icon'><SearchIcon/></span>
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='City/ State/ Country' value={locationText} onChange={handleLocationInputChange} />
                    <span><LocationOnIcon /></span>
                </div>
                <button className='search-button'>Search</button>
                <div className='career-card-container'>
                    <div className='career-card'>
                        {filteredCareers.length > 0 ? (
                            filteredCareers.map(data => (
                                <div className='job-card' key={data.id}>
                                    <div>
                                        <Link to={`/career/${data.id}`}>
                                            <h1>{data.title}</h1>
                                        </Link>
                                        <h3>{data.location}</h3>
                                        <p>{data.who_we_are}</p>
                                    </div>
                                    <div className='full-time'>
                                        <p> Full Time </p>
                                        <p>{data.Full_time}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>There are no results that match your search.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CareerPost;

