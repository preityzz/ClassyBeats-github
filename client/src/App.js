import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import PDone from "./components/PDone/PDone";
import PFail from "./components/PFail/PFail";
import Gifts from "./components/Gifts/Gifts";
import Orders from "./components/Orders/Orders";
import About from "./components/About/About";




function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                     <Route path="/success" element={<PDone />} />
                     <Route path="/failed" element={<PFail />} />
                     <Route path="/gifts" element={<Gifts />} />
                     <Route path="/orders" element={<Orders />} />
                     <Route path="/about" element={<About />} />

                     


                     
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
