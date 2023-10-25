import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Wedding from './pages/Wedding';
import TraditionalWedding from './pages/Traditional Wedding'
import Graduation from './pages/Graduation'
import BabyShower from './pages/BabyShower'
import Funeral from './pages/Funeral'
import Book from "./redux/Book";
import  {UserList} from "./redux/UserList";
import Update from './redux/Update'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path ="/wedding" element ={<Wedding/>}/>
        <Route path ="/traditional_wedding" element ={<TraditionalWedding/>}/>
        <Route path ="/graduations" element ={<Graduation/>}/>
        <Route path ="/babyShower" element ={<BabyShower/>}/>
        <Route path ="/funeral" element ={<Funeral/>}/> 
        <Route path ="/booking" element ={<Book/>}/> 
         <Route path ="/users" element ={<UserList/>}/>
        <Route path ="/edit/:id" element ={<Update/>}/> 
        
         
      

      </Routes>

      
    </div>
  );
};

export default App;
