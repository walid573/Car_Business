import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import { FilterAndSearch } from './Component/Filter';
import {TrendingCar } from './Component/TrendingCar';
import { BestSelling } from './Component/BestSelling';
import {Reviews } from './Component/Review';
import { FindVehicles } from './Component/FindVehicals';
import { Footer } from './Component/Footer';


function App() {
  
  return (
    <>
     <Navbar/>
     <Hero/>
     <FilterAndSearch/>
    <TrendingCar/>
    <BestSelling/>
    <Reviews/>

    <FindVehicles/>
    <Footer/>
    </>
  )
}

export default App
