import "../styles/categitem.css";

const CategItem = ({ item }) => {
  return (
    <>
      <div className="cat_container">
        <img className="cat_img" src={item.img} alt="" />
        <div className="cat_info">
          <h1 className="cat_title">{item.title}</h1>
          <div className="shopbtn">shop now</div>
        </div>
      </div>
    </>
  );
};

export default CategItem;
