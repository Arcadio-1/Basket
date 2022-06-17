const Pagenation = () => {
  return (
    <div className="main-pageNum">
      <a href="main-pageNum-prev">
        <i className="fa-solid fa-angle-left"></i>
      </a>
      <div className="main-pageNum-numbers">
        <div className="main-pageNum-number active-page">1</div>
        <div className="main-pageNum-number">2</div>
        <div className="main-pageNum-number">3</div>
      </div>
      <a href="main-pageNum-next">
        <i className="fa-solid fa-angle-right"></i>
      </a>
    </div>
  );
};
export default Pagenation;
