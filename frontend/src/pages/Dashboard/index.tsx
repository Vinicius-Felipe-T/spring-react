import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import NavBar from "components/NavBar";
import Rodape from "components/Rodape";
import RoscaChart from "components/RoscaChart";

function Dashboard() {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas as vendas</h5>
                        <RoscaChart />
                    </div>
                </div>

                <div>
                    <h2 className="text-primary py-3">Todas as vendas</h2>
                </div>
                <DataTable />
            </div>
            <Rodape />
        </>
    );
}

export default Dashboard;