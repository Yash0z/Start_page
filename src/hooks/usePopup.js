// Custom Hook for Managing Popup State

import { useState } from "react";

export const usePopup = () => {
   const [isOpen, setIsOpen] = useState(false);
   const togglePopup = () => setIsOpen(!isOpen);
   return { isOpen, togglePopup };
};
