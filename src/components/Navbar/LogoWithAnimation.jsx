"use client";

import styled from "styled-components";

const LogoWithAnimation = () => {
  return (
    <StyledWrapper>
      <span className="ui-logo">
        <span>IdeaVault</span>
      </span>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .ui-logo {
    --logo-transition: 0.3s;
    --logo-letter-spacing: 0.05rem;
    --logo-animation-duration: 3s;
    --default-logo-color: #5e41de;
    --hover-logo-color: #a78bfa;
    --font-size: 22px;
    --font-weight: 800;
    --font-family: Menlo, Roboto Mono, monospace;

    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: default;
  }

  .ui-logo > span {
    letter-spacing: var(--logo-letter-spacing);
    transition: var(--logo-transition);
    box-sizing: border-box;
    position: relative;
    background: inherit;
    color: var(--default-logo-color);
    font: var(--font-weight) var(--font-size) var(--font-family);
  }

  .ui-logo > span::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    background: inherit;
    color: var(--hover-logo-color);
  }

  .ui-logo:hover > span,
  .ui-logo:focus > span {
    color: var(--hover-logo-color);
  }

  .ui-logo:hover > span::before,
  .ui-logo:focus > span::before {
    animation: chitchat linear both var(--logo-animation-duration);
  }

  @keyframes chitchat {
    0% {
      content: "#";
    }
    5% {
      content: ".";
    }
    10% {
      content: "^{";
    }
    15% {
      content: "-!";
    }
    20% {
      content: "#$_";
    }
    25% {
      content: "№:0";
    }
    30% {
      content: "#{+.";}35%{content: "@}-?";
    }
    40% {
      content: "?{4@%";
    }
    45% {
      content: "=.,^!";
    }
    50% {
      content: "?2@%";
    }
    55% {
      content: "\\;1}]";
    }
    60% {
      content: "?{%:%";
      right: 0;
    }
    65% {
      content: "|{f[4";
      right: 0;
    }
    70% {
      content: "{4%0%";
      right: 0;
    }
    75% {
      content: "'1_0<";
      right: 0;
    }
    80% {
      content: "{0%";
      right: 0;
    }
    85% {
      content: "]>'";
      right: 0;
    }
    90% {
      content: "4";
      right: 0;
    }
    95% {
      content: "2";
      right: 0;
    }
    100% {
      content: "";
      right: 0;
    }
  }
`;

export default LogoWithAnimation;
