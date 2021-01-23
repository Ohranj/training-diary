import axios from "axios";

const deleteEntry = (entry) =>
    new Promise((succ, rej) =>
        axios({ method: "delete", url: "/entry/delete", data: { entry } })
            .then(() => succ())
            .catch(() => rej())
    );

export default deleteEntry;
