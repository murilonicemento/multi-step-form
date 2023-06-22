import { useState } from "react";
import { Options, Period, Switch } from "./styled";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import ball from "../../assets/images/icon-ball.svg";

interface InputProps {
  type: "checkbox";
  name: string;
  monthly: string;
}

export function PlansOptions() {
  const [isMonthly, setIsMonthly] = useState(true);

  const inputProps: InputProps = {
    type: "checkbox",
    name: "switch",
    monthly: isMonthly.toString(),
  };

  return (
    <>
      <Options>
        <img src={arcade} alt="Arcade control icon" />
        <div>
          <span>Arcade</span>
          <span>$9/mo</span>
        </div>
      </Options>
      <Options>
        <img src={advanced} alt="Switch control icon" />
        <div>
          <span>Advanced</span>
          <span>$12/mo</span>
        </div>
      </Options>
      <Options>
        <img src={pro} alt="Console control icon" />
        <div>
          <span>Pro</span>
          <span>$15/mo</span>
        </div>
      </Options>
      <Period>
        <span>Monthly</span>
        <Switch htmlFor="switch">
          <input {...inputProps} />
          <span className="check">
            <img
              src={ball}
              alt="White Ball Icon"
              onClick={() => setIsMonthly(!isMonthly)}
            />
          </span>
        </Switch>
        <span>Yearly</span>
      </Period>
    </>
  );
}
