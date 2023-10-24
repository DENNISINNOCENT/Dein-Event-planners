import React, { useState } from "react";
import { addUser } from "./userSlice";
import { useDispatch } from "react-redux";

const Book = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();

    dispatch(addUser(formData));
  }

  return (
    <div>
      <div>
        <h3 className="flex justify-around m-5 text-3xl font-extrabold font-serif">
          Book With Us
        </h3>
        <div className=" font-serif text-2xl  flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="border-black border-2 px-10 rounded-3xl"
          >
            <div className ="m-8">
            <div>
              <label htmlFor="name">Full Names:</label>
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter your FullName"
                onChange={handleChange}
                className="px-10 rounded-md m-2 "
              />
            </div>
           <div>
           <label htmlFor="email">Email:</label>
           </div>
              
               <div>
              <input
                type="text"
                name="email"
                placeholder="Enter your Email"
                onChange={handleChange}
                className="px-10 rounded-md m-2  "
              />
            </div>
            <div>
            <label htmlFor="contact">Mobile No</label>
            </div>
              
              <div>
              <input
                type="text"
                name="contact"
                placeholder="Enter your Contact"
                onChange={handleChange}
                className="px-10 rounded-md m-2 "
              />
            </div>
            <div>
            <label htmlFor="event type">Event</label>
            </div>
            <div className="px-10 rounded-md m-2 " >
              <select id="event_type" name="event_type" onChange={handleChange}>
                <option>Select type of Event</option>
                <option value="wedding">Wedding</option>
                <option value="traditional_wedding">Traditional Wedding</option>
                <option value="baby_shower">baby_shower</option>
                <option value="graduation">Graduation</option>
                <option value="funeral">Funeral</option>
                
              </select>

            </div>
            <div>
            <label htmlFor="package">Your Package</label>
            </div>
            
            <div className="px-10 rounded-md m-2 ">
              <select id="package" name="package" onChange={handleChange}>
                <option>Select your Package</option>
                <option value="full_package">Full_package</option>
                <option value="half_package">Half_package</option>
                <option value="minimal_package">Minimal_package</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="bg-cyan-500 flex justify-center rounded-3xl text-3xl font-extrabold m-3">
              <button type="submit">Submit</button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
