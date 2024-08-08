import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-wrapper">
      <div className="hero-wrapper">
        <div className="wrapper-sec-1">
          <h2>YOUR FEET DESERVE THE BEST</h2>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="btn-box">
            <button className="btn btn-shop">Shop Now</button>
            <button className="btn btn-category">Category</button>
          </div>
          <div className="always">
            <p>Also Available On</p>
          </div>
          <div className="social">
            <img src="/images/flipkart.png" alt="" />
            <img src="/images/amazon.png" alt="" />
          </div>
        </div>
        <div className="wrapper-sec-2">
          <img src="/images/shoe_image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
