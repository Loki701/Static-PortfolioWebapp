import "./Projects.css";
import React, { useState } from "react";

export default function Projects() {
  const projectArray = [
    {
      title: "WebApp",
      description: "description 1",
      image:
        "data:image/jpeg;base64,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",
      githubLink: "https://github.com/Loki701/Static-PortfolioWebapp",
    },
    {
      title: "Game",
      description: "description 2",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      githubLink: "https://github.com/Loki701/Static-PortfolioWebapp",
    },
    {
      title: "Dev Tool",
      description: "description 3",
      image:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
      githubLink: "https://github.com/Loki701/Static-PortfolioWebapp",
    },
  ];
  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };
  var [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((slideIndex += n));
    handleShowSlide();
  };
  const currentSlide = (n) => {
    setSlideIndex(n);
    handleShowSlide();
  };
  const handleShowSlide = () => {
    if (slideIndex > projectArray.length) {
      setSlideIndex(1);
    }
    if (slideIndex < 1) {
      setSlideIndex(projectArray.length);
    }
  };
  const handleDisplayStyle = (index) => {
    console.log(index);
    if (index == slideIndex - 1) {
      return { display: "block" };
    } else {
      return { display: "none" };
    }
  };

  const projectList = projectArray.map((project, index) => {
    return (
      <div
        key={generateKey(project.title)}
        className="mySlides fade"
        style={handleDisplayStyle(index)}
      >
        <div class="numbertext">
          {index + 1} / {projectArray.length}
        </div>
        <img src={project.image} style={{ width: "100%" }} />
        <div class="text">{project.title}</div>
      </div>
    );
  });
  const dotList = projectArray.map((index) => {
    return (
      <span
        key={index}
        className={() => {
          if (index == slideIndex - 1) {
            return "bot activeP";
          } else {
            return "bot";
          }
        }}
        onClick={() => {
          currentSlide(index + 1);
        }}
      ></span>
    );
  });

  return (
    <>
      <a name="Projects" />
      <div className="projects">
        <div className="projects-container">
          <div className="projects-title">
            <h1>This are my Projects</h1>
          </div>

          <div className="projects-slideshow-container">
            {projectList}
            <a
              className="prev"
              onClick={() => {
                plusSlides(-1);
              }}
            >
              &#10094;
            </a>
            <a
              className="next"
              onClick={() => {
                plusSlides(1);
              }}
            >
              &#10095;
            </a>
          </div>
          <br />

          <div style={{ textAlign: "center" }}>{dotList}</div>
        </div>
      </div>
    </>
  );
}
