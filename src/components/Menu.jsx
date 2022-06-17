import AddToMenu from "./AddToMenu";
const Menu = (props) => {
  return (
    <aside className="menu">
      <div className="menu-header">
        <div className="menu-header-heding">bascket list</div>
        <div className="menu-header-total">11</div>
      </div>
      <div className="menu-list">
        <AddToMenu products={props.products} />
      </div>
      <button className="menu-clear" type="button">
        clear all
      </button>
    </aside>
  );
};
export default Menu;
