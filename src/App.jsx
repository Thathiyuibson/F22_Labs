import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Careers from "./pages/Careers/Careers";
import Singlecareer from './pages/Singlecareer/Singlecareer';
import Allblogs from "./pages/Allblogs/Allblogs";
import Singleblog from "./pages/Singleblog/Singleblog";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import './app.scss'


const Layout = () => {
  return(
    <div className="app">
      {/* <Navbar/> */}
      <Outlet/>
      {/* <Footer/> */}
    </div>
  );
};



const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Landing/>
      },
      {
        path: '/careers',
        element: <Careers/>
      },
      {
        path: '/career/:id',
        element: <Singlecareer />
      },
      {
        path: '/allblogs',
        element: <Allblogs/>
      },
      {
        path: '/singleblog/:id',
        element: <Singleblog/> 
      }
    ]
  }
])


function App() {
  return ( 
  <div>
    <RouterProvider router={router}/>
  </div>
  );
}

export default App;
