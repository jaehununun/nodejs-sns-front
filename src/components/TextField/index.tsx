import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

interface IProps {
  title: string;
  value: string;
  type?: string;
  error?: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export const TextField = ({
  title,
  value,
  type = "text",
  error,
  onChange = () => {},
}: IProps) => {
  return (
    <InputWrapper>
      <InputBox
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        type={type}
      />
      <InputTitle>{title}</InputTitle>
      {error && <Warnning>{error}</Warnning>}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 292px;
  height: 50px;
  position: relative;
  margin: 15px 0;
  ::after {
    content: "";
    width: 6px;
    height: 6px;
    display: block;
    position: absolute;
    background-color: ${theme.palette.primary};
    right: 6.5px;
    top: 6px;
    transform: skewX(-9.5deg);
  }
`;

const InputTitle = styled.span`
  position: absolute;
  top: 18px;
  left: 20px;
  font-size: 17px;
  transition: 0.3s;
  background-color: white;
  padding: 0 5px;
`;

const InputBox = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  font-size: 17px;
  padding-left: 20px;
  /* border-radius: 10px; */
  box-sizing: border-box;
  border: 0.5px solid ${theme.palette.blackLighter};
  &:focus {
    border: 2px solid ${theme.palette.primary};
  }
  &:focus ~ span,
  &:valid ~ span {
    top: -5px;
    font-size: 14px;
    color: ${theme.palette.primary};
  }
`;

const Warnning = styled.div`
  color: red;
  padding: 5px 0 0 10px;
  font-size: 12px;
`;
