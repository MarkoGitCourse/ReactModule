import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(prev => prev + 1);
  }

  function decrease() {
    setCount(prev => prev - 1);
  }

  function increaseByFive () {
    setCount(prev => prev + 5)
  }

    return (
        <div>
            <h2>{count}</h2>
            <button type='button' onClick={decrease}>Smanji</button>
            <button type='button' onClick={increase}>Povećaj</button>
            <button type='button' onClick={increaseByFive}>Povećaj za 5</button>
        </div>
    )
}

export default Counter;