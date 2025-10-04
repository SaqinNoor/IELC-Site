import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite configuration for IELC Website
 * 
 * This configuration sets up:
 * - React plugin for JSX/TSX support
 * - Development server settings
 * - Build optimization settings
 * - Asset handling for fonts and images
 */
export default defineConfig({
  plugins: [react()],
  
  // GitHub Pages configuration — only apply base during build
  base: process.env.NODE_ENV === 'production' ? '/IELC-Site/' : '/',
  
  // Development server configuration
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  },
  
  // Asset handling
  assetsInclude: ['**/*.otf', '**/*.woff', '**/*.woff2'],
  
  // CSS configuration
  css: {
    devSourcemap: true
  },
  
  // Path resolution
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@assets': '/src/assets',
      '@utils': '/src/utils'
    }
  }
})
