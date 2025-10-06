import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5  border-top">
        <h1 className=" text-center  ">People</h1>
      </div>

      <div className="row p-5  text-muted ">
        <div className="col-6 p-5 text-center">
          <img
            src="Media/Preethesh.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-3">Preethesh Kundapura</h4>
        </div>
        <div className="col-6 p-5">
          <p>
            Preethesh Kundapura diving into algorithmic challenges with C++.
            Today, With a methodical mindset and a passion for learning,
            building not just code, but a future shaped by precision and
            persistence.
          </p>

          <p>
            {" "}
            I have done BE in Information Science Engneering Form Visvesvaraya Technological University (VTU),
            And love to Solve Real Time Problems 
          </p>

          <p>Also State Karate Athlete 2024.</p>
          <p>
            {" "}
            Connect on <i class="fa fa-github" aria-hidden="true"></i> 
            <a href="" style={{ textDecoration: "none" }}> Github{" "}
            </a>
             
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>{" "}
            <a href="" style={{ textDecoration: "none" }}>
              LinkedIn{" "}
            </a>{" "}
            <i class="fa fa-instagram" aria-hidden="true"></i>{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Instagram
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
