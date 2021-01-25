import axios from "axios";

const addExercise = (exercise, date) =>
    new Promise((succ, rej) =>
        axios({
            method: "patch",
            url: "/entry/add/exercise",
            data: {
                exercise,
                date,
            },
        })
            .then(() => succ())
            .catch(() => rej())
    );

export default addExercise;
