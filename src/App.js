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
import Resources from "./components/Resources";
import Contact from './components/Contact'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path ="/wedding" element ={<Wedding/>}/>
        <Route path ="/resources" element ={<Resources/>}/>
        <Route path ="/about" element ={<About/>}/>
        <Route path ="/contact" element ={<Contact/>}/>
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
