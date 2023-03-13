import { Navigate, Outlet } from "react-router-dom";

import { useUser } from "../contexts/UserContext";

const ProtectedPages = () => {
	const { user } = useUser();
	const isAuth = !!user?.accessToken;

	return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedPages;

