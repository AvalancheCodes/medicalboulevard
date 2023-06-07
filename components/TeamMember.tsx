
import React from "react";

interface IProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

const TeamMember = ({ image, name, role, description }: IProps) => {
  // Render markup
  return (
    <div className="member">
      <img src={image} alt="" />
      <h4>{name}</h4>
      <span>{role}</span>
      <p>
        {description}
      </p>
    </div>
  )
}

export default TeamMember
