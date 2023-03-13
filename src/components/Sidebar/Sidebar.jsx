import "./Sidebar.css";
import { useUser } from "../../contexts/UserContext";
import useAuth from "../../hooks/useAuth";
import { MdLogout, MdClose } from "react-icons/md";
import { handleMenu } from "../../utilities/handleMenu";
import SidebarNav from "../SidebarNav/SidebarNav";

const Sidebar = () => {
	const { user } = useUser();
	const { signout } = useAuth();

	return (
		<div className="sidebar">
			<div className="sidebar__content">
				<h1 className="logo">CHAT</h1>
				<button onClick={() => handleMenu()} className="close__menu">
					<MdClose />
				</button>
				
				<SidebarNav/>

				<div className="user__options">
					<div className="user__info">
						<img className="user__img" src={user?.photoURL} alt="user"></img>
						<p className="user__name">{user?.displayName}</p>
					</div>
					<button className="logout__btn" onClick={() => signout()}>
						<MdLogout />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
