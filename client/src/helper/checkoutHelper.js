// Checkout API for backend
// for API we use backend URL
// for deployment use main URL we deploy server to
const API = "http://localhost:4000"

export async function fetchFromAPI(endpoint, options) {
    const { method, body } = { method: "POST", body: null, ...options }; 
    const response = await fetch(`${API}/${endpoint}`, {
        method, 
        ...(body && { body: JSON.stringify(body) }), 
        headers: {
            "Content-Type": "application/json", 
        }, 
    });
    return response.json(); 
}; 