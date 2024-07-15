export let cardsData1 = JSON.parse(localStorage.getItem('cardsData1')) || [

];

export let cardsData2 = JSON.parse(localStorage.getItem('cardsData2')) || [

];

export let cardsData3 = JSON.parse(localStorage.getItem('cardsData3')) || [

];

// Function to add a new card to cardsData1
export function addCardToData1(title, link) {
   const newCard = {
      id: cardsData1.length + 1,
      title: title,
      link: link,
   };

   cardsData1.push(newCard);
   localStorage.setItem('cardsData1', JSON.stringify(cardsData1));
}

// Function to add a new card to cardsData2
export function addCardToData2(title, link) {
   const newCard = {
      id: cardsData2.length + 1,
      title: title,
      link: link,
   };

   cardsData2.push(newCard);
   localStorage.setItem('cardsData2', JSON.stringify(cardsData2));
}

// Function to add a new card to cardsData3
export function addCardToData3(title, link) {
   const newCard = {
      id: cardsData3.length + 1,
      title: title,
      link: link,
   };

   cardsData3.push(newCard);
   localStorage.setItem('cardsData3', JSON.stringify(cardsData3));
}
