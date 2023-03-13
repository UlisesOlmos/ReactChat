import { useState, createContext, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [authError, setAuthError] = useState("");

	return (
		<UserContext.Provider value={{ user, setUser, authError, setAuthError }}>
			{children}
		</UserContext.Provider>
	);
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
