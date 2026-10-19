/**
 * Cuaderno de aprendizaje — Desarrollo de Aplicaciones Web
 * Universidad Nacional del Centro del Perú (UNCP)
 *
 * Unidad 1: Semanas 01–07
 * Unidad 2: Semanas 09–15
 */

export interface Referencia {
  texto: string;
  url?: string;
}

export interface Semana {
  numero: number;
  numeroStr: string;
  titulo: string;
  /** Subtítulo corto para las cards del índice */
  subtitulo: string;
  /** Descripción breve para mostrar en la card del índice */
  descripcionBreve: string;
  fecha?: string;
  temas: string[];
  contenido: string;
  reflexion: string;
  /** Referencias bibliográficas APA 7 */
  referencias?: Referencia[];
  /** Imágenes ilustrativas de la semana (máx 2) */
  imagenes?: {
    src: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
    /** 'logo' | 'diagrama' | 'banner' | 'panorama' | 'normal' */
    rol?: string;
  }[];
  /** Variante de layout para las imágenes: 'asimetrico' | 'flota-der' | 'flota-izq' | 'panorama' | 'duo-oscuro' | 'default' */
  layoutImagenes?: string;
}

export interface Unidad {
  numero: 1 | 2;
  titulo: string;
  descripcion: string;
  semanas: Semana[];
}

const unidad1: Unidad = {
  numero: 1,
  titulo: 'Primera Unidad',
  descripcion:
    'Del protocolo HTTP a los primeros componentes en React. Una unidad que recorre los cimientos de la web moderna, la lógica del frontend y la transición al ecosistema de herramientas del desarrollo profesional.',
  semanas: [
    {
      numero: 1,
      numeroStr: '01',
      titulo: 'Fundamentos, estándares y el ecosistema web',
      subtitulo: 'La infraestructura invisible de la web',
      descripcionBreve:
        'La web como ecosistema. TCP/IP, Frontend vs Backend, la Open Web Platform y el primer encuentro con Git.',
      fecha: '2026-08-18',
      temas: [
        'Open Web Platform y el rol del W3C',
        'Arquitectura de Internet: nodos, routers y paquetes TCP/IP',
        'Frontend vs Backend: diferencias, responsabilidades y tecnologías',
        'Protocolo HTTP/HTTPS: cómo viajan los datos en la web',
        'Sistemas de Control de Versiones (VCS) y Git',
        'Introducción a GitHub como plataforma colaborativa',
      ],
      contenido: `La web moderna no es un ente aislado: es un ecosistema regido por la Open Web Platform, una iniciativa coordinada por el W3C (World Wide Web Consortium) y otras organizaciones que garantizan que la web sea abierta, transparente y accesible para todos.

Un punto clave fue comprender cómo funciona la arquitectura de Internet. Los datos no viajan de golpe de un punto a otro: se dividen en paquetes que atraviesan una red de routers usando el protocolo TCP/IP. TCP garantiza que todos los paquetes lleguen y se reensamblen correctamente; IP se encarga del direccionamiento.

Diferenciamos los dos grandes mundos del desarrollo:

Frontend (Lado del Cliente): todo lo que el usuario ve e interactúa en el navegador — HTML estructura el contenido, CSS lo estiliza y JavaScript lo hace interactivo. El foco es la experiencia de usuario (UX) y la interfaz (UI).

Backend (Lado del Servidor): la lógica de negocio, la autenticación, la gestión de bases de datos y las APIs. Tecnologías como PHP, Python, Node.js o Java operan aquí, invisibles para el usuario pero esenciales para que todo funcione.

También se introdujeron los Sistemas de Control de Versiones (VCS). Git es el estándar de la industria: registra cada cambio en el código, permite volver a versiones anteriores y facilita el trabajo en equipo sin sobrescribir el trabajo de otros. GitHub es la plataforma donde esos repositorios viven en la nube.`,
      reflexion: `Antes de esta clase pensaba que hacer una página web era simplemente escribir código y subirlo a internet. Ahora entiendo que hay toda una infraestructura invisible detrás. Me pareció fascinante el concepto de la Open Web Platform; saber que hay organizaciones velando por que la web no sea controlada por una sola empresa me da una perspectiva más ética de mi futura profesión.

El concepto de Git me generaba algo de ansiedad — la típica historia del estudiante que sube cosas directo a main y rompe todo. Pero entender que es una "máquina del tiempo" para el código me tranquilizó. Aprendí que el desarrollo web es, fundamentalmente, un puente entre la infraestructura de red y el diseño visual, y que cada capa tiene un propósito muy claro.`,
      referencias: [
        {
          texto: 'MDN Web Docs. (2024). Introducción a las APIs web del lado del cliente.',
          url: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Client-side_web_APIs/Introduction',
        },
        {
          texto: 'Computer Weekly. (2015). ¿En qué se diferencia el desarrollo de front-end del de back-end?.',
          url: 'https://www.computerweekly.com/es/respuesta/En-que-se-diferencia-el-desarrollo-de-front-end-del-de-back-end',
        },
        {
          texto: 'W3C. (2024). About the World Wide Web Consortium.',
          url: 'https://www.w3.org/about/',
        },
      ],
      layoutImagenes: 'asimetrico',
      imagenes: [
        {
          src: '/images/cuaderno/semana-01/sem01_1.webp',
          alt: 'Diagrama de capas del modelo TCP/IP: HTML, CSS, JavaScript, HTTP, DNS, TLS, TCP, UDP e IP',
          caption: 'Arquitectura de Internet: de la capa IP hasta las tecnologías del cliente',
          width: 551,
          height: 441,
          rol: 'diagrama',
        },
        {
          src: '/images/cuaderno/semana-01/sem01_2.webp',
          alt: 'Infografía de comandos básicos de Git: init, clone, add, config, log, status, reset y diff',
          caption: 'Comandos esenciales de Git para el control de versiones',
          width: 1080,
          height: 1080,
          rol: 'infografia',
        },
      ],
    },
    {
      numero: 2,
      numeroStr: '02',
      titulo: 'CSS puro, Box Model y manipulación del DOM',
      subtitulo: 'Construir sin muletas',
      descripcionBreve:
        'Práctica calificada con CSS puro y JavaScript nativo: animaciones, Flexbox, Box Model y la API de Drag & Drop de HTML5.',
      fecha: '2026-08-25',
      temas: [
        'Box Model y distribuciones con Flexbox',
        'Pseudo-clases CSS: :hover, :focus, :checked',
        'Transiciones y animaciones con CSS puro',
        'Diseño responsivo con Media Queries',
        'Manipulación nativa del DOM con JavaScript',
        'API de Drag and Drop de HTML5 (dragenter, dragover, drop)',
        'Lectura de archivos locales con la File API del navegador',
      ],
      contenido: `Esta semana se evaluó nuestra capacidad de construir interfaces sin depender de frameworks externos — sin Bootstrap, sin Tailwind, sin nada. Solo HTML5, CSS3 y JavaScript puro.

El Box Model fue central: cada elemento HTML vive dentro de una caja con contenido, padding, border y margin. Dominar cómo interactúan estas capas es la base para conseguir distribuciones precisas. Flexbox simplificó la alineación en una dimensión, permitiendo centrar elementos y distribuir espacio de forma declarativa.

Las pseudo-clases (:hover, :focus, :checked) y las transiciones CSS abrieron la puerta a microinteracciones elegantes. Con transition: all 0.3s ease se puede transformar un campo de texto aburrido en un elemento que responde al usuario de forma suave y fluida.

El punto técnico más interesante fue la API de Drag and Drop de HTML5. El navegador expone eventos nativos — dragenter, dragover, drop — que permiten que el usuario arrastre archivos desde su escritorio directamente a la página. Combinado con la File API, es posible leer esos archivos en memoria sin enviarlos a ningún servidor. Una característica poderosa que muchos desarrolladores desconocen.`,
      reflexion: `Esta práctica fue un baño de realidad. En mi día a día uso librerías o templates, pero cuando te obligan a construir desde cero, te das cuenta de cuánto dependes de ellas.

El mayor reto fue lograr que el formulario se viera igual que el diseño de referencia usando solo CSS. Descubrí que las transiciones son mágicas: pocas líneas de código transforman un elemento estático en algo que respira. Pero lo que más me sorprendió fue el Drag and Drop nativo — no sabía que HTML5 tenía eventos para eso. Leer archivos del escritorio del usuario directo en el navegador, sin backend, me abrió la mente sobre las capacidades reales de la web moderna.

Aprendí algo importante: si dominas CSS puro, cualquier framework después te resultará trivial. Los frameworks no hacen magia — aceleran lo que ya sabes hacer.`,
      referencias: [
        {
          texto: 'MDN Web Docs. (2024). Uso de la API de Arrastrar y Soltar de HTML.',
          url: 'https://developer.mozilla.org/es/docs/Web/API/HTML_Drag_and_Drop_API',
        },
        {
          texto: 'MDN Web Docs. (2024). Modelo de caja de CSS.',
          url: 'https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model',
        },
        {
          texto: 'MDN Web Docs. (2024). Uso de consultas de medios.',
          url: 'https://developer.mozilla.org/es/docs/Web/CSS/CSS_media_queries/Using_media_queries',
        },
      ],
      layoutImagenes: 'flota-der',
      imagenes: [
        {
          src: '/images/cuaderno/semana-02/sem02_1.webp',
          alt: 'Diagrama del modelo de caja CSS mostrando margin, border, padding y contenido con HTML5 y CSS3',
          caption: 'Box Model: las cuatro capas que rodean cada elemento HTML',
          width: 600,
          height: 337,
          rol: 'diagrama',
        },
        {
          src: '/images/cuaderno/semana-02/sem02_2.webp',
          alt: 'Ilustración de la API Drag and Drop de JavaScript con una persona programando frente a un monitor',
          caption: 'Drag & Drop API: arrastrar archivos desde el escritorio directo al navegador',
          width: 520,
          height: 292,
          rol: 'ilustracion',
        },
      ],
    },
    {
      numero: 3,
      numeroStr: '03',
      titulo: 'Tailwind CSS y el paradigma Utility-First',
      subtitulo: 'Diseñar a la velocidad del pensamiento',
      descripcionBreve:
        'Un giro de 180°: de CSS puro a Tailwind CSS. Utility-First, sistemas de diseño coherentes y diseño responsivo sin salir del HTML.',
      fecha: '2026-09-01',
      temas: [
        'Paradigma Utility-First y su filosofía de diseño',
        'Escalas de diseño predefinidas: colores, espaciados y tipografía',
        'Grid y Flexbox desde la perspectiva de Tailwind',
        'Cards con efectos hover y clases de estado',
        'Imágenes responsivas y breakpoints en Tailwind',
        'Comparativa: CSS puro vs Utility-First',
      ],
      contenido: `Esta semana dimos un giro de 180° al pasar de CSS puro a Tailwind CSS. Tailwind se basa en el paradigma Utility-First: en lugar de escribir clases semánticas como .card-title o .hero-section, aplicamos clases pequeñas y específicas directamente en el HTML — text-xl, font-bold, bg-slate-800, rounded-lg.

La clave del paradigma es que Tailwind nos obliga a usar un sistema de diseño coherente. Sus escalas predefinidas de colores, espaciados y tipografía garantizan consistencia visual sin esfuerzo: en lugar de inventar valores arbitrarios (#E4F3A1 o margin: 13px), elegimos dentro de un vocabulario curado por expertos en diseño.

El diseño responsivo en Tailwind se vuelve declarativo: md:flex lg:w-1/2 xl:grid-cols-3. Los breakpoints se aplican como prefijos directamente en las clases, lo que elimina los bloques de Media Queries dispersos en un archivo CSS separado.

También exploramos las variantes de estado: hover:bg-slate-700, focus:ring-2, active:scale-95. Cada estado del elemento se controla desde el mismo lugar donde se define su apariencia base, haciendo el código más legible y fácil de mantener.`,
      reflexion: `Al principio, ver el HTML lleno de clases de Tailwind me pareció horrible y desordenado. Vengo de la idea de separar el HTML del CSS a toda costa. Sin embargo, después de construir las listas de mensajes y las tarjetas de playas de los ejercicios, entendí la velocidad que ofrece: ya no pierdo tiempo inventando nombres de clases ni cambiando entre archivos.

Lo que más me gustó fue la consistencia. En CSS puro a veces tengo seis tonos de gris ligeramente distintos en una misma página. Con Tailwind, bg-gray-100 siempre es el mismo gris, en cualquier componente, en cualquier proyecto. Esa predictibilidad es un superpoder silencioso.

Aunque sigo creyendo que CSS puro es la base que todo desarrollador debe dominar, Tailwind se ha convertido en mi herramienta favorita para prototipar rápido y con calidad profesional.`,
      referencias: [
        {
          texto: 'HubSpot. (2025). Qué es Frontend y Backend: guía con diferencias, ejemplos y herramientas.',
          url: 'https://blog.hubspot.es/website/frontend-y-backend',
        },
        {
          texto: 'Tailwind CSS. (2024). Utility-First Fundamentals. Tailwind CSS Docs.',
          url: 'https://tailwindcss.com/docs/utility-first',
        },
      ],
      layoutImagenes: 'duo-oscuro',
      imagenes: [
        {
          src: '/images/cuaderno/semana-03/sem03_1.webp',
          alt: 'Paleta completa de colores de Tailwind CSS sobre fondo oscuro, mostrando toda la escala cromática',
          caption: 'Sistema de colores de Tailwind: escala curada de 22 familias × 11 tonos',
          width: 750,
          height: 375,
          rol: 'banner',
        },
        {
          src: '/images/cuaderno/semana-03/sem03_2.webp',
          alt: 'Comparativa de layouts responsive en Mobile, Tablet y Desktop con grids de bloques de colores',
          caption: 'Diseño responsivo en Tailwind: breakpoints sm, md y lg en acción',
          width: 750,
          height: 375,
          rol: 'diagrama',
        },
      ],
    },
    {
      numero: 4,
      numeroStr: '04',
      titulo: 'Vanilla JavaScript: lógica, DOM y persistencia',
      subtitulo: 'El cerebro de la web en acción',
      descripcionBreve:
        'Ruleta de sorteos y generador de equipos con JavaScript puro. DOM dinámico, LocalStorage, eventos y el algoritmo de Fisher-Yates.',
      fecha: '2026-09-08',
      temas: [
        'Manipulación dinámica del DOM con createElement y appendChild',
        'API Canvas y SVG para gráficos interactivos',
        'Manejo de eventos: click, keydown, mousemove',
        'LocalStorage: setItem, getItem y persistencia entre sesiones',
        'Algoritmo de Fisher-Yates para aleatoriedad uniforme',
        'Math.random() y distribución de probabilidades',
        'Organización del código en funciones de responsabilidad única',
      ],
      contenido: `Esta semana fue puramente lógica: construimos dos aplicaciones interactivas usando JavaScript Vanilla — sin React, sin librerías, solo el lenguaje en su forma más pura.

La manipulación dinámica del DOM con document.createElement() y appendChild() permite construir interfaces completas desde JavaScript, sin tocar el HTML inicial. La ruleta de sorteos usó la API Canvas (o SVG) para dibujar las porciones de forma proporcional al número de participantes, calcular el ángulo de rotación y animar el giro.

El manejo de eventos fue central: capturamos clics, movimientos del mouse y teclas del teclado (keydown) para crear atajos — Space para girar la ruleta, R para reiniciar — haciendo la experiencia más fluida y accesible.

Un descubrimiento valioso fue LocalStorage: localStorage.setItem y localStorage.getItem permiten guardar datos en el navegador de forma persistente entre sesiones. Sin backend, sin base de datos, los datos sobreviven recargas de página.

Para la aleatoriedad del generador de equipos se implementó el Algoritmo de Fisher-Yates, que garantiza una distribución uniforme al mezclar un array. Math.random() por sí solo no es suficiente para mezclas justas — este algoritmo es el estándar en la industria para shuffling.`,
      reflexion: `Esta fue la semana más desafiante y la más gratificante. Hacer que una ruleta gire y se detenga exactamente en un elemento al azar requiere pensar en términos matemáticos — ángulos, grados, rotaciones, módulo aritmético. Estuve un buen rato atascado pintando las porciones, pero cuando el resultado final apareció en pantalla me sentí genuinamente orgulloso.

El descubrimiento de LocalStorage cambió mi forma de ver las aplicaciones web. Antes creía que para guardar datos necesitaba obligatoriamente MySQL y PHP. Ahora sé que puedo construir aplicaciones completas del lado del cliente que persisten información del usuario.

También aprendí algo sobre arquitectura: cuando el código crece, las funciones de responsabilidad única — una para guardar, otra para leer, otra para calcular — son la diferencia entre un proyecto mantenible y un caos. JavaScript es el verdadero cerebro de la web.`,
      referencias: [
        {
          texto: 'Zenodo. (2025). Frontend, Backend, and APIs: A Cohesive Introduction to Software Architecture.',
          url: 'https://www.zenodo.org/records/16722162',
        },
        {
          texto: 'MDN Web Docs. (2024). API de almacenamiento web (localStorage y sessionStorage).',
          url: 'https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API',
        },
        {
          texto: 'MDN Web Docs. (2024). API Canvas.',
          url: 'https://developer.mozilla.org/es/docs/Web/API/Canvas_API',
        },
      ],
      layoutImagenes: 'panorama',
      imagenes: [
        {
          src: '/images/cuaderno/semana-04/sem04_1.webp',
          alt: 'Logo de JavaScript en 3D con el escudo amarillo y las letras JS en blanco',
          caption: 'JavaScript: el lenguaje que le da vida e interactividad a la web',
          width: 300,
          height: 300,
          rol: 'logo',
        },
        {
          src: '/images/cuaderno/semana-04/sem04_2.webp',
          alt: 'Banner que muestra el concepto de localStorage con un ícono de base de datos y código JavaScript de ejemplo',
          caption: 'localStorage: persistencia de datos en el navegador sin necesidad de backend',
          width: 1440,
          height: 600,
          rol: 'panorama',
        },
      ],
    },
    {
      numero: 5,
      numeroStr: '05',
      titulo: 'Node.js, React y el ecosistema moderno',
      subtitulo: 'Componentes, Virtual DOM y Vite',
      descripcionBreve:
        'El salto al desarrollo moderno: Node.js, NPM, React con JSX, el Virtual DOM y Vite como herramienta de compilación instantánea.',
      fecha: '2026-09-15',
      temas: [
        'Node.js como entorno de ejecución fuera del navegador',
        'NPM y el ecosistema de paquetes de JavaScript',
        'React: librería de componentes de Meta',
        'Virtual DOM: reconciliación y eficiencia de renderizado',
        'JSX: sintaxis híbrida de JavaScript y HTML',
        'Vite como bundler moderno y alternativa a Webpack',
        'Componentización y arquitectura basada en piezas reutilizables',
      ],
      contenido: `Esta semana entramos al ecosistema moderno del desarrollo frontend. El primer gran concepto fue Node.js: un entorno de ejecución que permite correr JavaScript fuera del navegador, directamente en el servidor o en la terminal. Esto abrió la puerta a herramientas de desarrollo, scripts de automatización y backends en JavaScript.

NPM (Node Package Manager) es el repositorio de librerías más grande del mundo — más de dos millones de paquetes disponibles con un simple npm install.

El salto más importante fue React, la librería de componentes de Meta. React se basa en dos ideas fundamentales:

Componentes: piezas de código reutilizables que encapsulan lógica, estructura y estilo. Una aplicación React es un árbol de componentes, desde el más pequeño (un botón) hasta el más grande (la página completa).

Virtual DOM: React no toca el DOM real directamente. Mantiene una copia en memoria (Virtual DOM), calcula los cambios necesarios con un algoritmo de reconciliación y actualiza solo los nodos que realmente cambiaron. Esto hace las aplicaciones extremadamente eficientes.

JSX es la sintaxis que une estos mundos: permite escribir HTML dentro de JavaScript de forma natural, y Babel lo transforma en llamadas React.createElement() que el motor entiende.

Vite reemplaza a Webpack como herramienta de compilación. Aprovecha los módulos ES nativos del navegador para servir el código sin empaquetar en desarrollo, logrando tiempos de arranque instantáneos.`,
      reflexion: `Al principio me costó mucho entender React. Venía de la mentalidad de "tengo un archivo HTML y un archivo JS que se conectan". De repente, todo es un componente y el HTML se escribe dentro de JavaScript. Fue un cambio de chip drástico.

Pero cuando comprendí las Props — la forma en que los componentes padres pasan datos a sus hijos, como argumentos de una función — todo empezó a tener sentido. La componentización es como construir con bloques de Lego: cada pieza funciona sola y se puede reutilizar en cualquier combinación.

Lo que más me emocionó fue Vite. Herramientas antiguas tardaban 30 segundos en compilar; Vite es instantáneo. El desarrollo web ha evolucionado hacia algo que se siente rápido, fluido y productivo. Me doy cuenta de que la componentización no es solo una técnica — es una forma de pensar el software.`,
      referencias: [
        {
          texto: 'Meta Open Source. (2024). React – A JavaScript library for building user interfaces.',
          url: 'https://react.dev/',
        },
        {
          texto: 'Vite. (2024). Vite — Next Generation Frontend Tooling.',
          url: 'https://vitejs.dev/',
        },
        {
          texto: 'TypeScript. (2026). TypeScript for JavaScript Programmers.',
          url: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
        },
      ],
      layoutImagenes: 'duo-oscuro',
      imagenes: [
        {
          src: '/images/cuaderno/semana-05/sem05_1.webp',
          alt: 'Imagen que muestra los logos de Node.js y React JS juntos sobre fondo oscuro con código al fondo',
          caption: 'Node.js + React: el dúo que define el desarrollo frontend moderno',
          width: 750,
          height: 422,
          rol: 'banner',
        },
        {
          src: '/images/cuaderno/semana-05/sem05_2.webp',
          alt: 'Comparativa React vs Vite con sus logos sobre fondo oscuro: átomo azul de React y rayo violeta de Vite',
          caption: 'React y Vite no compiten — React es la librería, Vite es la herramienta de compilación',
          width: 750,
          height: 422,
          rol: 'banner',
        },
      ],
    },
    {
      numero: 6,
      numeroStr: '06',
      titulo: 'Componentes avanzados, Props y estilos en React',
      subtitulo: 'TypeScript, módulos CSS y arquitectura limpia',
      descripcionBreve:
        'Props tipadas con TypeScript, renderizado condicional, listas con .map() y las tres formas de aplicar estilos en React.',
      fecha: '2026-09-22',
      temas: [
        'Renderizado condicional: operador ternario y cortocircuito &&',
        'Renderizado de listas con .map() y la prop key',
        'TypeScript en React: definición de interfaces para Props',
        'props.children y componentes contenedor',
        'CSS Global vs CSS Modules vs Estilos en línea',
        'Encapsulación de estilos y prevención de colisiones',
        'Arquitectura de componentes: separación de responsabilidades',
      ],
      contenido: `Esta semana profundizamos en los patrones que hacen a React verdaderamente poderoso. El renderizado condicional con el operador ternario (condicion ? <A /> : <B />) y el cortocircuito (condicion && <Componente />) permite que la UI responda al estado de forma declarativa, sin manipular el DOM manualmente.

Para listas, el método .map() es la herramienta central: transforma un array de datos en un array de elementos JSX. La prop key es obligatoria — le dice a React exactamente qué elemento cambió, se agregó o se eliminó, optimizando el proceso de reconciliación del Virtual DOM.

TypeScript añade una capa de seguridad crítica: al definir interfaces para las Props de cada componente, el editor detecta errores antes de ejecutar el código. Si un componente espera un number y recibe un string, el error aparece subrayado en rojo en el editor — no en producción, no en la consola del usuario.

props.children es uno de los patrones más elegantes de React: permite crear componentes contenedor (<Card>, <Modal>, <Layout>) que envuelven cualquier contenido arbitrario, haciendo las interfaces extremadamente flexibles.

Las tres formas de estilos tienen casos de uso distintos: CSS Global para estilos base y variables; CSS Modules para estilos encapsulados por componente (los nombres de clase se generan únicos automáticamente, evitando colisiones); estilos en línea para valores dinámicos calculados en JavaScript.`,
      reflexion: `El concepto de props.children me pareció una obra de arte cuando lo entendí. Crear un componente que puede envolver cualquier otro contenido convierte al componente en una plantilla reutilizable en lugar de un bloque rígido.

Con TypeScript, al principio me pareció una molestia declarar tipos para todo. Pero cuando pasé un string a una propiedad que esperaba un número y el editor me lo marcó inmediatamente — antes de que la aplicación explotara — le agarré cariño. TypeScript no es burocracia: es un colega que revisa tu trabajo antes de que llegue al cliente.

Los CSS Modules resolvieron un problema que me perseguía: en proyectos con muchos componentes, los nombres de clase se pisaban entre sí. Con módulos, cada estilo es local. La tranquilidad que da saber que cambiar el estilo de un componente no va a romper otro es invaluable.`,
      referencias: [
        {
          texto: 'React Docs. (2024). Pasar Props a un componente.',
          url: 'https://es.react.dev/learn/passing-props-to-a-component',
        },
        {
          texto: 'TypeScript. (2024). TypeScript Handbook — Interfaces.',
          url: 'https://www.typescriptlang.org/docs/handbook/2/objects.html',
        },
        {
          texto: 'Next.js Docs. (2024). CSS Modules.',
          url: 'https://nextjs.org/docs/app/building-your-application/styling/css-modules',
        },
      ],
      layoutImagenes: 'duo-oscuro',
      imagenes: [
        {
          src: '/images/cuaderno/semana-06/sem06_1.webp',
          alt: 'Logo de TypeScript sobre código en VS Code con autocompletado de hooks de React',
          caption: 'TypeScript + React: el editor detecta errores antes de que lleguen al navegador',
          width: 750,
          height: 422,
          rol: 'banner',
        },
        {
          src: '/images/cuaderno/semana-06/sem06_2.webp',
          alt: 'Logo de React CSS Modules con el átomo de React y un anzuelo, sobre fondo azul oscuro',
          caption: 'CSS Modules en React: estilos encapsulados por componente, sin colisiones de clase',
          width: 575,
          height: 323,
          rol: 'banner',
        },
      ],
    },
    {
      numero: 7,
      numeroStr: '07',
      titulo: 'Evaluación parcial — Sistema de Gestión de Biblioteca',
      subtitulo: 'De maquetas a soluciones reales',
      descripcionBreve:
        'Examen parcial integrador: CRUD completo, React Router, roles de usuario, validaciones, LocalStorage y generación de comprobantes PDF.',
      fecha: '2026-09-29',
      temas: [
        'CRUD completo: Crear, Leer, Actualizar y Eliminar',
        'React Router: navegación SPA entre vistas sin recarga',
        'Roles de usuario: vista Administrador y vista Usuario',
        'Validaciones de formulario: campos requeridos y unicidad',
        'Persistencia completa con LocalStorage',
        'Lógica de negocio: control de stock en tiempo real',
        'Generación de comprobantes digitales de préstamo',
        'Context API para estado global entre componentes',
      ],
      contenido: `El examen parcial nos puso a prueba con un caso de estudio real: un Sistema de Gestión de Biblioteca. El objetivo era demostrar que podíamos aplicar de forma integrada todo lo aprendido en la Unidad 1.

El sistema implementó un CRUD completo — Crear, Leer, Actualizar y Eliminar — para libros, categorías y usuarios, con control de stock disponible. Cada operación requería sincronización con LocalStorage para garantizar persistencia entre sesiones.

React Router fue esencial para implementar navegación entre vistas (Administrador y Usuario) sin recargar la página. Cada ruta renderiza un contexto diferente: el administrador gestiona el inventario; el usuario busca y solicita préstamos.

Las validaciones de formulario previnieron datos incorrectos: códigos de usuario únicos, campos requeridos no vacíos, stock mayor a cero antes de permitir un préstamo. La lógica de negocio ajustaba el inventario en tiempo real al confirmar un préstamo.

La generación de comprobantes digitales — con fecha, código único, datos del usuario y libro — requirió pensar en la estructura de los datos desde el inicio, no como un añadido al final.`,
      reflexion: `El examen parcial fue el verdadero desafío del ciclo. Me di cuenta de que ya no basta con hacer un componente que se vea bonito — hay que hacerlo funcionar en conjunto con diez componentes más, compartiendo estado, respondiendo a cambios y manejando errores.

El mayor obstáculo fue el control del stock. Asegurarme de que si un usuario prestaba un libro el número se restara en tiempo real, y que si el stock era cero el botón de préstamo se deshabilitara, requirió pensar en el flujo de datos de principio a fin.

Esta experiencia me demostró algo importante: soy capaz de construir un sistema completo — con roles, validaciones, persistencia y lógica de negocio — usando solo el frontend. Siento que he cruzado la línea entre "estudiante que hace maquetas" y "desarrollador que construye soluciones funcionales".`,
      referencias: [
        {
          texto: 'React Docs. (2024). Gestión del estado en React.',
          url: 'https://es.react.dev/learn/managing-state',
        },
        {
          texto: 'React Router. (2024). React Router — Declarative Routing for React.',
          url: 'https://reactrouter.com/',
        },
        {
          texto: 'MDN Web Docs. (2024). API de almacenamiento web.',
          url: 'https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API',
        },
      ],
      layoutImagenes: 'proyecto-showcase',
      imagenes: [
        {
          src: '/images/cuaderno/semana-07/sem07_1.webp',
          alt: 'Diagrama de Context API de React mostrando Provider, Consumer y flujo de State entre componentes',
          caption: 'Context API: estado global que fluye desde el Provider hasta cualquier Consumer del árbol',
          width: 480,
          height: 560,
          rol: 'diagrama',
        },
        {
          src: '/images/cuaderno/semana-07/sem07_2.webp',
          alt: 'Captura de pantalla del Sistema de Gestión de Biblioteca: interfaz con búsqueda de libros, stock disponible y botones de préstamo',
          caption: 'Sistema de Gestión de Biblioteca — CRUD completo, React Router, LocalStorage y control de stock en tiempo real',
          width: 1540,
          height: 640,
          rol: 'showcase',
        },
      ],
    },
  ],
};

const unidad2: Unidad = {
  numero: 2,
  titulo: 'Segunda Unidad',
  descripcion:
    'Profundización y aplicación avanzada en el desarrollo de aplicaciones web. Contenido por agregar.',
  semanas: [
    {
      numero: 9,
      numeroStr: '09',
      titulo: 'Semana 09',
      subtitulo: 'Por agregar',
      descripcionBreve: 'Contenido de la semana 09 por agregar.',
      temas: [],
      contenido: '',
      reflexion: '',
    },
    {
      numero: 10,
      numeroStr: '10',
      titulo: 'Semana 10',
      subtitulo: 'Por agregar',
      descripcionBreve: 'Contenido de la semana 10 por agregar.',
      temas: [],
      contenido: '',
      reflexion: '',
    },
    {
      numero: 11,
      numeroStr: '11',
      titulo: 'Semana 11',
      subtitulo: 'Por agregar',
      descripcionBreve: 'Contenido de la semana 11 por agregar.',
      temas: [],
      contenido: '',
      reflexion: '',
    },
    {
      numero: 12,
      numeroStr: '12',
      titulo: 'Semana 12',
      subtitulo: 'Por agregar',
      descripcionBreve: 'Contenido de la semana 12 por agregar.',
      temas: [],
      contenido: '',
      reflexion: '',
    },
    {
      numero: 13,
      numeroStr: '13',
      titulo: 'Semana 13',
      subtitulo: 'Por agregar',
      descripcionBreve: 'Contenido de la semana 13 por agregar.',
      temas: [],
      contenido: '',
      reflexion: '',
    },
    {
      numero: 14,
      numeroStr: '14',
      titulo: 'Semana 14',
      subtitulo: 'Por agregar',
      descripcionBreve: 'Contenido de la semana 14 por agregar.',
      temas: [],
      contenido: '',
      reflexion: '',
    },
    {
      numero: 15,
      numeroStr: '15',
      titulo: 'Semana 15',
      subtitulo: 'Por agregar',
      descripcionBreve: 'Contenido de la semana 15 por agregar.',
      temas: [],
      contenido: '',
      reflexion: '',
    },
  ],
};

export const unidades: Unidad[] = [unidad1, unidad2];

export function getUnidad(numero: number): Unidad | undefined {
  return unidades.find((u) => u.numero === numero);
}

export function getSemana(
  numeroUnidad: number,
  numeroSemana: number,
): Semana | undefined {
  return getUnidad(numeroUnidad)?.semanas.find(
    (s) => s.numero === numeroSemana,
  );
}

export function semanasConContenido(): number {
  return unidades
    .flatMap((u) => u.semanas)
    .filter((s) => s.contenido.trim().length > 0).length;
}

export function semanasConReflexion(): number {
  return unidades
    .flatMap((u) => u.semanas)
    .filter((s) => s.reflexion.trim().length > 0).length;
}
