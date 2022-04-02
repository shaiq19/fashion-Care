import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
height: 70px;
width: 100%;
background: rgba(17, 96, 141, 0.637);
color: black;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 1rem;
font-size: 1.1rem;
margin-bottom: 25px;

&:hover {
  background-color:white;
  color: black;
  border: 1px solid black;
  font-weight: bolder;
  letter-spacing: 0.2px;
}
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 16px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
