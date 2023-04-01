import { useEffect, useState } from "react";

function App() {
  const [imageData, setImageData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const url = "https://shibe.online/api/shibes?count=10";
  useEffect(() => {
    getApiData(url);
  }, [])

  async function getApiData(url) {
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    setImageData(result);
  }

  function handlePrev() {
    setCurrentIndex(currentIndex => currentIndex - 1);
  }

  function handleNext() {
    setCurrentIndex(currentIndex => currentIndex + 1);
  }
  return (
    <div className="mainContainer">
      <div className="innerContainer">
        {currentIndex > 0 &&
          <button className="prev_btn" onClick={handlePrev}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>}
        <img src={imageData[currentIndex]} alt="pictures" />
        {currentIndex < imageData.length - 1 &&
          <button className="next_btn" onClick={handleNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>}
      </div>
    </div>

  )
}

export default App
