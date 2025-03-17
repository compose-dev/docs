import React, { useEffect } from "react";
import { useHistory } from "@docusaurus/router";

export default function Redirect() {
  const history = useHistory();
  useEffect(() => {
    history.replace("/get-started/quickstart");
  }, [history]);
  return null;
}
