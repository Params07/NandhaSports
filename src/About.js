import React from 'react'

const About = () => {
    let data = [{img_src:'',title:'About',content:'Content'}]
  return (
    <div className='mt-8'>
      <AboutCards/>
    </div>
  )
}
const AboutCards = () =>
 <div className='w-full p-6  '>
  <img className='w-1/2 object-cover rounded-md shadow-2xl' />
  <div>

  </div>
</div>

export default About