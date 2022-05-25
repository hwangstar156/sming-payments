export var CardNumberEnum;
(function (CardNumberEnum) {
    CardNumberEnum[CardNumberEnum["first"] = 1] = "first";
    CardNumberEnum[CardNumberEnum["second"] = 2] = "second";
    CardNumberEnum[CardNumberEnum["third"] = 3] = "third";
    CardNumberEnum[CardNumberEnum["fourth"] = 4] = "fourth";
})(CardNumberEnum || (CardNumberEnum = {}));
export var FormTypeEnum;
(function (FormTypeEnum) {
    FormTypeEnum["expire-date"] = "expire-date";
    FormTypeEnum["security-code"] = "security-code";
    FormTypeEnum["card-password"] = "card-password";
    FormTypeEnum["card-number"] = "card-number";
    FormTypeEnum["user-name"] = "user-name";
})(FormTypeEnum || (FormTypeEnum = {}));
export const getProperty = (object, propertyName) => {
    return object[propertyName];
};
//# sourceMappingURL=index.js.map