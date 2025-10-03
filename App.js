//  const heading = React.createElement("h1",{id:"header"},"Hello React from React CDN")
import React from "react"
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div",{
    id:"parent"},
   [ React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"I am a h1 tag-child1"),
        React.createElement("h2",{},"I am a h2 tag-child1")]
    ),React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I am a h1 tag-child2"),
        React.createElement("h2",{},"I am a h2 tag-child2")]
    ),
])

 const root = ReactDOM.createRoot(document.getElementById("root"))

 root.render(parent)