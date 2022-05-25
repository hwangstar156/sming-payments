import { CardDataType } from "types";
import React from "react";
export interface CardProps extends Pick<CardDataType, "userName" | "month" | "year" | "cardNumber" | "cardTypeInfo"> {
    onClick?: (e: React.MouseEvent) => void;
    size?: string;
}
declare const Card: ({ userName, month, year, cardNumber, cardTypeInfo, onClick, size, }: CardProps) => JSX.Element;
export default Card;
