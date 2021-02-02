---
title: Virtualización en contenedores y mis ambientes de desarrollo
slug: virtualizacion-en-contenedores-y-mis-ambientes-de-desarrollo
author: Franco Morales C
date: 2018-09-10
hero: ./images/contenedores.jpg
excerpt: Como el concepto de virtualización en contenedores me ha permitido crear ambientes de desarrollo que puedo compartir con mis pares y no tener diferencias... Se acabo el “a mi me funciona”.
category: versionesSapiens
tags: [Virtualización, Contenedores, DevOps, Desarrollo, Developer, Opensource, Docker]
---

Si bien la virtualización basada en contenedores no es nueva, hoy tengo la oportunidad de utilizarla y poder comentar mi opción acerca de su uso y beneficios.

Primero indicar que la virtualización basada en contenedores consiste en el empaquetado de aplicaciones virtualizando solo lo necesario para este requerimiento, servicios, configuraciones, aplicaciones, etc. Y se despliega sobre el mismo sistema operativo evitando el consumo excesivo de los recursos del host, no como lo hace una virtualización “tradicional” que considera al sistema operativo, los servicios, las configuraciones y la aplicación. Esto trae bastantes beneficios, entre los cuales puedo destacar la portabilidad y la sencilla implementación de ambientes de desarrollo y producción, un mejor trabajo entre pares y además de graficar plenamente el concepto de micro servicios. (explicación muy superficial)

Herramientas que permiten esta tipo de virtualización hay muchas en el mercado, personalmente utilizo Docker y esta disponible para las plataformas Windows, Mac y GNU/Linux y en algunos sistemas de servicio en la nube. Para mas historia sobre Docker te recomiendo leer lo que se encuentra en Wikipedia.

Actualmente utilizo Docker para poder desplegar mis ambientes de desarrollo y poder compartir de este modo las mismas configuraciones con mi equipo de trabajo o compañeros a modo de poder “sufrir” los mismos eventos, no caer en esas típicas frases como: “a mi si me funciona” y focalizar los esfuerzos. Demás esta decir que es ideal cuando necesitamos desplegar nuestras aplicaciones en plataformas que no cuentan con ningún tipo de servicio configurado, en este caso basta con instalar Docker y desplegar nuestro contenedor.

Ahora, esto es solo un caso del como hoy yo utilizo la virtualización basada en contendores y como me ha traído beneficios, pero hay muchas cosas y conceptos que circunda a esto, las posibilidades y las herramientas disponibles.

En la misma pagina de Docker describen el concepto de contendores (https://www.docker.com/resources/what-container) y la ser opensource están los links a sus códigos (https://www.docker.com/community/open-source) escritos en Go, además aquí puedes encontrar bastantes imágenes (https://hub.docker.com/) para comenzar con tus proyectos.

Intentare ir publicando ejemplos del como utilizamos los contenedores para los ambientes de desarrollo y como se podrían empaquetar para la distribución de aplicaciones e ir mejorando los problemas que suelen existir entre ambientes.
