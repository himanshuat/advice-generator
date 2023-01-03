import React from "react";

export default function Quote(props) {
    return (
        <main className="center">
            <div className="quote-container center">
                <strong className="quote-id">advice #{props.id}</strong>
                <p className="advice">{props.advice}</p>
                <img className="pattern-divider" src="./images/pattern-divider-desktop.svg" alt="Pattern Divider" />
            </div>
            <button className="btn center" onClick={props.getAdvice}>
                <img className="dice-icon-img" src="./images/icon-dice.svg" alt="Dice icon" />
            </button>
        </main>
    );
}