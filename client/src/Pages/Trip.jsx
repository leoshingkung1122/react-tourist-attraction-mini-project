import { useParams } from "react-router-dom";   

function Trip() {
    const { id } = useParams();

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:4001/trips/${id}`);
        setData(response.data.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Trip</h1>
        </div>
    )
}

export default Trip;