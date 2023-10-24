import React, { useState } from 'react'
import { addUser } from './userSlice';
import { useDispatch } from 'react-redux';




const Book = () => {
  const [formData,setFormData] = useState({})
  const dispatch = useDispatch();
  
  function handleChange(event){
    const name = event.target.name;
    let value = event.target.value;

    setFormData({...formData,[name]:value})
    

  }
  function handleSubmit(event){
    event.preventDefault();
    
    dispatch(addUser(formData ))
  }

  return (
   <div>
    
    <div  >
      <h3 className='flex justify-around m-5 text-3xl font-extrabold font-serif' >Book With Us</h3>
      <div className='flex justify-around font-[Poppins] h-full items-center'>
      <form onSubmit ={handleSubmit} className='border-2 rounded-lg border-black p-12'>
        <div className='flex  m-3'>
          <label htmlFor='name'>Name:</label>
          <input type ="text" name ="name" placeholder='Enter your FullName' onChange={handleChange} className='px-10 rounded-md ml-5 h-6'/>
          </div>
          <div>
          <label htmlFor='email'>Email:</label>
          <input type ="text" name ="email" placeholder='Enter your Email'  onChange={handleChange}/>
          </div>
          <div>
          <label htmlFor='contact'>Mobile No</label>
          <input type ="text" name ="contact" placeholder='Enter your Contact'  onChange={handleChange}/>
          </div>
          <div>
            <select id='event_type' name='event_type'  onChange={handleChange}>
              <option >Select type of  Event</option>
              <option value='wedding'>Wedding</option>
              <option value='traditional_wedding'>Traditional Wedding</option>
              <option value='baby_shower'>baby_shower</option>
              <option value='graduation'>Graduation</option>
              <option value='funeral'>Funeral</option>
            </select>
          </div>
          <div>
            <select id='package' name='package'  onChange={handleChange}>
              <option >Select your Package</option>
              <option value='full_package'>Full_package</option>
              <option value='half_package'>Half_package</option>
              <option value='minimal_package'>Minimal_package</option>
              <option value='others'>Others</option>
              
            </select>
       </div>
       <div>
        <button type='submit'>Submit</button>
       </div>
          
        
      </form>
      </div>
    </div>
   </div>
  )
}

export default Book