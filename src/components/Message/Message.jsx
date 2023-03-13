import "./Message.css";
import { useUser } from "../../contexts/UserContext";
import { scrollMessagesBottom } from "../../utilities/scrollBottom";

const Message = ({ data }) => {
	const LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif?a'
	const { user } = useUser();
	

	return (
		<div className={user.uid === data.userId ? "message__container my-msg" : "message__container"}>
			<img className="message__pic" src={data.profilePicUrl} alt="profile img"></img>
			<div className="message">
				{data.text ? (
					<p className="message__text">{data.text}</p>
				) : (
					data.imageUrl === LOADING_IMAGE_URL ?
					<span className="load__img"></span> :
					<img src={data.imageUrl} className="message__img" loading="lazy" onLoad={(ev)=> ev.target.complete ? scrollMessagesBottom() : null} alt="message img"></img>
				)}
			</div>
			<p className="message__name">{data.name}</p>
		</div>
	);
};

export default Message;
