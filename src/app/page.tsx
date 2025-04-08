'use client';

import React, { useState } from "react";
import ItemGrid from "./components/ItemGrid";
// import AddActionModal from "./components/AddActionModal";

function App() {
  // const [showModal, setShowModal] = useState(false);
  const [items, ] = useState([
    {
      name: "Food",
      img: "./imgs/food.png",
    },
    {
      name: "Water",
      img: "./imgs/water.png",
    },
    {
      name: "TV",
      img: "./imgs/tv.png",
    },
    {
      name: "Toilet",
      img: "./imgs/toilet.png",
    },
    {
      name: "sit",
      img: "./imgs/sitting.png",
    },
    {
      name: "sleep",
      img: "./imgs/sleep.jpg",
    },
    {
      name: "Maansi",
      img: "./imgs/mom.jpg",
    },
    {
      name: "Shrayas",
      img: "./imgs/dad.jpg",
    },
    {
      name: "Gi-yaan",
      img: "./imgs/jiyan.jpeg",
    },
  ]);
  // const onAddAction = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  // const addAction = (action) => {
  //   items.push(action);
  //   setItems([...items]);
  //   setShowModal(false);
  // };
  return (
    <div className="App">
      {/* <header>Optimus</header> */}
      <ItemGrid items={items} />
      {/* <button type="button" onClick={onAddAction}>
        Add action
      </button> */}
      {/* {showModal && (
        <AddActionModal addAction={addAction} closeModal={closeModal} />
      )} */}
    </div>
  );
}

export default App;
