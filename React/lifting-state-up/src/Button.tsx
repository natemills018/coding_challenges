import React from "react";

export default function Button({}: ButtonProps) {
    // Button should be receiving a prop of some function that can update its parent state, and should run that function on a click event

    return <button>Click to increase the counter</button>;
}

interface ButtonProps {
    increase: () => void;
}
