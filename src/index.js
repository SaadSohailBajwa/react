import React from "react";
import ReactDOM from "react-dom/client";

function Greetings() {
    return <div>
        <NestedComp/>
        <ChildNestedComp/>
    </div>;
}

let NestedComp = () => {
    return <h1>Parent</h1>
}

let ChildNestedComp = () => <h3>Child</h3>

const root = ReactDOM.createRoot(document.getElementById("root"));

function ReactCreateEle(){
    return React.createElement('h3',{},'this component was made by react.createElement()');
};

//root.render(<ReactCreateEle/>);
root.render(<Greetings />);
