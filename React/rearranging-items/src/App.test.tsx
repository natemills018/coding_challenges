import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders ul successfully", () => {
    render(<App />);
    const ul = screen.getByRole("list");
    expect(ul).toBeInTheDocument();
});

test("4 list items are rendered inside the ul", () => {
    render(<App />);
    const ul = screen.getByRole("list");
    const children = Array.from(ul.children);
    const liChildren = children.filter(child => {
        const fiberNodeKey = Object.keys(child)[0] as keyof Element;
        interface ReactFiberElement extends Element {
            type: string;
        }
        const { type } = child[fiberNodeKey] as ReactFiberElement;
        return type === "li";
    });
    expect(liChildren.length).toBe(4);
});

test("Only 3 up buttons and 3 down buttons are rendered", () => {
    render(<App />);

    const upButtons = screen.getAllByText(/up/i);
    const downButtons = screen.getAllByText(/down/i);

    expect(upButtons.length).toBe(3);
    expect(downButtons.length).toBe(3);
});
