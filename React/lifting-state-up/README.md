# Lifting state up to share between components

-   Step 0:

    -   Run `npm install` to download all of your packages, and run `npm test` to validate the returned elements.

-   Step 1:

    -   You have a `DisplayText.tsx` component that must display the value of a counter variable. There is just _one_ problem though - the button to increase that count is a sibling element (`Button.tsx`) to the display element, both nested within `App.tsx`.
    -   You must create a way for them to share and update state without moving or nesting your components.
