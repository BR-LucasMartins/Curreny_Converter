import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/coin-svgrepo-com.svg';
import iconConversion from '../../assets/images/icon-convert.svg';
import useCurrencyConverter from '../../hooks/FetchCurrencies';

import * as C from './index';
import CurrencyFlag from '../Flag/CurrencyFlag';

const Converter = () => {

  const { currencies, loading, error, conversionResult, convertCurrency } = useCurrencyConverter();
  const [amount, setAmount] = useState(undefined);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');


  const handleConvert = async (e) => {
    e.preventDefault();
    await convertCurrency(fromCurrency, toCurrency, amount);
  };

  return (
    <C.Container>
      {loading && (<p> carregando </p>) }
      
      {!loading && (
        <C.Form>
        <div className="input-wrapper">
          <label>Digite um valor:</label>
          <input type="number" placeholder='$' value={amount} onChange={(e)=>setAmount(e.target.value)} />

          <img className='coin-image' src={logo} alt="logo moedas" />
        </div>

        <div className="input-wrapper">
          <label>Converter:</label>
          <div className="select-container">
           <div className="list-coins">
           <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
              <option value="">  De: </option>
              <option value="BRL"> BRL  </option>
              {currencies.map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
            <CurrencyFlag currencyCode={fromCurrency} /> 
           </div>
            
            <span className='to'> para: </span>
            <div className="list-coins">
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
              <option value=""> para </option>
              {currencies.map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
            <CurrencyFlag currencyCode={toCurrency} /> 
            </div>
            <button type="submit" onClick={handleConvert}> 
            <img width="20" height="20" src={iconConversion} alt="icon converion" />
            Converter 
            </button>

          </div>
        </div>

        <div className="link">
          <div className='tooltip'>
                Confira a lista de moedas/países.
          </div>
          <a href="https://pt.iban.com/currency-codes" target='_blank'>
            i
          </a>
        </div>

        <div className="screen-result">
              {!conversionResult && (
                <p> $ 0 </p>
              )}

              {conversionResult && (
                <p> $ {conversionResult} </p>
              )}
        </div>
          
      </C.Form>
      )}
        

        
    </C.Container>
  )
}

export default Converter