---
title: Botones de compartir con redes sociales en Gatsby JS
slug: botones-de-compartir-con-redes-sociales-en-gatsby-js
author: Franco Morales C
date: 2018-08-23
hero: ./images/gatsby-logo.png
excerpt: Actualmente para cualquier sitio que administre contendido se hace necesario el permitir que estas publicaciones puedan ser compartidas mediante redes sociales y así poder aumentar las visualizaciones.
category: Laboratorios
tags: [Gatsby JS, Programacion, Developer, Desarrollador, React, Redes Sociales, Web, react-share]
---

Actualmente para cualquier sitio que administre contenido se hace necesario el permitir que estas publicaciones puedan ser compartidas mediante redes sociales y así poder aumentar las visualizaciones.

Realizando la búsqueda de alternativas para esta labor y que sean soportadas por Gatsby JS (generador de sitios estáticos basado en React), he encontrado react-share (entre otras más) y quiero compartir el cómo poder implementar este plugin.

El escenario en el que implementare la solución es un sitio básico con contenido generado a partir de archivos Markdown.

Lo primero será instalar el plugin en nuestro proyecto y esto lo realizaremos ejecutando la instrucción.

**npm install react-share –save**

Antes de continuar, es necesario poder definir cómo y dónde agregaremos los “botones” de compartir y en este caso crearemos un componente que contenga todas las redes sociales y los Props necesarios para cada una de estas.

En el directorio /src/components crearemos el componente que este caso llamaremos compartirPost.js y escribiremos el siguiente código inicial.

```jsx
import React, { Component } from 'react'; 
import PropTypes from 'prop-types';  

class compartirPost extends Component { 
  render() { 
    return ( 
      <div> 
      </div> 
    ); 
  } 
} 

compartirPost.propTypes = { 

}; 

export default compartirPost; 
```

Este será el código base del componente que crearemos. A continuación, iremos agregando de a poco los códigos dentro del componente para así explicar cada parte.

Primero crearemos los Props del componente, los que sean necesarios para las redes sociales que necesitemos (en este ejemplo Facebook y Twitter). De acuerdo al caso planteado necesitaremos la Url, el Titulo y el Resumen (descripción) del post que será compartido, lo haremos escribiendo el siguiente código.

```jsx
compartirPost.propTypes = { 
  Url: PropTypes.string, 
  Titulo: PropTypes.string, 
  Resumen: PropTypes.string 
}; 
```

Ahora importaremos los componentes para cada red social desde el plugin react-share, pero antes de hacerlo cabe mencionar que en la descripción del plugin descrita en su repositorio (link compartido al final) especifica los componentes necesarios para cada red social.

En el caso de Facebook utilizaremos los siguientes:

- **FacebookShareButton**
    * Props: url (dirección del post) y quote (descripción que puede ser la concatenación del título más el resumen).

- **FacebookIcon**
    * Props: round (en caso de que queramos que la presentación del icono sea redonda) y size (para poder definir el tamaño del icono).

Y para el caso de Twitter utilizaremos

- **TwitterShareButton**
    * Props: url (dirección del post) y title (título del post que se compartirá).

- **TwitterIcon**
    * Props: round (en caso de que queramos que la presentación del icono sea redonda) y size (para poder definir el tamaño del icono).

Para realizar la importación escribiremos al principio del código.

```jsx
import React, { Component } from 'react'; 
import PropTypes from 'prop-types'; 
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share'; 

Finalmente escribiremos lo necesario para poder mostrar los botones de compartir.

class compartirPost extends Component { 
  render() { 
    return ( 
      <div> 
        <FacebookShareButton url={this.props.Url} quote={`${this.props.Titulo} - ${this.props.Resumen}`}>  
          <FacebookIcon round size={32} />  
        </FacebookShareButton>  
        <TwitterShareButton url={this.props.Url} title={this.props.Titulo}> 
          <TwitterIcon round size={32} />  
        </TwitterShareButton> 
      </div> 
    ); 
  } 
} 
```

Listo, el componente con los botones para compartir en las redes sociales Facebook y Twitter está listo y el código completo seria.

```jsx
import React, { Component } from 'react'; 
import PropTypes from 'prop-types'; 
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share'; 

class compartirPost extends Component { 
  render() { 
    return ( 
      <div> 
        <FacebookShareButton url={this.props.Url} quote={`${this.props.Titulo} - ${this.props.Resumen}`}>  
          <FacebookIcon round size={32} />  
        </FacebookShareButton>  
        <TwitterShareButton url={this.props.Url} title={this.props.Titulo}>
          <TwitterIcon round size={32} />  
        </TwitterShareButton> 
      </div> 
    ); 
  } 
} 

compartirPost.propTypes = { 
  Url: PropTypes.string, 
  Titulo: PropTypes.string, 
  Resumen: PropTypes.string 
}; 

export default compartirPost; 
```

Solo basta con llamar el componente desde la página que lo requiramos y asignar los valores a los Props.

```jsx
... 
import CompartirPost from '../components/compartirPost'; 
... 
<CompartirPost Url={url_del_post} Titulo={titulo_del_post} Resumen={resumen_del_post} /> 
...
```

De este modo deberiamos visualizar los botonos como se muestra en la siguiente imagen.

Otra característica de este plugin es que en algunas redes sociales es posible mostrar la cantidad de veces que el post ha sido compartido, y para poder saber cómo hacer uso de esto se adjunta el link del plugin al final donde se encuentra mayor información.

**ResultadoRedesGatsby**
<div className="Image__Small">
  <img
    src="./images/ResultadoRedesGatsby.png"
  />
</div>

**Links de apoyo**
* Gatsby: https://www.gatsbyjs.org/
* React-share: https://www.npmjs.com/package/react-share