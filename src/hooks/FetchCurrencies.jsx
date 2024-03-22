import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useCurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [conversionResult, setConversionResult] = useState(undefined);

  const apiRoute = 'https://v6.exchangerate-api.com/v6/9ca518eb76915077ff2f9388'
  

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(`${apiRoute}/latest/USD`);
        const data = response.data;
        const availableCurrencies = Object.keys(data.conversion_rates);
        setCurrencies(availableCurrencies);
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar moedas. Tente novamente mais tarde.');
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    
    try {
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/9ca518eb76915077ff2f9388/pair/${fromCurrency}/${toCurrency}/${amount}`);
      const data = response.data;
      setConversionResult(data.conversion_result);

    } catch (error) {
      setError('Erro ao calcular conversão. Tente novamente mais tarde.');
    }
  };

  return { currencies, loading, error, conversionResult, convertCurrency };
};

export default useCurrencyConverter;