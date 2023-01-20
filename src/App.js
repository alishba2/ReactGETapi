
import './App.css';
import Home from './WEBSITE/Home/home';
import User from './WEBSITE/USER/user'
// import Post from './WEBSITE/POST/post'
import {
  BrowserRouter, Routes, Route 
} from 'react-router-dom';
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      
        <Route path="/user" element={<User />}></Route>
        {/* <Route path="/post" element={<Post />}></Route> */}
        {/* <Route path="/post:id" element={<User />}></Route> */}
     
    
    </Routes>
  </BrowserRouter>

  )


  
}

export default App;
