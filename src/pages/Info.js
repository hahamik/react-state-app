import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export default function Info() {
  // URL 파라미터 받기
  const { id, goodId } = useParams();

  // 쿼리스트링 받기
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page'); // ?page=5 → "5"

  return (
    <div>
      <h1>{id}</h1>
      <h1>{goodId}</h1>
      <h1>{page}</h1>
    </div>
  );
}
