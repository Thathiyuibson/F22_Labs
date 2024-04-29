import React from 'react';
import './Services.scss';
import { ServicesWeProvide } from './Data';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Services = () => {
  return (
    <div className='maindiv'>
        <div className='centraldiv'>
        <h1 className='title1'>Services we can Help you with.</h1>
            <div style={{display:'flex', flexDirection: 'column', color:'white', width:'50%', }}>
                {ServicesWeProvide.map(service => (
                    <div className='parent-div'>
                        <div className='service-main-div'>
                        <div className='sub-div'>
                            <img className='iconimage' key={service.id} src={service.img} alt='' />
                            <h1 className='servicelist'>{service.text}</h1>
                        </div>
                        <ArrowForwardIcon />
                    </div>
                    <hr style={{width:'100%'}}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services
