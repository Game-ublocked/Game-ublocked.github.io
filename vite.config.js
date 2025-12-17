import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    // This ensures assets are linked relative to the index.html
    // enabling deployment to https://user.github.io/repo-name/
    base: './'
})
