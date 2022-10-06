
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useLocation } from 'react-router-dom';



import Navbar from './components/Header/Navbar.jsx';
import { Home, Profile, SPP, Cart, Shops, MobileSearch, ProductDetail } from "./containers";
import { BottomNav, Footer } from "./components";



export default function App() {
  let location = useLocation();

  if (location.pathname === '/spp') {
    return (
      <SPP />
    )
  } else {
    return (
      <>
        {location.pathname !== '/mobilesearch' ? <Navbar /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/spp" element={<SPP />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/mobilesearch" element={<MobileSearch />} />
          <Route path="/productdetail" element={<ProductDetail />} />
        </Routes>
        <Footer />
        <BottomNav />
      </>
    );
  }

}




// import './App.css';
// import {
//   Routes,
//   Route,
// } from "react-router-dom";
// import { useLocation } from 'react-router-dom';



// import Navbar from './components/Header/Navbar.jsx';
// import { Home, Profile, SPP, Cart, Shops } from "./containers";
// import BottomNav from "./components/BottomNav";

// const ROUTES = {
//   home: {  element: Home, path: "/" },
//   profile: {  element: Profile, path: "/profile" },
//   spp: {  element: SPP, path: "/spp" },
//   cart: {  element: Cart, path: "/cart" },
//   shops: {  element: Shops, path: "/shops" }
// }


// export default function App() {
//   let location = useLocation();

//   if (location.pathname === '/spp') {
//     return (
//       <SPP />
//     )
//   } else {
//     return (
//       <>
//         <Navbar />
//         <Routes>
//           {Object.entries(ROUTES).map(route => {
//             const value = route
//             const TopLevelComponent = value.element
//             return (
//               <Route
//                 key={value.id}
//                 path={value.path}
//                 element={<TopLevelComponent />}
//               />
//             )
//           })}
//         </Routes>
//         <BottomNav />
//       </>
//     );
//   }

// }