import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

function BookList(){
    return <sectio className="booklist">
        <Book/>
        <Book/>
        <Book/>

    </sectio>
}

const Book = () => <article>
<Image/>
<BookTitle/>
<AuthorName/>
</article>;

const Image = () => (
  <img
    src="/Images/book-cover.jpg"
    alt="TOO PRETTY TO DIE"
  />
);
const BookTitle = () => <h2>TOO PRETTY TO DIE</h2>;
const AuthorName = () => <p>Willow Rose</p>;

const root = ReactDOM.createRoot(document.getElementById("root"));

function ReactCreateEle(){
    return React.createElement('h3',{},'this component was made by react.createElement()');
};

//root.render(<ReactCreateEle/>);
root.render(<BookList />);
