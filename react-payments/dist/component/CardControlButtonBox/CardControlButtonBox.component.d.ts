/// <reference types="react" />
import { CardControlModalProps } from "component/CardControlModal/CardControlModal";
export interface CardControlButtonBoxProps extends Pick<CardControlModalProps, "handleDeleteCard" | "handleEditCard"> {
}
declare const CardControlButtonBox: ({ handleEditCard, handleDeleteCard, }: CardControlButtonBoxProps) => JSX.Element;
export default CardControlButtonBox;
