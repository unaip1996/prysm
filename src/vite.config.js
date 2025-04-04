import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.tsx',
            ],
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '0.0.0.0', // Permite conexiones desde fuera del contenedor
        port: 5173,       // Puerto fijo para evitar conflictos
        strictPort: true,
    },
});
