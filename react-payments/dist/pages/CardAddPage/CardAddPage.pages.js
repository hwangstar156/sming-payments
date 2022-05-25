import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "component/common/Header/Header.component";
import LinkButton from "component/common/LinkButton/LinkButton.component";
import PageTitle from "component/common/PageTitle/PageTitle.component";
import PageContainer from "component/common/PageContainer/PageContainer.component";
import ColorBoxModal from "component/ColorBoxModal/ColorBoxModal.component";
import { isEdit } from "util/validator";
import CardAddForm from "component/CardAddForm/CardAddForm.component";
const CardAddPage = () => {
    const [isShowModal, toggleShowModal] = useReducer((isShowModal) => !isShowModal, false);
    const { id } = useParams();
    const navigate = useNavigate();
    return (_jsxs(PageContainer, Object.assign({ type: "add" }, { children: [_jsxs(Header, { children: [_jsx(LinkButton, Object.assign({ onClick: () => {
                            navigate("/");
                        } }, { children: "<" })), _jsx(PageTitle, Object.assign({ styleType: "header" }, { children: isEdit(id) ? "카드 수정" : "카드 추가" }))] }), _jsx(CardAddForm, { id: id, toggleShowModal: toggleShowModal }), isShowModal && _jsx(ColorBoxModal, { toggleModal: toggleShowModal })] })));
};
export default CardAddPage;
//# sourceMappingURL=CardAddPage.pages.js.map