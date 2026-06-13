"""
Atlas Histórico del Armamento
Aplicación web educativa y documental sobre la evolución del armamento en la historia.

Desarrollado con Flask - Framework web ligero para Python
"""

from flask import Flask, render_template, jsonify, send_from_directory
import json
import os

# Inicializar la aplicación Flask
app = Flask(__name__)

# Configuración
app.config['ENV'] = 'development'
app.config['DEBUG'] = True

# ========================================
# CARGAR DATOS
# ========================================

def cargar_datos():
    """
    Carga los datos del atlas desde el archivo JSON
    """
    try:
        ruta_datos = os.path.join(os.path.dirname(__file__), 'data', 'content.json')
        with open(ruta_datos, 'r', encoding='utf-8') as archivo:
            return json.load(archivo)
    except FileNotFoundError:
        print("Advertencia: Archivo de datos no encontrado")
        return {
            "cronologia": [],
            "regiones": [],
            "acerca_de": {}
        }

# ========================================
# RUTAS
# ========================================

@app.route('/')
def index():
    """
    Ruta principal - Página de inicio
    """
    datos = cargar_datos()
    return render_template('index.html', datos=datos)

@app.route('/api/cronologia')
def obtener_cronologia():
    """
    API REST - Obtener datos de cronología
    """
    datos = cargar_datos()
    return jsonify(datos.get('cronologia', []))

@app.route('/api/regiones')
def obtener_regiones():
    """
    API REST - Obtener datos de regiones
    """
    datos = cargar_datos()
    return jsonify(datos.get('regiones', []))

@app.route('/api/datos')
def obtener_todos_datos():
    """
    API REST - Obtener todos los datos del atlas
    """
    datos = cargar_datos()
    return jsonify(datos)

@app.route('/acerca-de')
def acerca_de():
    """
    Página acerca de
    """
    datos = cargar_datos()
    return render_template('index.html', datos=datos, seccion='acerca-de')

@app.route('/favicon.ico')
def favicon():
    """
    Responder favicon de forma segura para evitar errores 404 del navegador.
    """
    return '', 204

# ========================================
# MANEJO DE ERRORES
# ========================================

@app.errorhandler(404)
def pagina_no_encontrada(error):
    """
    Maneja errores 404 - Página no encontrada
    """
    return render_template('404.html'), 404

@app.errorhandler(500)
def error_servidor(error):
    """
    Maneja errores 500 - Error del servidor
    """
    return render_template('500.html'), 500

# ========================================
# FUNCIONES AUXILIARES
# ========================================

@app.template_filter('title_case')
def filtro_title_case(s):
    """
    Filtro Jinja2 para convertir texto a título
    """
    return s.title() if s else ""

@app.context_processor
def inyectar_datos_globales():
    """
    Inyecta datos globales a todas las plantillas
    """
    return {
        'titulo_app': 'Atlas Histórico del Armamento',
        'año_actual': 2026,
        'version': '1.0.0'
    }

# ========================================
# PUNTO DE ENTRADA
# ========================================

if __name__ == '__main__':
    """
    Ejecuta el servidor de desarrollo de Flask.

    Se puede definir el puerto con la variable de entorno PORT
    o mediante el parámetro de línea de comandos --port.
    """
    import argparse

    parser = argparse.ArgumentParser(description='Iniciar Atlas Histórico del Armamento')
    parser.add_argument('--port', type=int, default=None, help='Puerto donde se ejecutará la aplicación')
    args = parser.parse_args()

    port = args.port or int(os.environ.get('PORT', 5000))

    print(f"Iniciando servidor en http://0.0.0.0:{port}")
    app.run(
        host='0.0.0.0',
        port=port,
        debug=True,
        use_reloader=True
    )
