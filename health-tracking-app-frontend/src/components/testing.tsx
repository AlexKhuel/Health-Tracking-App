import { useState } from "react";

type UserDataType = any; // Replace `any` with your actual user data type if you have one

export default function UserDataFetcher() {
    const [userId, setUserId] = useState<string>("");
    const [userData, setUserData] = useState<UserDataType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchUserData = async () => {
        if (!userId) return;
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/user/${userId}`);
            if (!response.ok) throw new Error("Failed to fetch user data");
            const data = await response.json();
            setUserData(data);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred");
            }
            setUserData(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Get User Data</h2>
            <input
                type="text"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={fetchUserData}>Fetch Data</button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {userData && (
                <div>
                    <h3>Data for {userId}</h3>
                    <pre>{JSON.stringify(userData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
