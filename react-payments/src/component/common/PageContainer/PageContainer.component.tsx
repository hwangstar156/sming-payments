import styled from "styled-components";

const PageContainer = styled.div<{ type?: string; gap?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  gap: ${({ gap }) => gap};
  height: ${({ type }) => (type === "add" ? "850px" : "700px")};
  border: 1px solid ${({ theme }) => theme.colors.pageBorder};
  padding: 20px 15px;
  overflow: auto;
  border-radius: 10px;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border: 6px solid rgba(0, 0, 0, 0.18);
    border-left: 0;
    border-right: 0;
    background-color: ${({ theme }) => theme.colors.twitterBlue};
  }
`;

export default PageContainer;
