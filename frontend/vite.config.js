import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api' : 'http://localhost:4000'  // yaha pe humne proxy set kiya hai taki jab bhi frontend se /api pe request jaye to wo automatically backend ke server pe forward ho jaye
    }
  },
  plugins: [react()],
})


// aur proxy ka use hum isliye karte hain taki humara frontend aur backend alag alag ports pe run kar sakein bina CORS issue ke.
//cors ka issue hota hai solve do tarike se eek whitelisting krna hota hai server mein aur dusra ye method hai proxy ka 
