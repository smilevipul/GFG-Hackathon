import React from "react";
import shark1 from "../images/sharks1.JPG";
import soheil from "../images/soheil.png"
import shivam from "../images/shivam.png"
import gupta from "../images/abhishek.png"

const Sharks = () => {
  return (
    <>
      <div className="sharksmaindiv">
        <h1 className="text-center">List Of Registered Sharks</h1>
        {/* <div className="col">
          <div class="card" style={{width: "18rem"}}>
            <img src={shark1} class="card-img-top" alt="sharksimg" />
            <div class="card-body">
              <h5 class="card-title">Vipul Kumar</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div> */}

        <div className="sharkscards">
          <div className="card">
          <div className="sharksimg">
          <img src={shark1} class="card-img-top" alt="sharksimg" />
          </div>

          <div className="sharksdetails">
          <h5>Vipul Kumar</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fugit dolorum commodi fuga beatae voluptas rerum dolor minima explicabo consequatur.</p>

            <div class="smlinks">
              <a href="#" class="card-link">
                Get More Details
              </a>
            </div>
          </div>

          </div>
          <div className="card">
          <div className="sharksimg">
          <img src={soheil} class="card-img-top" alt="sharksimg" />
          </div>

          <div className="sharksdetails">
          <h5>Md Soheil Ansari</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fugit dolorum commodi fuga beatae voluptas rerum dolor minima explicabo consequatur.</p>

            <div class="smlinks">
              <a href="#" class="card-link">
                Get More Details
              </a>
            </div>
          </div>
          </div>
          <div className="card">
          <div className="sharksimg">
          <img src={shivam} class="card-img-top" alt="sharksimg" />
          </div>

          <div className="sharksdetails">
          <h5>Shivam Shrivastava</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fugit dolorum commodi fuga beatae voluptas rerum dolor minima explicabo consequatur.</p>

            <div class="smlinks">
              <a href="#" class="card-link">
                Get More Details
              </a>
            </div>
          </div>
          </div>
          <div className="card">
          <div className="sharksimg">
          <img src={gupta} class="card-img-top" alt="sharksimg" />
          </div>

          <div className="sharksdetails">
          <h5>Abhishek Gupta</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fugit dolorum commodi fuga beatae voluptas rerum dolor minima explicabo consequatur.</p>

            <div class="smlinks">
              <a href="#" class="card-link">
                Get More Details
              </a>
            </div>
          </div>
          </div>
          <div className="card">
          <div className="sharksimg">
          <img src={shark1} class="card-img-top" alt="sharksimg" />
          </div>

          <div className="sharksdetails">
          <h5>Vipul Kumar</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fugit dolorum commodi fuga beatae voluptas rerum dolor minima explicabo consequatur.</p>

            <div class="smlinks">
              <a href="#" class="card-link">
                Get More Details
              </a>
            </div>
          </div>
          </div>
          <div className="card">card 1</div>
          <div className="card">card 1</div>
          <div className="card">card 1</div>
          <div className="card">card 1</div>
        </div>
      </div>
    </>
  );
};

export default Sharks;
