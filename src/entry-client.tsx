// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

// Normalize GitHub Pages SPA fallback (redirects like /repo/?/about -> /repo/about)
(() => {
  const l = window.location;
  if (l.search.startsWith("?/")) {
    const base = (import.meta.env.SERVER_BASE_URL || "/").replace(/\/$/, "");
    const target = l.search.slice(2); // strip "?/"
    const newUrl = `${base}/${target}${l.hash}`;
    history.replaceState(null, "", newUrl);
  }
})();

mount(() => <StartClient />, document.getElementById("app")!);
