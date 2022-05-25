import { AllCardData, CardDataType } from "types";
export declare const getCardList: () => Promise<AllCardData>;
export declare const registerCard: (data: Omit<CardDataType, "id">) => Promise<void>;
export declare const editCard: <KP extends keyof CardDataType>(id: string, data: Pick<CardDataType, KP>) => Promise<void>;
export declare const deleteCard: (id: string) => Promise<void>;
