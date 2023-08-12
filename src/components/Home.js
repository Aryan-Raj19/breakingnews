import React, { useRef } from "react";
import ListTypes from "./ListTypes";

const Home = () => {
  const fullclick1 = useRef(null);
  const fullclick2 = useRef(null);
  const fullclick3 = useRef(null);
  const fullclick4 = useRef(null);
  const fullclick5 = useRef(null);

  return (
    <>
      <h3 className="top-headline">
        <b>TOP HEADLINES</b>
      </h3>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="10000"
            onClick={() => {
              fullclick1.current.click();
            }}
          >
            <img
              src="https://i.ytimg.com/vi/FXpfwrhpRis/maxresdefault.jpg"
              className="d-block"
              style={{
                margin: "auto",
                width: "70vw",
                height: "60vh",
                borderRadius: "10px",
                marginTop: "7vh",
                cursor: "pointer",
              }}
              alt="..."
            />
            <a
              href="https://www.youtube.com/watch?v=FXpfwrhpRis"
              ref={fullclick1}
              target="_blank"
              className="btn btn-primary d-none"
            >
              Go somewhere
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>
              Emirati astronaut Sultan Al Neyadi scripts history, becomes first Arab to take spacewalk - DNAIndiaNews
              </h5>
              <p>
              Emirati astronaut Sultan Al Neyadi scripted history. Sultan Al Neyadi has completed the first spacewalk for an Arab astronaut outside the ISS. Al Nayedi held...
              </p>
            </div>
          </div>
          <div
            className="carousel-item"
            data-bs-interval="2000"
            onClick={() => {
              fullclick2.current.click();
            }}
          >
            <img
              src="https://c.ndtvimg.com/2023-04/610j77lg_sunrisers-hyderabad-bcci-ipl_625x300_29_April_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675"
              className="d-block"
              style={{
                margin: "auto",
                width: "70vw",
                height: "60vh",
                borderRadius: "10px",
                marginTop: "7vh",
                cursor: "pointer",
              }}
              alt="..."
            />
            <a
              href="https://sports.ndtv.com/ipl-2023/dc-vs-srh-live-score-ipl-2023-today-40th-match-delhi-capitals-vs-sunrisers-hyderabad-live-score-updates-3990529"
              ref={fullclick2}
              target="_blank"
              className="btn btn-primary d-none"
            >
              Go somewhere
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>DC vs SRH Highlights, IPL 2023: SunRisers Hyderabad Beat Delhi Capitals By 9 Runs, Put End To 3-Match Losing Streak - NDTV Sports</h5>
              <p>
              DC vs SRH IPL 2023 Highlights: Abhishek Sharma and Heinrich Klaasen steered SRH to 197 for 6 in 20 overs before the side stopped DC 9-run short of the total.
              </p>
            </div>
          </div>
          <div
            className="carousel-item"
            onClick={() => {
              fullclick3.current.click();
            }}
          >
            <img
              src="https://images.news18.com/ibnlive/uploads/2023/04/salman-4-168278800016x9.jpg"
              className="d-block"
              style={{
                margin: "auto",
                width: "70vw",
                height: "60vh",
                borderRadius: "10px",
                marginTop: "7vh",
                cursor: "pointer",
              }}
              alt="..."
            />
            <a
              href="https://www.news18.com/movies/salman-khan-finally-reacts-to-his-rule-against-women-wearing-low-neckline-says-auraton-ki-bodies-7678303.html"
              ref={fullclick3}
              target="_blank"
              className="btn btn-primary d-none"
            >
              Go somewhere
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>
              Salman Khan FINALLY Reacts to His Rule Against Women Wearing Low Neckline, Says ‘Auraton Ki Bodies…’ - News18
              </h5>
              <p>
              Salman has reacted to his rule against low neckline on sets during his appearance on Aap Ki Adalat.
              </p>
            </div>
          </div>
          <div
            className="carousel-item"
            onClick={() => {
              fullclick4.current.click();
            }}
          >
            <img
              src="https://www.hindustantimes.com/ht-img/img/2023/04/29/1600x900/ADANI-INDIA-REGULATOR-0_1681040080485_1681040080485_1682785391840.JPG"
              className="d-block"
              style={{
                margin: "auto",
                width: "70vw",
                height: "60vh",
                borderRadius: "10px",
                marginTop: "7vh",
                cursor: "pointer",
              }}
              alt="..."
            />
            <a
              href="https://www.hindustantimes.com/business/gautam-adani-hidenburg-row-sebi-extension-for-6-months-adanin-group-responds-101682785250257.html"
              ref={fullclick4}
              target="_blank"
              className="btn btn-primary d-none"
            >
              Go somewhere
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>
              After Sebi's filing in SC, Adani Group says 'no conclusions of wrong-doing' - Hindustan Times
              </h5>
              <p>
              Adani group has reacted on Sebi's request to Supreme Court for extending probe deadline for six months.
              </p>
            </div>
          </div>
          <div
            className="carousel-item"
            onClick={() => {
              fullclick5.current.click();
            }}
          >
            <img
              src="https://static.toiimg.com/thumb/msid-99874930,width-1070,height-580,imgsize-1452131,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
              className="d-block"
              style={{
                margin: "auto",
                width: "70vw",
                height: "60vh",
                borderRadius: "10px",
                marginTop: "7vh",
                cursor: "pointer",
              }}
              alt="..."
            />
            <a
              href="https://timesofindia.indiatimes.com/education/news/43-candidates-scored-100-percentile-in-jee-main-2023-11-from-telangana/articleshow/99874940.cms"
              ref={fullclick5}
              target="_blank"
              className="btn btn-primary d-none"
            >
              Go somewhere
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>
              43 candidates scored 100 percentile in JEE (Main) 2023; 11 from Telangana - Times of India
              </h5>
              <p>
              News News: With 100 percentile scorer Ridhi Kamlesh Kumar Maheshwari from Karnataka is the lone female among the 43 toppers in the e Joint Entrance Examination -
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
