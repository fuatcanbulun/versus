import { useState } from "react";
import Selector from "../selector";

import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./style";

const brandsData = [
  {
    id: 1,
    label: "Mercedes",
  },
  {
    id: 2,
    label: "BMW",
  },
];

const modelsData = [
  {
    id: 1,
    label: "C180",
  },
  {
    id: 2,
    label: "E200",
  },
];

const yearsData = [
  {
    id: 1,
    label: "2012",
  },
  {
    id: 2,
    label: "2020",
  },
];

const Modal = () => {
  const [selectedBrand, setSelectedBrand] = useState(0);
  const [selectedModel, setSelectedModel] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const [activeSelector, setActiveSelector] = useState("brands");

  return (
    <ModalContainer>
      <ModalBox>
        <ModalHeader>test</ModalHeader>
        <ModalBody>
          <Selector
            id="brands"
            options={brandsData}
            value={selectedBrand}
            setValue={setSelectedBrand}
            activeSelector={activeSelector}
            setActiveSelector={setActiveSelector}
          />
          <Selector
            id="models"
            options={modelsData}
            value={selectedModel}
            setValue={setSelectedModel}
            activeSelector={activeSelector}
            setActiveSelector={setActiveSelector}
          />
          <Selector
            id="years"
            options={yearsData}
            value={selectedYear}
            setValue={setSelectedYear}
            activeSelector={activeSelector}
            setActiveSelector={setActiveSelector}
          />
        </ModalBody>
        <ModalFooter>test</ModalFooter>
      </ModalBox>
    </ModalContainer>
  );
};

export default Modal;
