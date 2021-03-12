import React from "react";

import { Container, RowContainer, Button, NavItem, NavBar } from "./styles";

const Mix: React.FC = () => {
  return (
    <Container>
      <h1>Mix of some animations using transition and transform</h1>

      <RowContainer>
        {/* Example without being a component */}
        <a href="#">Button</a>

        {/* Example being a component */}
        <Button href="#" color="#262626">
          Button
        </Button>
      </RowContainer>

      {/* NavBar */}
      <NavBar>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>Portfolio</NavItem>
        <NavItem>Contact</NavItem>
      </NavBar>
    </Container>
  );
};

export default Mix;
