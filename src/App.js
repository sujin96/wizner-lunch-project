import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Result from "./pages/Result";
import axios from "axios";

function App() {
    const [weather, setWeather] = useState("선택안함");
    const [restaurant, setRestaurant] = useState(null);
    const [filterList, setFilterList] = useState(null);

    useEffect(() => {
        axios
            .get("/data/restaurant.json")
            .then((res) => {
                setRestaurant(res.data.item);
                setFilterList(res.data.item);
            })
            .catch(console.error);
    }, []);

    return (
        <div className="container">
            <main className="main-area">
                <Header />
                <section className="contents-container">
                    <Routes>
                        <Route path="/*" element={<Home setWeather={setWeather} setFilterList={setFilterList} filterList={filterList} />} />
                        <Route path="/category" element={<Category weather={weather} setFilterList={setFilterList} filterList={filterList} />} />
                        <Route path="/result" element={<Result restaurant={restaurant} filterList={filterList} setFilterList={setFilterList} />} />
                    </Routes>
                </section>
            </main>
        </div>
    );
}

export default App;
