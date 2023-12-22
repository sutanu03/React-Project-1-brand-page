
const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE 
            <br/>THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero-bttn">
            <button >Shop Now</button>
            <button className="secondary-bttn">Category</button>
        </div>
        <div className="hero-shop">
            <p>Also Available On</p>
            <a href="https://miro.medium.com/v2/resize:fit:1280/0*KvkASSMB7_F_Tfh8">  <img src="/public/images/shops.png" alt="shop" /></a>
        </div>
      </div>
      <div className="hero-image">
       <img src="/public/images/shoe_image.png" alt="shoe-img" />
      </div>
    </main>
  )
};

export default Hero;
