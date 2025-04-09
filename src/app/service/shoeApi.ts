export const getShoeDetailById = async (id: number) => {
    try {
        const response = await fetch(
            `https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`
        );
        const data = await response.json();
        const dataDetailShoe = data.content;
        return dataDetailShoe;
        console.log("data: ", data);
    } catch (err) {
        console.log("err: ", err);
    }
};

export const getListShoeAPI = async () => {
    try {
        const response = await fetch(
            "https://apistore.cybersoft.edu.vn/api/Product"
        );
        const data = await response.json();
        const dataListShoe = data.content;
        return dataListShoe;
    } catch (err) {
        console.log("err: ", err);
    }
};

export const getListProductByKeyWord = async (keyword: string | undefined) => {
    try {
        const response = await fetch(
            `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword || ""}`
        );
        const data = await response.json();
        const dataListShoe = data.content;
        console.log('dataListShoe: ', dataListShoe);
        return dataListShoe;
    } catch (error) {
        console.log('error: ', error);

    }
}