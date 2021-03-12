import styled from "styled-components";

interface ButtonProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5vh 0 15vh 0;

  & a:nth-child(1) {
    text-decoration: none;
    padding: 20px 40px;
    color: #e1332d;
    border: 3px solid #e1332d;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 300;
    letter-spacing: -2px;
    transition: all 0.5s;

    &:hover {
      font-weight: 900;
      letter-spacing: 10px;
      border: 7px solid #e1332d;
    }
  }
`;

export const Button = styled.a<ButtonProps>`
  text-decoration: none;
  padding: 20px 40px;
  margin-left: 20px;
  color: ${({ color }) => color};
  border: 5px solid ${({ color }) => color};
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 300;
  letter-spacing: 2px;
  position: relative;
  transition: all 1s;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => color};
    transition: 1s;
    transform: rotateX(90deg);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => color};
    transition: 1s;
    transform: rotateY(90deg);
    z-index: -1;
  }

  &:hover:before {
    transform: rotateX(0deg);
  }

  &:hover:after {
    transform: rotateY(0deg);
  }

  &:hover {
    color: #fff;
  }
`;

export const NavBar = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: #3d3d3d;
  font-size: 22px;
  display: block;
  padding: 10px 15px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #3d3d3d;
    transform: scaleX(0);
    transition: all 0.5s;
    transform-origin: left;
  }

  &:hover:before {
    transform: scaleX(1);
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #3d3d3d;
    transform: scaleX(0);
    transition: all 0.5s;
    transform-origin: right;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;
