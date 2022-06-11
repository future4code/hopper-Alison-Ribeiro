import axios from "axios";

export default axios.create({
    baseURL: "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alison-ribeiro",
})