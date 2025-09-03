import axiosClients from "./axiosClient"

const getProducts = async () => {
    const res = await axiosClients.get("/product")
    return res.data
}

export { getProducts }