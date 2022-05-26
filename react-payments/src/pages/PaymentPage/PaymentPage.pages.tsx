import TermsOfUseContainer from "../../component/TermsOfUseContainer/TermsOfUseContainer";
import TotalPaymentContainer from "../../component/TotalPaymentContainer/TotalPaymentContainer";
import CardSlider from "../../component/CardSlider/CardSlider";
import { RowFlexWrapper } from "../../styles/wrapper";
import PaymentButton from "../../component/PaymentButton/PaymentButton.component";
import React, { useState } from "react";
import PageContainer from "../../component/common/PageContainer/PageContainer.component";

function PaymentPage({
  price,
  toggleModal,
}: {
  price: number;
  toggleModal: React.DispatchWithoutAction;
}) {
  const [checked, setChecked] = useState<boolean>(false);

  const onClickPayButton = () => {
    alert(`${price}원이 결제되었습니다`);
    toggleModal();
  };

  const onClickCancelButton = () => {
    toggleModal();
  };

  return (
    <PageContainer gap="50px">
      <CardSlider />
      <TotalPaymentContainer price={price} />
      <TermsOfUseContainer setChecked={setChecked} />
      <RowFlexWrapper gap="25">
        <PaymentButton
          checked={checked}
          disabled={!checked}
          onClick={onClickPayButton}
        >
          결제하기
        </PaymentButton>
        <PaymentButton onClick={onClickCancelButton}>취소하기</PaymentButton>
      </RowFlexWrapper>
    </PageContainer>
  );
}

export default PaymentPage;
