import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ScrollToTop } from "./components/layout/ScrollToTop";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/company/About";
import { GlobalPresence } from "./pages/company/GlobalPresence";
import { History } from "./pages/company/History";

// Services
import { Comex } from "./pages/services/Comex";
import { Manufacturing } from "./pages/services/Manufacturing";
import { ValueAdded } from "./pages/services/ValueAdded";
import { Warehousing } from "./pages/services/Warehousing";
import { Distribution } from "./pages/services/Distribution";
import { Courier } from "./pages/services/Courier";

// Industries
import { FoodAndBeverage } from "./pages/industries/FoodAndBeverage";
import { Beauty } from "./pages/industries/Beauty";
import { Fashion } from "./pages/industries/Fashion";
import { Construction } from "./pages/industries/Construction";
import { HomeCare } from "./pages/industries/HomeCare";
import { Editorial } from "./pages/industries/Editorial";
import { Pharma } from "./pages/industries/Pharma";
import { Industrial } from "./pages/industries/Industrial";
import { Chemicals } from "./pages/industries/Chemicals";
import { Retail } from "./pages/industries/Retail";
import { Tech } from "./pages/industries/Tech";

// Ethics
import { CodeOfEthics } from "./pages/ethics/CodeOfEthics";
import { EthicsLine } from "./pages/ethics/EthicsLine";
import { Sustainability } from "./pages/ethics/Sustainability";

// Contact
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Empresa */}
          <Route path="/empresa/sobre-nosotros" element={<About />} />
          <Route path="/empresa/presencia-global" element={<GlobalPresence />} />
          <Route path="/empresa/historia" element={<History />} />
          
          {/* Servicios */}
          <Route path="/servicios/comercio-exterior" element={<Comex />} />
          <Route path="/servicios/manufactura" element={<Manufacturing />} />
          <Route path="/servicios/valor-agregado" element={<ValueAdded />} />
          <Route path="/servicios/almacenamiento" element={<Warehousing />} />
          <Route path="/servicios/distribucion" element={<Distribution />} />
          <Route path="/servicios/courier-express" element={<Courier />} />

          {/* Industrias */}
          <Route path="/industrias/alimentos-y-bebidas" element={<FoodAndBeverage />} />
          <Route path="/industrias/belleza-y-cuidado-personal" element={<Beauty />} />
          <Route path="/industrias/calzado-y-moda" element={<Fashion />} />
          <Route path="/industrias/construccion" element={<Construction />} />
          <Route path="/industrias/cuidado-del-hogar" element={<HomeCare />} />
          <Route path="/industrias/editorial" element={<Editorial />} />
          <Route path="/industrias/farmaceutica" element={<Pharma />} />
          <Route path="/industrias/manufactura-industrial" element={<Industrial />} />
          <Route path="/industrias/quimica" element={<Chemicals />} />
          <Route path="/industrias/retail" element={<Retail />} />
          <Route path="/industrias/tecnologia-y-electronica" element={<Tech />} />

          {/* Ética y Sostenibilidad */}
          <Route path="/etica/codigo-de-etica" element={<CodeOfEthics />} />
          <Route path="/etica/linea-de-etica" element={<EthicsLine />} />
          <Route path="/etica/rse-sostenibilidad" element={<Sustainability />} />

          {/* Contacto */}
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
