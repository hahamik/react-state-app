import React, { useState } from 'react';

export default function Home() {
  // 배열 구조분해 할당
  const [num, setNum] = useState(0);

  function countUp() {
    let newNum = num + 1;
    setNum(newNum);
  }

  function countDown() {
    setNum(num - 1);
  }

  console.log(num);

  return (
    <div>
      <div>상태관리 연습</div>
      <div>{num}</div>
      {/* 함수 주소 전달 */}
      <button onClick={countUp}>숫자 증가</button>
      <button onClick={countDown}>숫자 감소</button>
      <hr />
    </div>
  );
}
