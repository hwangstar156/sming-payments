import React, { memo } from "react";
import styled from "styled-components";
import Box from "../../../styles/box";

const HeaderContainer = styled(Box)`
  margin-right: auto;
`;

const Header = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <HeaderContainer display="flex" gap="25px" alignItems="center">
      {children}
    </HeaderContainer>
  );
});

export default Header;
