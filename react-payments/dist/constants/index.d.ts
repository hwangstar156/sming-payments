export declare const cardInfos: readonly [{
    readonly cardName: "포코 카드";
    readonly cardType: "pocoCard";
}, {
    readonly cardName: "준 카드";
    readonly cardType: "junCard";
}, {
    readonly cardName: "공원 카드";
    readonly cardType: "gongwonCard";
}, {
    readonly cardName: "브랜 카드";
    readonly cardType: "branCard";
}, {
    readonly cardName: "로이드 카드";
    readonly cardType: "roidCard";
}, {
    readonly cardName: "도비 카드";
    readonly cardType: "dobbyCard";
}, {
    readonly cardName: "콜린 카드";
    readonly cardType: "collinCard";
}, {
    readonly cardName: "썬 카드";
    readonly cardType: "sunCard";
}];
export declare const defaultCardInfo: {
    readonly cardName: "";
    readonly cardType: "defaultCard";
};
export declare const MAX_LENGTH: {
    CARD_NUMBER: number;
    CARD_PASSWORD: number;
    EXPIRE_DATE: number;
    SECURITY_CODE: number;
    USER_NAME: number;
    CARD_NAME: number;
};
export declare const MIDDLE_CARD_NUMBER_LENGTH = 2;
export declare const MAX_MONTH = 12;
export declare const HELP_MESSAGE = "\uCE74\uB4DC \uB4B7\uBA74\uC758 3\uC790\uB9AC \uC22B\uC790\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.";
export declare const ERROR_MESSAGE: {
    "card-number": string;
    "unique-card-name": string;
    "expire-date": string;
    "security-code": string;
    "card-password": string;
    "card-name-length": string;
};
export declare const REDUCER_TYPE: {
    readonly EDIT: "EDIT";
    readonly DELETE: "DELETE";
    readonly INIT: "INIT";
};
export declare const SUCCESS_MESSAGE = "\uC131\uACF5\uC801\uC73C\uB85C \uC785\uB825\uB410\uC2B5\uB2C8\uB2E4";
export declare const API_URL = "https://jungmin-react-payment.herokuapp.com";
