import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

//////////////////  MAP ARRAY ////////////////////////////////////
const bookArray = [
  {
    bookTitle: "TOO PRETTY TO DIE",
    img: "/Images/book-cover.jpg",
    author: "Array Willow Rose",
    id:1,
  },
  {
    bookTitle: "TOO PRETTY TOO DIE",
    img: "/Images/book-cover.jpg",
    author: "Array Willow Rose",
    id:2,
  },
];
const nameArray = ['array element 1','array element 2']
const mapArray = nameArray.map((book)=>{
  return <h1>{book+"name"}</h1>
})
///////////////// MAP ARRAY ////////////////////////////////////




//first book object
const firstBook = {
  bookTitle : 'TOO PRETTY TO DIE',
  img : "/Images/book-cover.jpg",
  author : "Willow Rose",
};

//second book object
const secondBook = {
  bookTitle : 'UGLY SHOULD DIE',
  img : "https://m.media-amazon.com/images/I/71h5+dpAriL._SL1500_.jpg",
  author : "Willam Rosa",
  style : {
    maxWidth: "200px"
  }
};

// just like object but in seperate variable form
const bookTitle = 'TOO PRETTY TO DIE'
const imgVar = "/Images/book-cover.jpg"
const author = "Willow Rose"


// a CSS for something
const style = {
  backgroundColor : "blue",
  whiteSpace : "nomral",
}

//////////////
/// the main parent react component is BookList which will be rendered at the end of the doc
////////////// 
function BookList(){
    return (
      <section className="booklist">
        <ExampleEvent/>
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
          style={secondBook.style}
        />

        <Book bookTitle={bookTitle} img={imgVar} author={author} />
        <Book bookTitle={bookTitle} img={imgVar} author={author} />
        {/*
        {mapArray[1]}
        {nameArray[0] + " note: this is array without map function"}
        */}
        



        {/* here 2 Book components are made inside the main parent(BookList) using the map function */}
        {bookArray.map((i,index) => {

          const {img,bookTitle,author,id} = i
          return (
          <Book key={id} bookTitle={bookTitle+" in map 2nd arg is index "+index} img={img} author={author} />
          
          )
        })}



        {/* in the following we used spread opetrator to distribute object properties as props obj */}
        {bookArray.map((book)=>{
          
          return (
            <Book {...book} key={book.id}/>
          )
        })}
      </section>
    );
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

const ExampleEvent = () =>{
  const handleFormInput = ()=>{
    console.log("something typed in input");
  }
  const handleButtonClick = ()=>{
    console.log("button was clicked")
  }
  return (
    <div>
      <h1>Example Event</h1>
      <input
      onChange={handleFormInput}/>
      <button
      onClick={handleButtonClick}
      >Click Me</button>
    </div>
  )
}


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