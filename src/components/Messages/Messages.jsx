import useGetMessages from "../../hooks/useGetMessages";
import { Message } from "..";
import "./Messages.css";
import { useEffect } from "react";
import { scrollMessagesBottom } from "../../utilities/scrollBottom";

const Messages = () => {
	const { messages } = useGetMessages();


	useEffect(() => {
		if (document.readyState === "complete") scrollMessagesBottom();
	}, []);

	return (
		<>
			<div className="messages">
				{messages.length < 1
					? null
					: messages.map((msg, i) => <Message data={msg} key={i} />)}
			</div>
		</>
	);
};

export default Messages;
