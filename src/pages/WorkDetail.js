import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { WorkState } from "../workState";
import { Description } from "../styles";

const WorkDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects, setProjects] = useState(WorkState);
  const [project, setProject] = useState(null);

  //useEffect
  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
  }, [projects, url]);
  return (
    //make sure the project is available and if so render content
    <>
      {project && (
        <div>
          <HeadLine>
            <h2>{project.title}</h2>
            <img src={project.mainImg} alt="project" />
          </HeadLine>
          <Desciption>
            <DesciptionStyle>
              <h3>{project.stack}</h3>
              <div className="line"></div>
              <p>{project.description}</p>
              <p>Check out the live site @ {project.live}</p>
              <p>
                And view the <a href="{project.repo}">{project.repo}</a>
              </p>
            </DesciptionStyle>
          </Desciption>
        </div>
      )}
    </>
  );
};

const Details = styled.div`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Desciption = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;
const DesciptionStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
    color: white;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default WorkDetail;
