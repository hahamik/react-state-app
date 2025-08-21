import React from 'react';
import styled from 'styled-components';

export default function Design(props) {
  const { user } = props;

  return (
    <div>
      {user.username == 'ssar' ? (
        <MyBlueBox>ssar</MyBlueBox>
      ) : (
        <MyRedBox>cos</MyRedBox>
      )}
      <MyBox user={user} title={'제목1'}>
        유저네임 : {user.username}
      </MyBox>
    </div>
  );
}

const MyRedBox = styled.div`
  color: red;
`;

const MyBlueBox = styled.div`
  color: blue;
`;

const MyBox = styled.div`
  color: ${(props) => (props.user.username == 'ssar' ? 'blue' : 'red')};
`;
