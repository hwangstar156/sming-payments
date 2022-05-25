import { CardDataType, CardType, SecurityCodeType, SeveralInputType } from "types";
export declare const isOverMaxLength: (target: HTMLInputElement, maxLength: number) => boolean;
export declare const isInValidExpireDate: (expireDate: SeveralInputType) => boolean;
export declare const isInValidCardPassword: (cardPassword: SeveralInputType) => boolean;
export declare const isCompletePasswordInput: (cardPassword: SeveralInputType) => boolean;
export declare const isInValidCardNumber: (cardNumber: SeveralInputType) => boolean;
export declare const isInValidCardType: (cardType: CardType) => boolean;
export declare const isInValidSecurityCode: (securityCode: SecurityCodeType) => boolean;
export declare const isAllInputReady: ({ cardNumberReady, expireDateReady, securityCodeReady, cardPasswordReady, cardTypeReady, }: {
    [key: string]: boolean;
}) => boolean;
export declare const isInvalidCardName: (cardName: string) => boolean;
export declare const isDuplicatedCardName: (newCardName: string, cardData: CardDataType) => boolean;
export declare const isEdit: (id: undefined | string) => boolean;
