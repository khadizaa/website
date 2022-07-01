let stays = [
  {
    id: "villacora",
    name: "Villa Cora",
    img:
      "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/italy/tuscany/villa-cora-hotel-florence-product.jpg?imwidth=480",
    description:
      "Villa Cora is an outstanding hotel offering impeccable service, superb facilities including a lovely garden and pool are a calm, cool refuge after a hot, sticky day in central Florence.",
    nearby: [
      "Cathedral of Santa Maria del Fiore",
      "Ponte Vecchio",
      "Tower Galleria degli Uffizi"
    ]
  },
  {
    id: "thebrunelleschihotel",
    name: "The Brunelleschi Hotel",
    img:
      "https://www.brunelleschihotelflorence.com/wp-content/uploads/2020/05/colazione-camera-hotel-firenze.jpg",
    description:
      "Set in a converted church and Byzantine tower dating from the 6th century, this luxe hotel on a square is a 3-minute walk from Florence Cathedral and a 6-minute walk from the Uffizi Gallery.",
    nearby: ["Florence Cathedral", "Tower Galleria degli Uffizi"]
  },
  {
    id: "stregis",
    name: "The St. Regis Florence",
    img:
      "https://www.kayak.com/rimg/himg/cb/12/c5/leonardo-175965070-flrxr-suite-8636-hor-clsc_O-214035.jpg",
    description:
      "The St Regis Florence delivers old world grandeur, five-star service, and an exceptional location that’s literally a stone’s throw from the Arno River.",
    nearby: ["Santa Maria Novella train station", "Florence Cathedral"]
  }
];

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}
