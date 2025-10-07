import React from "react";
function Hero() {
  return (
    <div className="container text-center mt-5">
      <h1>Trade-Easy Products</h1>
      <h3 className="text-muted mt-3">Sleek, modern, and intuitive trading platforms</h3>
      <p className="mt-3">
        Check out our{" "}
        <a href="" style={{ textDecoration: "none" }}>
          investment offerings{" "}
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
