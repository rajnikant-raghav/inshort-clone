import React, { useEffect, useState } from "react";
import { fetchData } from "./newsData/data";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Links from "./components/Links";

const App = () => {
  const [category, setCategory] = useState("headlines");
  const [newsData, setNewsData] = useState("");

  useEffect(() => {
    setNewsData(fetchData(category.toLowerCase()));
  }, [category]);
  // console.log(newsData[3].description)
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Links/>
      <Main newsData={newsData} />
    </div>
  );
};

export default App;
