import React from "react";
import { AllFetchingCardDataType, CardDataType, WithRequiredProperty } from "types";
export declare const initCardDataAction: (cardData: AllFetchingCardDataType) => {
    type: "INIT";
    payload: AllFetchingCardDataType;
};
export declare const editCardDataAction: (editedData: WithRequiredProperty<Partial<CardDataType>, "id">) => {
    type: "EDIT";
    payload: WithRequiredProperty<Partial<CardDataType>, "id">;
};
export declare const deletedCardDataAction: ({ id }: {
    id: string;
}) => {
    type: "DELETE";
    payload: {
        id: string;
    };
};
declare type CardDataActions = ReturnType<typeof initCardDataAction> | ReturnType<typeof editCardDataAction> | ReturnType<typeof deletedCardDataAction>;
interface InitialContextValue {
    cardData: AllFetchingCardDataType;
    dispatch: React.Dispatch<CardDataActions>;
}
export declare const CardDataContext: React.Context<InitialContextValue | null>;
declare const CardDataProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export default CardDataProvider;
