import axios from "axios";

const user = () =>
    new Promise((succ, rej) =>
        axios({
            method: "get",
            url: "/user",
        })
            .then(() => succ())
            .catch(() => rej())
    );

export default user;
