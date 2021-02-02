---
title: Un poco de DOS (no, no el antiguo sistema de Microsoft)
slug: un_poco_de_dos
author: Guido Cuello
date: 2018-09-05
hero: ./images/DDOS.jpg
excerpt: En estos tiempos, la importancia de mantener un buen servicio de infraestructura, es algo mucho más que obligatorio.
category: Articulos
tags: [GNU/Linux, ddos, dos, hping3, nping, redes]
---
En estos tiempos, la importancia de mantener un buen servicio de infraestructura, es algo mucho más que obligatorio, ya que de alguna forma, el comportamiento humano de hacer algunas cosas, han descansado mucho en la tecnología incorporándola a nuestras vidas en un alto nivel. Esto a la larga, obliga a mantener lo mejor que se pueda, con los medios que se puedan tener en el momento.

Parte de las grandes preocupaciones de un administrador de Sistemas o DevOps, son los ataques cibernéticos a la infraestructura tecnológica. Y es que en la actualidad, pueden ser ataques por ocio, o simplemente el opacamiento por parte de un competidor hacia nosotros.

Dentro de los top de ataques que interrumpen servicios, podemos destacar uno que va por lejos; el DOS o DDOS.

La denegación de servicio (DOS – Denied Of Service) es un ataque a un sistema de computadoras o red que causa que un servicio o recurso sea inaccesible a los usuarios legítimos. Normalmente provoca la pérdida de la conectividad con la red por el consumo del ancho de banda de la red de la víctima o sobrecarga de los recursos computacionales del sistema atacado, mientras que el DDOS, no es nada más que la amplificación del mismo DOS, pero contando con la colaboración de más equipos terminales haciendo sólo más aguda la situación.

En esta oportunidad, hablaremos de Hping3, la que se define como una aplicación más avanzada que nos va a permitir modificar los paquetes que se envían a través del protocolo TCP/IP de manera que podamos disponer de un control mucho mayor de estos paquetes, pudiendo adaptarlos en función de nuestras necesidades.

Hping3 es una aplicación de terminal para Linux que nos va a permitir analizar y ensamblar fácilmente paquetes TCP/IP. A diferencia de un Ping convencional que se utiliza para enviar paquetes ICMP, esta aplicación permite el envío de paquetes TCP, UDP y RAW-IP.

Existen otras como Nping, pero eso para otro post.

**¿Como descargar Hping3?**

Si trabajas por el lado de Debian y sus amigos en GNU/Linux, entonces saca tu consola y tipea lo siguiente (como superuser/root) :

```
apt-get install hping3 
```

Comandos Hping3:

El clásico:

```
hping3 --rand-source --flood 192.168.1.1
```

Donde :

--rand-source: Para anonimizar la provenencia del host atacante.(mediante spoofing).

-- flood: para la “inundación” de paquetes en tiempo real hacia la ip 192.168.1.1.

Existe una gran variedad de alternativas para el uso de hping3 (incluso puede ser configurada en Windows), pero la tarea de ustedes es ver que otras opciones existen para la utilización de de esta desagradable variante del tan utilizado ping.

Importante: Usar siempre bajo ambientes de pruebas. Si lo haces a un host/server no preparado para este ataque, podria tener consecuencias.