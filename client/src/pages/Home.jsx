//The jobs.filter method iterates over each job object in the jobs array, and for each job, it perform
//Convert to Lowercase: job.jobTitle.toLowerCase() converts the job title to lowercase to make the search case-insensitive.
//Search Query: Similarly, query.toLowerCase() converts the search query to lowercase.
//Check for Match: indexOf(query) will return the query which we are entering in the search bar, if jon found it returns it, else return -1
// So finnaly by applying all filter at the end the jobs array wil remain with the searching element.


import React, { useEffect, useState } from 'react'
import Banner from '../comp/Banner'
import Card from '../comp/Card'
import Jobs from './Jobs'
import Sidebar from '../Sidebar/Sidebar'
import Newsletter from '../comp/Newsletter'

const Home = () => {
  const [query,setquery] = useState('')
  const [selectedCategory, setselectedCategory] = useState(null)
  const [jobs, setjobs] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [currentPage, setcurrentPage] = useState(1)

  const itemsPerPage = 6;


  //fetching jobs.json data
  async function fetchJobs(){
    setisLoading(true)
    const response = await fetch ('jobs.json')
    const jobs = await response.json()
    setjobs(jobs)
    setisLoading(false)
  }
  //the fetch is invoked for every render
  useEffect(()=>{
    fetchJobs()
  },[])

  //We are filterig the jobs array

  const filterItems = jobs.filter((job)=>{
    return job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })

  //Radio based pattern filtering 

  const handleChange = (e) =>{
    setselectedCategory(e.target.value)
    console.log(selectedCategory)
  }

  //Button based filtering 

  const handleClick = (e) =>{
    setselectedCategory(e.target.value)
  }

  // calculate the index range for pagination
  const calculatePageRange =  () =>{
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return {startIndex, endIndex}
  }

  // function to move to next page

  const nextPage = () =>{
    if(currentPage < Math.ceil(filterItems.length / itemsPerPage)){
      setcurrentPage(currentPage + 1)
    }
  }

  const prevPage = () =>{
     if(currentPage > 1){
      setcurrentPage(currentPage - 1)
     }
  }


  // main function

  const filteredData = (jobs, selectedCategory, query) =>{
    let filteredJobs = jobs

    //if there is any query entered then the code executes below block
    if(query){
      filteredJobs = filteredJobs.filter((job)=>{
        return job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
      })
    }

    // if selected any buttons the code inside the below block executes
    if(selectedCategory){
      filteredJobs = filteredJobs.filter((job)=>{
        return(
          job.jobLocation.toLowerCase() === selectedCategory.toLowerCase() ||
          parseInt(job.maxPrice) <= parseInt(selectedCategory) ||
          job.postingDate >= selectedCategory ||
          job.salaryType.toLowerCase() === selectedCategory.toLowerCase() ||
          job.experienceLevel.toLowerCase() === selectedCategory.toLowerCase()||
          job.employmentType.toLowerCase() === selectedCategory.toLowerCase()
        )
      })
      if(filteredJobs.length === 0){
        return <h1>No data Found....</h1>
      }
    }
    // slice the data based on current page
    const {startIndex, endIndex} = calculatePageRange()
    filteredJobs = filteredJobs.slice(startIndex,endIndex) 


    return filteredJobs.map((item,key)=> <Card key={key} item={item}/>)    
  }

  const result = filteredData(jobs, selectedCategory, query)

  return (
    <div>
      <Banner query={query} setquery={setquery}/>   {/* Sending props to Baner.jsx */}
      {/* Main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick}/>
        </div>
        <div className='col-span-2 bg-white p-4 rounded-sm'>
          {
            isLoading ? <p>Loading....</p> : <Jobs result={result}/>
          }

          {/* pagination */}
          {
            result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {Math.ceil(filterItems.length / itemsPerPage)}</span>
                <button onClick={nextPage} disabled={currentPage === Math.ceil(filterItems.length / itemsPerPage)}>Next</button>
              </div>
            ) : ""
          }
        </div>
        <div className='bg-white p-4 rounded'><Newsletter/></div>
      </div>
    </div>
  )
}

export default Home