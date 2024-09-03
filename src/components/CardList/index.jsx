import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux'
import { addItems } from '../../redux/slices/cardListSlice'
import {createStore} from 'react-redux'

import Card from '../Card/index'
import Favourites from '../Favourites/index'
import Skeleton from '../Card/Skeleton';

import styles from '../CardList/CardList.module.scss'




const CardList = () => {
  const { items, filterStatus } = useSelector((state) => state.cardList)
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    setIsLoading(true);
    fetch(`https://rickandmortyapi.com/api/character`)
    .then((res) => res.json())
    .then((obj) => {
      dispatch(addItems(obj.results))
      setIsLoading(false);
    });

    window.scrollTo(0,0);
  }, [])

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)
  const visibleCards = filterStatus ? items.filter(card => card.liked === true): items;
  const cards = visibleCards.map((card) =>
    <Card key = {card.id} id={card.id} />
  )

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <Favourites />
      </div>
      <h1 className={styles.title}>Rick and Morty</h1>
      <div className={styles.items}>
      { isLoading ? skeletons
        : cards
      }
      </div>
    </div>
  );
};

export default CardList;