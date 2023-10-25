import { React,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooking, deleteUser } from "./userSlice";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
export const UserList = () => {
  const eventColors = {
    funeral: "bg-red-500",
    wedding: "bg-cyan-500",
    graduation: "bg-green-500",
    // Add more event types and their corresponding colors here
  };
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);

  useEffect(() => {
    // Dispatch the getAllBooking action to fetch data when the component mounts.
    dispatch(getAllBooking());
  }, [dispatch]);

  if (data.loading) {
    return <h2>Loading...</h2>;
  }

  if (data.error) {
    return <h3>Error: {data.error}</h3>;
  }

  return (
    <div>
      <Navbar/>
      <h1 className="md:flex justify-around font-[Poppins] text-3xl font-extrabold m-5">Clients Bookings</h1>
    <div className="md:flex justify-around font-[Poppins] text-medium m-5">
      
      <table className="border-2 border-black border-spacing-8">
        <thead className="" >
          <tr className="border-black border-2 px-2">
            <th className="border-black border-2 px-2">ID</th>
            <th className="border-black border-2">Name</th>
            <th className="border-black border-2">Email</th>
            <th className="border-black border-2">Contact</th>
            <th className="border-black border-2">Event</th>
            <th className="border-black border-2">Package</th>
            <th className="border-black border-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.formData.map((booking) => (
            <tr key={booking.id} className="border-black border-2">
              <td className="border-black border-2 px-2">{booking.id}</td>
              <td className="border-black border-2 px-2font-semibold">{booking.name}</td>
              <td className="border-black border-2 px-2 text-cyan-500">{booking.email}</td>
              <td className="border-black border-2 px-2">{booking.contact}</td>
              <td className={`border-black border-2 px-2 ${eventColors[booking.event_type] || " "}`}>{booking.event_type}</td>

              <td className="border-black border-2 px-2">{booking.package}</td>
              <td>
                <Link to ={`/edit/${booking.id}`} className="  px-2  m-2 bg-cyan-500 rounded"  >Edit</Link>
                <Link onClick ={ () => dispatch(deleteUser(booking.id))} className= "px-2 m-2 bg-red-600 rounded">Delete</Link>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};
