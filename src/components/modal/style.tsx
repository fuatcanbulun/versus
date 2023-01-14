import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalBox = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid lime;
  background-color: white;
`;

const ModalHeader = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid lime;
  background-color: white;
`;

const ModalBody = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid lime;
  background-color: white;
`;

const ModalFooter = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid lime;
  background-color: white;
`;

export { ModalContainer, ModalBox, ModalHeader, ModalBody, ModalFooter };
