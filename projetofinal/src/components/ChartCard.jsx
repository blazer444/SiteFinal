import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, RadialLinearScale, Title, Tooltip, Legend } from "chart.js";
import { Bar, Pie, Line, Radar } from "react-chartjs-2";

ChartJS.register( CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, RadialLinearScale, Title, Tooltip, Legend );

export default function ChartCard({ title, type, data, labels }) {
    const chartData = {
        labels,
        datasets: [
            {
                label: "Notas",
                data,
                backgroundColor: [
                    "rgba(37, 99, 235, 0.6)",
                    "rgba(16, 185, 129, 0.6)",
                    "rgba(234, 179, 8, 0.6)",
                    "rgba(239, 68, 68, 0.6)",
                    "rgba(147, 51, 234, 0.6)",
                ],
                borderColor: "rgba(255,255,255,0.8)",
                borderWidth: 2,
                fill: true,
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: title },
        },
        scales:
            type === "bar-horizontal"
                ? {
                    x: { beginAtZero: true, max: 10 },
                }
                : type === "bar"
                    ? {
                        y: { beginAtZero: true, max: 10 },
                    }
                    : {},
        indexAxis: type === "bar-horizontal" ? "y" : "x",
    };

    let ChartComponent;
    switch (type) {
        case "pie":
            ChartComponent = <Pie data={chartData} options={options} />;
            break;
        case "radar":
            ChartComponent = <Radar data={chartData} options={options} />;
            break;
        case "line":
            ChartComponent = <Line data={chartData} options={options} />;
            break;
        case "bar-horizontal":
            ChartComponent = <Bar data={chartData} options={options} />;
            break;
        default:
            ChartComponent = <Bar data={chartData} options={options} />;
            break;
    }

    return (
        <div className="bg-white p-2 rounded-2xl shadow w-full">
            {ChartComponent}
        </div>
    );
}
