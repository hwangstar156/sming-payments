import { useContext, useReducer } from "react";

import Header from "../../component/common/Header/Header.component";
import LinkButton from "../../component/common/LinkButton/LinkButton.component";
import PageTitle from "../../component/common/PageTitle/PageTitle.component";
import PageContainer from "../../component/common/PageContainer/PageContainer.component";
import ColorBoxModal from "../../component/ColorBoxModal/ColorBoxModal.component";
import CardAddForm from "../../component/CardAddForm/CardAddForm.component";

import { isEdit } from "../../util/validator";
import { PageRouterContext } from "../../provider/PageRouterProvier";

const CardAddPage = () => {
  const pageRouterContext = useContext(PageRouterContext);

  const [isShowModal, toggleShowModal] = useReducer(
    (isShowModal) => !isShowModal,
    false
  );
  const id = undefined;

  if (!pageRouterContext) throw new Error("Cannot find pageRouterContext");
  const { setPath } = pageRouterContext;

  return (
    <PageContainer type="add">
      <Header>
        <LinkButton
          onClick={() => {
            setPath("/");
          }}
        >
          {"<"}
        </LinkButton>
        <PageTitle styleType="header">
          {isEdit(id) ? "카드 수정" : "카드 추가"}
        </PageTitle>
      </Header>
      <CardAddForm id={id} toggleShowModal={toggleShowModal} />
      {isShowModal && <ColorBoxModal toggleModal={toggleShowModal} />}
    </PageContainer>
  );
};

export default CardAddPage;
