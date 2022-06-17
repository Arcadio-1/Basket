const ProdList = (props) => {
  return (
    <div className="main-list">
      {props.products.map((item) => {
        return (
          <article className="product" key={item.id} id={item.id}>
            <img className="product-img" src={item.img} alt="" />
            <h3 className="product-name">{item.name}</h3>
            <button
              className="product-addBtn"
              type="button"
              onClick={() => props.addToBasket(item)}
            >
              add
            </button>
          </article>
        );
      })}
    </div>
  );
};
export default ProdList;
