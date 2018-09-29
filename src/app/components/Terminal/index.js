// @flow

import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  width: 600px;
  height: 200px;
  max-width: 768px;
  max-height: 340px;
  overflow: scroll;
  border-radius: 6px;
  background-color: rgb(0, 0, 0, 0.75);
`;

const MenuBar = styled.div`
  width: 100%;
  border-radius: 5px 5px 0 0;
  height: 25px;
  background-color: #f9f9f9;
  text-align: left;
  padding-left: 10px;
  padding-top: 2px;
  box-sizing: border-box;
`;

const BarOption = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin-right: 10px;
  display: inline-block;
  background-color: ${({ color }) => color || "red"};
`;

const Content = styled.div`
  color: white;
  font-family: "Monaco", monospace;
  font-size: 15px;
  text-align: left;
  padding: 5px;
`;

const Line = styled.div`
  width: 100%;
`;

const InputLine = styled.div`
  width: 100%;
  display: flex;
`;

const LogLine = styled.div`
  width: 100%;
  color: #a9a9a9;
`;

const Input = styled.input`
  border: 0;
  background-color: transparent;
  font-family: "Monaco", monospace;
  flex-grow: 1;
  padding-left: 5px;
  color: white;
  font-size: 15px;
  padding-top: 0;

  &:active,
  &:focus {
    outline: 0;
  }
`;

const InputLog = styled.span``;

type TerminalPropsT = {
  lastLogin: string
};

const Terminal = ({ lastLogin }: TerminalPropsT) => (
  <Container>
    <MenuBar>
      <BarOption />
      <BarOption color="blue" />
      <BarOption color="lightgreen" />
    </MenuBar>
    <Content>
      <Line>Last Login: {lastLogin} on Console</Line>
      <LogLine>
        Press `a` to run all tests, or run Jest with `--watchAll`
      </LogLine>
      <InputLine>
        <InputLog>macbook-pro: ~ zavareze$</InputLog>
        <Input />
      </InputLine>
    </Content>
  </Container>
);

Terminal.defaultProps = {
  lastLogin: "Sun Sep 2 22:0043"
};

export default Terminal;
