import axios from "axios";

const deleteExercise = (exercise) =>
    new Promise((succ, rej) =>
        axios({
            method: "delete",
            url: "/entry/delete/exercise",
            data: exercise,
        })
            .then(() => succ())
            .catch(() => rej())
    );

export default deleteExercise;
