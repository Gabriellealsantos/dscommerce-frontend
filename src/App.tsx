import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import Catalog from "./routes/ClientHome/Catalog";
import ProudctDetails from "./routes/ClientHome/ProductDetails";



export default function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Catalog />} /> 
          <Route path="product-details" element={<ProudctDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


