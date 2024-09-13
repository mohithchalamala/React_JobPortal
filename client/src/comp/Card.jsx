import React from 'react'
import {Link} from 'react-router-dom'
import {FiCalendar, FiClock, FiDollarSign, FiMapPin} from 'react-icons/fi'
function Card({item}) {
  return (
    <section className='card'>
      <Link to={'/'} className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={item.companyLogo}></img>
        <div>
          <h4 className='text-primary mb-1'>{item.companyName}</h4>
          <h3 className='text-lg font-semibold mb-2'>{item.jobTitle}</h3>
          <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
            <span><FiMapPin/> {item.jobLocation}</span>
            <span><FiClock/> {item.employmentType}</span>
            <span><FiDollarSign/> {item.minPrice}-{item.maxPrice}</span>
            <span><FiCalendar/> {item.postingDate}</span>
          </div>
          <p className='text-base text-primary/70'>{item.description}</p>
        </div>
      </Link>
    </section>
  )
}

export default Card