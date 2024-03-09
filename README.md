# React + Vite
- Project作成
    - npm create vite@latest my-project -- --template react
- tailwind css
    - npm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p

- npm run dev

# base change
- GitHub pagesにあげる場合
    - vite.configを書き直す
```js
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './docs',
  },
  base: '/tk-portfolio/',
})
```
- その後
```js
npm run build
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
