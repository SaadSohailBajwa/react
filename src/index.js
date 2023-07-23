import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

const bookArray = [
  {
    bookTitle: "TOO PRETTY TO DIE",
    img: "/Images/book-cover.jpg",
    author: "Array Willow Rose",
  },
  {
    bookTitle: "TOO PRETTY TOO DIE",
    img: "/Images/book-cover.jpg",
    author: "Array Willow Rose",
  },
];


const nameArray = ['array name 1','array name 2']

const mapArray = nameArray.map((book)=>{
  return <h1>{book+"name"}</h1>
})



const firstBook = {
  bookTitle : 'TOO PRETTY TO DIE',
  img : "/Images/book-cover.jpg",
  author : "Willow Rose",
};

const secondBook = {
  bookTitle : 'UGLY SHOULD DIE',
  img : "https://m.media-amazon.com/images/I/71h5+dpAriL._SL1500_.jpg",
  author : "Willam Rosa",
  style : {
    maxWidth: "200px"
  }
};

const bookTitle = 'TOO PRETTY TO DIE'
const img = "/Images/book-cover.jpg"
const author = "Willow Rose"

const style = {
  backgroundColor : "blue",
  whiteSpace : "nomral",
}


function BookList(){
    return <section className="booklist">
        <Book 
        bookTitle={firstBook.bookTitle} 
        img={firstBook.img} 
        author={firstBook.author} 
        style={style}
        />

        <Book 
        bookTitle={secondBook.bookTitle} 
        img={secondBook.img} 
        author={secondBook.author} 
        style={secondBook.style} />


        <Book bookTitle={bookTitle} img={img} author={author}
        />
        <Book bookTitle={bookTitle} img={img} author={author}/>

        {mapArray}

    </section>
}

const Book = ({ bookTitle, img, author }) => {
  // we can use either above or below verison
  //const {bookTitle, img, author} = props

  return (
    <article>
      <img src={img} alt={bookTitle} style={{ maxWidth: "200px" }} />
      <h2 /* style={props.style} */ style={{ maxWidth: "200px" }}>
        {bookTitle}
      </h2>
      <p>{author}</p>

      {/* <p>{5 + 6}</p> */}
    </article>
  );
};


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