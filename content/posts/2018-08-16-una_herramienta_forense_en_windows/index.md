---
title: Una herramienta forense en Windows (No todo es GNU/Linux)
slug: una-herramienta-forense-en-windows-no-todo-es-gnu-linux
author: Guido Cuello
date: 2018-08-16
hero: ./images/DiplomadoMX.png
excerpt: Cuando se necesita y se piensa en hacer actividades forenses a un equipo, normalmente se piensa en GNU/Linux y sus distribuciones por excelencia (Kali, Parrot y Cyborg) para realizar dichas tareas, casi de forma inmediata.
category: Laboratorios
tags: [forense, dawf, seguridad, GNU/Linux, linux, windows]
---

Cuando se necesita y se piensa en hacer actividades forenses a un equipo, normalmente se piensa en GNU/Linux y sus distribuciones por excelencia (Kali, Parrot y Cyborg) para realizar dichas tareas, casi de forma inmediata.

Pues, mirando por internet algunas novedades y herramientas para realizar este tipo de procedimiento, he encontrado una gran aplicación de botón gordo (conotación a una aplicacion que no se hace mas que apretar un boton grande en la pequeña interfaz gráfica de la misma), la que permite una serie de busquedas exhausitivas del equipo en lo que respecta a su informacion básica de los componentes de hardware que posee, hasta los procesos y aplicaciones alojadas en las diversas memorias cache y ram. Dicha aplicacion corre sin ningun problema en los sistemas operativos Windows y la evidencia la deja en los directorios de la aplicación, cuando esta es descomprimida.

Procedo a compartir el link de descarga y la referencia al sitio de los amigos de la comunidad DragonJar, con su aplicacion DAWF.

**https://www.dragonjar.org/dawf-dragonjar-automatic-windows-forensic.xhtml**

**[DAWF - Link Mega](https://goo.gl/2o3ZTL)**

**Observacion_1:** Quizá deba bajar su antivirus para que esta herramienta pueda tener un buen funcionamiento (ya que en algunas bases es reconocida como malware).

**Observacion_2:** Lo primero que debe hacer para usarla, es registrar el componente ActiveX llamado COMCTL32.OCX.

**Observacion_3:** Debe correr la aplicacion con permisos de administrador.

**Para activar:**

**1.- Entre a su shell en windows (cmd).**

**2.- Luego en la linea de comandos (c:\regsvr32.exe C:"Ruta donde descargó el archivo"\COMCTL32.OCX)**