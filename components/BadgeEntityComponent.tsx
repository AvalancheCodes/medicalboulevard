import React from "react";
import Badge from "react-bootstrap/Badge";
import { IBadgeEntity } from "../core/shared/entities/BadgeEntity";

interface IProps {
  badge: IBadgeEntity;
  className?: string;
}

const BadgeEntityComponent = ({ badge, className }: IProps) => {
  return (
    <Badge bg="" className={`me-1 ${className}`} style={{
      backgroundColor: badge.bgColor,
      color: badge.textColor
    }}>
      {badge.text}
    </Badge>
  )
}

export default BadgeEntityComponent;
