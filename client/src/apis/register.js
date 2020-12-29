import axios from "axios";

const register = (user) =>
    new Promise((suc, rej) =>
        axios({
            method: "post",
            url: "/register",
            data: {
                user,
            },
        })
            .then(() => suc())
            .catch(() => rej())
    );

export default register;
