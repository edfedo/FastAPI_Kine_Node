![Logo](https://github.com/edfedo/FastAPI/blob/main/Documentos/Front_b.jpg)

------------
[-] **Degree:** Tecnicatura Superior en Ciencia de Datos e Inteligencia Artificial.

[-] **Institution:** Politécnico Malvinas Argentinas.  https://politecnico.tdf.gob.ar/

[-] **Subject:** Desarrollo de Sistemas de IA

[-] **Year:** 2024

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=edfedo" alt="Vistas de perfil" />
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" />
  </a>
</p>

------------

[-] **Developed by:** Federico D'Oliveira

[-] **Project support:** Martin Mirabete

[-] **Project video:**

- Por favor usar vlc para ver el video, o actualizar codecs en caso de no poder verlo o escuchar el sonido (Sigue el link y click View raw, esto descargara el video)

<p align="left">
    <a href="https://github.com/edfedo/FastAPI/blob/main/Documentos/Video_TP_V2_simplescreenrecorder-2024-07-18_00.21.25.mp4">
    <img src="https://img.shields.io/badge/Link_Project_Hotelero_Video-277D24?style=for-the-badge&logo=github&logoColor=white" alt="Project" />
  </a>
</p>

------------

[-] **Project.description:**

**Descripción del Proyecto:** Sistema Experto para el Diagnóstico de Lesiones del Hombro en Tierra 
del Fuego

**Objetivo del Trabajo**

El objetivo del proyecto es desarrollar un sistema experto basado en aprendizaje automático que 
permita diagnosticar y sugerir tratamientos para las lesiones del hombro más comunes en Tierra del 
Fuego. Este sistema experto será capaz de identificar afecciones como la Tendinitis del manguito 
rotador, el Desgarro del manguito rotador, la Luxación de hombro, la Bursitis de hombro, la 
Capsulitis adhesiva (hombro congelado), la Artrosis del hombro y el Pinzamiento subacromial. Con 
este sistema, los profesionales médicos podrán obtener diagnósticos preliminares en base a los 
síntomas que reporten los pacientes, facilitando el acceso a una atención más precisa y rápida, 
especialmente en áreas remotas donde los especialistas no están siempre disponibles.

------------

[-] **Instalación del Servicio de FastApi para poder ejecutar el Sistema Experto**

**1-** ejecutar simbolo de sistemas como administrador

**2-** ir hastala direccion de descarga:

ej: C:\Users\lenovo\Downloads\FastAPI>

**4-** ejecutamos el comando para windows: 

```bash
python -m venv fastapi-env
```

**5-** Ya creado el entorno, hay q activarlo: 

```bash
fastapi-env\Scripts\activate
```

**6-** si todo sale bien, en el promp tendras algo asi: 

(fastapi-env) C:\Users\lenovo\Downloads\FastAPI>

**7-** ahora hay q hacer las instalaciones para q funcione fastapi

**8-** ir a: fastapi.tiangolo.com --> buscar los comandos!!!!

```bash
pip install "fastapi[standard]"
```

```bash
pip install "uvicorn[standard]"
```

**9-** Instalamos nodejs desde https://nodejs.org/en

**9-** desde nuestra ruta en la consola, en mi caso:

(fastapi-env) C:\Users\lenovo\Downloads\GIT_Politecnico\FastAPI_Kine_Node>

Ejecutamos los siguientes comandos en este orden:

cd frontend

cd frontend

npm install

npm start (se nos abre el chrome en la ruta http://localhost:3000/)

**10-** ahora abrir vscode --> Abrir la carpeta completa "FastAPI"

**11-** seleccionar el archivo "main.py" y abrir la consola "Terminal"

**12-** Levantar el servidor:

Ejecutar el siguiente comando: 

```bash
uvicorn main:app --reload
```

**13-** Por defecto tendria que cargar el servicio en la direccion IP:

```bash
http://127.0.0.1:8000
```

**14-** Poner la direccion IP junto con el Numero de puerto en el navegador, esta ruta es un localhost,
por ende tambien es lo mismo poner localhost:8000.
Con esto ya tendria que abrir la Interfaz del Sistema Experto

![Logo](https://github.com/edfedo/FastAPI/blob/main/Documentos/screen_ejemplo.png)

-------------------------
-------------------------
------------

Project Organization

------------
    /
    ├── Documentos/                        <- Documentación y archivos de referencia
    │   ├── README.md                      <- Descripción general del proyecto
    │   ├── Instalacion_fastapi.txt        <- Instrucciones de instalación
    │   ├── postman.txt                    <- Ejemplos de uso en Postman
    │   └── FastAPI_Final_Federico_DOliveira_V3.zip  <- Archivo comprimido con proyecto final
    ├── experto_general/                   <- Código y lógica principal del sistema experto
    │   ├── acciones.py                    <- Archivo principal de acciones
    │   ├── acciones copy.py               <- Copia de respaldo de acciones
    │   ├── main.py                        <- Archivo principal del sistema experto
    │   ├── main_BK_MAIN_OK_FUNCA.py       <- Versión funcional del sistema
    │   ├── main_BK_ORIGINAL_FASTapi.py    <- Versión original para FASTAPI
    │   ├── main_BK_SE_ORIGINAL.py         <- Otra versión del sistema
    │   └── cli.py                         <- Interfaz de línea de comandos
    ├── fastapi-env/                       <- Entorno y dependencias de FastAPI
    │   ├── Pipfile                        <- Archivo de dependencias (Pipenv)
    │   └── Pipfile.lock                   <- Archivo de bloqueo de dependencias
    ├── interfaz/                          <- Archivos de la interfaz y elementos visuales
    │   └── static/                        <- Archivos estáticos para la interfaz
    ├── _pycache_/                         <- Archivos temporales de caché
    ├── data/                              <- Base de conocimiento y archivos de datos
    │   ├── Base_kine_v1.json              <- Versión 1 de la base de datos
    │   ├── Base_kine_v2.json              <- Versión 2 de la base de datos
    │   ├── base_conocimiento.json         <- Base de conocimiento principal
    │   ├── example.json                   <- Archivo de ejemplo
    │   └── medios_cultivo_BK_ORIGINAL.json <- Medios de cultivo (backup original)
    └── .gitignore                         <- Configuración de archivos a ignorar en Git

------------
-------------------------
-------------------------
[-] **Languages ​​and Tools**

<div id="header" align="left">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
</a>
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" />
</a>
<img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" />
</a>  
<img src="https://img.shields.io/badge/fastapi-109989?style=for-the-badge&logo=FASTAPI&logoColor=white" />
</a>  
<img src="https://img.shields.io/badge/machine learning-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" />
</a>
<img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
</a> 
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
</a>
<img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" />
</a>  
</div>

------------

<p align="left">
    <a href="https://github.com/alexandresanlim/Badges4-README.md-Profile#-contact-">
    <img src="https://img.shields.io/badge/Badges_4_README_Profile-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="Badges 4 README Profile" />
  </a>
</p>

------------

# sistema-experto-python
Sistema experto en Python

## Instalación

Utilizar [`pipenv`](https://pipenv.pypa.io)

```bash
pipenv install
```

## Ejecutar

```bash
pipenv run main.py
```
Explicación de la Implementación con FastAPI
Creación de la aplicación: La línea app = FastAPI() crea una instancia de FastAPI, que funciona como la aplicación web principal. Con FastAPI, definimos rutas y funciones de respuesta para gestionar las solicitudes HTTP.

Definición de rutas y modelos:

@app.get("/"): Ruta para la solicitud GET en la raíz, que devuelve el archivo HTML de la interfaz del chatbot.
@app.post("/next-question"): Ruta POST para manejar las respuestas del usuario y avanzar al siguiente síntoma. Esta ruta utiliza el modelo UserResponse, definido con Pydantic (BaseModel), para asegurar que la respuesta del usuario tenga la estructura correcta.
Manejo de la lógica de inferencia: FastAPI procesa las solicitudes a través de las funciones vinculadas a las rutas (@app.get, @app.post). La función next_question usa el estado global (user_state) para almacenar el progreso del usuario, permitiendo que el chatbot avance secuencialmente por cada síntoma y entrada en la base de conocimiento.

Respuesta JSON: FastAPI convierte automáticamente los diccionarios devueltos ({"diagnosis": diagnosis} o {"question": next_question}) en respuestas JSON, facilitando la interacción entre el frontend (JavaScript) y el backend.

Este código es una implementación de un sistema de inferencia secuencial donde se ejecuta un motor de preguntas en base a una lista de síntomas predefinida y ofrece un diagnóstico cuando se cumplen todos los síntomas de una entrada en la base de conocimiento.
