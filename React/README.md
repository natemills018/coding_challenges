# Challenges

[Rearranging-Items](./rearranging-items/README.md)

-   You are given some JSON data of an array of albums. You must:
    -   Look at the data and create an interface describing its structure
    -   Create a piece of state for that data and give it a generic of that interface. You will also set your initial state to that album data
    -   You must create an `li` for each item in the array. Simply displaying the title from each album is fine.
    -   In each `li`, you must also create two `button` elements with text of "up" and "down", respectively
        -   If it is the **first** element in the list, you should **only** show the **down** button.
        -   If it is the **last** element in the list, you should **only** show the **up** button.
    -   Clicking on those buttons must rearrange the element's position in the array

[Lifting-State-Up](./lifting-state-up/README.md)

-   You are given a `Button.tsx` and a `DisplayText.tsx` component that are both sibling elements within `App.tsx`.
-   You must find a way to have state globally shared between them. `DisplayText` must show the count, and `Button` must update it.
