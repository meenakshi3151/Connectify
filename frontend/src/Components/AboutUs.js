// import React from "react";
// function AboutUs() {
//     const about = {
//         textAlign: "center",
//         color: "white",
//         background: "linear-gradient(45deg, black,#0762C8)",
//         padding: "70px 0",
//       };
    
//       const learn= {
//         color: "white",
//         textDecoration: "none",
//         padding: "2px 10px",
//         border: "0px solid #fff",
//         borderRadius: "5px",
//         transition: "background-color 0.3s ease",
//         marginTop: "12px",
//         display: "inline-block",
//       };
    
//       return (
//         <div className="px-2" style={about} id = "about">
//           <h1 className="text-3xl p-2">About Us</h1>
//           <p className="p-2"> 
//           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
//           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
//          </p>
//           <div style={learn} sectionId="contactSection">
//            <button className="p-2">LEARN MORE</button> 
//           </div>
//         </div>
//       )
// }
// export default AboutUs;

import React from "react";
import img4 from "../images/about1.jpg";
import img5 from "../images/about2.jpg";

function AboutUs() {  
      return (
          
<section class="py-3 py-md-5 py-xl-8">
  <div class="container" id = "about">
    <div class="row">
      <div class="col-12 col-md-10 col-lg-8">
        <h3 class="fs-5 mb-2 text-secondary text-uppercase">About</h3>
        <h2 class="display-5 mb-4">At our core, we prioritize pushing boundaries, embracing the unknown, and fostering a culture of continuous learning.</h2>
        <button type="button" class="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5"  style={{color: "#222"}}>Connect Now</button>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row gy-3 gy-md-4 gy-lg-0">
      <div class="col-12 col-lg-6">
        <div class="card bg-light p-3 m-0">
          <div class="row gy-3 gy-md-0 align-items-md-center">
            <div class="col-md-5">
              <img src={img4} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-7">
              <div class="card-body p-0">
                <h2 class="card-title h4 mb-3">Why Choose Us?</h2>
                <p class="card-text lead">With years of experience and deep industry knowledge, we have a proven track record of success and are pushing ourselves to stay ahead of the curve.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="card bg-light p-3 m-0">
          <div class="row gy-3 gy-md-0 align-items-md-center">
            <div class="col-md-5">
              <img src={img5} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-7">
              <div class="card-body p-0">
                <h2 class="card-title h4 mb-3">Visionary Team</h2>
                <p class="card-text lead">With a team of visionary engineers, developers, and creative minds, we embark on a journey to transform complex challenges into ingenious technological solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      )
}
export default AboutUs;