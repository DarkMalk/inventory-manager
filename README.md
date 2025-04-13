# Inventory QR Desktop And Web

## previews

![inventory-manager-web-preview](./preview/inventory-manager.webp)

## Descripción del Proyecto

Este proyecto surge como una solución para optimizar y mejorar la eficiencia del proceso de inventario en un centro médico. Actualmente, el registro y gestión de los equipos informáticos se realiza de manera manual, lo que puede ser propenso a errores y consumir mucho tiempo. Para resolver este problema, se ha desarrollado una aplicación de escritorio compatible con Windows y macOS, que genera un código QR con los datos relevantes de cada equipo, incluyendo hostname, dirección IP, número de serie, marca y modelo.

Complementando esta aplicación, se ha creado una página web que permite escanear los códigos QR generados y agregar automáticamente los datos a una tabla, facilitando su consulta y administración. La interfaz web incluye funcionalidades de filtrado para buscar equipos de manera rápida y eficiente según distintos criterios, como hostname, IP, número de serie, marca y modelo.

Este sistema no solo agiliza el proceso de inventario, sino que también reduce el margen de error y mejora la trazabilidad de los equipos dentro del centro médico.

## Tecnologías utilizadas

El proyecto está desarrollado con un enfoque en eficiencia y facilidad de uso, utilizando las siguientes tecnologías:

- Aplicación de Escritorio:

  - Lenguaje: Python 3.13
  - Interfaz Gráfica: Tkinter

- Aplicación Web:
  - Lenguaje: Typescript
  - Framework Frontend: React
  - Componentes UI: Reactstrap (Bootstrap)
  - Gestión de Estado: Zustand
