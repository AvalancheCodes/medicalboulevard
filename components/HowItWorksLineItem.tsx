import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import React from "react";

interface IProps {
  number: number;
  title: string;
  text: string;
  linkUrl: string;
  linkText: string;
  className?: string;
}

const HowItWorksLineItem = ({ number, title, text, linkUrl, linkText, className }: IProps) => {
  // Render markup
  return (
    <div className={className}>
      <div className='number-in-circle'>{number.toString()}</div>
      <h1 className='h4 py-2'>{title}</h1>
      <p>{text}</p>

      <Link className='fs-lg fw-bold nav-link text-primary align-baseline' href={linkUrl}>
        {linkText}&nbsp; <i className="fa-solid fa-chevron-right fs-xs"></i>
      </Link>
    </div>
  )
}

export default HowItWorksLineItem
