# Imágenes del Cuaderno DAW

Este directorio contiene las imágenes ilustrativas para cada semana del cuaderno de Desarrollo de Aplicaciones Web.

## Estructura de carpetas

```
cuaderno/
├── semana-01/
│   ├── imagen-1.webp  (TCP/IP, arquitectura web)
│   └── imagen-2.webp  (Git, control de versiones)
├── semana-02/
│   ├── imagen-1.webp  (Box Model, CSS)
│   └── imagen-2.webp  (Flexbox, layouts)
├── semana-03/
│   ├── imagen-1.webp  (Tailwind CSS logo/paleta)
│   └── imagen-2.webp  (Utility-first examples)
├── semana-04/
│   ├── imagen-1.webp  (LocalStorage, JavaScript)
│   └── imagen-2.webp  (Fisher-Yates, Canvas)
...
```

## Especificaciones técnicas

- **Formato**: WebP
- **Dimensiones**: 800-1200px de ancho
- **Aspect ratio**: 16:10 (ideal para cards)
- **Calidad**: 80-85%
- **Peso máximo**: 150KB por imagen
- **Nombres**: `imagen-1.webp`, `imagen-2.webp`

## Fuentes recomendadas (gratuitas)

1. **Undraw.co** - Ilustraciones SVG customizables
2. **Unsplash.com** - Fotografías de alta calidad
3. **Illustrations.co** - Ilustraciones open source
4. **DrawKit.com** - Vectores editables
5. **Humaaans.com** - Ilustraciones de personas

## Herramienta de conversión

Usar **Squoosh.app** para:
1. Convertir PNG/JPG a WebP
2. Ajustar calidad a 80-85%
3. Redimensionar a máximo 1200px de ancho

## Ejemplo de búsqueda

Para **Semana 01** (TCP/IP, Frontend/Backend, Git):
- Imagen 1: "tcp ip protocol diagram illustration"
- Imagen 2: "git version control workflow diagram"

Para **Semana 02** (CSS, Box Model, Flexbox):
- Imagen 1: "css box model diagram colorful"
- Imagen 2: "flexbox layout examples modern"

## Paleta de colores recomendada

Buscar imágenes que usen:
- **Azules**: #3B5998, #5B8DB8 (coinciden con el tema del sitio)
- **Grises**: neutros y profesionales
- **Acentos**: toques de color vibrante

## Cómo agregar imágenes

1. Descargar la imagen en alta resolución
2. Convertir a WebP con Squoosh.app
3. Nombrar como `imagen-1.webp` o `imagen-2.webp`
4. Colocar en la carpeta correspondiente (`semana-XX/`)
5. Actualizar `src/data/cuaderno.ts` con la metadata:

```typescript
imagenes: [
  {
    src: '/images/cuaderno/semana-01/imagen-1.webp',
    alt: 'Diagrama de arquitectura TCP/IP',
    caption: 'Capas del modelo TCP/IP: aplicación, transporte, internet y enlace'
  },
  {
    src: '/images/cuaderno/semana-01/imagen-2.webp',
    alt: 'Flujo de trabajo con Git',
    caption: 'Ciclo de commits, branches y merges en Git'
  }
]
```

## Estado actual

- ✅ Carpetas creadas para semanas 1-4
- ⏳ Imágenes pendientes de descargar
- ⏳ Metadata pendiente en cuaderno.ts

## Notas importantes

- **Alt text**: Siempre descriptivo para accesibilidad
- **Caption**: Opcional pero recomendado para contexto educativo
- **Licencias**: Verificar que las imágenes sean de uso libre
- **Atribución**: Agregar si es requerida por la licencia

---

Consultar el archivo `IMAGES-GUIDE.md` (artifact) para opciones específicas de cada semana.
