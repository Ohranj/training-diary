import axios from "axios";

const getEntries = () =>
    new Promise((succ, rej) =>
        axios({ method: "get", url: "/entry/all" })
            .then(({ data }) => succ(data))
            .catch((err) => rej(err))
    );

export default getEntries;
