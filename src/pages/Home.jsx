import { useNavigate } from "react-router-dom";
import { IoMdSunny } from "react-icons/io";
import { IoMdCloudy } from "react-icons/io";
import { FaHotjar } from "react-icons/fa";
import { MdOutlineSevereCold } from "react-icons/md";
import { BsSnow } from "react-icons/bs";
import { FaCloudRain } from "react-icons/fa";

function Home({ setWeather, setFilterList, filterList }) {
    const navigate = useNavigate();
    const weatherIcons = [<IoMdCloudy />, <IoMdSunny />, <MdOutlineSevereCold />, <FaHotjar />, <FaCloudRain />, <BsSnow />];

    const handleSelectWeather = (weather) => {
        setWeather(weather);
        switch (weather) {
            case "추움":
            case "더움":
                setFilterList(
                    filterList.filter((item) => {
                        return item.distance !== "long";
                    })
                );
                break;
            case "비":
            case "눈":
                setFilterList(
                    filterList.filter((item) => {
                        return item.distance === "short";
                    })
                );
                break;
        }
        navigate("/category");
    };

    const handleGoResult = () => {
        navigate("/result");
    };

    const handleSkip = () => {
        navigate("/category");
    };

    return (
        <>
            <section className="weather-text-area">
                <p className="weather-text">오늘의 날씨는?</p>
            </section>
            <section className="weather-btn-area">
                {["흐림", "맑음", "추움", "더움", "비", "눈"].map((item, i) => {
                    return (
                        <button
                            key={item}
                            className="weather-btn"
                            onClick={() => {
                                handleSelectWeather(item);
                            }}
                        >
                            <span className="btn-text">{item}</span>
                            {weatherIcons[i]}
                        </button>
                    );
                })}
            </section>
            <section className="go-to-result">
                <button className="go-to-result-btn" onClick={handleGoResult}>
                    바로 추천 받기
                </button>
            </section>
            <footer className="footer">
                <button className="skip-btn" onClick={handleSkip}>
                    skip
                </button>
            </footer>
        </>
    );
}

export default Home;
