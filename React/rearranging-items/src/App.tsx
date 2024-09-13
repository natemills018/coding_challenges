import React from "react";
import { useEffect, useState } from "react";
import AlbumData from "./data/albums.json";

export default function App() {
    // Step 1:
    // Look at the structure of the data within ./data/albums.json and create an interface describing its structure
    // Take the imported `AlbumData` and set it to state described by the interface
    // Then display the data in the ul below. You may change or add any styling that you like.

    // Step 2:
    // Create up & down buttons in each li.
    // If it is the first item in the list, it should *only display a down button*.
    // If it is the last item in the list, it should *only display an up button*.

    // Step 3:
    // Finally, make the list sortable by clicking on any of the buttons to upvote/downvote any album.

    return (
        <div className="App">
            <h1>Here are the 4 best albums of all time:</h1>
            <ul>
                {/* Display your LIs here - their content & styling can be simple, 
            just an album title and buttons with the text of "up" and "down" will suffice.
            
                An example of how the first couple would look something like
                
                <li>
                    Album One 
                    <button>Down</button>
                </li>

                <li>
                    Album Two
                    <button>Up</button>
                    <button>Down</button>
                </li>

            */}
            </ul>
        </div>
    );
}
