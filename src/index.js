import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

const firstBook = {
  bookTitle : 'TOO PRETTY TO DIE',
  img : "/Images/book-cover.jpg",
  author : "Willow Rose",
};

const secondBook = {
  bookTitle : 'TOO PRETTY SHOULD DIE',
  img : "https://m.media-amazon.com/images/I/71h5+dpAriL._SL1500_.jpg",
  author : "Willam Rosa",
};

const bookTitle = 'TOO PRETTY TO DIE'
const img = "/Images/book-cover.jpg"
const author = "Willow Rose"

const style = {
  backgroundColor : "blue",
}


function BookList(){
    return <section className="booklist">
        <Book bookTitle={firstBook.bookTitle} img={firstBook.img} author={firstBook.author} style={style}/>
        <Book bookTitle={secondBook.bookTitle} img={secondBook.img} author={secondBook.author} />
        <Book bookTitle={bookTitle} img={img} author={author}/>
        <Book bookTitle={bookTitle} img={img} author={author}/>

    </section>
}

const Book = (props) => {


  return (
    <article>
      <img src={props.img} alt={props.bookTitle} style={{maxWidth:"200px"}}/>
      <h2 style={props.style} >{props.bookTitle}</h2>
      <p>{props.author}</p>
      
      

    {/* <p>{5 + 6}</p> */}

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