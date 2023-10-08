import React, {useState} from "react";
import useStack from "use-custom-hooks/hooks/useStack.js";

export const LocalValue = () => {
    const [stack, push, pop] = useStack([]);
    const [value, setValue] = useState(1)
    /*
      Returns an array with stack itself, push and pop functions.
    */

    const generateStackSpan = () => stack.map((x) => <span key={x}>{x} </span>);

    return (
        <div>
            <h6 className={'text-primary display-6'}>useStack</h6>
            <h1>The stack contains: {generateStackSpan()}</h1>
            <button onClick={pop}>Pop</button>
            {/* Removes last element from stack */}
            <button onClick={() => {
                setValue(prevState => prevState + 1)
                push(value)
            }}>Push
            </button>
            {/* Adds one to the end of the stack */}
        </div>
    );
};