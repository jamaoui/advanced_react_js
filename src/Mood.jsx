import {useToggle} from "use-custom-hooks";
import React from "react";

export const Mood = () => {
    const [isHappy, toggleIsHappy] = useToggle(true);
    /*
      If isHappy state is true calling toggleIsHappy function will set
      the isHappy state to false, and vise versa.
    */

    return (
        <>
            <h6 className={'text-primary display-6'}>useToggle</h6>
            <h1>Hello World</h1>
            <p>{`The user is ${isHappy ? "Happy 😃" : "Sad 😢"}`}</p>
            <button onClick={toggleIsHappy}>Toggle</button>
        </>
    );
};