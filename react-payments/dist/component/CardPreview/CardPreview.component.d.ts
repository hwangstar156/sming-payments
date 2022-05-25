import React from "react";
import { FetchingCardDataType } from "types";
export interface CardPreviewProps {
    cardDatum: FetchingCardDataType;
}
declare const CardPreview: React.MemoExoticComponent<({ cardDatum }: CardPreviewProps) => JSX.Element>;
export default CardPreview;
