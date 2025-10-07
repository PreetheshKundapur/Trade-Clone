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
           Preethesh Kundapura – a passionate problem solver diving deep into algorithmic challenges. 
           Driven by a methodical mindset and an insatiable curiosity, Preethesh approaches each problem with precision, persistence,
            and a focus on building not just code, but a strong foundation for a future in software development and computational thinking.
          </p>

          <p>
            {" "}
            I have done BE in Information Science Engneering Form Visvesvaraya Technological University (VTU),
            And love to Solve Real Time Problems 
          </p>

          <p>Achievements - Secured Project of the Year Award for scalable cloud-based application design.<br/>State Karate Athlete – Ranked 6th in the state Ranking 2024. </p>
          <p>
            {" "}
            Connect on <i class="fa fa-github" aria-hidden="true"></i> 
            <a href="https://github.com/PreetheshKundapur" style={{ textDecoration: "none" }}> Github{" "}
            </a>{""}
             
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>{" "}
            <a href="https://www.linkedin.com/in/preethesh-kundapura-718b7b286/" style={{ textDecoration: "none" }}>
              LinkedIn{" "}
            </a>{" "}
            <i class="fa fa-instagram" aria-hidden="true"></i>{" "}
            <a href="https://www.instagram.com/_____preethesh_____/" style={{ textDecoration: "none" }}>
              Instagram
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
