import React from 'react';

function Counter(props) {
    console.log(props);

    return <>
        <h1> Counter :{props.count}</h1>
        <button onClick={props.incCounter}>+</button>
        <button onClick={props.decCounter}>-</button>
        <button onClick={props.conReset}>Reset</button>


    </>
}

export default Counter;


