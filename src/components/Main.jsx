import ProdList from "./ProdList";
import Pagenation from "./Pagenation";

const Main = (props) => {
  return (
    <main className="main">
      <div className="main-heading">list of products</div>
      <ProdList products={props.products} addToBasket={props.addToBasket} />
      <Pagenation />
    </main>
  );
};

export default Main;
