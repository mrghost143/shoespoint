import "../styles/letter.css";

const Letter = () => {
  return (
    <>
      <div className="letter_con">
        <h1 className="letter_title">Newsletter</h1>
        <span className="letter_desc">
          Now Get Updates from your Favourite Product timely
        </span>
        <div className="input_con">
          <input
            type="email"
            placeholder=" Enter your Email . . . "
            className="letter_inp"
          />
          <button className="letter_btn">
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Letter;
