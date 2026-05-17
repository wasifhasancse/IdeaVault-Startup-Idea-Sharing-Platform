import { IoTrailSignSharp } from "react-icons/io5";
import styled from "styled-components";

const PrimaryButton = () => {
  return (
    <StyledWrapper>
      <button className="btn-shine">
        <span className="lable">Button</span>
        <IoTrailSignSharp className="svg-icon" />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    gap: 8px;
    height: 36px;
    width: 120px;
    border: none;
    background: #5e41de33;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
    transition: background 0.2s ease;
  }

  button span.lable {
    line-height: 20px;
    font-size: 17px;
    color: #5d41de;
    font-family: sans-serif;
    letter-spacing: 1px;
    transition: margin-left 0.5s ease;
  }

  button .svg-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    height: 1em;
    fill: #5d41de;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  button:hover {
    background: #5e41de4d;
    animation: rotate624 0.7s ease-in-out both;
  }

  button:hover span.lable {
    margin-left: 10px;
    animation: storm1261 0.7s ease-in-out both;
    animation-delay: 0.06s;
  }

  button:hover .svg-icon {
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
