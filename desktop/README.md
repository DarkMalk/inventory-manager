# App QR

## Descripción

Esta aplicación esta pensada para ser utilizada en los equipos para recuperar los datos como hostname, ip, número de serie, marca y modelo, esto nos permite realizar un inventario mas rápido ejecutando la aplicación y escaneando el QR para recuperar los datos, es compatible con `Mac` y `Windows`

## Características

- Gestión de productos
- Generación de informes
- Interfaz amigable y fácil de usar

## Como empezar a desarrollar

Para empezar a desarrollar puedes crear un entorno virtual utilizando el siguiente comando

```bash
python3 -m venv .venv
```

luego activamos este entorno virtual con el comando `source`

```bash
source .venv/bin/activate
```

Una vez tengamos el entorno virtual activo, procedemos a instalar las dependencias utilizando el archivo `requirements.txt` que se encuentra en el proyecto y el comando `pip`

```bash
pip install -r requirements.txt
```

ya teniendo los pasos anteriores, podemos ejecutar el proyecto desde el punto de entrada, el cual corresponde al archivo `main.py`

```bash
python main.py
```

## Build

Para compilar a un ejecutable debes instalar las dependencias entre las cuales se encuentra `Pyinstaller`, puedes utilizar el archivo `requirements.txt` para obtener todas las dependencias necesarias del proyecto.

Puedes utilizar el siguiente comando para instalar las dependencias

```bash
pip install -r requirements.txt
```

Una vez instalado todas las dependencias, en la terminal realizamos el siguiente comando, el cual en la carpeta `dist` que generara automáticamente una vez finalizado el comando, dispondremos del ejecutable correspondiente para nuestro sistema.

```bash
pyinstaller -F -w -n app_qr main.py
```
