import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Result({ restaurant, filterList, setFilterList }) {
    const navigate = useNavigate();
    const [result, setResult] = useState(null);

    const handleClickHome = () => {
        setFilterList(restaurant);
        navigate("/");
    };

    const handleCommendLunch = () => {
        const randomIndex = Math.floor(Math.random() * filterList.length);
        setResult(filterList[randomIndex].name);
    };

    return (
        <>
            <section className="backBtn-area">
                <button className="backBtn homeBtn" onClick={handleClickHome}>
                    홈으로
                </button>
            </section>
            <section className="weather-text-area">
                <p className="weather-text">점심 메뉴를 추천하겠습니다.</p>
                <button className="commend-btn" onClick={handleCommendLunch}>
                    추천 받기
                </button>
            </section>
            {result && (
                <section className="commend-result-area">
                    <p className="commend-result-title">오늘의 점심은</p>
                    <p className="commend-result">{result}</p>
                    <p className="commend-result-footer">맛있는 점심식사 되십시오.</p>
                </section>
            )}
        </>
    );
}

export default Result;
