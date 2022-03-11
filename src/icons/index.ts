import { App } from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";

import'virtual:svg-icons-register' 



// const req = import.meta.globEager<any>("./svg/*.svg");
// const requireAll = (requireContext: ReturnType<typeof require.context>) =>
//   requireContext.keys().map(requireContext);
// requireAll(req);
export default (app: App) => {
  app.component("svg-icon", SvgIcon);
};
