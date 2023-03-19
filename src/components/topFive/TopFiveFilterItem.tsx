import {useState} from "react";
import styled from "styled-components";

const TopFiveFilterItem = ({item}: {item: string}) => {
  const [checkedInputs, setCheckedInputs] = useState("");

  const changeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckedInputs(e.target.id);
    }
  };
  return (
    <>
      <FilterItem type="radio" name="filterItem" value={checkedInputs} id={item} onChange={changeRadio} />
      <ItemText for={item}>{item}</ItemText>
    </>
  );
};

const ItemText = styled.label`
  cursor: pointer;
  font-size: 1rem;
  color: #ffffff;
  text-align: center;
  font-weight: 800;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
`;
const FilterItem = styled.input.attrs({type: "radio"})`
  display: none;
  &:hover {
    cursor: pointer;
  }
  &:checked + label {
    background: none;
    font-weight: 800;
    font-size: 1.3rem;
    line-height: 36px;
    text-align: center;
    height: 35px;
    line-height: 1.8rem;
    font-weight: 800;
    /* display: none; */
    color: var(--blueColor2);
  }
`;

export default TopFiveFilterItem;
