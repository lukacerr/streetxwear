![logo](https://i.imgur.com/l1WZbFb.png)

https://streetxwear.netlify.app/

# STREETXWEAR

## Interacciones con el cliente

_Apuntando al directorio del cliente usando `cd client`._

### _**Iniciar cliente debug (Vitejs):**_

```
npm run dev
```

### _**Generar build:**_

```
npm run build
```

### _**Ejecución de la build local:**_

```
npm run preview
```

_Se requiere haber generado la build previamente._

---

## /database

En esta carpeta se encuentran scripts que utilicé para cargar datos más rápido. Nada importante y relevante al funcionamiento de la app.

---

## Stack (librerías/paquetes/tooling utilizad@/s)

- React 17.0.2 (main app framework)
- Vite 2.7.2 (set up & tooling)
- Firebase 9.6.6 (Firestore database)
- React Router DOM 6.2.1 (routing)
- React Loader Spinner 5.1.2 (spinners de carga)
- React Icons 4.3.1 (icon assets)
- Darkreader 4.9.44 (dark theme automático)
- Dayjs 1.10.7 (manipulación de datetimes)
- Tailwind 3.0.16 (CSS framework)
- SASS 1.49.0 (CSS preprocessor)

## Bugs/TODOs pendientes (a conciencia)

- Faltan muchos estilos... demasiados
- El menú hamburguesa (en resoluciones mobile) no funciona (no es un bug, simplemente no está hecho)
- La página de "Contacto" está creada (incluyendo path en el router y botón el la navbar) pero quedó vacía/sin hacer (de todas formas no hubiese tenido nada de lógica, sería una simple página con información 100% hardcodeada)
