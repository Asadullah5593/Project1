var axios = require("axios");

async function getAllProducts() {
    const { data } = await axios.get(`/api/orders/${id}`, config);
}