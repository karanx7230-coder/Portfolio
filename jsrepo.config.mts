import { defineConfig } from "jsrepo";

export default defineConfig({
  registries: ["https://reactbits.dev/r"],
  paths: {
    component: 'src/components/ReactBits',
    ui: 'src/components/ReactBits',
    block: 'src/components/ReactBits',
  },
});
