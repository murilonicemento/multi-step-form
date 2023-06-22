import { Options, Switch } from "./styled";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";

export function PlansOptions() {
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
      <Switch htmlFor="">
          <input type="checkbox" name="" />
          <span className="check">
            {/* <img src="assets/img/ball.svg" alt="" /> */}
          </span>
      </Switch>
    </>
  );
}
