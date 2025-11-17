import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";

import Abertura from "./pages/Abertura";
import CadastroPessoal from "./pages/CadastroPessoal";
import CadastroEstudantil from "./pages/CadastroEstudantil";
import CadastroPostal from "./pages/CadastroPostal";
import TabelaDinamica from "./pages/TabelaDinamica";
import Carroussel from "./pages/Carroussel";
import Graficos from "./pages/Graficos";
import LandPage from "./pages/LandPage";
import Localizacao from "./pages/Localizacao";

export default function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Abertura />} />
        <Route path="/cadastro-pessoal" element={<CadastroPessoal />} />
        <Route path="/cadastro-estudantil" element={<CadastroEstudantil />} />
        <Route path="/cadastro-postal" element={<CadastroPostal />} />
        <Route path="/tabela-dinamica" element={<TabelaDinamica />} />
        <Route path="/carroussel/*" element={<Carroussel />} />
        <Route path="/graficos" element={<Graficos />} />
        <Route path="/landpage" element={<LandPage />} />
        <Route path="/localizacao" element={<Localizacao />} />
      </Routes>
    </>
  );
}
