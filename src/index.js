import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

function BookList(){
    return <section className="booklist">
        <Book/>
        <Book/>
        <Book/>
        <Book/>

    </section>
}

const Book = () => {

const bookTitle = 'TOO PRETTY TO DIE'

return (
<article>
<img
    src="/Images/book-cover.jpg"
    alt="TOO PRETTY TO DIE"
  />
<h2>{bookTitle}</h2>
<p>Willow Rose</p>

<p>{5 + 6}</p>

</article>
)};


const root = ReactDOM.createRoot(document.getElementById("root"));

function ReactCreateEle(){
    return React.createElement('h3',{},'this component was made by react.createElement()');
};

//root.render(<ReactCreateEle/>);
root.render(<BookList />);







/* 

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

*/