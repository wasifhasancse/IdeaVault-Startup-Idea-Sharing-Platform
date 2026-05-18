"use client";

import Link from "next/link";
import { IoTrailSignSharp } from "react-icons/io5";
import styled from "styled-components";

const SecondaryButton = ({
  label = "Button",
  icon: Icon = IoTrailSignSharp,
  href,
  onClick,
}) => {
  const inner = (
    <>
      <span className="lable">{label}</span>
      <Icon className="svg-icon" />
    </>
  );

  return (
    <StyledWrapper>
      {href ? (
        <Link href={href} className="btn-shine" onClick={onClick}>
          {inner}
        </Link>
      ) : (
        <button className="btn-shine" onClick={onClick}>
          {inner}
        </button>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-shine {
    display: inline-flex;
    align-items: center;
    position: relative;
    padding: 8px 20px;
    gap: 8px;
    height: 42px;
    width: fit-content;
    min-width: 140px;
    border: none;
    background: #5e41de33;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    transition: background 0.5s ease;
  }

  .btn-shine .lable {
    line-height: 20px;
    font-size: 15px;
    color: #5d41de;
    font-family: sans-serif;
    letter-spacing: 1px;
    font-weight: 600;
    white-space: nowrap;
  }

  .btn-shine:hover {
    background: #5e41de4d;
    animation: rotate624 0.7s ease-in-out both;
  }

  .btn-shine:hover .lable {
    display: none;
  }

  .btn-shine .svg-icon {
    width: 20px;
    height: 20px;
    color: #5d41de;
    transition: 0.8s;
  }

  .btn-shine:hover .svg-icon {
    margin-left: 40px;
    transform: rotate(50deg);
  }

  @keyframes rotate624 {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }

    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }

    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }

    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }

    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
`;

export default SecondaryButton;
