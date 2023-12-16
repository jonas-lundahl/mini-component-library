import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <Text>{displayedValue}</Text>
      <StyledIcon id="chevron-down" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 12px 16px;
  position: relative;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  width: fit-content;

  &:hover {
    color: ${COLORS.gray700};
  }

  &:focus-within {
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

const Text = styled.span`
  margin-right: 16px;
  vertical-align: middle;
`;

const StyledIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
`;

const StyledSelect = styled.select`
  position: absolute;
  inset: 0;
  appearance: none;
  border: none;
  background-color: transparent;
  outline: none;
  color: transparent;
`;

export default Select;
