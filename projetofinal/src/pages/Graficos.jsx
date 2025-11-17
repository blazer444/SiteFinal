import Navbar from "../components/Navbar";
import ChartCard from "../components/ChartCard";

export default function Graficos() {
  const labels = [
    "Engenharia de Software 1",
    "Desenv. Web 1",
    "Modelagem Banco de Dados",
    "Sistemas Operacionais e Redes de Computadores",
    "Design Digital",
    "Algoritmos e Lógica de Programação"
  ];

  const charts = [
    { title: "Barra", type: "bar", data: [7.5, 8, 6.5, 8, 9.5, 10] },
    { title: "Linha", type: "line", data: [7.5, 8, 6.5, 8, 9.5, 10] },
    { title: "Torta (Pie)", type: "pie", data: [7.5, 8, 6.5, 8, 9.5, 10] },
    { title: "Barra Horizontal", type: "bar-horizontal", data: [7.5, 8, 6.5, 8, 9.5, 10] },
    { title: "Radar", type: "radar", data: [7.5, 8, 6.5, 8, 9.5, 10] },
    { title: "Barra", type: "bar", data: [7.5, 8, 6.5, 8, 9.5, 10] }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {charts.map((chart, index) => (
          <ChartCard
            key={index}
            title={chart.title}
            type={chart.type}
            data={chart.data}
            labels={labels}
          />
        ))}
      </div>
    </div>
  );
}
