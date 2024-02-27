{/* <div id="parent">
    <div id="child1">
        <h1>This is H1 Tag</h1>
        <h2>This is H2 Tag</h2>
    </div>
</div>
<div id="parent">
    <div id="child2">
        <h1>This is H1 Tag</h1>
        <h2>This is H2 Tag</h2>
    </div>
</div> */}
// This kind of html code is written in react as follows below


const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child1" },
            [React.createElement("h1", {}, "Hi This is H1 tag"), React.createElement("h2", {}, "Hi This is H2 tag")]
        ),
        React.createElement("div", { id: "child2" },
            [React.createElement("h1", {}, "Hi This is H1 tag"), React.createElement("h2", {}, "Hi This is H2 tag")]
        )
    ]
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);