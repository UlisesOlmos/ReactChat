import "./FormMessage.css";
import { IoSend, IoImageOutline } from "react-icons/io5";
import useAddMessages from "../../hooks/useAddMessages";

const FormMessage = () => {
	const { saveMessage, saveImageMessage } = useAddMessages();


	const sendTextMsg = (ev) => {
		const msg = document.getElementById("message__input").textContent.trim().replace(/\s+/g," ");
		if (msg) {
			saveMessage(msg);
			document.getElementById("message__input").textContent = "";
		}
	};

	const MediaFileSelected = (ev) => {
		const img = ev.target.files[0];

		document.querySelector(".forms__image").reset();

		if (!img.type.match("image.*")) return;

		saveImageMessage(img);
	};

	return (
		<div className="forms">
			<div className="forms__container">
				<div className="forms__message">
					<p
						id="message__input"
						name="text-msg"
						contentEditable
						
					></p>
					<button id="send__message" onClick={()=>sendTextMsg()}>
						<IoSend />
					</button>
				</div>

				<form className="forms__image" onSubmit={(ev) => ev.preventDefault()}>
					<label htmlFor="message__media" className="label__media">
						<IoImageOutline />
						<input
							type={"file"}
							id="message__media"
							accept="image/*"
							name="img-msg"
							onChange={(ev) => MediaFileSelected(ev)}
						></input>
					</label>
				</form>
			</div>
		</div>
	);
};

export default FormMessage;
