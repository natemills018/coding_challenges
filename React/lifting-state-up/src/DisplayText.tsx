import React from "react";

export default function DisplayText({}: DisplayTextProps) {
    // DisplayText should be receiving some props of a counter to display down below

    return <h1>The count is currently: {/* some counter number here */}</h1>;
}

interface DisplayTextProps {
    count: number;
}
