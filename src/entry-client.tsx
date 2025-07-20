import "./index.css";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import React from "react";

hydrateRoot(
	document.getElementById("root") as HTMLElement,
	<StrictMode>
		<App />
	</StrictMode>
);
