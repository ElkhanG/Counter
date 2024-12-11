import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const changeBackgroundColor = () => {
        const newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;
    }

    const increase = () => {
        if (counter === 10) {
            return alert("Daha artira bilmezsen");
        }
        setCounter(counter + 1);
        changeBackgroundColor();
    }

    const decrease = () => {
        if (counter === -10) {
            return alert("Daha azalda bilmezsen");
        }
        setCounter(counter - 1);
        changeBackgroundColor();
    }

    return (
        <div className="counter">
            <div className="container">
                <button className="box" onClick={decrease}>-</button>
                <div style={{ fontSize: "50px" }}>{counter}</div>
                <button className="box" onClick={increase}>+</button>
            </div>
        </div>
    )
}

export default Counter;
