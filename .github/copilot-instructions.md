# Copilot Instructions for Quasar.js Project

You are an AI programming assistant specialized in Quasar.js framework.

## Context

- Framework: Quasar.js (Vue 3 + Quasar components, TypeScript, Vite, Pinia 3, Vue Router 5, ESLint, Prettier, tanstack query vue-query)
- Project type: Progressive Web App (PWA)
- Focus: Component development, composables, and Quasar best practices
- La lógica de negocio debe ir en composables
- La lógica de UI (estado local, toggles, modales) puede vivir en el componente

## Guidelines

- Use Quasar components (QBtn, QCard, QInput, QDialog, etc.) instead of HTML elements
- Follow Vue 3 Composition API with `<script setup lang="ts">` syntax, primero el script luego el template.
- Implement responsive design using Quasar's grid system (responsive classes)
- Use Quasar's built-in utilities (Notify, Dialog, Loading) for notifications
- Optimize for PWA requirements (service workers, offline support)
- Follow Quasar naming conventions and CSS classes
- Keep code modular and reusable
- Para Notificaciones utilizar de archivo src/platform/tools/utils/notifyUtil.ts para centralizar el manejo de notificaciones, por ejemplo, si quieres mostrar una notificación de éxito después de una acción exitosa, puedes llamar a la función notifySuccess desde notifyUtil.ts y pasar el mensaje.

## Code Style

- Use TypeScript when applicable
- Implement proper error handling
- Add proper component props typing
- No agregar styles directamente a los componentes, utiliza clases y variables de Quasar para mantener la consistencia.
- Si se desea agregar estilos personalizados, hazlo en un archivo separado src/css/app.scss y utiliza clases para aplicarlos a los componentes.
- en los archivos dentro de /services/ ExampleService.ts definir funciones para interactuar con la API, por ejemplo, si tienes un servicio de autenticación, puedes definir funciones como loginApi, registerApi, logoutApi, etc. Ejemplo en src/modules/auth/services/AuthService.ts y luego exportarlas para usarlas en los composables.

## Additional Notes

- Always check Quasar documentation for component APIs
- Consider mobile-first approach
- Use Quasar's theming system when styling
- Solo para composables usar la convención use + nombre descriptivo, por ejemplo, useAuth.ts para un composable de autenticación, useProduct.ts para un composable relacionado con productos, etc. Esto ayuda a identificar rápidamente que el archivo es un composable y su función.
- los archivos de /pages /layouts /components deben tener nombres descriptivos, por ejemplo, ExamplePage.vue ExampleLayout.vue ExampleComponent.vue, no usar nombres genéricos como Page.vue Layout.vue Component.vue solo para archivos .vue, para otros archivos como servicios, composables, utils, validations, etc. usar nombres descriptivos relacionados con su función, por ejemplo, authService.ts useAuth.ts DateUtils.ts EmailValidation.ts
- Métodos globales utilitarios agregarlos en src/platform/tools/utils
- Validaciones globales utilitarios agregarlos en src/platform/tools/validations
- configuración global de axios agregarlo en boot/axios.ts y exportar el cliente de axios para su uso en los servicios, por ejemplo, si quieres agregar un interceptor para agregar el token de autenticación a cada solicitud, puedes hacerlo en boot/axios.ts y luego exportar el cliente de axios para usarlo en tus servicios.
- Tipar responses de API
- Tipar requests
- Evitar usar any
- Manejar tokens de forma segura

## Arquitectura

- DDD
- modularizar ej. auth, user, product, etc.
- dentro de cada modulo:
- apis dentro de /services
- composables dentro de /composables
- componentes dentro de /components
- paginas dentro de /pages
- rutas dentro de /router
- store dentro de /stores
- usar interfaces para definir modelos de datos, si tienes una interfaz User, puedes crear un archivo src/modules/user/interfaces/UserInterface.ts y exportar la interfaz desde ahí, luego importarla en los componentes, composables, stores o servicios que la necesiten, si es propio del modulo ponerlo dentro de su estructura.
- no usar archivos de barril index.ts
- flujo .vue → composable → (store opcional) → service → api
- usar funciones de flecha para definir métodos en los componentes services y composables
- Centralizar manejo de errores en services o interceptores
- Nunca manejar errores directamente en componentes
- Lazy load de páginas con router
