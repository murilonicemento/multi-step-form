import { Link } from "react-router-dom";
import { AddOns, Plan, Divider, Purchase, Total } from "./styled";

export function DoubleCheck() {
  return (
    <>
      <Purchase>
        <Plan>
          <div>
            <span>Arcade(Monthly)</span>
            <Link to="/plan">Change</Link>
          </div>
          <span>$9/mo</span>
        </Plan>
        <Divider></Divider>
        <AddOns>
          <li>
            <span>Online Service</span>
            <span>+1$/mo</span>
          </li>
          <li>
            <span>Larger Storage</span>
            <span>+2$/mo</span>
          </li>
        </AddOns>
      </Purchase>
      <Total>
        <span>Total (per month)</span>
        <span>+$12/mo</span>
      </Total>
    </>
  );
}
