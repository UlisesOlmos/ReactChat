import "./Header.css";
import { useTheme } from "../../contexts/ThemeContext";
import { RiMoonLine,RiSunLine ,RiMenuLine} from "react-icons/ri";
import { handleMenu } from "../../utilities/handleMenu";
import { useRoom } from "../../contexts/RoomContext";

const Header = () => {
	const { changeTheme ,theme} = useTheme();
	const themesIcons = { light: <RiSunLine/>, dark: <RiMoonLine/> };
	const {room} = useRoom()


	return (
		<header className="header">
			<button onClick={()=> handleMenu()} className="menu__btn"><RiMenuLine/></button>
			<p className="channel__name">{`Channel #${room}`}</p>
			<button onClick={() => changeTheme()} className="theme__btn">{themesIcons[theme]}</button>
		</header>
	);
};

export default Header;
