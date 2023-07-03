import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  const data = [
    {
      name: "Pes",
      surname: "Arnol",
      age: "45",
      id: 1,
    },
    {
      name: "Dai",
      surname: "bur",
      age: "43",
      id: 2,
    },
    {
      name: "Cart",
      surname: "Osennay",
      age: "12",
      id: 3,
    },
    {
      name: "Buty",
      surname: "buma",
      age: "54",
      id: 4,
    },
    {
      name: "Gnoi",
      surname: "NeLI",
      age: "34",
      id: 5,
    },
    {
      name: "kappa",
      surname: "rapa",
      age: "43",
      id: 6,
    },
    {
      name: "aha",
      surname: "luf",
      age: "12",
      id: 7,
    },
    {
      name: "luffy",
      surname: "straw",
      age: "17",
      id: 8,
    },
  ];
  return (
    <div className="App">
      <Header />
      <Section data={data} />
      <Footer />
    </div>
  );
}

export default App;
