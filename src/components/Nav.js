import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Nav() {
  return (
    <NavStyle>
      <NavLink to={'/'}>홈</NavLink>
      <NavLink to={'/about'}>소개</NavLink>
      <NavLink to={'/login'}>로그인</NavLink>
      <NavLink to={'/design'}>스타일컴포넌트</NavLink>
    </NavStyle>
  );
}

// 기존 컴포넌트를 가져와서 스타일을 씌우는 방법
const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #fff;
    color: #222;
  }
`;

const NavStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background-color: #222;
  padding: 20px 0;
`;
