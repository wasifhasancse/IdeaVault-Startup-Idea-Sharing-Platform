"use client";

import Link from "next/link";
import { IoTrailSignSharp } from "react-icons/io5";
import styled from "styled-components";

const PrimaryButton = ({
  label = "Button",
  icon: Icon = IoTrailSignSharp,
  href,
  onClick,
}) => {
  const inner = (
    <>
      <span className="lable px-2.5">{label}</span>
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
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 6px 14px;
    gap: 16px;
    height: 36px;
    width: fit-content;
    min-width: 90px;
    border: none;
    background: #5e41de33;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    transition: background 0.2s ease;
  }

  .btn-shine .lable {
    line-height: 20px;
    font-size: 15px;
    color: #5d41de;
    font-family: sans-serif;
    letter-spacing: 1px;
    white-space: nowrap;
    transition: margin-left 0.5s ease;
  }

  .btn-shine .svg-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    height: 1em;
    fill: #5d41de;
    color: #5d41de;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .btn-shine:hover {
    background: #5e41de4d;
    animation: rotate624 0.7s ease-in-out both;
  }

  .btn-shine:hover .lable {
    margin-left: 10px;
    animation: storm1261 0.7s ease-in-out both;
    animation-delay: 0.06s;
  }

  .btn-shine:hover .svg-icon {
    opacity: 1;
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

  @keyframes storm1261 {
    0% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
    25% {
      transform: translate3d(4px, 0, 0) translateZ(0);
    }
    50% {
      transform: translate3d(-3px, 0, 0) translateZ(0);
    }
    75% {
      transform: translate3d(2px, 0, 0) translateZ(0);
    }
    100% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
  }
`;

export default PrimaryButton;
