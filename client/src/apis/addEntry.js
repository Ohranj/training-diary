import axios from "axios";

const addEntry = (entry) =>
    new Promise((succ, rej) =>
        axios({
            method: "post",
            url: "/entry/new",
            data: {
                entry,
            },
        })
            .then(() => succ())
            .catch(() => rej())
    );

export default addEntry;
