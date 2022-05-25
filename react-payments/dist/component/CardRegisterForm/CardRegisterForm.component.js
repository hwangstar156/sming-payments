var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CardNameInput from "component/CardNameInput/CardNameInput.component";
import Card from "component/common/Card/Card.component";
import LinkButton from "component/common/LinkButton/LinkButton.component";
import MessageBox from "component/common/MessageBox/MessageBox.component";
import PageTitle from "component/common/PageTitle/PageTitle.component";
import { CardDataContext } from "provider/CardDataProvider";
import { CardNumberContext } from "provider/CardNumberProvider";
import { CardPasswordContext } from "provider/CardPasswordProvider";
import { CardTypeContext } from "provider/CardTypeProvider";
import { ExpireDateContext } from "provider/ExpireDateProvider";
import { SecurityCodeContext } from "provider/SecurityCodeProvider";
import { UserNameContext } from "provider/UserNameProvider";
import { isDuplicatedCardName, isInvalidCardName } from "util/validator";
import { registerCard } from "api/cardApi";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "constants/index";
import useReady from "hooks/useReady";
import { ErrorContext } from "provider/ErrorContext";
const CardRegisterGroup = styled.div `
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin: auto;
`;
const Form = styled.form `
  display: flex;
  flex-direction: column;
`;
const CardRegisterForm = () => {
    const cardTypeContext = useContext(CardTypeContext);
    const cardNumberContext = useContext(CardNumberContext);
    const expireDateContext = useContext(ExpireDateContext);
    const userNameContext = useContext(UserNameContext);
    const securityCodeContext = useContext(SecurityCodeContext);
    const cardPasswordContext = useContext(CardPasswordContext);
    const cardDataContext = useContext(CardDataContext);
    const errorContext = useContext(ErrorContext);
    if (!cardNumberContext)
        throw new Error("Cannot find CardNumberContext");
    if (!cardTypeContext)
        throw new Error("Cannot find CardTypeContext");
    if (!expireDateContext)
        throw new Error("Cannot find ExpireDateContext");
    if (!userNameContext)
        throw new Error("Cannot find UserNameContext");
    if (!securityCodeContext)
        throw new Error("Cannot find SecurityCodeContext");
    if (!cardPasswordContext)
        throw new Error("Cannot find CardPasswordContext");
    if (!cardDataContext)
        throw new Error("Cannot find CardDataContext");
    if (!errorContext)
        throw new Error("Cannot find ErrorContext");
    const { state: { cardTypeInfo }, action: { resetCardTypeInfo }, } = cardTypeContext;
    const { state: { cardNumber }, action: { resetCardNumber }, } = cardNumberContext;
    const { state: { expireDate }, action: { resetExpireDate }, } = expireDateContext;
    const { state: { userName }, action: { resetUserName }, } = userNameContext;
    const { state: { securityCode }, action: { resetSecurityCode }, } = securityCodeContext;
    const { state: { cardPassword }, action: { resetCardPassword }, } = cardPasswordContext;
    const { cardData } = cardDataContext;
    const { setError } = errorContext;
    const [cardName, setCardName] = useState("");
    const [cardNameLengthReady] = useReady(cardName, isInvalidCardName);
    const [uniqueCardNameReady] = useReady(cardName, isDuplicatedCardName, cardData);
    const navigate = useNavigate();
    useEffect(() => {
        if (securityCode === "") {
            navigate("/");
        }
    }, [navigate, securityCode]);
    const handleSubmitCardData = () => __awaiter(void 0, void 0, void 0, function* () {
        resetCardNumber();
        resetCardPassword();
        resetCardTypeInfo();
        resetExpireDate();
        resetUserName();
        resetSecurityCode();
        try {
            yield registerCard({
                month: expireDate.month,
                year: expireDate.year,
                userName,
                cardTypeInfo,
                cardName,
                cardNumber,
                securityCode,
                cardPassword,
            });
        }
        catch (err) {
            if (err instanceof Error) {
                setError(err);
            }
        }
    });
    const onChangeCardName = (e) => {
        setCardName(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmitCardData();
    };
    return (_jsxs(Form, Object.assign({ onSubmit: onSubmit }, { children: [_jsxs(CardRegisterGroup, { children: [_jsx(PageTitle, { children: "\uCE74\uB4DC \uB4F1\uB85D\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4." }), _jsx(Card, { size: "big", cardNumber: cardNumber, cardTypeInfo: cardTypeInfo, month: expireDate.month, year: expireDate.year, userName: userName }), _jsx(CardNameInput, { value: cardName, onChange: onChangeCardName, ready: cardNameLengthReady && uniqueCardNameReady }), !cardNameLengthReady && (_jsx(MessageBox, Object.assign({ styleType: "error" }, { children: ERROR_MESSAGE["card-name-length"] }))), !uniqueCardNameReady && (_jsx(MessageBox, Object.assign({ styleType: "error" }, { children: ERROR_MESSAGE["unique-card-name"] }))), cardNameLengthReady && uniqueCardNameReady && (_jsx(MessageBox, Object.assign({ styleType: "success" }, { children: SUCCESS_MESSAGE })))] }), cardNameLengthReady && uniqueCardNameReady && (_jsx(LinkButton, Object.assign({ type: "submit" }, { children: "\uD655\uC778" })))] })));
};
export default CardRegisterForm;
//# sourceMappingURL=CardRegisterForm.component.js.map