// Custom Hook for Managing Card Data


import { useState, useEffect } from "react";
const getInitialData = (key) => JSON.parse(localStorage.getItem(key)) || [];

export const useCardsData = (key) => {
   const [cards, setCards] = useState(getInitialData(key));

   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(cards));
   }, [cards, key]);

   const addCard = (title, link) => {
      const newCard = {
         id: cards.length + 1,
         title: title,
         link: link,
      };
      setCards([...cards, newCard]);
   };

   const deleteCard = (id) => {
      setCards(cards.filter((card) => card.id !== id));
   };

   return { cards, addCard, deleteCard };
};
