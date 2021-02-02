import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";

function NotFoundPage() {
  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: "100px" }}>
            <Headings.h1>About</Headings.h1>
            <p style={{ marginTop: '10%', marginLeft: '5%', marginRight: '5%' }}>
            novaSapiens es el concepto de nuevos pensadores, otorgando la oportunidad de compartir las competencias adquiridas en el tiempo o nuestras opiniones. Somos “Sapiens" con ganas de aprender y entregar esos conocimientos, todo esto nos ha llevado a generar un lugar donde podamos realizar publicaciones en distintos rubros y en forma de análisis, laboratorios y artículos; permitiendo de este modo que podamos ayudar en el crecimiento de la comunidad de Internet y al mismo tiempo nuestra, pues con esta responsabilidad de publicar en un entorno público y de fácil acceso, nos compromete entregar cada día un contenido de mejor calidad.
            </p>
            <p style={{ marginTop: '5%', marginLeft: '5%', marginRight: '5%' }}>
                Somos novaSapiens.
            </p>
        </div>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;
