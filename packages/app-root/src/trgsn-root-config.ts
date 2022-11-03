import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     )as any,
//   activeWhen: (location) => location.pathname === '/',
// });
//
// registerApplication({
//   name: "@trgsn/todo",
//   app: () => System.import("@trgsn/todo") as any,
//   activeWhen: ["/todo"]
// });


const routes = constructRoutes(document.querySelector('#single-spa-layout'));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    if (name === '@single-spa/welcome') {
      return System.import("https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js")
    }

    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

layoutEngine.activate()
applications.forEach(registerApplication);

layoutEngine.activate()
start();
