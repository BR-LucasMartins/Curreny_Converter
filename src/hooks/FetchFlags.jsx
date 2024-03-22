import axios from 'axios';

const endpoint = 'https://restcountries.com/v3.1/currency/'; 

const getFlagAndCurrencyName = async (currencyCode) => {
 if(currencyCode ){
    try {
        const response = await axios.get(`${endpoint}/${currencyCode}`);
        const data = response.data;
        const flagUrl = data[0].flags.svg;
        const currencyName = data[0].currencies[currencyCode].name;
        return {flagUrl , currencyName};
      } catch (error) {
        console.log('bandeira não encontrada');
        return null;
    }
 }
    
};

export default getFlagAndCurrencyName;


