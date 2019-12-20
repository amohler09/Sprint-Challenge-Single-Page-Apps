import React from "react";
import styled from 'styled-components';

const HomeHeader = styled.header`
text-shadow: -5px 5px 8px green;
`;

export default function Header() {
  return (
    <HomeHeader>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </HomeHeader>
  );
}
