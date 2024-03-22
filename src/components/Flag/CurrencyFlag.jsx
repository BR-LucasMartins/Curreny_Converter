import React, { useState, useEffect } from 'react';
import getFlagAndCurrencyName from '../../hooks/FetchFlags';

const CurrencyFlag = ({ currencyCode }) => {

const [ flag, setFlag ] = useState(null);

useEffect(() => {
    const fetchFlagUrl = async () => {
      const data = await getFlagAndCurrencyName(currencyCode);
      setFlag(data);
    };

    fetchFlagUrl();
  }, [currencyCode]);

  return (
    <div className='list-coins-info'>
      {flag && (
        <>
            <img src={flag.flagUrl} className='flag' /> 
            <span> {flag.currencyName} </span>
        </>
        )
      }
      
    </div>
  );
};

export default CurrencyFlag;