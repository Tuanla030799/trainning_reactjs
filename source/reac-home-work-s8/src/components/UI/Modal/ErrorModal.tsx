import React from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";
import Button from "../Button/Button";
import Card from "../Card/Card";

export interface ModalError {
  title: string;
  message: string;
}

type Props = {
  modalError: ModalError;
  onSubmit: Function;
};

const ErrorModal = (props: Props) => {
  const handleSubmitModel = () => {
    props.onSubmit();
  };

  const Backdrop = () => {
    return <button className="backdrop" onClick={handleSubmitModel}></button>;
  };

  const ModalOverlay = (props: Props) => {
    return (
      <Card className="error-modal">
        <header className="error-modal__header">
          <h2>{props.modalError.title}</h2>
        </header>
        <div className="error-modal__content">
          <p>{props.modalError.message}</p>
        </div>
        <footer className="error-modal__footer">
          <Button onClick={handleSubmitModel}>Okie</Button>
        </footer>
      </Card>
    );
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          modalError={props.modalError}
          onSubmit={props.onSubmit}
        />,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default ErrorModal;
