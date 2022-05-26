import { PageRouterContext } from "../../provider/PageRouterProvier";
import React, { useContext } from "react";
import styled from "styled-components";

const StyledCardAddLink = styled.button`
  width: 208px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.cardText};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border-color: transparent;
  user-select: none;

  text-align: center;
  font-size: 50px;
  background: ${({ theme }) => theme.colors.cardAddLink};
  &:hover {
    background: ${({ theme }) => theme.colors.twitterBlue};
    color: white;
  }
`;

function CardAddLink({
  to,
  children,
}: {
  to: "/" | "/add" | "/register";
  children: React.ReactNode;
}) {
  const pageRouterContext = useContext(PageRouterContext);
  if (!pageRouterContext) throw new Error("cannot find pageRouterContext");
  const { setPath } = pageRouterContext;

  return (
    <StyledCardAddLink
      onClick={() => {
        setPath(to);
      }}
    >
      {children}
    </StyledCardAddLink>
  );
}

export default CardAddLink;
