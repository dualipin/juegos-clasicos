# 🚀 Guía de Despliegue en Vercel

## ¿Por qué Vercel?

Vercel es la plataforma ideal para este proyecto porque:

- ✅ **Optimizado para React/Vite**: Detección automática del framework
- ✅ **Edge Network Global**: CDN ultrarrápido en todo el mundo
- ✅ **Despliegues Automáticos**: Cada push a main despliega automáticamente
- ✅ **Preview Deployments**: Cada PR genera una URL de preview
- ✅ **Zero Configuration**: Funciona sin configuración adicional
- ✅ **Analytics Integrados**: Métricas de performance incluidas

## 🔧 Configuración del Proyecto

### Archivos de Configuración

#### `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

#### Scripts en `package.json`
```json
{
  "scripts": {
    "vercel-build": "npm run build",
    "start": "vite preview --port $PORT"
  }
}
```

## 📋 Pasos para Desplegar

### Opción 1: Despliegue Automático (Recomendado)

1. **Fork el repositorio** en tu cuenta de GitHub
2. **Conecta Vercel** con tu cuenta de GitHub
3. **Importa el proyecto** desde el dashboard de Vercel
4. **Configura el proyecto**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Opción 2: Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Hacer login
vercel login

# Desplegar (primera vez)
vercel

# Desplegar a producción
vercel --prod
```

### Opción 3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dualipin/juegos-clasicos)

## ⚙️ Configuración Avanzada

### Variables de Entorno

Si necesitas variables de entorno, créalas en el dashboard de Vercel:

```bash
VITE_APP_URL=https://tu-dominio.vercel.app
VITE_APP_ENV=production
VITE_ENABLE_ANALYTICS=true
```

### Dominio Personalizado

1. Ve a **Settings** → **Domains** en tu proyecto de Vercel
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones

### Headers de Seguridad

El proyecto incluye headers de seguridad configurados en `vercel.json`:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

### Cache Optimization

Los assets estáticos se cachean por 1 año:
- CSS, JS, imágenes: `Cache-Control: public, max-age=31536000, immutable`

## 🔍 Monitoreo y Analytics

### Vercel Analytics

Habilita analytics en el dashboard para obtener:
- **Web Vitals**: Core Web Vitals automáticos
- **Real User Monitoring**: Métricas de usuarios reales
- **Performance Insights**: Optimizaciones sugeridas

### Speed Insights

```bash
npm install @vercel/speed-insights
```

Luego agrega al `main.tsx`:
```tsx
import { SpeedInsights } from '@vercel/speed-insights/react'

// En el render
<SpeedInsights />
```

## 🚨 Troubleshooting

### Problemas Comunes

#### Build Fails
```bash
# Verificar localmente
npm run build
npm run preview
```

#### Routing Issues
- ✅ Ya configurado: `rewrites` en `vercel.json` maneja las rutas SPA

#### Environment Variables
- Asegúrate de que las variables empiecen con `VITE_`
- Configúralas en el dashboard de Vercel

### Logs de Build

Revisa los logs en:
1. Dashboard de Vercel → Tu proyecto → Deployments
2. Click en el deployment → View Function Logs

## 📊 Performance

### Optimizaciones Incluidas

- ✅ **Code Splitting**: Chunks automáticos por ruta
- ✅ **Tree Shaking**: Eliminación de código no usado
- ✅ **Asset Optimization**: Compresión automática
- ✅ **Edge Caching**: CDN global de Vercel
- ✅ **Brotli Compression**: Compresión superior a gzip

### Métricas Esperadas

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔗 Enlaces Útiles

- [Documentación de Vercel](https://vercel.com/docs)
- [Guía de Vite + Vercel](https://vercel.com/guides/deploying-vite-with-vercel)
- [Dashboard de Vercel](https://vercel.com/dashboard)

---

**¡Tu aplicación estará disponible en segundos!** 🚀