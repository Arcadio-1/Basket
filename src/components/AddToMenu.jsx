const AddToMenu = (props) => {
  return (
    <div>
      {props.products.length > 0 ? (
        props.products.map((item) => {
          return (
            <article className="menu-list-item" id={item.id} key={item.id}>
              <input type="button" value="" className="menu-list-item-remove" />
              <div className="menu-list-item-qtys">
                <div className="qty-minus"></div>
                <input type="text" name="" id="" defaultValue="0" />
                <div className="qty-plus"></div>
              </div>
              <img src={item.img} alt="" />
            </article>
          );
        })
      ) : (
        <div>
          <p>list is Empty</p>
        </div>
      )}
    </div>
  );
};
export default AddToMenu;
