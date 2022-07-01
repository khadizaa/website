import "./App.css";
import React from "react";
import Card from "./components/Card";
import { getStays } from "./data";

export default function App() {
  let stays = getStays();
  return (
    <div className="app">
      <header className="app-header">
        <h1>Dream Stays: Florence</h1>
      </header>
      <p className="location-slogan">Flourish in Florence</p>
      <hr />
      <h2>Local Activites</h2>
      <ul>
        <li>Visit Uffizi Gallery</li>
      </ul>
      <ul>
        <li>Visit the Florence Cathedral</li>
      </ul>
      <ul>
        <li>Wine Tasting</li>
      </ul>
      <hr />
      <h3>Stays</h3>
      <div className="container">
        {stays.map((stay) => {
          return (
            <Card
              price={stay.price}
              key={stay.id}
              id={stay.id}
              name={stay.name}
              description={stay.description}
              img={stay.img}
            />
          );
        })}
      </div>
    </div>
  );
}
