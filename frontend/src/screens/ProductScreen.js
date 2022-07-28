import React from 'react';
import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams();
  const { a } = params;
  return <div>{a}</div>;
}

export default ProductScreen;
