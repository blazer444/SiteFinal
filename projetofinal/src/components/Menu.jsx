import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="p-4 flex gap-4 flex-wrap bg-gradient-to-r from-lime-600 to-green-400">
            <Link className="text-white font-semibold transition-all duration-200 hover:text-yellow-300 hover:scale-110" to="/">Abertura</Link>
            <Link className="text-white font-semibold transition-all duration-200 hover:text-yellow-300 hover:scale-110" to="/cadastro-pessoal">Cadastro Pessoal</Link>
            <Link className="text-white font-semibold transition-all duration-200 hover:text-yellow-300 hover:scale-110" to="/cadastro-estudantil">Cadastro Estudantil</Link>
            <Link className="text-white font-semibold transition-all duration-200 hover:text-yellow-300 hover:scale-110" to="/cadastro-postal">Cadastro Postal</Link>
            <Link className="text-white font-semibold transition-all duration-200 hover:text-yellow-300 hover:scale-110" to="/tabela-dinamica">Tabela Dinâmica</Link>
            <Link className="text-white font-semibold transition-all duration-200 hover:text-yellow-300 hover:scale-110" to="/carroussel">Carroussel</Link>
            <Link className="text-white font-semibold transition-all duration-200 hover:text-yellow-300 hover:scale-110" to="/graficos">Gráficos</Link>
            <Link className="text-white font-semibold transition-all duration-200 hover:text-yellow-300 hover:scale-110" to="/landpage">LandPage</Link>
            <Link className="text-white font-semibold transition-all duration-200 hover:text-yellow-300 hover:scale-110" to="/localizacao">Localização</Link>
        </nav>
    );
}
