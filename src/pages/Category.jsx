import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import korean from "../assets/images/500113.png";
import jappan from "../assets/images/SSI_20160324104448_V.jpg";
import china from "../assets/images/china.jpg";
import western from "../assets/images/western.jpg";

function Category({ weather, setFilterList, filterList }) {
    const navigate = useNavigate();
    const foodImage = [korean, china, jappan, western];

    const handleBack = () => {
        navigate(-1);
    };

    const handleSelectCategory = (category) => {
        switch (category) {
            case "한식":
                const ko = filterList.filter((item) => item.category === "korean");
                if (ko.length !== 0) setFilterList(ko);
                break;
            case "중식":
                const cn = filterList.filter((item) => item.category === "china");
                if (cn.length !== 0) setFilterList(cn);
                break;
            case "일식":
                const jp = filterList.filter((item) => item.category === "japan");
                if (jp.length !== 0) setFilterList(jp);
                break;
            case "양식":
                const ws = filterList.filter((item) => item.category === "western");
                if (ws.length !== 0) setFilterList(ws);
                break;
            default:
        }
        navigate("/result");
    };

    const handleSkip = () => {
        navigate("/result");
    };

    return (
        <>
            <section className="backBtn-area">
                <button className="backBtn" onClick={handleBack}>
                    <IoMdArrowBack />
                </button>
                <p>
                    <span>날씨 :</span>
                    <span>{weather}</span>
                </p>
            </section>

            <section className="category-text-area">
                <p className="category-text">오늘 먹고싶은 음식은?</p>
            </section>
            <section className="category-btn-area">
                {["한식", "중식", "일식", "양식"].map((item, i) => {
                    return (
                        <button
                            className="category-btn"
                            key={item}
                            onClick={() => {
                                handleSelectCategory(item);
                            }}
                        >
                            <div className="food-img">
                                <img src={foodImage[i]} alt="음식 사진" />
                            </div>
                            <p>{item}</p>
                        </button>
                    );
                })}
            </section>
            <footer className="footer category-footer">
                <button className="skip-btn" onClick={handleSkip}>
                    skip
                </button>
            </footer>
        </>
    );
}

export default Category;
