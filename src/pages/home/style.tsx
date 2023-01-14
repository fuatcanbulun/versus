import styled from "styled-components";

const SelectorContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
`;

const SelectorBody = styled.div`
  border: 1px solid blue;
  width: 1200px;
  height: 50;
  display: flex;
  justify-content: center;
`;

const CompareContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
`;

const CompareBody = styled.div`
  border: 1px solid blue;
  width: 1200px;
  height: auto;
  display: flex;
  justify-content: center;
`;

export { SelectorContainer, SelectorBody, CompareContainer, CompareBody };
