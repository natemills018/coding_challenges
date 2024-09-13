# Rearranging Elements in an Array with React+Typescript

-   Step 0:

    -   Run `npm install` to download all of your packages, and run `npm test` to validate the returned elements.

-   Step 1:

    -   Look at the structure of the data within [./src/data/albums.json](./src/data/albums.json) and create an interface in [./src/types/index.ts](./src/types/index.ts) describing its structure

-   Step 2:

    -   In [App.tsx](./src/App.tsx), create a piece of state that has a generic given to it of that interface you just created. Use the already imported `AlbumData` as the initial value.
    -   Then display the data in the ul below. You may change or add any styling that you like.

-   Step 3:

    -   In the ul, return an li for every album in the list. It can be as simple as having just the album title and buttons with the text "up" and "down"
    -   If it is the first item in the list, it should only display a down button.
    -   If it is the last item in the list, it should only display an up button.
    -   Clicking on each button should move the album up or down the list, respectively
