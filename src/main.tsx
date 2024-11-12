import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";

import * as Sentry from "@sentry/react";

Sentry.init({
   dsn: "https://f3a01e8933aba57256fb0679fdee4401@o4508286917345280.ingest.de.sentry.io/4508286925340752",
   integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.reactRouterV6BrowserTracingIntegration({
         useEffect: React.useEffect,
      }),
      Sentry.replayIntegration(),
   ],
   // Tracing
   tracesSampleRate: 1.0, //  Capture 100% of the transactions
   // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
   // Session Replay
   replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
   replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <App />
   </StrictMode>
);
