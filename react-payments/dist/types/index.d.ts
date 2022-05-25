export interface CardDataType {
    id: string;
    cardNumber: SeveralInputType;
    cardPassword: SeveralInputType;
    securityCode: SecurityCodeType;
    userName: UserNameType;
    cardName: CardNameType;
    month: string;
    year: string;
    cardTypeInfo: CardTypeInfoType;
}
export declare type AllCardData = {
    [key: string]: CardDataType;
};
export interface FetchingCardDataType {
    id: string;
    attributes: Omit<CardDataType, "id">;
}
export declare type AllFetchingCardDataType = {
    [key: string]: FetchingCardDataType;
};
export declare type SeveralInputType = {
    [key: string]: string;
};
export declare type SecurityCodeType = string;
export declare type UserNameType = string;
export declare type CardNameType = string;
export declare type CardType = "defaultCard" | "pocoCard" | "junCard" | "gongwonCard" | "branCard" | "roidCard" | "dobbyCard" | "collinCard" | "sunCard";
export declare type CardTypeInfoType = {
    cardName: string;
    cardType: CardType;
};
export declare type WithRequiredProperty<Type, P extends keyof Type> = Type & {
    [Property in P]-?: Type[Property];
};
export declare type WithoutMappedProperty<Type, P extends keyof Type, MappedType> = Type & {
    [Property in P]: MappedType;
};
export declare enum CardNumberEnum {
    first = 1,
    second = 2,
    third = 3,
    fourth = 4
}
export declare enum FormTypeEnum {
    "expire-date" = "expire-date",
    "security-code" = "security-code",
    "card-password" = "card-password",
    "card-number" = "card-number",
    "user-name" = "user-name"
}
export declare const getProperty: <T, K extends keyof T>(object: T, propertyName: K) => T[K];
