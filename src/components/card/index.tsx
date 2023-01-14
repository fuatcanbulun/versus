import { CardContainer } from "./style";

const Card = ({ data }: { data: { id: number } }) => {
  return <CardContainer>{data.id}</CardContainer>;
};

export default Card;
