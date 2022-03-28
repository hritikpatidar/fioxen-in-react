
import './App.css';
import Home from './pages/Home';
import ListingList from './pages/ListingList';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Error404 from './component/Error404';
import About from './pages/About';
import ListingGrid from './pages/ListingGrid';
import ListingMap from './pages/ListingMap';
import ListingDetailsOne from './pages/ListingDetailsOne';
import ListingDetailsTwo from './pages/ListingDetailsTwo';
import AddListing from './pages/AddListing';
import Products from './pages/Products';
import ProductsDetails from './pages/ProductsDetails';
import HowWork from './pages/HowWork';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/listing-list" element={<ListingList />} />
          <Route path="/about" element={<About />} />
          <Route path="/listing-grid" element={<ListingGrid />} />
          <Route path="/listing-map" element={<ListingMap />} />
          <Route path="/listing-details-1" element={<ListingDetailsOne />} />
          <Route path="/listing-details-2" element={<ListingDetailsTwo />} />
          <Route path="/add-listing" element={<AddListing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-details" element={<ProductsDetails />} />
          <Route path="/how-work" element={<HowWork />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
