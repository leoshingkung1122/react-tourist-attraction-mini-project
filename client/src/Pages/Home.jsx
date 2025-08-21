import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../modules/header";
import Content from "../modules/content";

function Home() {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:4001/trips?keywords=${search}`);
        setData(response.data.data);
    }

    useEffect(() => {
        fetchData();
    }, [search]);


    return (
        <div className="min-h-screen">
            <Header search={search} setSearch={setSearch}/>
            <Content data={data}/>
        </div>
    );
}

export default Home;