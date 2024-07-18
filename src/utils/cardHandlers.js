// Utility Functions for Add and Delete Card

export const addCardHandler = (title, link, workspace, handlers) => {
   const { addCardToData1, addCardToData2, addCardToData3 } = handlers;
   switch (workspace) {
     case "data1":
       addCardToData1(title, link);
       break;
     case "data2":
       addCardToData2(title, link);
       break;
     case "data3":
       addCardToData3(title, link);
       break;
     default:
       break;
   }
 };
 
 export const deleteCardHandler = (id, workspace, handlers) => {
   const { deleteCardFromData1, deleteCardFromData2, deleteCardFromData3 } = handlers;
   switch (workspace) {
     case "data1":
       deleteCardFromData1(id);
       break;
     case "data2":
       deleteCardFromData2(id);
       break;
     case "data3":
       deleteCardFromData3(id);
       break;
     default:
       break;
   }
 };
 