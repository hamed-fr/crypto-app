import React, { useEffect, useState } from 'react';
import { getCoin } from '../services/api';
import Coin from './Coin';
import Loader from './Loader';
import styles from './Landing.module.css'

const Landing = () => {
    const [coins , setCoins] = useState([])
    const [search , setSearch] = useState("")

    
    useEffect (() =>{
        const fetchAPI = async () =>{
            const data = await getCoin();
            setCoins(data)
        }
        
        fetchAPI()
    } , [])

    const searchHandler = event => {
        setSearch(event.target.value)
    }

    const searchedCoin = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <input className={styles.input} type="text" placeholder="Search" value={search} onChange={searchHandler}/>
            <div className={styles.coinContainer}>
                {searchedCoin.map(coin => <Coin key={coin.id} 
                                         price={coin.current_price}
                                         name={coin.name}
                                         image={coin.image}
                                         symbol={coin.symbol}
                                         marketCap={coin.market_cap}
                                         priceChange={coin.price_change_percentage_24h}
                                         />)}

            </div>
            <div>
                { coins.length < 1  && <Loader />}
            </div>
        </>
    );
};

export default Landing;