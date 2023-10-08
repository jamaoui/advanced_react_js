import {useDarkMode} from "use-custom-hooks";
import React from "react";

export default function DarkMode() {
    const [isDarkMode, toggleDarkMode] = useDarkMode("dark");
    const getStyles = () => {
        if(isDarkMode) {
            return ({
                backgroundColor: 'black',
                color: 'white',
            })
        }
        return ({
            backgroundColor: 'white',
            color: 'black',
        })
    }
    /*
      "dark" is the class name to be added to the body.
    */

    return <div style={getStyles()}>
        <h6 className={'text-primary display-6'}>useDarkMode</h6>
        <h1>Hello World</h1>
        <button style={getStyles()} onClick={toggleDarkMode}>Toggle Dark-Mode</button>
    </div>
}