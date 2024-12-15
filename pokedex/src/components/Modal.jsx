import ReactDom from "react-dom";

export default function Modal(props) {
  const {children}=props
	return ReactDom.createPortal(
		<div className="modal-container">
			<button onClick={handleCloseModal} className="modal-under-lay">
				<div className="modal-content">{children}</div>
			</button>
		</div>,
		document.getElementById("portal")
	);
}
//3:37:32
