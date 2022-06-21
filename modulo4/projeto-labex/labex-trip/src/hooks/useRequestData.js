import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/alison-ribeiro-hopper"

export const useRequestData = (url, initialState) => {
    const [data, setData] = UseState(initialState)

    useEffect (() => {
        axios
            .get(url)
            .then((res) => setData(res.data))
            .catch((error) => console.log(error))
    }, [url])
    return data
}