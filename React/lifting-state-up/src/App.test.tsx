import React from "react";
import { render, screen, act } from "@testing-library/react";
import App from "./App";
import DisplayText from "./DisplayText";
import Button from "./Button";

test("DisplayText contains a numerical count", () => {
    render(<App />);
    const heading = screen.getByRole("heading");
    const headingText = heading.textContent;
    const numberMatch = /\d+/g;
    const containsNumber = headingText?.match(numberMatch);

    expect(containsNumber).toBeTruthy();
});

test("Clicking on the Button increases the count in DisplayText", () => {
    render(<App />);
    const heading = screen.getByRole("heading");
    const numberMatch = /\d+/g;

    const initialHeadingText = heading.textContent;
    const containsNumber = initialHeadingText?.match(numberMatch);

    const initialNumber = containsNumber ? Number(containsNumber[0]) : 0;

    const button = screen.getByRole("button");

    act(() => {
        button.click();
    });

    const updatedHeadingText = heading.textContent;
    const hasUpdatedNumber = updatedHeadingText?.match(numberMatch);

    const updatedNumber = hasUpdatedNumber ? Number(hasUpdatedNumber[0]) : 0;

    expect(updatedNumber > initialNumber).toBe(true);
});
