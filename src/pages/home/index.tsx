import { useEffect, useState } from "react";
import {
  SelectorContainer,
  SelectorBody,
  CompareContainer,
  CompareBody,
} from "./style";
import Card from "../../components/card";
import Modal from "../../components/modal";

const sampleData = [
  {
    id: 1,
    brand: "Mercedes",
    model: "C180",
    year: "2010",
  },
  {
    id: 2,
    brand: "BMW",
    model: "3.20",
    year: "2010",
  },
];

const Home = () => {
  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      {modalStatus && <Modal />}

      <SelectorContainer>
        <SelectorBody>
          <div onClick={() => setModalStatus(true)}>test</div>
        </SelectorBody>
      </SelectorContainer>
      <CompareContainer>
        <CompareBody>
          {sampleData.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </CompareBody>
      </CompareContainer>
    </>
  );
};

export default Home;
