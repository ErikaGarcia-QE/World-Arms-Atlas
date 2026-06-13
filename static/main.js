/* ========================================
   Atlas Histórico del Armamento - Script Principal
   ======================================== */

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    inicializarNavegacion();
    inicializarInteractividad();
    console.log('Aplicación Flask cargada correctamente');
});

/* ========================================
   NAVEGACIÓN Y SCROLL
   ======================================== */

/**
 * Inicializa la navegación suave del sitio
 */
function inicializarNavegacion() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Scroll suave a la sección
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Resalta el link activo
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Actualiza el link activo cuando se hace scroll
    window.addEventListener('scroll', actualizarNavActiva);
}

/**
 * Actualiza el link activo de la navegación según la sección visible
 */
function actualizarNavActiva() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

/* ========================================
   INTERACTIVIDAD
   ======================================== */

/**
 * Inicializa elementos interactivos del sitio
 */
function inicializarInteractividad() {
    // Agregar interactividad a las tarjetas de regiones
    const regionCards = document.querySelectorAll('.region-card');
    regionCards.forEach(card => {
        card.addEventListener('click', function() {
            handleRegionCardClick(this);
        });

        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleRegionCardClick(this);
            }
        });
    });

    // Agregar interactividad a los elementos de cronología
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        animarElementoAlVer(item);
    });

    // Detectar cuando los elementos entran en viewport
    observarElementos();
}

/**
 * Maneja el clic en tarjetas de región
 */
function handleRegionCardClick(card) {
    const titulo = card.querySelector('h3').textContent;
    const descripcion = card.querySelector('p').textContent;

    console.log('Región seleccionada:', titulo);
    console.log('Descripción:', descripcion);

    // Destacar la tarjeta
    card.classList.toggle('selected');
    
    // Remover selección de otras tarjetas si es única selección
    const otrasCards = document.querySelectorAll('.region-card');
    otrasCards.forEach(c => {
        if (c !== card) {
            c.classList.remove('selected');
        }
    });
}

/**
 * Anima elementos cuando entran en el viewport
 */
function observarElementos() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Anima un elemento cuando es visible
 */
function animarElementoAlVer(elemento) {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(elemento);
}

/* ========================================
   API CALLS
   ======================================== */

/**
 * Obtiene datos del servidor mediante API
 */
function obtenerDatosAPI(endpoint) {
    return fetch(`/api/${endpoint}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
            return null;
        });
}

/**
 * Carga datos dinámicamente
 */
async function cargarDatosDinamicos() {
    try {
        const datos = await obtenerDatosAPI('datos');
        if (datos) {
            console.log('Datos cargados del servidor:', datos);
            // Procesar datos según sea necesario
        }
    } catch (error) {
        console.error('Error al cargar datos dinámicos:', error);
    }
}

/* ========================================
   UTILIDADES
   ======================================== */

/**
 * Función auxiliar para log en consola
 */
function log(mensaje, tipo = 'info') {
    console.log(`[${tipo.toUpperCase()}] ${mensaje}`);
}

/**
 * Maneja errores globales
 */
window.addEventListener('error', function(event) {
    console.error('Error capturado:', event.error);
});

/* ========================================
   EVENTO DE CARGA COMPLETA
   ======================================== */

window.addEventListener('load', function() {
    console.log('Todas las imágenes y recursos se han cargado');
});
