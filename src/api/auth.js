export const login = async () => {
    try {
        const response = await fetch("https://e-dog.onrender.com/api/v1/auth/login", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": "admin",
                 "password": "ABCD69420DCBA"
            }),
            method: "POST",
            mode: "cors"
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};