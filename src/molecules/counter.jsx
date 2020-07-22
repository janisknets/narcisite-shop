import React, { useState } from 'react';
import Button from '../atoms/button';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <Button text="+" clickEffect={() => setCount(count + 1)} />
      <Button text="-" clickEffect={() => setCount(count - 1)} />
    </>
  );
}

export default Counter;
