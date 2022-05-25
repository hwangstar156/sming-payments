import { DispatchWithoutAction } from "react";
export interface CardAddFormProps {
    toggleShowModal: DispatchWithoutAction;
    id: string | undefined;
}
declare const CardAddForm: ({ toggleShowModal, id }: CardAddFormProps) => JSX.Element;
export default CardAddForm;
