/// <reference types="react" />
import { CardControlModalProps } from "component/CardControlModal/CardControlModal";
export interface ModalProps extends Pick<CardControlModalProps, "toggleModal"> {
    children: React.ReactNode;
    styleType?: string;
}
declare const Modal: ({ toggleModal, children, styleType }: ModalProps) => JSX.Element;
export default Modal;
