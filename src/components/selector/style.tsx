import styled from "styled-components";

const SelectorContainer = styled.div`
  border: 1px solid lime;
  width: 100%;
  position: relative;
`;

const SelectorInput = styled.div`
  position: relative;
  border: 1px solid red;
  width: 100%;
  height: 50px;
`;

const SelectorDrop = styled.div`
  position: absolute;
  border: 1px solid blue;
  width: 100%;
  height: 500px;
  z-index: 9;
`;

const SelectorDropItem = styled.div<{ status: string }>`
  border: 1px solid black;
  width: 100%;
  height: 50px;
  background-color: ${(props) =>
    props.status === "active" ? "red" : "yellow"};
`;

export { SelectorContainer, SelectorInput, SelectorDrop, SelectorDropItem };
