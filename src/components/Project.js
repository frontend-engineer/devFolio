import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { FaGithub, FaLink } from "react-icons/fa";
const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((item) => {
            return <span key={item.id}>{item.title}</span>;
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithub className="project-icon" />
          </a>
          <a href={url}>
            <FaLink className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

// For Projects Number => <span className="project-number">0{index + 1}.</span>

Project.propTypes = {};

export default Project;
