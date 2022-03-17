/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  path: string;
  imagePath?: string;
  name: string;
}

export default function Card({ path, imagePath, name }: IProps) {
  if (!imagePath) return <p>ups</p>;

  return (
    <li key={path} className="card">
      <Link to={path} className="card__link">
        <div className="card__image">
          <img src={require(`../../../${imagePath}`)} alt="" />
        </div>
        <h3 className="card__title">{name}</h3>
      </Link>
    </li>
  );
}

Card.defaultProps = {
  imagePath: "",
};
