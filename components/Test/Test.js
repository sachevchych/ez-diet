import React, {useEffect, useState} from "react";

function Test() {
    const [count, setCount] = useState(0)

    function handlerCount(value) {
        setCount(count + value)
    }

    useEffect(() => {
        
    })

    return (
        <div>
            <span>Лічильник: {count}</span>
            <button onClick={() => handlerCount(2)}>Додати 2</button>
            <button onClick={() => setCount(count - 1)}>Відняти 1</button>
        </div>
    )
}

export default Test