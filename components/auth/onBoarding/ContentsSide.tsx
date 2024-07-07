import GetToknowForm from "./getToKnowForm";
import SetVerificaTionCode from "./SetCode";

import { WithChildren } from "@/types";

function ContentSide({ children }: WithChildren) {
  return (
    <div>
      <SetVerificaTionCode />
    </div>
  );
}

export default ContentSide;
