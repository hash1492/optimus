import React from "react";
import s from "./ItemGrid.module.scss";

interface Item {
  name: string;
  img?: string;
  type?: string;
}

interface ItemGridProps {
  items: Item[];
}

function ItemGrid({ items }: ItemGridProps) {

const onClick = (item: Item): void => {
    if ("speechSynthesis" in window) {
        const utterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(item.name); // Create the speech utterance
        window.speechSynthesis.speak(utterance); // Speak the text
    } else {
        alert("Your browser does not support speech synthesis.");
    }
};
  return (
    <div className={s.root}>
      <div className={s.grid}>
        {items.map((item, index) => (
          <div key={index} className={s.item} onClick={() => onClick(item)} tabIndex={0} role="button">
            {item.img && <img src={item.img} alt={item.name} />}
            {item.type === "text" && <h1>{item.name}</h1>}
            {/* <h1>{item.name}</h1> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemGrid;
