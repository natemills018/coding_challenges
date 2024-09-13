import React, { useState } from "react";
import "./styles.css";
import DisplayText from "./DisplayText";
import Button from "./Button";

export default function App() {
    return (
        <div className="App">
            <DisplayText />
            <Button />
        </div>
    );
}
