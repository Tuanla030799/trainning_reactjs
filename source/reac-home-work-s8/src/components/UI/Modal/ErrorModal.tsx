import React from "react";
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
  return (
    <div>
      <div className="backdrop"></div>
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
    </div>
  );
};

export default ErrorModal;
