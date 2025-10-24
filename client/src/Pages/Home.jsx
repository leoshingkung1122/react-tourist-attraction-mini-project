import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../modules/header";
import Content from "../modules/content";

function Home() {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/trips?keywords=${search}`);
            setData(response.data.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setError(false);
        setLoading(true);
        const timeoutId = setTimeout(() => {
            fetchData();
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [search]);


    return (
        <div className="min-h-screen">
            <Header search={search} setSearch={setSearch}/>
            <Content data={data} Loading={loading} error={error}/>
        </div>
    );
}

export default Home;