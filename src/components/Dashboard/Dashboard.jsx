import "./Dashboard.css";
import { Outlet } from "react-router-dom";
import { Header, Main, Sidebar } from "..";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Sidebar />
			<Main>
				<Header />
				<Outlet />
			</Main>
		</div>
	);
};

export default Dashboard;
