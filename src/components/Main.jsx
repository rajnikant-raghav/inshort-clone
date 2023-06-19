import React,{useEffect, useState} from "react";
import "../index.css";

const Main = ({ newsData }) => {
  const [count, setCount] = useState(15)
  const [newsDetails, setNewsDetails] = useState()
  useEffect(()=>{
    newsData?
      setNewsDetails(newsData.splice(0,count)):console.log()
  },[count,newsData])
  console.log(newsData.length, count);
  return (
    <>
      <div className="main_container">
        {newsDetails ? (
          newsDetails.map((val,idx,key) => (
            <div key={key} className="card">
              <div className="left_side">
                <img
                  src={
                    val.urlToImage === null
                      ? "https://www.androidauthority.com/wp-content/uploads/2022/08/samsung-galaxy-z-fold-4-home-screen-open.jpg"
                      : val.urlToImage
                  }
                  alt=""
                />
              </div>
              <div className="right_side">
                <div style={{ fontSize: "20px" }}>{val.title}</div>
                <p>
                  <span style={{ fontWeight: "bold" }}>short by</span>
                  {` ${val.author} / ${val.publishedAt}`}
                </p>{" "}
                <br />
                <div className="description">
                  {val.description === null
                    ? "Nothing CEO Carl Pei asserted on Twitter that people are sending him memes about his new device and mocking the company for offering almost the same design."
                    : val.description}
                </div>
                <div className="ancher">
                  read more at{" "}
                  <a href={val.url} target="blank">
                    {val.source.name}
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Data not Found</p>
        )}
        <br />
        <div className="load_more" onClick={()=>{
        setCount(pre=>pre+10)
          
        }}>Load More</div>
        <div className="made_by">
          <div className="author">Inshorts clone made by - Rajnikant Raghav</div>
          <hr /> 
          <div className="social_media">
            <a href="https://www.instagram.com/rk_raghav_9211/" target="blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rajnikantraghav/"
              target="blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/rajnikant-raghav" target="blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
