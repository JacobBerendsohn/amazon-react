import React, { createContext, useContext, useState } from "react";
import axios from 'axios';

const ResultContext = createContext();

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Monitors');

    const getResults = async (search) => {
        setIsLoading(true);

        const axios = require('axios');

        const options = {
            method: 'GET',
            url: 'https://amazon23.p.rapidapi.com/product-search',
            params: {query: `${search}`, page: '1', country: 'US'},
            headers:  {
                'X-RapidAPI-Key': '8396ef7af7msh4f54ef9caf0feffp1283dfjsn2a7648f727a8',
                'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
            }
        }

        axios.request(options).then(function (response) {
            setResults(response.data);
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

        

        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            { children }
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);
