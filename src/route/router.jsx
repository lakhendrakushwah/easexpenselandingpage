import { Route, Routes } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

// Page
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Customer from "../pages/Customer";
import TermsAndConditions from "../pages/TermsAndConditions"
import About from "../components/About";

export default function router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="customer" element={<Customer />} />
        <Route path="about" element={<About />} />
        <Route path="termsandconditions" element={<TermsAndConditions />} />
      </Route>
    </Routes>
  )
}
