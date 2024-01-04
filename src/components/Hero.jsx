const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-content">
          <h1> your feet deserve the best shoes</h1>
          <p>
            your feet deserve the best and we are here to help you with our
            shoes. your feet deserve the best shoes
          </p>
          <div className="hero-btn">
          <button>Shop now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also available on </p>
          <div className="brand-icons">
            <img src="/images/amazon-logo.png" alt="amazon" width={60} height={60}/>
            <img src="/images/flipcart-logo.png" alt="flipcart" width={60} height={60} />
          </div>
        </div>
        </div>
       
        
        <div className="hero-image">
        <img src="/images/shoes1.avif" alt="shoes" width={600} height={600}/>
           
        </div>
      </div>
    </div>
  );
};

export default Hero;
