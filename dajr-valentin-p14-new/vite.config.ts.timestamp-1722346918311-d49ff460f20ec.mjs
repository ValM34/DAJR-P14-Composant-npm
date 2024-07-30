// vite.config.ts
import { defineConfig } from "file:///C:/Users/vallo/Documents/Programmation/OC%20-%20DAJR/P14/table-component-2/dajr-valentin-p14-new/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/vallo/Documents/Programmation/OC%20-%20DAJR/P14/table-component-2/dajr-valentin-p14-new/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///C:/Users/vallo/Documents/Programmation/OC%20-%20DAJR/P14/table-component-2/dajr-valentin-p14-new/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\vallo\\Documents\\Programmation\\OC - DAJR\\P14\\table-component-2\\dajr-valentin-p14-new";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true })
  ],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "dajr-valentin-p14-new",
      formats: ["es", "umd"],
      fileName: (format) => `dajr-valentin-p14-new.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx2YWxsb1xcXFxEb2N1bWVudHNcXFxcUHJvZ3JhbW1hdGlvblxcXFxPQyAtIERBSlJcXFxcUDE0XFxcXHRhYmxlLWNvbXBvbmVudC0yXFxcXGRhanItdmFsZW50aW4tcDE0LW5ld1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdmFsbG9cXFxcRG9jdW1lbnRzXFxcXFByb2dyYW1tYXRpb25cXFxcT0MgLSBEQUpSXFxcXFAxNFxcXFx0YWJsZS1jb21wb25lbnQtMlxcXFxkYWpyLXZhbGVudGluLXAxNC1uZXdcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3ZhbGxvL0RvY3VtZW50cy9Qcm9ncmFtbWF0aW9uL09DJTIwLSUyMERBSlIvUDE0L3RhYmxlLWNvbXBvbmVudC0yL2RhanItdmFsZW50aW4tcDE0LW5ldy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGR0cyh7IGluc2VydFR5cGVzRW50cnk6IHRydWUgfSlcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXG4gICAgICBuYW1lOiBcImRhanItdmFsZW50aW4tcDE0LW5ld1wiLFxuICAgICAgZm9ybWF0czogWydlcycsICd1bWQnXSxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgZGFqci12YWxlbnRpbi1wMTQtbmV3LiR7Zm9ybWF0fS5qc2BcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNGQsU0FBUyxvQkFBb0I7QUFDemYsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sSUFBSSxFQUFFLGtCQUFrQixLQUFLLENBQUM7QUFBQSxFQUNoQztBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQzdDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyx5QkFBeUIsTUFBTTtBQUFBLElBQ3ZEO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUEsTUFDL0IsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
