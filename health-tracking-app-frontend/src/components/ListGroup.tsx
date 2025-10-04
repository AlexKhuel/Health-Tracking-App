// import getAllUserData from "..../health-tracking-app-backend/services/export.js";

import { useEffect, useState } from "react";

// Instead, fetch data from your backend API endpoint:
function ListGroup() {
    const [data, setData] = useState<string>("Loading...");

    useEffect(() => {
        fetch("/api/userdata?userId=JD-ChapCS-080707")
            .then((res) => res.json())
            .then((json) => setData(JSON.stringify(json)))
            .catch(() => setData("Error loading data"));
    }, []);

    return (
        <>
            <h1>All User Data</h1>
            <p>{data}</p>
        </>
    );
}

export default ListGroup;
