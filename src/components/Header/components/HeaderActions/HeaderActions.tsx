import Button from "@/components/Button/Button";
import Svg from "@/components/Svg/Svg";
import withLogger from "@/components/WithNameLogging/WithNameLogging";

import { logout as logoutAction } from "@/actions/auth";

const iconStyles = `
            w-6
            h-6
            block
            fill-white
        `;

const HeaderActions = () => {
  return (
    <div className="flex gap-3">
      <Button
        onClick={async () => await logoutAction()}
        className="text-white"
        unstyled
      >
        <Svg icon="user" classNames={iconStyles} />
      </Button>
    </div>
  );
};

export default withLogger(HeaderActions);
