export const aboutMarkdown = `# Intro

Soy estudiante de Ingeniería de Sistemas en la [Universidad Nacional del Centro del Perú (UNCP)](https://www.uncp.edu.pe),
con enfoque en desarrollo de software y especial inclinación por el frontend.
Actualmente trabajo en la [Dirección de Proyección Social y Extensión Cultural](https://www.uncp.edu.pe)
de la UNCP automatizando reportes con Python para la emisión de certificados institucionales.

# Algo de historia

- En 2015, tuve mi primera computadora y empecé a explorar la tecnología desde temprana edad en Huancayo, Perú.
- A los 13 años, desarmaba juguetes y electrodomésticos averiados para entender cómo funcionaban por dentro — motores, circuitos, sensores. Construía cosas con esas partes.
- A los 15 años, esa curiosidad por la electrónica y la tecnología me llevó a decidirme por Ingeniería de Sistemas. Sabía que ahí estaba mi camino.
- A los 18 años, descubrí los algoritmos y la lógica computacional. Me pareció fascinante que existiera una forma de formalizar el pensamiento en pasos exactos.
- A los 19 años, aprendí C++ — mi primer lenguaje de programación real. En la misma época exploré Python y me adentré en redes neuronales, lo que me abrió los ojos a las posibilidades de la inteligencia artificial.
- A los 20 años, conocí PHP, HTML y CSS. Por primera vez podía construir interfaces completas — lógica en el servidor y visual en el navegador. Con la ayuda de la IA los resultados eran increíbles.
- A los 21 años, descubrí JavaScript en un proyecto para visualizar datos en tiempo real. Ahí conocí Next.js y entendí lo que este ecosistema puede dar frente a PHP — componentes, reactividad, velocidad de desarrollo. No hay comparación.
- Aprendí TypeScript, Vite y Tailwind CSS por cuenta propia mientras trabajaba en proyectos personales.
- Actualmente combino mis estudios con trabajo real en la UNCP, donde automatizo procesos administrativos con Python.

# Lo que me gusta

- Aprender nuevas tecnologías y construir interfaces limpias y accesibles.
- El básquetbol y el vóleybol — los deportes de equipo me parecen los más dinámicos.
- El fútbol, sobre todo cuando se puede ver con amigos; el ambiente lo es todo.
- La fotografía — capturar momentos y lugares desde mi perspectiva.
- Los videojuegos en línea: competir y coordinar con otras personas en tiempo real.
- El café — una buena taza es parte indispensable de cualquier sesión de código.
- Conocer lugares nuevos, bailar y desconectarme de la pantalla cuando toca.
- El trekking y las montañas — crecer en los Andes te deja esa necesidad de altura.
- [Instagram](https://www.instagram.com/jhojanantezana2/).

# Viajes y geografía

- Vivo en Huancayo — El Tambo, Perú, en los Andes centrales a más de 3,000 metros sobre el nivel del mar.
- Huancayo es conocida como la "Ciudad Incontrastable" por su clima único y su valle fértil.
- En 2025 viajé a Piura para el [CONEII 2025](https://coneii.com), el Congreso Nacional de Estudiantes de Ingeniería de Industrias.
- En 2026 asistí al PERUMEC Cusco 2026, una de las experiencias más intensas académica y culturalmente.
- Cusco me impactó en todos los niveles: la historia, la altitud, la comunidad y la energía del evento.
- Me gustaría recorrer más regiones del Perú y, eventualmente, participar en comunidades tech fuera del país.

# Datos curiosos

- Puedo pasar horas ajustando CSS hasta que el diseño quede exactamente como lo imaginé — y no me arrepiento.
- Tengo una lista de proyectos personales pendientes que crece más rápido de lo que los termino.
- Aprendo mucho mejor construyendo cosas reales que siguiendo tutoriales paso a paso.
- Mi stack favorito hoy es React + TypeScript + Tailwind + Vite.
- Soy capaz de olvidar comer si estoy en un buen flujo de trabajo.
- He llegado a depurar un bug durante tres días antes de darme cuenta de que era un punto y coma mal puesto.
- Si tengo que elegir entre documentación y un video de 10 minutos, elijo la documentación.
- Prefiero el modo oscuro en todo: editor, terminal, navegador y — si pudiera — la vida real.
- Cuando juego en línea me tomo la coordinación en serio, lo que según mis amigos me hace "muy intenso".

# Lo que sueño

- Especializarme en desarrollo frontend y convertirme en un referente en interfaces de alta calidad.
- Dominar el diseño de sistemas UI/UX al nivel de entender tanto el código como la experiencia del usuario.
- Contribuir activamente a proyectos open source que otros desarrolladores usen en su día a día.
- Construir al menos un producto propio que resuelva un problema real para personas reales.
- Trabajar en un equipo de producto donde diseño y código se desarrollen juntos desde el inicio.
- Aprender sobre accesibilidad web a fondo — construir para todos es el estándar mínimo.
- Viajar a una conferencia internacional de tecnología: una charla de primera mano de alguien que admiro.
- Que algún día mi código sea parte de algo que alguien use sin saber que lo hice yo.

# Recursos que sigo

- [GitHub: JHOJAN-GIT](https://github.com/JHOJAN-GIT)
- [LinkedIn](https://www.linkedin.com/in/jhojan-antezana-8a22001ab/)
- [Facebook](https://www.facebook.com/jhojan.antezana.9)
- [Instagram](https://www.instagram.com/jhojanantezana2/)
- [Universidad Nacional del Centro del Perú](https://www.uncp.edu.pe)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Next.js](https://nextjs.org)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)
`;

/**
 * Imágenes opcionales por sección.
 * Clave = título exacto de la sección en aboutMarkdown.
 * Coloca los archivos en public/images/about/{subcarpeta}/.
 * Dimensiones reales para que Next.js no distorsione.
 */
export interface AboutSectionImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /** 'right' (default) | 'left' — lado donde aparece la imagen */
  side?: 'right' | 'left';
}

export const aboutImages: Record<string, AboutSectionImage> = {
  'Algo de historia': {
    src: '/images/about/historia/historia.webp',
    alt: 'Laptop Dell en la terraza de la UNCP con Huancayo al fondo — donde empezó todo',
    width: 900,
    height: 1200,
    caption: 'La terraza de la UNCP — código, cielo azul y los Andes de fondo',
    side: 'right',
  },
  'Lo que me gusta': {
    src: '/images/about/gusta/gusta.webp',
    alt: 'Jhojan con uniforme Slammers sosteniendo un trofeo en una cancha de básquetbol',
    width: 900,
    height: 1200,
    caption: 'Básquetbol — equipo Slammers, trofeo en mano',
    side: 'right',
  },
  'Viajes y geografía': {
    src: '/images/about/viajes/viaje.webp',
    alt: 'Jhojan frente a una laguna turquesa rodeada de montañas nevadas en los Andes peruanos',
    width: 900,
    height: 1200,
    caption: 'Laguna Humantay, Cusco — trekking a 4200 msnm',
    side: 'right',
  },
  'Datos curiosos': {
    src: '/images/about/dato/dato.webp',
    alt: 'Pantalla con código SVG y CSS en tonos rosados y azul oscuro',
    width: 900,
    height: 1200,
    caption: 'El tipo de pantalla que me hace perder la noción del tiempo',
    side: 'right',
  },
  'Lo que sueño': {
    src: '/images/about/suenos/sueno.webp',
    alt: 'Código con etiquetas SVG y CSS en tonos rosados y azules sobre fondo oscuro',
    width: 1200,
    height: 900,
    caption: 'El código como lienzo — construir cosas que otros usen sin saber que las hice yo',
    side: 'right',
  },
};
