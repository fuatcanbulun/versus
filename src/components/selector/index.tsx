import { useState } from "react";

import {
  SelectorContainer,
  SelectorInput,
  SelectorDrop,
  SelectorDropItem,
} from "./style";

const Selector = ({
  id,
  options,
  value,
  setValue,
  activeSelector,
  setActiveSelector,
}: {
  id: string;
  options: { id: number; label: string }[];
  value: number;
  setValue: Function;
  activeSelector: string;
  setActiveSelector: Function;
}) => {
  const [dropStatus, setDropStatus] = useState(false);

  const handleDrop = (val: string) => {
    setActiveSelector(val);
    setDropStatus(!dropStatus);
  };

  const handleSelection = (val: number) => {
    setDropStatus(false);
    setValue(val);
  };

  return (
    <SelectorContainer>
      <SelectorInput onClick={() => handleDrop(id)}>
        {options.find((item) => item.id === value)?.label}
      </SelectorInput>
      {activeSelector == id && dropStatus && (
        <SelectorDrop>
          {options.map((item) => (
            <SelectorDropItem
              status={item.id === value ? "active" : "passive"}
              onClick={() => handleSelection(item.id)}
            >
              {item.label}
            </SelectorDropItem>
          ))}
        </SelectorDrop>
      )}
    </SelectorContainer>
  );
};

export default Selector;
