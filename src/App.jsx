import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);
  const [handle, setHandle] = useState(false);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "key" },
      })
      .then((res) => {
        console.log(res.data.books);
        setData(res.data.books);
      })
      .catch((err) => console.log(err));
  }, [handle]);

  const handleButton = () => {
    handle ? setHandle(false) : setHandle(true);
  };

  return (
    <>
      <button onClick={handleButton}>
        {handle
          ? "click here to remove the data"
          : "click here if you love books"}
      </button>
      {handle
        ? data.map((i) => (
            <div key={i.title}>
              <h2>{i.title}</h2>
              <h4>
                {i.authors.map((e) => (
                  <span>
                    {e}
                    <br />
                  </span>
                ))}
              </h4>
              <div id="parent">
                <img src={i.imageLinks.smallThumbnail} alt="" />
                {i.description}
              </div>
              <hr />
            </div>
          ))
        : null}
    </>
  );
}
