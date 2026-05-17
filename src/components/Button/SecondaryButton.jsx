import { IoTrailSignSharp } from "react-icons/io5";
import styled from "styled-components";

const SecondaryButton = () => {
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
    display: flex;
    align-items: center;
    position: relative;
    padding: 6px 12px;
    gap: 8px;
    height: 36px;
    width: 120px;
    border: none;
    background: #5e41de33;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
    transition: background 0.5s ease;
  }

  button .lable {
    line-height: 20px;
    font-size: 17px;
    color: #5d41de;
    font-family: sans-serif;
    letter-spacing: 1px;
    font-weight: 500;
  }

  button:hover {
    background: #5e41de4d;
    animation: rotate624 0.7s ease-in-out both;
  }

  button:hover .lable {
    display: none;
  }

  button .svg-icon {
    width: 20px;
    height: 20px;
    color: #5d41de;
    transition: 0.8s;
  }

  button:hover .svg-icon {
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
