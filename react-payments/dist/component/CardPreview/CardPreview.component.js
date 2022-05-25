var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "component/common/Card/Card.component";
import CardNameInput from "component/CardNameInput/CardNameInput.component";
import MessageBox from "component/common/MessageBox/MessageBox.component";
import CardControlModal from "component/CardControlModal/CardControlModal";
import Box from "styles/box";
import useReady from "hooks/useReady";
import { isDuplicatedCardName, isInvalidCardName } from "util/validator";
import { CardDataContext, deletedCardDataAction, editCardDataAction, } from "provider/CardDataProvider";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "constants/index";
import { deleteCard, editCard } from "api/cardApi";
import { RowFlexWrapper } from "styles/wrapper";
import { ColumnFlexWrapper } from "../../styles/wrapper";
import { ErrorContext } from "provider/ErrorContext";
const CardNameText = styled(RowFlexWrapper) `
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.cardText};
  text-align: center;
  opacity: 90%;
`;
const CardNameEditButton = styled.button `
  font-size: 14px;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
const ConfirmButton = styled.button `
  font-size: 12px;
  border: none;
  padding: 5px 7px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.confirmButton};
  &:hover {
    background-color: ${({ theme }) => theme.colors.confirmButtonHover};
  }
  &:disabled {
    background-color: #f0f0f0;
    cursor: auto;
  }
`;
const CardPreview = memo(({ cardDatum }) => {
    const cardDataContext = useContext(CardDataContext);
    const errorContext = useContext(ErrorContext);
    if (!cardDataContext)
        throw new Error("Cannot find cardDataContext");
    if (!errorContext)
        throw new Error("Cannot find errorContext");
    const { cardData, dispatch } = cardDataContext;
    const { setError } = errorContext;
    const [newCardName, setNewCardName] = useState("");
    const [newCardNameLengthReady] = useReady(newCardName, isInvalidCardName);
    const [uniqueNewCardNameReady] = useReady(newCardName, isDuplicatedCardName, cardData);
    const { id } = cardDatum;
    const { cardName } = cardDatum.attributes;
    const [editOn, setEditOn] = useState(false);
    const [isShowModal, toggleModal] = useReducer((prev) => !prev, false);
    const navigate = useNavigate();
    const handleEditCard = () => {
        navigate(`add/${id}`);
    };
    const handleEditFormOn = () => {
        setEditOn(true);
    };
    const handleSubmitEditedName = () => __awaiter(void 0, void 0, void 0, function* () {
        dispatch(editCardDataAction({ id, cardName: newCardName }));
        try {
            yield editCard(id, { cardName: newCardName });
        }
        catch (err) {
            if (err instanceof Error) {
                setError(err);
            }
        }
        closeEditForm();
    });
    const handleDeleteCard = () => __awaiter(void 0, void 0, void 0, function* () {
        dispatch(deletedCardDataAction({ id }));
        try {
            yield deleteCard(id);
        }
        catch (err) {
            if (err instanceof Error) {
                setError(err);
            }
        }
    });
    const closeEditForm = () => {
        setEditOn(false);
    };
    const onChange = (e) => {
        setNewCardName(e.target.value);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Card, Object.assign({ onClick: toggleModal }, cardDatum.attributes)), _jsx(CardNameText, Object.assign({ gap: "8" }, { children: editOn ? (_jsxs(ColumnFlexWrapper, Object.assign({ gap: "5" }, { children: [_jsxs(Box, Object.assign({ gap: "10px", display: "flex", justifyContent: "center", alignItems: "center", mt: "5px" }, { children: [_jsx(CardNameInput, { styleSize: "small", value: newCardName, onChange: onChange }), _jsx(ConfirmButton, Object.assign({ onClick: handleSubmitEditedName, disabled: !(newCardNameLengthReady && uniqueNewCardNameReady) }, { children: "\uC218\uC815" })), _jsx(ConfirmButton, Object.assign({ onClick: closeEditForm }, { children: "X" }))] })), !newCardNameLengthReady && (_jsx(MessageBox, Object.assign({ styleType: "error" }, { children: ERROR_MESSAGE["card-name-length"] }))), !uniqueNewCardNameReady && (_jsx(MessageBox, Object.assign({ styleType: "error" }, { children: ERROR_MESSAGE["unique-card-name"] }))), newCardNameLengthReady && uniqueNewCardNameReady && (_jsx(MessageBox, Object.assign({ styleType: "success" }, { children: SUCCESS_MESSAGE })))] }))) : (_jsxs(_Fragment, { children: [_jsx("p", { children: cardName }), _jsx(CardNameEditButton, Object.assign({ onClick: handleEditFormOn }, { children: "\u270F\uFE0F" }))] })) })), isShowModal && (_jsx(CardControlModal, { toggleModal: toggleModal, type: "edit", handleEditCard: handleEditCard, handleDeleteCard: handleDeleteCard }))] }));
});
export default CardPreview;
//# sourceMappingURL=CardPreview.component.js.map