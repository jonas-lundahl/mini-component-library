/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div.attrs((p) => ({
  role: "progressbar",
  "aria-valuemin": 0,
  "aria-valuemax": 100,
  "aria-valuenow": p.value,
}))`
  border-radius: ${(p) => (p.size === "large" ? 8 : 4)}px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
  background-color: ${COLORS.transparentGray15};

  width: var(--width);
  height: var(--height);
  padding: var(--padding);

  --width: 370px;
  --height: ${(p) =>
    p.size === "small" ? 8 : p.size === "medium" ? 12 : 24}px;
  --padding: ${(p) => (p.size === "large" ? 4 : 0)}px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(p) => p.value}%;
  height: 100%;

  /* Trim off corners when progress bar is near full */
  border-top-right-radius: ${(p) => (p.value >= 99 ? 4 : 0)}px;
  border-bottom-right-radius: ${(p) => (p.value >= 99 ? 4 : 0)}px;

  /* Trim off corners when progress bar is near empty */
  border-top-left-radius: ${(p) => (p.value <= 1 ? 0 : 4)}px;
  border-bottom-left-radius: ${(p) => (p.value <= 1 ? 0 : 4)}px;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper value={value} size={size}>
      <Bar value={value} />
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

export default ProgressBar;
