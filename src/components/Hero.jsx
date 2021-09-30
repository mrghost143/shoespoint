import "../styles/hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero_container">
        <div className="hero">
          <div className="hero_img_con">
            <div className="img_box">
              <img
                className="hero_img"
                src="https://thumbs.dreamstime.com/b/vintage-red-shoes-23151148.jpg"
                alt="Shoe-image"
              />
            </div>
          </div>
          <div className="hero_info">
            <div className="hero_title">
              <h1>Ready on the Do</h1>
            </div>
            <div className="hero_des">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                fuga perferendis magnam at vel exercitationem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
