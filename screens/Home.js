import Categories from "../components/Categories.js";
import Header from "../components/Header";

const Home = ({onSelectCategory}) => {
  return (
    <>
      <Header title="Categories" />
      <Categories onSelectCategory={onSelectCategory} />
    </>
  );
};

export default Home;
