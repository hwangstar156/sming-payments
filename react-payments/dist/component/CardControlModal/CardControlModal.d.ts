import { DispatchWithoutAction } from "react";
export interface CardControlModalProps {
    toggleModal: DispatchWithoutAction;
    type?: string;
    handleEditCard: () => void;
    handleDeleteCard: () => Promise<void>;
}
declare const CardControlModal: ({ toggleModal, type, handleEditCard, handleDeleteCard, }: CardControlModalProps) => JSX.Element;
export default CardControlModal;
