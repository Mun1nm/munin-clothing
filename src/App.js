import Directory from "./components/directory/directory.component";

const App = () => {

  const categories = [
    {
      "id": 1,
      "title": "bonés",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jaquetas",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "tênis",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "feminino",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "masculino",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]

  return (
    <Directory categories={categories} />
  );
}

export default App;