import axios from "axios";

async function getData() {
    const response = await axios.get("http://localhost:4001/trips?keywords=");
    console.log(response.data.data);
}

getData();

