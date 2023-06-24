import { useState } from "react";
import { Options } from "./styled";
import { colors } from "../../config/colors";

export function AddOnsOptions() {
  const [isOnlineService, setIsOnlineService] = useState(false);
  const [isLargerStorage, setIsLargerStorage] = useState(false);
  const [isCustomizableProfile, setIsCustomizableProfile] = useState(false);

  return (
    <>
      <Options
        style={{
          backgroundColor: isOnlineService ? colors.primary.lightBlue : "",
          borderColor: isOnlineService ? colors.primary.marineBlue : "",
        }}
      >
        <div>
          <input
            type="checkbox"
            name="check"
            id="onlineService"
            onChange={() => setIsOnlineService(!isOnlineService)}
            checked={isOnlineService}
          />
          <label htmlFor="onlineService"></label>
          <div>
            <span>Online service</span>
            <span>Access to multiplayer games</span>
          </div>
        </div>
        <span>+$1/mo</span>
      </Options>
      <Options
        style={{
          backgroundColor: isLargerStorage ? colors.primary.lightBlue : "",
          borderColor: isLargerStorage ? colors.primary.marineBlue : "",
        }}
      >
        <div>
          <input
            type="checkbox"
            name="check"
            id="largerStorage"
            onChange={() => setIsLargerStorage(!isLargerStorage)}
            checked={isLargerStorage}
          />
          <label htmlFor="largerStorage"></label>
          <div>
            <span>Larger storage</span>
            <span>Extra 1TB of cloud save</span>
          </div>
        </div>
        <span>+$2/mo</span>
      </Options>
      <Options
        style={{
          backgroundColor: isCustomizableProfile ? colors.primary.lightBlue : "",
          borderColor: isCustomizableProfile ? colors.primary.marineBlue : "",
        }}
      >
        <div>
          <input
            type="checkbox"
            name="check"
            id="customizableProfile"
            onChange={() => setIsCustomizableProfile(!isCustomizableProfile)}
            checked={isCustomizableProfile}
          />
          <label htmlFor="customizableProfile"></label>
          <div>
            <span>Customizable profile</span>
            <span>Custom theme on your profile</span>
          </div>
        </div>
        <span>+$2/mo</span>
      </Options>
    </>
  );
}
