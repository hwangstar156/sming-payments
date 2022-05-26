import { CardControlModalProps } from "../../CardControlModal/CardControlModal";
import styled, { css } from "styled-components";
import { RowFlexWrapper } from "../../../styles/wrapper";

const DimmedModal = styled.div<{ modalType: string | undefined }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${({ modalType }) =>
    modalType === "global-modal"
      ? css`
          justify-content: flex-start;
          align-items: center;
          padding: 5%;
        `
      : css`
          align-items: center;
          justify-content: flex-end;
        `}
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled(RowFlexWrapper)<{ styleType: string | undefined }>`
  width: 375px;
  ${({ styleType }) =>
    styleType === "edit"
      ? css`
          height: 100px;
        `
      : css`
          height: 220px;
        `}
  border-radius: 5px 5px 0 0;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.colors.pageDefault};
`;

export interface ModalProps extends Pick<CardControlModalProps, "toggleModal"> {
  children: React.ReactNode;
  styleType?: string;
  modalType?: string;
}

const Modal = ({ toggleModal, children, styleType, modalType }: ModalProps) => {
  return (
    <DimmedModal onClick={toggleModal} modalType={modalType}>
      <ModalBox styleType={styleType}>{children}</ModalBox>
    </DimmedModal>
  );
};

export default Modal;
