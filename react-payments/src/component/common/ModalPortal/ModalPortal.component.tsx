import React from "react";
import ReactDOM from "react-dom";

const ModalPortal = ({
  elementId,
  children,
}: {
  elementId: string;
  children: React.ReactNode;
}) => {
  const modalElement = document.getElementById(elementId) as HTMLElement;
  return ReactDOM.createPortal(children, modalElement);
};

export default ModalPortal;
