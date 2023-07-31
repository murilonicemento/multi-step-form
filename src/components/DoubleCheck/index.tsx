import { Link } from "react-router-dom";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { v4 as uuidv4 } from "uuid";
import { AddOns, Plan, Divider, Purchase, Total } from "./styled";

export function DoubleCheck() {
  const { plan, planType, monthly, addOns } = useGlobalContext();
  let addOnsPrice = 0;
  addOns?.map((addOn) => {
    addOnsPrice += addOn.price;
  });
  return (
    <>
      <Purchase>
        <Plan>
          <div>
            <span>
              {planType}({monthly ? "Monthly" : "Yearly"})
            </span>
            <Link to="/plan">Change</Link>
          </div>
          <span>
            ${plan}/{monthly ? "mo" : "yr"}
          </span>
        </Plan>
        <Divider></Divider>
        <AddOns>
          {addOns?.map((addOns) => (
            <li key={uuidv4()}>
              <span>{addOns.addOnsType}</span>
              <span>
                +{addOns.price}$/{monthly ? "mo" : "yr"}
              </span>
            </li>
          ))}
        </AddOns>
      </Purchase>
      <Total>
        <span>Total ({monthly ? "per month" : "per year"})</span>
        <span>
          +${plan + addOnsPrice}/{monthly ? "mo" : "yr"}
        </span>
      </Total>
    </>
  );
}
