import axios from "axios";

const login = ({ email, password }) =>
    new Promise((succ, rej) =>
        axios({
            method: "post",
            url: "/login",
            data: {
                email,
                password,
            },
        })
            .then(() => succ())
            .catch(() => rej())
    );

export default login;
