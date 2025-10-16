# Bebidas React TypeScript (Vite)

Aplicación web para buscar y explorar recetas de bebidas usando TheCocktailDB, gestionar favoritos y, además, generar recetas con IA mediante OpenRouter.

Este proyecto está construido con React 18, TypeScript y Vite, estilado con Tailwind CSS, gestión de estado con Zustand y validaciones con Zod.

## Tabla de contenidos
- Visión general
- Requisitos
- Stack y herramientas
- Puesta en marcha (setup)
- Comandos de desarrollo y scripts
- Variables de entorno
- Estructura del proyecto
- Puntos de entrada (entry points)
- Licencia

## Visión general
- Búsqueda de bebidas por ingrediente y categoría utilizando TheCocktailDB.
- Visualización del detalle de una receta y gestión de favoritos (localStorage).
- Generación de recetas con IA en streaming usando OpenRouter (AI SDK).
- Enrutamiento con React Router (rutas: `/`, `/favoritos`, `/generate`).

## Requisitos
- Node.js 18 o superior (recomendado por Vite 6)
- npm 9+ o compatible (se usa npm; existe `package-lock.json`)

## Stack y herramientas
- Lenguaje: TypeScript
- Framework UI: React 18
- Bundler/Dev server: Vite 6 (`@vitejs/plugin-react-swc`)
- Estilos: Tailwind CSS + PostCSS + Autoprefixer
- Estado global: Zustand (con middleware devtools)
- Routing: React Router DOM 7
- HTTP: Axios
- Validación de datos: Zod
- IA: AI SDK (`ai`) + OpenRouter provider (`@openrouter/ai-sdk-provider`)
- Linting: ESLint 9 + TypeScript ESLint + plugins de React
- Prettier (formateo)

## Puesta en marcha (setup)
1. Clonar el repositorio.
2. Instalar dependencias:
   - `npm install`
3. Configurar variables de entorno (ver sección Variables de entorno).
4. Ejecutar en desarrollo:
   - `npm run dev`

## Comandos de desarrollo y scripts
Definidos en `package.json`:
- `npm run dev`: inicia el servidor de desarrollo de Vite.
- `npm run build`: compila TypeScript (`tsc -b`) y genera el build de producción con Vite.
- `npm run preview`: sirve el build de producción localmente para previsualización.
- `npm run lint`: ejecuta ESLint sobre el proyecto.

## Variables de entorno
Crear un archivo `.env` en la raíz con las siguientes variables (prefijo `VITE_` para que estén disponibles en el cliente):

- `VITE_OPENROUTER_KEY`: API Key de OpenRouter para la generación de recetas con IA.

Ejemplo de `.env`:
```
VITE_OPENROUTER_KEY=sk-or-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
Notas:
- No compartas claves reales en el repositorio. Asegura que `.env` esté en `.gitignore` (este repo ya incluye `.gitignore`).
- El consumo de TheCocktailDB se realiza contra la URL pública (no requiere clave): `https://www.thecocktaildb.com/api/json/v1/1/`.

## Estructura del proyecto
Raíz relevante:
- `index.html`: HTML base con el contenedor `#root`.
- `vite.config.ts`: configuración de Vite y React SWC.
- `tailwind.config.js`, `postcss.config.js`: configuración de estilos.
- `tsconfig*.json`: configuración de TypeScript.
- `eslint.config.js`: configuración de ESLint.
- `src/`: código fuente de la app.
  - `main.tsx`: entrada de la app; monta el router.
  - `router.tsx`: definición de rutas y lazy loading de vistas.
  - `layouts/Layout.tsx`: layout principal con Header, Modal y Notification.
  - `components/`: componentes UI (Header, Modal, Notification, DrinkCard, etc.).
  - `views/`: páginas (`IndexPage`, `FavoritesPage`, `GenerateAI`).
  - `stores/`: slices de Zustand (`recipeSlice`, `favoritesSlice`, `notificationSlice`, `aiSlice`) y `useAppStore`.
  - `services/`: acceso a datos (`RecipeService` para TheCocktailDB, `AIService` para IA).
  - `lib/`: utilidades de integración (`axios` con baseURL de TheCocktailDB, `ai` con provider de OpenRouter).
  - `utils/`: esquemas Zod y helpers (por ejemplo `recipes-schema`).
  - `types/`: tipos TypeScript compartidos.
  - `index.css`: estilos globales (incluye Tailwind).

## Puntos de entrada (entry points)
- HTML: `index.html` con `<div id="root"></div>`.
- JavaScript/TypeScript: `src/main.tsx` crea la raíz de React y renderiza `<AppRouter />`.
- Router: `src/router.tsx` expone rutas principales (`/`, `/favoritos`, `/generate`).

## Integraciones y endpoints
- TheCocktailDB (pública):
  - Base URL configurada en `src/lib/axios.ts`: `https://www.thecocktaildb.com/api/json/v1/1/`
  - Endpoints utilizados en `src/services/RecipeService.ts`:
    - `/list.php?c=list` (categorías)
    - `/filter.php?c={category}&i={ingredient}` (búsqueda)
    - `/lookup.php?i={id}` (detalle por ID)
- OpenRouter (IA):
  - Provider configurado en `src/lib/ai.ts` usando `VITE_OPENROUTER_KEY`.
  - `src/services/AIService.ts` usa el modelo `meta-llama/llama-3.3-8b-instruct:free` y `streamText` del SDK.

## Cómo ejecutar
- Desarrollo: `npm run dev` y visitar la URL que muestre Vite (por defecto `http://localhost:5173`).
- Linter: `npm run lint`.
- Build: `npm run build` genera la carpeta `dist/`.
- Preview del build: `npm run preview`.


## Licencia
Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

