import React from "react";

import { storiesOf } from "@storybook/react";

import App from "../index.jsx";

storiesOf("HubModal", module).add("with text", () => <App />);
// .add("with some emoji", () => (
//   <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
// ));
