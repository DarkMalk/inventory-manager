# Aplicación Web - QR Inventory

Esta aplicación web está diseñada para optimizar y mejorar la eficiencia en la gestión de inventarios de equipos computacionales. Funciona como un complemento de la aplicación de escritorio disponible en el mismo repositorio.

La aplicación permite recuperar datos escaneando el código QR generado por la aplicación de escritorio, agregando automáticamente la información a una tabla. Además, ofrece funcionalidades avanzadas de filtrado para facilitar la organización y búsqueda de datos específicos. Cuenta con una interfaz sencilla e intuitiva que facilita su uso para cualquier usuario.

## Requisitos

- Node.JS: v22.11.0 (recomendado)
- pnpm

## Iniciar servidor de desarrollo

Para empezar a desarrollar nos clonamos el repositorio utilizando el comando `gh` o `git`

```bash
gh repo clone DarkMalk/inventory-manager
```

```bash
git clone https://github.com/DarkMalk/inventory-manager.git
```

Nos dirigimos a la carpeta de la aplicación web utilizando el comando `cd`

```bash
cd inventory-manager/web
```

Instalamos las dependencias del proyecto utilizando `pnpm` o `npm`

```bash
pnpm install
```

```bash
npm install
```

Una vez instaladas las dependencias podemos utilizar el script `dev` para inicializar el servidor de desarrollo

```bash
pnpm run dev
```

```bash
npm run dev
```

## Preview

![Preview Web](/preview/inventory-manager.webp)
