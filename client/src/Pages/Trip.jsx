import { useParams } from "react-router-dom";   
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Trip() {
    const { id } = useParams();
    const [data, setData] = useState();

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:4001/trips/${id}`);
        setData(response.data.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>HelloWorld!</h1>
        </div>
    )
}

export default Trip;