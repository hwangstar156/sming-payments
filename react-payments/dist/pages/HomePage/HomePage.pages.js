import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import CardAddLink from "component/CardAddLink/CardAddLink.component";
import Header from "component/common/Header/Header.component";
import PageContainer from "component/common/PageContainer/PageContainer.component";
import PageTitle from "component/common/PageTitle/PageTitle.component";
import SavedCardList from "component/SavedCardList/SavedCardList.component";
const CardGroup = styled.div `
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
const HomePage = () => {
    return (_jsxs(PageContainer, { children: [_jsx(Header, { children: _jsx(PageTitle, Object.assign({ styleType: "header" }, { children: "\uBCF4\uC720 \uCE74\uB4DC" })) }), _jsxs(CardGroup, { children: [_jsx(SavedCardList, {}), _jsx(CardAddLink, Object.assign({ to: "/add" }, { children: "+" }))] })] }));
};
export default HomePage;
//# sourceMappingURL=HomePage.pages.js.map