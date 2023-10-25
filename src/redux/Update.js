import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "./userSlice";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams(); // Use destructuring to get the "id" from the URL
  const data = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateData, setUpdateData] = useState({
    name: "", // Initialize with empty strings
    email: "",
    contact: "",
    event_type: "",
    package: "",
  }); // Initialize updateData as an empty object

  useEffect(() => {
    if (id) {
      // Find the user with the matching ID
      const singleUser = data.formData.filter((user) => user.id === id);
      if (singleUser) {
        // Set updateData with the found user
        setUpdateData(singleUser[0]);
      } else {
        // User not found, handle this case (e.g., show an error message)
        // You can set updateData to an empty object or handle it as needed.
      }
    }
  }, [id, data]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(updateData);
    dispatch(updateUser(updateData));
    navigate("/users");
  }

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    setUpdateData({ ...updateData, [name]: value });
  };

  return (
    <div>
      <div>
        <h3 className="flex justify-around m-5 text-2xl font-extrabold font-serif">
          Update User
        </h3>
        <div className=" font-serif text-2xl  flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="border-black border-2 px-10 rounded-3xl"
        >
          <div>
            <label htmlFor="name">Full Names:</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              value={updateData ? updateData.name : ""}
              onChange={handleChange}
              className="px-16 rounded-md m-2 "
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={updateData ? updateData.email : ""}
              onChange={handleChange}
              className="px-16 rounded-md m-2  "
            />
          </div>

          <div>
            <label htmlFor="contact">Mobile No</label>
          </div>
          <div>
            <input
              type="text"
              name="contact"
              value={updateData ? updateData.contact : ""}
              onChange={handleChange}
              className="px-16 rounded-md m-2 "
            />
          </div>
          <div>
            <label htmlFor="event type">Event</label>
          </div>
          
          <div className="px-10 rounded-md m-2 ">
            <select
              id="event_type"
              name="event_type"
              value={updateData ? updateData.event_type : ""}
              onChange={handleChange}
            >
              <option>Select type of Event</option>
              <option value="wedding">Wedding</option>
              <option value="traditional_wedding">Traditional Wedding</option>
              <option value="baby_shower">Baby Shower</option>
              <option value="graduation">Graduation</option>
              <option value="funeral">Funeral</option>
            </select>
          </div>
          <div>
            <label htmlFor="package">Your Package</label>
          </div>
          <div className="px-10 rounded-md m-2 ">
            <select
              id="package"
              name="package"
              value={updateData ? updateData.package : ""}
              onChange={handleChange}
            >
              <option>Select your Package</option>
              <option value="full_package">Full Package</option>
              <option value="half_package">Half Package</option>
              <option value="minimal_package">Minimal Package</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="bg-cyan-500 flex justify-center rounded-3xl text-3xl font-extrabold m-3">
            <button type="submit">Update</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
