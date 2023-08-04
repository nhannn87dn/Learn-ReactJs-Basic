import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import inject from "@rollup/plugin-inject";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({   // => that should be first under plugins array
          $: 'jquery',
          jQuery: 'jquery',
      }),
    react()
  ],
})
