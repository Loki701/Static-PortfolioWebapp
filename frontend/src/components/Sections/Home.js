import "./Home.css";
export default function Home() {
  return (
    <>
      <a name="Home" />
      <div className="home">
        <div className="home-container">
          <div className="home-title">
            <h1>
              I<span className="special-char">'</span>M<br />
              Jose
              <br />
              Figueredo<span className="special-char">.</span>
            </h1>
          </div>
          <div className="home-subtitle">
            <p>Software Developer {"&"} UX/UI Designer</p>
          </div>
        </div>
      </div>
    </>
  );
}
