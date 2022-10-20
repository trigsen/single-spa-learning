import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    )as any,
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@trgsn/todo",
  app: () => System.import("@trgsn/todo") as any,
  activeWhen: ["/todo"]
});



start({
  urlRerouteOnly: true,
});
