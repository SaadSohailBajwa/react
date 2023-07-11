import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

function BookList(){
    return <section className="booklist">
        <Book/>
        <Book/>
        <Book/>

    </section>
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
const BookTitle = () => <h2 style={{fontSize:'2rem'}}>TOO PRETTY TO DIE</h2>;
// in above func when we added inline css instead of a dash (-)  we used camelCase 

const AuthorName = () => {
  const inlineCss = { backgroundColor:'White', fontSize:'1rem'}
return <p style={inlineCss}>Willow Rose</p>;}

const root = ReactDOM.createRoot(document.getElementById("root"));

function ReactCreateEle(){
    return React.createElement('h3',{},'this component was made by react.createElement()');
};

//root.render(<ReactCreateEle/>);
root.render(<BookList />);
