import React, { useEffect, useState } from 'react';
import Menu from '/src/Components/explore component/Menu.jsx';
import NewsGrid from '/src/Components/explore component/NewsGrid.jsx';
import Nav from '../../Components/shared/Nav';

const Explore = () => {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a4b173aa4c7f4bf4be79454210b4907f`)
      .then(res => res.json())
      .then(data => setItems(data.articles));
  }, []); // empty dependency array to run the effect once on mount

  return (
    <div>
      <Nav />
      <h1>See the latest news</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
    </div>
  );
}

export default Explore;
