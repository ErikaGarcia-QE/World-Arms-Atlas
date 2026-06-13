# Atlas Histórico del Armamento

## Descripción

**Atlas Histórico del Armamento** es una plataforma web educativa y documental desarrollada con **Flask** (framework Python) diseñada para presentar información sobre la evolución del armamento a lo largo de la historia. A través de un enfoque histórico, cultural, museográfico y académico, el proyecto ofrece una perspectiva integral sobre cómo las tecnologías de armamento han influido en el desarrollo de las civilizaciones y los eventos históricos significativos.

El sitio funciona como un recurso de consulta interactivo donde usuarios pueden explorar distintas épocas, regiones geográficas y contextos culturales, comprendiendo el papel del armamento como patrimonio histórico y objeto de estudio académico.

---

## Objetivo

Proporcionar una herramienta educativa accesible que permita a estudiantes, investigadores, educadores y al público general comprender la evolución histórica del armamento desde múltiples perspectivas:

- Contexto histórico y cultural de diferentes períodos
- Influencia geográfica y regional en el desarrollo armamentístico
- Significado arqueológico y museográfico de artefactos históricos
- Análisis académico de transformaciones tecnológicas en el tiempo

---

## Características Principales

- **Cronología Interactiva**: Navegación temporal que permite explorar armamento de diferentes épocas históricas
- **Clasificación Geográfica**: Organización por regiones y culturas para comprender la diversidad histórica
- **Descripciones Académicas**: Información histórica, cultural y contextual de cada período
- **Interfaz Intuitiva**: Diseño responsivo y accesible para facilitar la exploración del contenido
- **Enfoque Documental**: Contenido curado desde perspectivas educativas y museográficas

---

## Estructura del Proyecto

```
World-Arms-Atlas/
├── app.py                  # Aplicación principal Flask
├── requirements.txt        # Dependencias Python
├── README.md               # Documentación del proyecto
├── LICENSE                 # Licencia del proyecto
├── templates/              # Plantillas HTML (Jinja2)
│   ├── base.html           # Plantilla base
│   └── index.html          # Página principal
├── static/                 # Archivos estáticos
│   ├── styles.css          # Estilos CSS
│   └── main.js             # Funcionalidad JavaScript
└── data/                   # Datos y configuración
    └── content.json        # Contenido del atlas
```

### Descripción de Archivos

- **app.py**: Aplicación principal Flask con rutas, manejo de errores y carga de datos
- **requirements.txt**: Dependencias Python necesarias para ejecutar el proyecto
- **templates/base.html**: Plantilla HTML base con estructura común (encabezado, navegación, pie)
- **templates/index.html**: Página principal que extiende la plantilla base
- **static/styles.css**: Estilos visuales, tema responsivo y accesibilidad
- **static/main.js**: Funcionalidad interactiva del cliente (navegación, animaciones)
- **data/content.json**: Datos del atlas (cronología, regiones, información general)

---

## Tecnologías Utilizadas

- **Python 3.8+**: Lenguaje de programación backend
- **Flask 2.3.3**: Framework web ligero y moderno
- **Jinja2**: Motor de plantillas para renderizar HTML dinámico
- **HTML5**: Estructura semántica y moderna de la aplicación web
- **CSS3**: Estilos avanzados, layout responsivo y diseño adaptativo
- **JavaScript (Vanilla)**: Lógica interactiva sin dependencias de frameworks externos
- **JSON**: Formato para almacenamiento de datos del atlas
- **Navegadores Modernos**: Compatible con Chrome, Firefox, Safari, Edge (versiones recientes)

---

## Instalación y Ejecución

### Requisitos Previos

- Python 3.8 o superior instalado
- pip (gestor de paquetes de Python)
- Git (para clonar el repositorio)

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ErikaGarcia-QE/World-Arms-Atlas.git
   cd World-Arms-Atlas
   ```

2. **Crear un entorno virtual (recomendado):**
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   ```

3. **Instalar dependencias:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Ejecutar la aplicación:**
   ```bash
   python app.py
   ```

5. **Acceder a la aplicación:**
   - Abre tu navegador y ve a: `http://localhost:5000`
   - La aplicación estará disponible en tiempo real con recarga automática

### Detener la Aplicación

Presiona `Ctrl + C` en la terminal para detener el servidor.

---

### Enfoque Histórico y Documental

Este proyecto presenta el armamento exclusivamente desde una perspectiva **histórica, cultural, arqueológica y académica**. El contenido está orientado a:

- Educación y formación académica
- Investigación histórica y cultural
- Contexto museográfico y patrimonial
- Análisis evolutivo de la tecnología en la historia

### Contenido Explícitamente Excluido

El proyecto **no incluye, no proporciona ni facilita**:

- Instrucciones de fabricación, modificación o ensamblaje
- Especificaciones técnicas operativas
- Información sobre rendimiento, capacidad destructiva o funcionalidad táctica
- Contenido que pueda utilizarse para propósitos operativos o nocivos
- Detalles que comprometan la seguridad o legalidad

El armamento se presenta como **patrimonio histórico**, objeto de estudio académico y fuente de conocimiento cultural.

---

## Accesibilidad

El proyecto está diseñado considerando principios de accesibilidad web:

- **Semántica HTML**: Uso correcto de etiquetas para mejor interpretación por lectores de pantalla
- **Contraste y Legibilidad**: Colores con suficiente contraste para usuarios con visión limitada
- **Navegación Intuitiva**: Estructura clara y coherente para facilitar la exploración
- **Responsabilidad**: Adaptabilidad a diferentes tamaños de pantalla y dispositivos
- **Descripción de Contenido**: Textos alternativos y descripciones para elementos visuales

Se busca garantizar que usuarios con diferentes capacidades puedan acceder y disfrutar del contenido educativo.

---

## Próximos Pasos (Roadmap)

- [x] Estructura base del proyecto
- [ ] Ampliar contenido histórico con más épocas y regiones
- [ ] Implementar sistema de búsqueda y filtros avanzados
- [ ] Agregar galerías de imágenes históricas
- [ ] Desarrollar timeline interactivo mejorado
- [ ] Integrar referencias académicas y bibliografía
- [ ] Optimizar rendimiento y velocidad de carga
- [ ] Mejorar funcionalidades de accesibilidad
- [ ] Expandir disponibilidad multiidioma
- [ ] Publicar en un entorno compatible con Python

---

## Despliegue y Publicación

Este proyecto está diseñado como una aplicación web Python ejecutada con **Flask**. Requiere un servidor que soporte Python y no puede publicarse directamente en GitHub Pages como un sitio estático.

Para desplegarlo en un entorno productivo, utiliza un servicio que soporte aplicaciones WSGI, como:

- **Heroku**
- **Render**
- **Fly.io**
- **PythonAnywhere**
- **Un servidor propio con Gunicorn / uWSGI**

En el entorno local, ejecuta la aplicación con:

```bash
python app.py --port 5000
```

Si quieres mantener una versión estática compatible con GitHub Pages, debes convertir el contenido a archivos HTML/CSS/JS sin backend Python.

---

## Licencia

Este proyecto está licenciado bajo la [Licencia Pública General de GNU v3.0](LICENSE). 

Consulta el archivo `LICENSE` para más detalles sobre los términos y condiciones de uso, distribución y modificación del proyecto.

---

## Contribuciones

Las contribuciones, sugerencias y mejoras son bienvenidas. Para participar en el desarrollo del proyecto, por favor:

1. Realiza un fork del repositorio
2. Crea una rama con tu mejora (`git checkout -b mejora/mi-aporte`)
3. Realiza commit de tus cambios (`git commit -m 'Agrego: descripción de cambios'`)
4. Push a la rama (`git push origin mejora/mi-aporte`)
5. Abre un Pull Request con descripción clara de los cambios

---

## Contacto y Soporte

Para preguntas, sugerencias o reportar problemas, utiliza la sección de **Issues** en este repositorio de GitHub.

---

**Atlas Histórico del Armamento** © 2026. Proyecto educativo dedicado a la preservación y difusión del conocimiento histórico.