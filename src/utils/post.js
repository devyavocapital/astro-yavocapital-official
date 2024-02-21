const styles = `<style>
  .container > h1 {
    color: #f9a400;
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    padding: 10px 0 7.5px 0;
  }
  .subtitle {
    font-size: 12px;
    font-style: italic;
    color: #737373;
    text-align: center;
  }
  p {
    width: 80%;
    margin: 0 auto;
    padding: 5px 0 5px 0;
  }
  .list {
    width: 60%;
    margin: 0 auto;
    padding: 5px 0 5px 0;
  }
  .list > li > span {
    color: #f9a400;
  }
  div > h2 {
    color: #f9a400;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    padding: 5px 0 5px 0;
  }
  div > .user {
    width: 80%;
    display: grid;
    margin: 0 auto;
    > p {
        font-size: 10px;
        margin: auto;
    }
    > :nth-child(2) {
        color: #f9a400;
        font-weight: bold;
    }
    > :nth-child(3) {
        text-align: center;
    }
    > :nth-child(4) {
        text-align: center;
    }
    > :nth-child(4) > span {
      color: #f9a400;
      font-weight: bold;
    }
  }
  div > .avatar {
    background: #e1e1e1;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 10px;
  }
  div > .user {
    display: flex;
  }
  .link {
    color: #f9a400;
    border-bottom: 2px solid #f9a400;
  }

  @media (min-width: 768px) {
    div > .imgPost,
    video {
      width: 80%;
      height: auto;
      border-radius: 5px;
      margin: 10px auto;
      box-shadow: 8px 5px 18px -3px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 8px 5px 18px -3px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 8px 5px 18px -3px rgba(0, 0, 0, 0.75);
    }
    div > .user {
      > p,
      ul {
        font-size: 12px;
      }
    }
  }
  @media (min-width: 1024px) {
    p {
      width: 60%;
    }
    .list {
      width: 50%;
    }
    div > .user > p {
      font-size: 15px;
    }
    div > .avatar {
      width: 60px;
      height: 60px;
    }
    div > h1 {
      font-size: 28px;
    }
    div > h2 {
      font-size: 24px;
    }
    div > .imgPost,
    video {
      width: 60%;
      height: auto;
      border-radius: 5px;
      margin: 10px auto;
    }
  }
</style>`

export const posts = [
  {
    id: 1,
    name: 'Importancia del Desarrollo de Viviendas o Casa Habitación en México',
    url: 'importancia-desarrollo-viviendas-mexico',
    content: `
        <div class="container">
            <div class="user">
                <img alt="Avatar Yavo Capital" class="avatar" src="/images/blog/postsImages/lp-icon4.png"/>
                <p>Yavo Capital</p>
                <p>30 Jun 2021</p>
                <p>Tiempo de lectura: <span>3 min.</span></p>
            </div>
            <h1>Importancia del Desarrollo de Viviendas o Casa Habitación en México</h1>
            <p>En el siguiente artículo te explicaremos la importancia de los desarrollos inmobiliarios, específicamente de vivienda, en México; así como el impacto que genera y algunos instrumentos financieros que pueden ayudarte (si eres una empresa inmobiliaria) para llevar a cabo dichos proyectos.</p>
            <img class="imgPost" alt="Importancia del Desarrollo de Viviendas o Casa Habitación en México Imagen" src="/images/blog/postsImages/desarrollo-vivienda-mexico1.jpg"/>
            <p class="subtitle">Proyectos Inmobiliarios en México</p>
            
            <h2>Vivienda en México</h2>
            
            <p><strong>El sector de vivienda es uno de los más importantes en el país, pues nos permite impulsar el crecimiento social y económico. </strong>La proyección y construcción de vivienda contribuyen de gran manera a la actividad económica, tanto por generación de empleos como por los insumos (materiales) que son necesarios para llevarlos a cabo, que en su gran mayoría son de origen nacional.</p>
            
            
            <p>Desde la perspectiva social, <strong>es un pilar fundamental para la formación del patrimonio de las familias, pues ayuda a reducir las desigualdades</strong> y posibilita la mejora en la calidad de vida de la población.</p>
            
            
            <p>De acuerdo con datos de la Organización Internacional del Trabajo, cerca de 60 % de los trabajadores en México se desempeñan en empleos informales. Creando así barreras invisibles para acceder a un crédito de vivienda reflejándose en que 66.5 % de la población en México hace uso de sus propios recursos para financiar la compra o construcción de su vivienda.</p>
            
            
            <p><strong>Actualmente existe una gran demanda habitacional insatisfecha estimada en aproximadamente 8.9 millones de viviendas dentro del país.</strong></p>
            
            
            <h2>Estrategias para Impulsar el Desarrollo Inmobiliario</h2>
            
            <p>Para lograr proveer vivienda adecuada y digna a las familias y poder desarrollar ciudades sostenibles, inteligentes, seguras y compactas, <strong>se deben implementar diversas estrategias para transitar hacia un modelo de desarrollo urbano eficiente y próspero</strong>, promoviendo una mejor coordinación entre las diferentes instituciones para el impulso del desarrollo regional, urbano y de vivienda del país.</p>
            
            
            <p>Es en este rubro es en donde YAVO Capital, como la <strong>SOFOM #1 especializada en bienes raíces</strong>, cobra la mayor relevancia, pues el desarrollo y crecimientos del sector inmobiliario en México, es su principal objetivo.</p>
            
            
            <p><strong>Pues el promover el desarrollo de los sectores de la construcción y la vivienda deben ser un elemento esencial de la estrategia del sector de vivienda en México.</strong> Ambos son sectores altamente generadores de empleos. El sector de la construcción mantiene una vinculación directa con el desarrollo de una infraestructura moderna y funcional con la producción de satisfactores ante las demandas sociales como la es el poseer una vivienda digna.</p>
            
            
            <p><strong>A través de una asesoría especializada y sobre todo, productos financieros concretos</strong>, las diferentes empresas inmobiliarias pueden llevar a cabo todos aquellos proyectos de desarrollo de vivienda o casa habitación.</p>
            
            
            <p>Para llevar a cabo los proyectos de desarrollo de vivienda o casa habitación de manera óptima, serán necesarios diferentes puntos a tomar en cuenta. En el siguiente enlace enumeramos los más importantes: <a class="link" href="/blog-financiero/que-es-desarrollo-de-viviendas-habitacional">\"¿Qué es el desarrollo de viviendas o casas habitación?\".</a> <strong>Es aquí donde los productos financieros que ofrece YAVO Capital toman importancia</strong>, pues están enfocados en conducir al desarrollador hacia la obtención del capital necesario.</p>
            
            
            
            <h2>Productos Financieros para el Desarrollo Inmobiliario</h2>
            <img class="imgPost" alt="Importancia del Desarrollo de Viviendas o Casa Habitación en México Imagen" src="/images/blog/postsImages/desarrollo-vivienda-mexico2.jpg"/>

            
            <p>Podemos definir a un producto financiero como un instrumento a través del cual una persona física o moral recurre para ahorrar, invertir o adquirir un bien patrimonial. Dichos productos financieros, se ajustan a la persona en cuestión en cuanto al nivel de riesgo que conlleva asumirlo. <strong>Los productos financieros que ofrece YAVO Capital a las empresas desarrolladoras e inmobiliarias</strong> son las siguientes:</p>
            
            
            <h2>CREDITO INTEGRAL LÍNEA III DE INFONAVIT</h2>
            <p>Consta del<strong> 100% del Crédito de INFONAVIT</strong> para el financiamiento de tu proyecto de desarrollo de vivienda o desarrollo habitacional es otorgado por dicha institución y los recursos son administrados por <strong>YAVO CAPITAL</strong> entregando los recursos al Desarrollador mediante ministraciones de acuerdo al avance de obra, en un plazo máximo de construcción del proyecto de 6 meses. (Obtén más información y requisitos para obtenerlo, a través de este enlace: <a class="link" href="/blog-financiero/como-ayuda-el-credito-linea-iii-a-mi-desarrollo-inmobiliario">Clic Aquí</a>).</p>
            
            
            <h2>FIDEICOMISO DE GARANTÍA</h2>
            <p>El Fideicomiso de garantía <strong>es aquel contrato en el cual el fideicomitente transmite la propiedad de bienes al fiduciario para garantizar con los mismos el cumplimiento de una obligación, ya sea propia o de un tercero</strong>, previendo que para el caso de incumplimiento el fiduciario proceda al remate en pública subasta de los mismos, ya sea bajo el procedimiento convencional que se pacte en el contrato, o bien bajo el procedimiento previsto en la ley, entregando el producto del remate al fideicomisario-acreedor en pago de la obligación.. (Obtén más información y requisitos para obtenerlo, a través de este enlace: <a class="link" href="/blog-financiero/fideicomiso-de-garantia-en-un-desarrollo-inmobiliario">Clic Aquí</a>.</p>
            
            
            <p><strong>Recuerda que si eres un desarrollador o tienes un proyecto de desarrollo de vivienda</strong>, <a class="link" href="/">YAVO Capital</a> te ofrece la oportunidad de obtener el 100% de financiamiento mediante un <a class="link" href="/productos-financieros/credito-integral-linea-3">Crédito Integral Línea III INFONAVIT</a>  y así vuelvas una realidad dicho proyecto. Acércate a nosotros y obtén la mejor asesoría e información, <a class="link" href="/vehiculo-financiero">somos la entidad financiera no. 1 en bienes raíces.</a> </p>
    </div>${styles}`
  },
  {
    id: 2,
    name: 'Vehículo Financiero para el Desarrollo Inmobiliario',
    url: 'vehiculo-financiero-para-desarrollo-inmobiliario',
    content: `
        <div class="container">
            <div class="user">
                <img alt="Avatar Yavo Capital" class="avatar" src="/images/blog/postsImages/lp-icon4.png"/>
                <p>Yavo Capital</p>
                <p>24 May 2021</p>
                <p>Tiempo de lectura: <span>3 min.</span></p>
            </div>
            <h1>Vehículo Financiero para el Desarrollo Inmobiliario</h1>
            <p>En esta ocasión queremos explicarte el por qué decimos que <a href="/" class="link">Yavo Capital</a> (enlace a Home del sitio) no solamente es la mejor <strong>SOFOM en bienes raíces,</strong> sino que además es un <strong>vehículo financiero</strong> que te permitirá llevar a cabo ese proyecto de desarrollo inmobiliario y volverlo una realidad.</p>
            <p>También te expondremos todos los beneficios y diferentes<strong> productos financieros</strong> que ofrece, así como su objetivo para el crecimiento del sector bienes raíces.</p>
            <img class="imgPost" alt="Importancia del Desarrollo de Viviendas o Casa Habitación en México Imagen" src="/images/blog/postsImages/vehiculo-financiero.jpg"/>
            <p class="subtitle"></p>
            <h2>¿Qué es un vehículo financiero?</h2>
            <p>Podemos definir a un vehículo financiero (o en inglés corporate financing vehicle) como <strong>una institución financiera que actúa de intermediaria entre un emisor y un inversionista</strong>, la cual colocará a las obligaciones corporativas de acuerdo con las leyes y otras regulaciones a las inversiones.</p>
            <p>Específicamente, <strong>YAVO Capital</strong> está enfocado a contribuir en el sector bienes raíces y mejorar la calidad del segmento vivienda, a través de ofrecer productos financieros innovadores y crear alianzas estratégicas con desarrolladores, inversionistas y/o entidades gubernamentales.</p>
            <p>La gran diferencia con otros vehículos financieros, es que <strong>está especializado en el sector, proporcionando la adecuada experiencia y asesoría para poder garantizar el éxito</strong> de los proyectos de desarrollo inmobiliario de vivienda (o habitacional).</p>
            <h2>¿Qué productos puede ofrecer un vehículo financiero para el desarrollo inmobiliario?</h2>
            <p>Para esto, quisiéramos explicar la importancia de entender qué es un desarrollo inmobiliario: podemos definirlo como la gestión y coordinación de distintos agentes y actividades involucradas para la creación de un inmueble, con el objetivo de satisfacer una necesidad de vivienda (o patrimonio) para compradores e inversionistas.</p>
            <p>En un artículo anterior explicamos a detalle todo lo relacionado con los desarrollos inmobiliarios, si quieres conocer más acerca del tema: <a class="link" href="/blog-financiero/que-es-desarrollo-de-viviendas-habitacional">\"¿Qué es un desarrollo de vivienda o casa habitación?\"</a></p>
            <p>Uno de los puntos más importantes cuando se tiene un proyecto es encontrar la liquidez económica para llevarlo a cabo; aquí es donde los productos de un vehículo financiero cobran relevancia, pues estos están <strong>enfocados en evaluar la viabilidad del proyecto</strong> y conducir al desarrollador hacia la <strong>obtención del capital necesario</strong> para volver una realidad dicho proyecto.</p>
            <h2>Crédito Integral Línea III INFONAVIT y Fideicomiso de Garantía</h2>
            <img class="imgPost" alt="Importancia del Desarrollo de Viviendas o Casa Habitación en México Imagen" src="/images/blog/postsImages/vehiculo-financiero2.jpg"/>
            <p>Como dijimos, el objetivo principal es ayudar a incrementar el potencial que tiene el sector de bienes raíces en México; pues a pesar de encontrarnos en tiempos de pandemia, tenemos varias razones que puedes leer para creer que es una buena época para hablar de financiamiento de proyectos de casa habitación: <a href="/blog-financiero/importancia-de-una-sofom-en-bienes-raices-en-covid-19" class="link">\"Desarrollo Inmobiliario en tiempos de COVID-19\".</a></p>
            <p>En este sentido, un vehículo financiero especializado como YAVO Capital, ofrece a las empresas desarrolladoras o que cuenten con un proyecto de desarrollo de vivienda 2 productos sumamente importantes: </p>
            <p>1) <a href="/productos-financieros/credito-integral-linea-3" class="link">Crédito Integral Línea III INFONAVIT</a> </p>
            <p>2) <a href="/productos-financieros/fideicomiso-de-garantia" class="link">Fideicomiso de Garantía</a> </p>
            <p>El primero consta del <strong>100% del Crédito de INFONAVIT</strong> para el financiamiento de tu proyecto de desarrollo de vivienda o desarrollo habitacional es otorgado por dicha institución y los recursos son administrados por <strong>YAVO CAPITAL</strong> entregando los recursos al Desarrollador mediante ministraciones de acuerdo al avance de obra, en un plazo máximo de construcción del proyecto de 6 meses. (Más información y cómo solicitarlo través de este enlace: <a href="/blog-financiero/como-ayuda-el-credito-linea-iii-a-mi-desarrollo-inmobiliario" class="link">Clic Aquí</a>).</p>
            <p>El segundo es el fideicomiso <strong>(contrato o acuerdo) en el cual el fideicomitente transmite la propiedad de bienes al fiduciario para garantizar con los mismos</strong>, el cumplimiento de una obligación, ya sea propia o de un tercero, previendo que para el caso de incumplimiento el fiduciario proceda al remate en pública subasta de los mismos, ya sea bajo el procedimiento convencional que se pacte en el contrato, o bien bajo el procedimiento previsto en la ley, entregando el producto del remate al fideicomisario-acreedor en pago de la obligación. (Más información y cómo solicitarlo través de este enlace: <a href="/blog-financiero/fideicomiso-de-garantia-en-un-desarrollo-inmobiliario" class="link">Clic Aquí</a>).</p>
            <p><strong>Recuerda que si eres un desarrollador o tienes un proyecto de desarrollo de vivienda</strong>, <a class="link" href="/">YAVO Capital</a> te ofrece la oportunidad de obtener el 100% de financiamiento mediante un <a class="link" href="/productos-financieros/credito-integral-linea-3>Crédito Integral Línea III INFONAVIT</a>  y así vuelvas una realidad dicho proyecto. Acércate a nosotros y obtén la mejor asesoría e información, <a class="link" href="/vehiculo-financiero">somos la entidad financiera no. 1 en bienes raíces.</a></p>
        </div>${styles}`
  },
  {
    id: 3,
    name: 'Importancia de una SOFOM en bienes raíces, en tiempos de COVID-19',
    url: 'importancia-de-una-sofom-en-bienes-raices-en-covid-19',
    content: `
        <div class="container">
            <div class="user">
                <img alt="Avatar Yavo Capital" class="avatar" src="/images/blog/postsImages/lp-icon4.png"/>
                <p>Yavo Capital</p>
                <p>25 Abr 2021</p>
                <p>Tiempo de lectura: <span>3 min.</span></p>
            </div>
            <h1>Importancia de una SOFOM en bienes raíces, en tiempos de COVID-19</h1>
            <p>La pandemia ocasionada por el COVID-19 (desde inicios de 2020 en nuestro país) se ha <strong>convertido en la crisis global de mayor impacto en los últimos años e incluso de las últimas décadas</strong>; es por esto que es inevitable hablar a continuación de cómo ha afectado a todos los sectores y <strong>la importancia de la existencia de entidades financieras como lo es YAVO Capital,</strong> SOFOM en bienes raíces.</p>

            <p>Si bien en un artículo anterior <a class="link" href="/blog-financiero/que-sera-del-desarrollo-inmobiliario-en-mexico">\"¿Qué será del Desarrollo Inmobiliario en México?\"</a>, expusimos varios factores de cómo visualizamos el panorama para este 2021, ahora te explicaremos <strong>cómo es que si cuentas con un proyecto de desarrollo inmobiliario habitacional o de vivienda,</strong> se puede llevar a cabo.</p>
            
            <h2>Importancia de una SOFOM en Bienes Raíces</h2>
            <img class="imgPost" alt="Importancia del Desarrollo de Viviendas o Casa Habitación en México Imagen" src="/images/blog/postsImages/bienes-covid19-1.jpg"/>
            <p class="subtitle">Importancia de una SOFOM en tiempos de COVID</p>

            <h2>Actualidad del Sector Inmobiliario</h2>
            <p>Como dijimos y de acuerdo a un estudio realizado por Deloitte México, el sector inmobiliario es uno de los más afectados durante esta pandemia, debido a la situación económica del país, pues muchas de sus actividades se pausaron junto con el distanciamiento social propuesto por el gobierno para evitar más propagación del virus.</p>
            <p>En estos tiempos el sector inmobiliario está enfocado en 2 puntos muy importantes: <strong>disminuir los gastos operativos y evaluar los escenarios futuros (un panorama postCOVID-19).</strong></p>
            <p>También es importante que los desarrolladores inmobiliarios y todos los involucrados en este sector puedan entender y <strong>dimensionar los requerimientos de capital tanto a corto como a mediano plazo</strong>, es decir, visualizar un panorama postCOVID19 para todos los proyectos de desarrollo habitacional o de vivienda.</p>

            <h2>Panorama de residentes y futuros residentes de desarrollos inmobiliarios</h2>
            <p>El por qué creemos que la industria de bienes raíces y de desarrollo inmobiliario repuntará durante este año tiene que ver con 2 importantes factores: <strong>La estrategia de vacunación que ya se está llevando a cabo a nivel nacional e internacional y la necesidad de las personas por establecerse en una residencia adecuada.</strong></p>
            <p>Es precisamente por el segundo punto que los esquemas y hábitos de trabajo tanto a mediano como largo plazo cambiarán (y están cambiando) a una forma remota (home office), pues si bien se espera que en los próximos meses la actividad en oficinas y edificios corporativos se reanude de manera “normal”, <strong>muchas empresas han visto en el home office una solución o alternativa más eficiente y la están adaptando a un estilo de trabajo permanente.</strong></p>
            <p>Entonces, las necesidades de los residentes ha cambiado para estos casos, <strong>pues en sus prioridades y necesidades también se contempla el que su vivienda pueda contar con espacio de trabajo confortable</strong>, adecuado y con una excelente ubicación para que todos los servicios se puedan cubrir (luz, agua, gas e internet).</p>
            <p>Estas necesidades, aunadas a las que agregamos en el artículo <a class="link" href="/blog-financiero/que-es-desarrollo-de-viviendas-habitacional">\"¿Qué es el desarrollo de viviendas o casas habitación?\"</a>, son las que un desarrollador inmobiliario debe tomar en cuenta ahora y en un mediano plazo.</p>

            <h2>Importancia de una SOFOM en Bienes Raíces</h2>
            <img class="imgPost" alt="Importancia de una SOFOM en tiempos de COVID Imagen" src="/images/blog/postsImages/bienes-covid19-2.jpg"/>
            <p class="subtitle">Importancia de una SOFOM en tiempos de COVID</p>

            <p>Una de las soluciones para llevar a cabo los proyectos de desarrollo inmobiliario en estos tiempos, es buscar alternativas de financiamiento y <strong>ahí es donde encontramos a las SOFOMES especializadas en bienes raíces; siendo YAVO Capital la #1 en ese sector.</strong></p>

            <p>En otros artículos hemos explicado qué es una <strong>SOFOM en bienes raíces,</strong> así que te dejamos un enlace para que entiendas por completo de qué trata y cuál es su objetivo: <a class="link" href="/blog-financiero/que-es-sofom-en-bienes-raices">\"¿Qué es una SOFOM en bienes raíces?\".</a></p>

            <p>Tenemos a <strong>YAVO Capital</strong> como un claro ejemplo, pues la misión de ellos <strong>es convertirse en un vehículo financiero enfocado a contribuir en el sector bienes raíces y mejorar la calidad del segmento vivienda</strong>, a través de ofrecer productos financieros innovadores y crear alianzas estratégicas con desarrolladores, Inversionistas, Entidades Gubernamentales.</p>
            
            <p>Es decir, <strong>todos aquellos desarrolladores inmobiliarios que tengan un proyecto de vivienda o habitacional</strong> (que cumplan con ciertos requisitos) pueden acercarse para recibir asesoría especializada y conocer si el proyecto califica o es viable para recibir el financiamiento de hasta el 100% del mismo,<strong> a través de su producto financiero estrella,</strong> el <a class="link" href="/productos-financieros/credito-integral-linea-3>Crédito Integral Línea III de INFONAVIT.</a></p>

            <p>Así que a pesar de las circunstancias nacionales actuales, <strong>existen entidades financieras que ofrecen las soluciones que se necesitan para reactivar el sector de bienes raíces y desarrollo inmobiliario.</strong></p>

            <p><strong>Recuerda que si eres un desarrollador o tienes un proyecto de desarrollo de vivienda</strong>, <a class="link" href="/">YAVO Capital</a> te ofrece la oportunidad de obtener el 100% de financiamiento mediante un <a class="link" href="/productos-financieros/credito-integral-linea-3>Crédito Integral Línea III de INFONAVIT.</a> y así vuelvas una realidad dicho proyecto. Acércate a nosotros y obtén la mejor asesoría e información,<a class="link" href="/vehiculo-financiero"> somos la entidad financiera no. 1 en bienes raíces.</a> </p>
            
        </div>${styles}`
  },
  {
    id: 4,
    name: '¿Qué productos financieros me ofrece una SOFOM en bienes raíces?',
    url: 'productos-financieros-que-ofrece-una-sofom-en-bienes-raices',
    content: `
        <div class="container">
            <div class="user">
                <img alt="Avatar Yavo Capital" class="avatar" src="/images/blog/postsImages/lp-icon4.png"/>
                <p>Yavo Capital</p>
                <p>25 Mar 2021</p>
                <p>Tiempo de lectura: <span>3 min.</span></p>
            </div>
            <h1>¿Qué productos financieros me ofrece una SOFOM en bienes raíces?</h1>
            <p>En los primeros artículos de este blog, te explicamos qué es una <a class="link" href="/blog-financiero/que-es-sofom-en-bienes-raices">SOFOM de bienes raíces</a> y por qué es importante que conozcas todas las características y beneficios que te puede brindar si tienes un proyecto de desarrollo inmobiliario. Pues bien, en esta ocasión te mencionaremos <strong>2 de los principales productos financieros</strong> que una SOFOM en bienes raíces (como lo es <strong>YAVO Capital</strong>) te ofrece para que tu desarrollo de vivienda se vuelva una realidad.</p>

            <p>Primeramente, te explicaremos en qué consisten los productos financieros, para ahondar en <strong>2 de ellos</strong>: el <a class="link" href="/productos-financieros/credito-integral-linea-3>Crédito Integral Línea III de INFONAVIT</a> y el <a class="link" href="/productos-financieros/fideicomiso-de-garantia">Fideicomiso de garantía</a>, para que tengas un panorama más amplio acerca de las diferentes soluciones que tienen para tu desarrollo inmobiliario.</p>
            
            <img class="imgPost" alt="¿Qué productos financieros me ofrece una SOFOM en bienes raíces? Imagen" src="/images/blog/postsImages/sofom-productos-financieros.jpg"/>
            <p class="subtitle">Productos Financieros de una SOFOM</p>
            
            <h2>¿Qué es un Producto Financiero?</h2>
            <p>Podemos definir a un producto financiero <strong>como un instrumento a través del cual una persona física o moral recurre para ahorrar</strong>, invertir o adquirir un bien patrimonial. Dichos productos financieros, se ajustan a la persona en cuestión en cuanto al nivel de riesgo que conlleva asumirlo.</p>
            <p>Por lo general, los productos financieros son emitidos por varios bancos, instituciones financieras, corredores de bolsa, proveedores de seguros, agencias de tarjetas de crédito y entidades patrocinadas por el gobierno.</p>
            <p><strong>La clasificación de los distintos tipos de productos financieros están relacionados con el tipo o clase de activo, su volatilidad, riesgo y rendimiento.</strong></p>
            <p>Es precisamente en los aspectos de riesgo y rendimiento en donde <a class="link" href="/">YAVO Capital</a>, como la SOFOM #1 de bienes raíces, <strong>se enfoca para ofrecer un par de productos financieros</strong> (acompañados de una asesoría especializada) en pro de impulsar el sector inmobiliario y beneficiar a todas las partes involucradas.</p>

            <h2>¿Qué es el Crédito Integral Línea III INFONAVIT?</h2>
            <img class="imgPost" alt="Importancia de una SOFOM en tiempos de COVID Imagen" src="/images/blog/postsImages/sofom-productos-financieros2.jpg"/>
            <p>Se trata del producto financiero estrella de YAVO Capital, el cual consiste en que el <strong>100% del Crédito de INFONAVIT</strong> se utiliza para el financiamiento de tu proyecto de desarrollo de vivienda o habitacional; este es otorgado por INFONAVIT y los recursos son administrados por <strong>YAVO CAPITAL.</strong></p>
            <p><strong>Estos recursos se entregan al Desarrollador mediante ministraciones (pagos) de acuerdo al avance de obra</strong>, en un plazo máximo de construcción del proyecto de 6 meses.</p>
            <p>Para poder solicitar este tipo de crédito,<strong> tu proyecto de desarrollo de vivienda debe cumplir estos requisitos:</strong></p>

            <ul class="list">
            <li> - El proyecto se encuentre <strong>dentro y fuera del contorno urbano U1, U2, U3 y Ejidal.</strong></li>
            <li> - Desarrollos habitacionales de <strong>40 a 400 viviendas.</strong></li>
            <li> - Vivienda horizontal y/o vivienda vertical.</li>
            <li> - Vivienda de <strong>mínimo 48 m2.</strong></li>
            <li> - Valor de vivienda de entre <strong>300,000 mil a 1,850,000 pesos.</strong></li>
            </ul>

            <p>Si deseas conocer más acerca de este producto financiero, hemos creado un artículo en donde ahondamos mucho más: <a class="link" href="/blog-financiero/como-ayuda-el-credito-linea-iii-a-mi-desarrollo-inmobiliario">Crédito Integral Línea III</a> </p>

            <h2>¿Qué es un Fideicomiso de Garantía?</h2>

            <p>Es el fideicomiso en el cual <strong>el fideicomitente transmite la propiedad de bienes al fiduciario para garantizar con los mismos el cumplimiento de una obligación, ya sea propia o de un tercero</strong>, previendo que para el caso de incumplimiento el fiduciario proceda al remate en pública subasta de los mismos, ya sea bajo el procedimiento convencional que se pacte en el contrato, o bien bajo el procedimiento previsto en la ley, entregando el producto del remate al fideicomisario-acreedor en pago de la obligación.</p>

            <p>Para mayor información, te compartimos a continuación una nota especializada que te explicará a detalle qué beneficios puede brindar a tu proyecto de desarrollo inmobiliario: <a class="link" href="/blog-financiero/fideicomiso-de-garantia-en-un-desarrollo-inmobiliario">Fideicomiso de Garantía</a></p>

            <p>Ahora que ya conoces de qué tratan los productos financieros, recuerda que <strong>siempre debes acercarte a las instituciones especializadas</strong> y te brindarán la asesoría e información que necesitas.</p>
            
            <p><strong>Si eres un desarrollador o tienes un proyecto de desarrollo de vivienda,</strong> <a class="link" href="/">YAVO Capital</a> te ofrece la oportunidad de obtener el 100% de financiamiento mediante un <a class="link" href="/">Crédito Integral Línea III INFONAVIT</a> y así vuelvas una realidad dicho proyecto. Acércate a nosotros y obtén la mejor asesoría e información, <a class="link" href="/vehiculo-financiero">somos la entidad financiera no. 1 en bienes raíces.</a> </p>
            
        </div>${styles}`
  },
  {
    id: 5,
    name: 'Fideicomiso de Garantía en un Desarrollo Inmobiliario',
    url: 'fideicomiso-de-garantia-en-un-desarrollo-inmobiliario',
    content: `
        <div class="container">
            <div class="user">
                <img alt="Avatar Yavo Capital" class="avatar" src="/images/blog/postsImages/lp-icon4.png"/>
                <p>Yavo Capital</p>
                <p>25 Abr 2021</p>
                <p>Tiempo de lectura: <span>3 min.</span></p>
            </div>
            <h1>Fideicomiso de Garantía en un Desarrollo Inmobiliario</h1>
            <p>En artículos anteriores hemos tratado temas como la importancia del <a class="link" href="/blog-financiero/que-sera-del-desarrollo-inmobiliario-en-mexico">desarrollo del sector de bienes raíces en México</a>, así como los mejores consejos y recomendaciones acerca de <a class="link" href="/blog-financiero/cual-es-el-objetivo-de-un-desarrollo-inmobiliario">qué están buscando los futuros habitantes de un desarrollo de vivienda.</a></p>

            <p>Pero llegado a este punto, te has preguntado <strong>¿Existe alguna forma en que se pueda realizar un proyecto de desarrollo inmobiliario sin ser el dueño del terreno o área seleccionada?</strong> La <strong>respuesta es sí</strong> y a lo largo de este artículo te explicaremos como uno de los principales <a class="link" href="/productos-financieros">productos financieros</a> de <strong>YAVO Capital</strong> puede ayudarte: <strong>un fideicomiso de garantía.</strong></p>
            
            <img class="imgPost" alt="Fideicomiso de Garantía en un Desarrollo Inmobiliario Imagen" src="/images/blog/postsImages/blog-fideicomiso-garantia1.jpg"/>
            <p class="subtitle">Fideicomiso de Garantía</p>
            <h2>¿Qué es un Fideicomiso de Garantía?</h2>

            <p>Podemos definir a un fideicomiso como <strong>un contrato en virtud a través del cual se transmite un bien, dinero o derechos, presentes o futuros, de su propiedad a otra persona</strong>, para que ésta administre o invierta los bienes en beneficio propio o en beneficio de un tercero.</p>
            <p>Dichos fideicomisos se encuentran regulados gracias a la <a href="https://mexico.justia.com/federales/leyes/ley-general-de-titulos-y-operaciones-de-credito/titulo-segundo/capitulo-v/" class="link">Ley General de Títulos y Operaciones de Crédito, Capítulo V en México.</a></p>
            <p>Estos fideicomisos se componen de 3 partes:</p>
            <ul class="list">
            <li> 1.- <span>Fideicomitente</span>: Es el titular o propietario de los bienes, según corresponda.</li>
            <li> 2.- <span>Fiduciario</span>: Es la institución que se encargará de administrar los bienes que se aporten al fideicomiso. <strong>La titularidad de todos aquellos bienes pasará a nombre de la institución fiduciaria mientras esté vigente el fideicomiso.</strong></li>
            <li> 3.- <span>Fideicomisario</span>: Es decir, el beneficiario, pueden existir tantos como se necesiten en un fideicomiso y siempre estarán identificados con grados de preferencia sobre el patrimonio del fideicomiso.</li>
            </ul>
            <p>Específicamente, <strong>un <span>fideicomiso de garantía</span> es aquel en el que el fideicomitente transmite la propiedad de bienes al fiduciario para garantizar con los mismos el cumplimiento de una obligación</strong>, ya sea propia o de un tercero, previendo que para el caso de incumplimiento el fiduciario proceda al remate en pública subasta de los mismos, ya sea bajo el procedimiento convencional que se pacte en el contrato, o bien bajo el procedimiento previsto en la ley, entregando el producto del remate al fideicomisario-acreedor en pago de la obligación.</p>

            <h2>¿Cómo beneficia un Fideicomiso de Garantía a mi proyecto de desarrollo inmobiliario?</h2>
            <img class="imgPost" alt="Fideicomiso de Garantía en un Desarrollo Inmobiliario Imagen 2" src="/images/blog/postsImages/blog-fideicomiso-garantia2.jpg"/>
            <p>Ahora que conoces de qué trata un fideicomiso de garantía, <strong>¿Cuáles son los posibles beneficios?</strong> Para responder esto debemos aclarar que este producto financiero no se puede aplicar para todos los casos o proyectos de desarrollo inmobiliarios, ya que muchas empresas desarrolladoras son dueñas de los terrenos o áreas donde se realizarán.</p>
            <p>Nos enfocaremos entonces en aquellos proyectos de vivienda o casas habitación en las que no se es dueño del terreno y diremos que como principal beneficio es ese mismo: <strong>tener la certeza de contar con dicho terreno y por ende tener una base inamovible para comenzar con el desarrollo y llevarlo a cabo.</strong></p>
            <p><strong>Es una herramienta muy útil para brindar protección a las partes que la conforman.</strong> Para el <strong>Fideicomitente</strong> porque su patrimonio queda blindado ante terceros, pues no se podrán realizar actos en contra del inmueble mientras este se encuentre a nombre del Fiduciario. Y para la persona a la que se le garantizarán las obligaciones también, <strong>ya que podrá ejecutarlo de una manera más rápida y expedita.</strong></p>

            <h2>¿A quién acudo para solicitar un Fideicomiso de Garantía?</h2>

            <p>Para realizar la constitución de un <strong>fideicomiso de garantía lícito y bien hecho,</strong> te recomendamos acercarte a instituciones especializadas como <a class="link" href="/">YAVO Capital</a>, en donde te podrán<strong> asesorar a través de todo el proceso</strong> y además obtendrás los siguientes beneficios adicionales al realizarlo con ellos:</p>
            <ul class="list">
            <li> - <strong>Armonización de intereses</strong> de las partes involucradas.</li>
            <li> - <strong>Confianza entre los socios</strong> del negocio y hacia terceros.</li>
            <li> - <strong>Imparcialidad</strong> del fiduciario.</li>
            <li> - <strong>Administración</strong> y asesoría profesional.</li>
            <li> - <strong>Eficacia</strong> en control operativo del negocio.</li>
            <li> - <strong>Respaldo</strong> de una infraestructura institucional.</li>
            <li> - <strong>Confidencialidad</strong> (secreto fiduciario).</li>
            <li> - <strong>Transparencia</strong> del negocio entre las partes y hacia terceros.</li>
            <li> - <strong>Seguridad</strong> jurídica.</li>
            </ul>
            <p><strong>Recuerda que si eres un desarrollador o tienes un proyecto de desarrollo de vivienda</strong>, <a class="link" href="/">YAVO Capital</a> te ofrece la oportunidad de obtener el 100% de financiamiento mediante un <a class="link" href="/productos-financieros/credito-integral-linea-3>Crédito Integral Línea III de INFONAVIT.</a> y así vuelvas una realidad dicho proyecto. Acércate a nosotros y obtén la mejor asesoría e información,<a class="link" href="/vehiculo-financiero"> somos la entidad financiera no. 1 en bienes raíces.</a> </p>
            
        </div>${styles}`
  },
  {
    id: 6,
    name: '¿Cómo ayuda el Crédito Integral Línea III a mi desarrollo inmobiliario?',
    url: 'como-ayuda-el-credito-linea-iii-a-mi-desarrollo-inmobiliario',
    content: `
        <div class="container">
            <div class="user">
                <img alt="Avatar Yavo Capital" class="avatar" src="/images/blog/postsImages/lp-icon4.png"/>
                <p>Yavo Capital</p>
                <p>19 Feb 2021</p>
                <p>Tiempo de lectura: <span>2 min.</span></p>
            </div>
            <h1>¿Cómo ayuda el Crédito Integral Línea III a mi desarrollo inmobiliario?</h1>
            <p>Como hemos platicado en notas anteriores, <strong>YAVO Capital</strong> es una <a class="link" href="/blog-financiero/que-es-sofom-en-bienes-raices">SOFOM en bienes raíces</a>, cuyo principal objetivo y motivación es <strong>el convertirse en un vehículo financiero que mejore la calidad del segmento vivienda, a través de</strong> <a class="link" href="/productos-financieros">productos financieros</a> y toda la asesoría especializada para que tu proyecto de desarrollo inmobiliario sea exitoso.</p>

            <p>El principal y <strong>más importante producto financiero con el que cuentan es el Crédito Integral Línea III INFONAVIT</strong>; a continuación, te explicaremos en qué consiste, cómo puedes obtenerlo y cómo puede beneficiar tu proyecto de desarrollo de vivienda.</p>
            
            <img class="imgPost" alt="¿Cómo ayuda el Crédito Integral Línea III a mi desarrollo inmobiliario? Imagen" src="/images/blog/postsImages/como-ayuda-linea3-infonavit-desarrollo-inmobiliario.jpg"/>
            <p class="subtitle">Proyecto de Desarrollo de Vivienda</p>
            <h2>¿Qué es el Crédito Integral Línea III de INFONAVIT?</h2>

            <p>Como dijimos, se trata de un producto financiero en el cual el <strong>100% del Crédito de</strong> <a class="link" href="https://portalmx.infonavit.org.mx/wps/portal/infonavit.web/proveedores-externos/para-tu-gestion/desarrolladores/programa-desarrolladores/!ut/p/z1/jZDNCoJQEEafpYXLnFHjYu00zBIpgySbTWjYTTCvqCW9fdLPIshbs5vhnJnhA4IIqIivGY-bTBRx3vU7YnvmIs6nI23peqjjemVvglC3Dd_XYPsAdBPRtbEDzLmJ1sxZOGPf0N1QA-r3mcNePvaUhf_5kgdJvn4LJD3BmBwINm9AlsGvLzwgnovkGbhVJIbJgar0mFZppV6qbnxqmrKeKKhg27YqF4LnqXoQZwW_KSdRNxB9klCewzDCbDGk5NZag8EdUCve_w!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/">INFONAVIT</a> se utiliza para el<strong> financiamiento de tu proyecto de desarrollo de vivienda o habitacional;</strong> este es otorgado por INFONAVIT y los recursos son administrados por <a class="link" href="/">YAVO CAPITAL.</a></p>
            <p><strong>Estos recursos se entregan al Desarrollador mediante ministraciones (pagos) de acuerdo al avance de obra,</strong> en un plazo máximo de construcción del proyecto de 6 meses.</p>
            <p>Cabe destacar que durante todo el proceso (desde el financiamiento hasta el término del proyecto de construcción), <strong>los asesores especializados de YAVO Capital</strong> estarán a tu disposición para despejar todas las dudas acerca de este instrumento financiero y también para cerciorarse <strong>que tu proyecto de desarrollo de vivienda se lleve a cabo en tiempo y forma.</strong></p>

            <h2>Beneficios del Crédito Integral Línea III en mi proyecto de Desarrollo Inmobiliario</h2>
            
            <img class="imgPost" alt="¿Cómo ayuda el Crédito Integral Línea III a mi desarrollo inmobiliario? Imagen 2" src="/images/blog/postsImages/beneficios-linea-3-infonavit.jpg"/>
            <p class="subtitle">Foto: INFONAVIT</p>

            <p><strong>El principal beneficio que obtendrás</strong> de este producto financiero, es evidentemente, que <strong>tu proyecto de desarrollo inmobiliario se lleve a cabo </strong>y que no quede solamente como un sueño sin cumplir. Cabe recordar que dicho beneficio no solo <strong>impactará positivamente al desarrollador inmobiliario, sino a todos los futuros habitantes</strong> de dicho desarrollo.</p>

            <p>Pues como lo comentamos en nuestro artículo: <a class="link" href="/blog-financiero/que-sera-del-desarrollo-inmobiliario-en-mexico">\"¿Qué será del Desarrollo Inmobiliario en México?\"</a>, a pesar de las circunstancias actuales del país, <strong>sigue existiendo un déficit de las ofertas de vivienda contra la demanda poblacional</strong> que busca un lugar digno para vivir en un país <strong>con alrededor de 126 millones de habitantes, donde anualmente se requieren más de 70 mil viviendas.</strong></p>
            <p>A continuación, te dejamos un video en el cual nuestro <strong>Director Comercial</strong>, <strong>Víctor Rosales</strong> te explicará muchos más beneficios que aporta este <strong>producto financiero a tu proyecto de desarrollo de vivienda:</strong></p>
            <video controls class="grid mx-auto rounded-2xl my-5 w-full md:w-8/12">
				<source src="/video/intro-yavocapital.mp4" type="video/mp4" />
			</video>

            <h2>¿Cómo puedo solicitar un Crédito Integral Línea III?</h2>

            <p>Antes de todo el proceso, es importante revisar que <strong>tu proyecto de desarrollo de vivienda o habitacional cumpla los siguientes requisitos y pueda calificar:</strong></p>
            <ul class="list">
            <li> - El proyecto se encuentre <strong>dentro y fuera del contorno urbano U1, U2, U3 y Ejidal.</strong></li>
            <li> - Desarrollos habitacionales de <strong>40 a 400 viviendas.</strong></li>
            <li> - Vivienda horizontal y/o vivienda vertical.</li>
            <li> - Vivienda de <strong>mínimo 48 m2.</strong></li>
            <li> - Valor de vivienda de entre <strong>300,000 mil a 1,850,000 pesos.</strong></li>
            </ul>
            <p>Si tu proyecto cuenta con todos los requisitos cumplidos,<strong> acércate a nosotros para que juntos demos el primer paso y tu desarrollo habitacional se vuelva una realidad.</strong></p>
            <p><strong>Recuerda que si eres un desarrollador o tienes un proyecto de desarrollo de vivienda</strong>, <a class="link" href="/">YAVO Capital</a> te ofrece la oportunidad de obtener el 100% de financiamiento mediante un <a class="link" href="/productos-financieros/credito-integral-linea-3>Crédito Integral Línea III de INFONAVIT.</a> y así vuelvas una realidad dicho proyecto. Acércate a nosotros y obtén la mejor asesoría e información,<a class="link" href="/vehiculo-financiero"> somos la entidad financiera no. 1 en bienes raíces.</a> </p>
            
        </div>${styles}`
  },
  {
    id: 7,
    name: '¿Cuál es el Objetivo de un Desarrollo Inmobiliario?',
    url: 'cual-es-el-objetivo-de-un-desarrollo-inmobiliario',
    content: `
        <div class="container">
            <div class="user">
                <img alt="Avatar Yavo Capital" class="avatar" src="/images/blog/postsImages/lp-icon4.png"/>
                <p>Yavo Capital</p>
                <p>22 Ene 2021</p>
                <p>Tiempo de lectura: <span>3 min.</span></p>
            </div>
            <h1>¿Cuál es el Objetivo de un Desarrollo Inmobiliario?</h1>
            <p>En un artículo anterior <a class="link" href="/blog-financiero/que-es-desarrollo-de-viviendas-habitacional">\"¿Qué es el desarrollo de vivienda o casa habitación?\"</a> explicamos los pasos a seguir y en qué consistía; en esta ocasión ahondaremos más en el tema y explicaremos en los siguientes párrafos <strong>cuál es el objetivo de un desarrollo inmobiliario en general y cómo se puede considerar un desarrollo exitoso.</strong></p>

            <p>Y es que podemos decir que <strong>el desarrollo inmobiliario es la gestión de los recursos, así como la coordinación de actividades involucradas para la creación de un bien inmueble</strong>; todo esto con <strong>el objetivo principal</strong> que comparten todas las empresas desarrolladoras inmobiliarias: <strong>encontrar y satisfacer la necesidad de vivienda</strong> o edificación de las personas.</p>
            
            <img class="imgPost" alt="¿Cuál es el Objetivo de un Desarrollo Inmobiliario? Imagen" src="/images/blog/postsImages/objetivo-desarrollo-inmobiliario1.jpg"/>
            <p class="subtitle">Planeación de Proyecto Inmobiliario</p>

            <p>Dicha solución de necesidades debe venir acompañada de muchos de los puntos que tratamos en el artículo anterior (<a class="link" href="/blog-financiero/que-es-desarrollo-de-viviendas-habitacional">desarrollo de vivienda</a>) como lo son: <strong>la ubicación, facilidades de pago o financiamiento, servicios esenciales</strong>, por mencionar algunos.</p>
            <p><strong>Evidentemente todas estas actividades conllevan un riesgo en todos los sentidos:</strong> terreno inadecuado, restricciones de construcción, tasas de interés, costos de la construcción, financiamiento del proyecto, etc.</p>
            <p>Por tanto, <strong>dicho objetivo no es nada fácil de cumplir y muchas veces los proyectos no se concretan</strong>; es por eso que en <a class="link" href="/">YAVO Capital</a> te presentamos a continuación lo que creemos que son <strong>las características tanto de un desarrollo inmobiliario como de una empresa desarrolladora exitosa.</strong></p>

            <h2>Desarrollador(a) Inmobiliario(a) Exitoso(a)</h2>

            <p>Ya sea el primer o el centésimo proyecto de desarrollo inmobiliario, nunca está de más tener presente que <strong>las 2 principales características de una empresa desarrolladora exitosa</strong> son:</p>
            <ul class="list">
            <li> 1.- <span>La Detección de Oportunidades de Negocio:</span> En las inversiones inmobiliarias, las buenas oportunidades son pocas, y cuando aparecen, no suelen estar disponibles por mucho tiempo. Por lo tanto, <strong>una empresa desarrolladora inmobiliaria exitosa tiene la capacidad para descubrir esas buenas oportunidades y poder determinar las posibilidades de sus proyectos.</strong>
            <br/>El segmento de bienes raíces a veces es impredecible, por lo tanto, <strong>para tener éxito como desarrollador inmobiliario es muy importante el siempre mantenerse actualizado</strong> con las últimas tendencias de dicho sector.</li>

            <li> 2.- <span>Capacidad y Habilidad de Resolución de Problemas:</span> Una desarrolladora inmobiliaria exitosa <strong>se esfuerza por encontrar soluciones a conflictos, planificar sitios; todo esto para encontrar formas de llevar a cabo y entregar el proyecto en tiempo,</strong> forma y por supuesto, dentro del presupuesto. <br/>
            Es estar siempre listos para lo esperado y lo inesperado, pues cuando ocurre un
            problema, <strong>la empresa desarrolladora debe tener la capacidad de ser lo suficientemente rápida como para resolverlo</strong> a tiempo y así mitigar cualquier daño o consecuencia que pueda resultar.</li>
            </ul>
            
            <h2>Desarrollo Inmobiliario Exitoso</h2>
            <img class="imgPost" alt="¿Cuál es el Objetivo de un Desarrollo Inmobiliario? Imagen 2" src="/images/blog/postsImages/objetivo-desarrollo-inmobiliario2.jpg"/>
            <p class="subtitle">Ejecución de un Desarrollo Inmobiliario</p>
            <p>Ahora nos centraremos en enlistar las características que debe contener un desarrollo inmobiliario exitoso:/p>

            <ul class="list">
            <li> 1.- <span>Estudios de factibilidad precisos:</span> El <strong>llevar a cabo con precisión los estudios de factibilidad</strong> es de suma importancia pues todas las actividades realizadas aportan <strong>las herramientas necesarias para una correcta toma de decisiones al mismo tiempo que ayudan a determinar si el proyecto será viable y exitoso</strong>, conocer el mercado meta, así como las características que deberá tener el desarrollo inmobiliario. 
            <br/>Entre los estudios indispensables que se deberán llevar a cabo son los de: <strong>Mercado, Financiero, Factibilidad del terreno e Impacto Ambiental.</strong></li>

            <li> 2.- <span>Negociación de contratos / Financiamiento: </span> Al contar con un diseño y proyecto arquitectónico avanzado se puede iniciar la fase de negociación de contratos y financiamiento. <br/>
            Y es en este paso <strong>donde muchos proyectos no llegan a ver la luz</strong>, pues como explicamos en nuestro artículo <a class="link" href="/blog-financiero/que-es-sofom-en-bienes-raices">"¿Qué es una SOFOM en Bienes Raíces?"</a>, todas las trabas, tiempos de espera y trámites burocráticos terminan por condenar al olvido dichos proyectos.<br/>
            Es precisamente por esto que <a href="/" class="link">YAVO Capital</a> <strong>ofrece la asesoría especializada</strong> y los <a class=)"link" href="/productos-financieros">productos financieros</a> adecuados (<strong>sobre todo si tu proyecto es de un desarrollo de vivienda horizontal y de mínimo 40 viviendas</strong>) <strong>así como el financiamiento</strong> (a través de, <a class="link" href="/productos-financieros/credito-integral-linea-3">Crédito Integral Línea III INFONAVIT</a>) <strong>para que dicho proyecto se vuelva una realidad.</strong></li>

            <li> 2.- <span>Administración Correcta del Inmueble:</span> En esta etapa del desarrollo inmobiliario, <strong>se busca que la propiedad se mantenga en óptimas condiciones para brindarle un excelente servicio a sus habitantes</strong> y extender la vida del inmueble.  <br/>
            Para poder lograr esto es importante: <strong>Que una empresa que se encargue de administrar la propiedad, contratar personal operativo para el mantenimiento del inmueble</strong>, realizar periódicamente estudios de monitoreo y revisiones para con los habitantes y conocer de sus necesidades y buscar solucionarlas efectivamente.</li>
            </ul>

            <p>Si tu empresa desarrolladora de inmuebles o tus desarrollos inmobiliarios cuentan con estas y más características, <strong>te felicitamos por contribuir al crecimiento y mejora del sector de bienes raíces en México.</strong></p>
                
            <p><strong>Recuerda que si eres un desarrollador o tienes un proyecto de desarrollo de vivienda</strong>, <a class="link" href="/">YAVO Capital</a> te ofrece la oportunidad de obtener el 100% de financiamiento mediante un <a class="link" href="/productos-financieros/credito-integral-linea-3>Crédito Integral Línea III de INFONAVIT.</a> y así vuelvas una realidad dicho proyecto. Acércate a nosotros y obtén la mejor asesoría e información,<a class="link" href="/vehiculo-financiero"> somos la entidad financiera no. 1 en bienes raíces.</a> </p>
            
        </div>${styles}`
  },
  {
    id: 8,
    name: '¿Qué será del Desarrollo Inmobiliario en México?',
    url: 'que-sera-del-desarrollo-inmobiliario-en-mexico',
    content: `
        <div class="container">
            <div class="user">
                <img alt="Avatar Yavo Capital" class="avatar" src="/images/blog/postsImages/lp-icon4.png"/>
                <p>Yavo Capital</p>
                <p>30 Dic 2020</p>
                <p>Tiempo de lectura: <span>3 min.</span></p>
            </div>
            <h1>¿Qué será del Desarrollo Inmobiliario en México?</h1>
            <p>A medida que nos acercamos al final de este año 2020 y después de haber atravesado un sinfín de acontecimientos tanto nacionales como internacionales, es inevitable el cuestionarnos lo que nos deparará el próximo año en todos los sentidos: política, salud y sobre todo, <strong>economía y finanzas.</strong> Este último aspecto lo abordaremos a continuación para plantear lo que deparará al sector inmobiliario en el 2021.</p>
            
            <img class="imgPost" alt="¿Qué será del Desarrollo Inmobiliario en México? Imagen" src="/images/blog/postsImages/desarrollo-vivienda-mexico1.jpg"/>
            <p class="subtitle">Vista panorámica de la Ciudad de México</p>

            <h2>Sector Inmobiliario y Desarrollo Inmobiliario en México</h2>
            <p>Hablemos primero de la actualidad del sector, ya que en México tiene una particularidad debido a que <strong>la mayoría de las inversiones y adquisiciones son a mediano y largo plazo</strong>; entonces es evidente que los acontecimientos que todos conocemos (específicamente al que concierne al COVID-19), influyeron negativamente en la decisión de compra.</p>
            <p>Sin embargo, <span>en YAVO Capital creemos que el próximo año, tendrá un repunte positivo en diferentes estados del país, debido a los siguientes factores.</span></p>

            <h2>Factor Salud: Vacuna COVID-19</h2>

            <p><strong>Es prioritario para México el que se pueda distribuir y administrar la vacuna a todos los habitantes del país</strong>, de manera segura y escalable para poder vislumbrar el fin de esta pandemia, disminuyendo los contagios y tasas de mortalidad; <strong>logrando esto, causará un efecto de “normalidad” y confianza para todos los habitantes</strong> (compradores e inversionistas), mejorando la situación inmobiliaria actual.</p>

            <h2>Factor Población: Demanda de un lugar para vivir</h2>
            <p>A pesar de las circunstancias actuales del país, <strong>la realidad es que sigue existiendo un déficit de las ofertas de vivienda contra la demanda poblacional que busca un lugar digno para vivir</strong> en un país con alrededor de 126 millones de habitantes, donde anualmente se requieren más de 70 mil viviendas (sólo considerando la demanda por adquisición).</p>
            <p>Es decir, aún con la pandemia del COVID-19, <strong>la población necesita de viviendas que puedan adquirir mediante algún préstamo o financiamiento por parte de las instituciones</strong>; esta demanda no se reducirá sino todo lo contrario. Lo cual nos lleva al 3er. Factor.</p>
            
            <h2>Factor Financiamiento: Instrumentos y Productos Financieros</h2>
            <p>Es en este punto donde <span>YAVO Capital</span> (<a class="link" href="/blog-financiero/que-es-sofom-en-bienes-raices">SOFOM especializada en bienes raíces</a>) pone al alcance de <strong>todos los desarrolladores inmobiliarios con proyectos de construcción de viviendas o casa habitación</strong>, un producto bastante atractivo para llevar a cabo dicho proyecto: <a class="link" href="/productos-financieros/credito-integral-linea-3">Crédito Integral Línea III de INFONAVIT</a>; esto como una solución para ambas partes (desarrollador y comprador).</p>
            <img class="imgPost" alt="¿Qué será del Desarrollo Inmobiliario en México? Imagen 2" src="/images/blog/postsImages/credito-integral-linea-3.jpg"/>
            <p class="subtitle">Crédito Línea III INFONAVIT para desarrolladores inmobiliarios</p>
            <p>Por un lado, con dicho producto financiero, las desarrolladoras inmobiliarias podrán llevar a cabo el proyecto de casas habitación (<strong>contando con la asesoría especializada y el compañamiento hasta la conclusión del mismo</strong>); por el otro, podrán satisfacer las necesidades de los inversionistas y población que busca un lugar donde pueda residir.</p>
            <p>Puedes encontrar <strong>más información acerca de los desarrollos de viviendas</strong> en nuestro artículo dedicado: <a class="link" href="/blog-financiero/que-es-desarrollo-de-viviendas-habitacional">\"¿Qué es el desarrollo de viviendas o casas habitación?\"</a></p>

            <h2>Factor Inmueble: Aumento de plusvalía permanente</h2>

            <p>Finalmente, a pesar de la difícil situación actual del sector inmobiliario en México, <strong>la plusvalía de los inmuebles no se ha frenado de manera brusca como se hubiera pensado.</strong></p>
                
            <p>La <strong>Sociedad Hipotecaria Federal</strong> dice que, mientras este crecimiento fue de 7% en el primer trimestre, en el segundo trimestre (con la declaración de la emergencia sanitaria) fue de 5.8%, es decir, sólo 1.2% menor. <strong>Es decir, el precio promedio de las viviendas no disminuyó, sino que se mantuvo.</strong></p>

            <p><strong>Todos estos factores contribuyen a que el próximo año (2021) sea bastante alentador para el sector de bienes raíces</strong> y en <a class="link" href="/">YAVO Capital</a> lo seguiremos impulsando mediante <a class="link" href="/productos-financieros">nuestros instrumentos y productos financieros</a> para facilitar la recuperación de dicho sector.</p>
            
            <p>Ahora que ya conoces los <strong>factores por los que creemos que el próximo año habrá un repunte en el sector de bienes raíces,</strong> recuerda que si eres un <strong>desarrollador</strong> o tienes un <strong>proyecto de desarrollo de vivienda</strong>, <a class="link" href="/">YAVO Capital</a> te ofrece la oportunidad de obtener el 100% de financiamiento mediante un <a class="link" href="/productos-financieros/credito-integral-linea-3>Crédito Integral Línea III de INFONAVIT.</a> y así vuelvas una realidad dicho proyecto. Acércate a nosotros y obtén la mejor asesoría e información,<a class="link" href="/vehiculo-financiero"> somos la entidad financiera no. 1 en bienes raíces.</a> </p>
            
        </div>${styles}`
  },
  {
    id: 9,
    name: '¿Qué es una SOFOM en Bienes Raíces?',
    url: 'que-es-sofom-en-bienes-raices',
    content: `
        <div class="container">
            <div class="user">
                <img alt="Avatar Yavo Capital" class="avatar" src="/images/blog/postsImages/lp-icon4.png"/>
                <p>Yavo Capital</p>
                <p>15 Dic 2020</p>
                <p>Tiempo de lectura: <span>3 min.</span></p>
            </div>
            <h1>¿Qué es una SOFOM en Bienes Raíces?</h1>
            <p>Como hemos mencionado anteriormente, <strong>YAVO Capital Financiera</strong> es una SOFOM especializada en bienes raíces que tiene como objetivo impulsar el sector del desarrollo inmobiliario, mediante productos o instrumentos financieros como son: <strong>el Crédito Integral Línea III INFONAVIT</strong> y los <strong>Fideicomisos de Garantía</strong>; pero <strong>¿Qué es una SOFOM en bienes raíces? Y ¿Cómo puede ayudarte una SOFOM al desarrollo de tu proyecto de construcción de casas habitación?</strong></p>
            
            <img class="imgPost" alt="¿Qué es una SOFOM en Bienes Raíces? Imagen" src="/images/blog/postsImages/sofom-bienes-raices.jpg"/>
            <p class="subtitle">SOFOM en Bienes Raíces</p>

            <p>En pocas palabras, <strong>una SOFOM es una Sociedad Financiera de Objeto Múltiple, dicha sociedad es contemplada en la legislación mexicana cuyo objetivo principal es el otorgamiento de un crédito.</strong> Las SOFOM pueden ser entidades reguladas (ER) o no reguladas (ENR). También existe la llamada Sociedad Financiera de Objeto Limitado (SOFOL).</p>
            <p>También podríamos decir que una SOFOM facilita <strong>la necesidad de las empresas de obtener créditos para llevar a cabo sus proyectos.</strong> Todo esto, se logra de manera personalizada y sin la necesidad de acudir a alguna institución bancaria.</p>
            <p>Entonces para responder completamente a la pregunta de arriba, una <strong>SOFOM especializada en bienes raíces</strong> (YAVO Capital) es una sociedad que facilita la obtención de un crédito para el desarrollo de un proyecto inmobiliario, <strong>específicamente desarrollos habitacionales de mínimo 40 casas habitación.</strong> </p>

            <h2>¿Por qué acercarse a una SOFOM especializada en bienes raíces?</h2>

            <p>Como explicamos en el párrafo anterior, una de las grandes ventajas para las empresas <strong>constructoras y desarrolladoras de inmuebles al acercarse a una SOFOM de bienes raíces</strong> es la obtención de un crédito (previa aprobación y viabilidad del proyecto) sin la necesidad de que alguna institución bancaria intervenga en el proceso, haciéndolo más eficiente y directo. </p>
            <p><strong>La falta de acceso a créditos rápidos, oportunos y adaptables a la necesidad de la empresa</strong>, son las principales razones por la cuales las SOFOMES fueron creadas.</p>
            <p>Ahora bien, la virtud y el principal beneficio de una <strong>SOFOM especializada como YAVO Capital,</strong> es toda la asesoría y experiencia que tienen para con todos estos proyectos inmobiliarios, es decir, no solamente te acompañarán y evaluarán la viabilidad del proyecto sino que <strong>dicha asesoría continuará mediante la administración de los recursos y el seguimiento del desarrollo inmobiliario pues actúan como un intermediario de las instituciones y la empresa constructora.</strong></p>

            <h2>¿Cómo saber si una SOFOM es segura y opera correctamente?</h2>
            <p>Ya que hemos detallado el concepto de una SOFOM especializada en bienes raíces y el porqué es importante acercarse a ellas como empresas constructoras con proyectos viables, es importante considerar un aspecto muy importante: el conocer si dicha sociedad existe y está operando de manera correcta. </p>
            <p>Para verificar esto, nos valdremos de buscar un registro vigente ante la <strong>Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros</strong> (<a class="link" href="https://www.condusef.gob.mx/">CONDUSEF</a>) ; ya que certifican su veracidad y avalan que cuentan con lo necesario para brindar un servicio adecuado.</p>
            <p>Otra manera más sencilla en la cual se identifica que una <strong>SOFOM está correctamente operando,</strong> es a través del <strong>Registro de Prestadores de Servicios financieros</strong> (<a class="link" href="https://webapps.condusef.gob.mx/SIPRES/jsp/pub/index.jsp">SIPRES</a>), ya que cuenta con la información de las instituciones financieras que están autorizadas y reguladas para ofrecer sus servicios. Simplemente escribe el nombre de la entidad que está buscando y listo. En la siguiente imagen, por ejemplo, te mostramos el registro vigente de YAVO Capital.</p>

            <img class="imgPost" alt="¿Qué es una SOFOM en Bienes Raíces? Imagen 2" src="/images/blog/postsImages/condusef.png"/>

            <p>Todos estos aspectos son los que se deben tomar en cuenta para tomar la decisión de <strong>invertir en dicho inmueble</strong> (recuerda que el invertir es una adquisición a largo plazo con la que se busca certidumbre, patrimonio y nos permite tener altas ganancias con poco riesgo.) si somos los compradores o en caso de un desarrollador, saber qué es lo que están esperando los compradores e inversionistas de dicho <strong>desarrollo habitacional.</strong></p>
            
            <p>Ahora que ya conoces los <strong>factores por los que creemos que el próximo año habrá un repunte en el sector de bienes raíces,</strong> recuerda que si eres un <strong>desarrollador</strong> o tienes un <strong>proyecto de desarrollo de vivienda</strong>, <a class="link" href="/">YAVO Capital</a> te ofrece la oportunidad de obtener el 100% de financiamiento mediante un <a class="link" href="/productos-financieros/credito-integral-linea-3>Crédito Integral Línea III de INFONAVIT.</a> y así vuelvas una realidad dicho proyecto. Acércate a nosotros y obtén la mejor asesoría e información,<a class="link" href="/vehiculo-financiero"> somos la entidad financiera no. 1 en bienes raíces.</a> </p>
            
        </div>${styles}`
  },
  {
    id: 10,
    name: '¿Qué es el desarrollo de viviendas o casas habitación?',
    url: 'que-es-desarrollo-de-viviendas-habitacional',
    content: `
        <div class="container">
            <div class="user">
                <img alt="Avatar Yavo Capital" class="avatar" src="/images/blog/postsImages/lp-icon4.png"/>
                <p>Yavo Capital</p>
                <p>15 Dic 2020</p>
                <p>Tiempo de lectura: <span>3 min.</span></p>
            </div>
            <h1>¿Qué es el desarrollo de viviendas o casas habitación?</h1>
            <p>El <strong>desarrollo de viviendas, casas habitación o desarrollos habitacionales</strong> como comúnmente se les conoce, son aquellos asentamientos donde se ubican <strong>un conjunto de casas, edificios</strong> de (2 o 3 pisos máximo) con el objetivo de brindarle a las personas y futuros compradores un lugar seguro para vivir, con comodidades cercanas (centros comerciales, transporte público, telecomunicaciones, etc.) pero sobre todo, una oportunidad de mejorar su calidad de vida.</p>
            
            <img class="imgPost" alt="¿Qué es el desarrollo de viviendas o casas habitación? Imagen" src="/images/blog/postsImages/desarrollo-de-viviendas1.jpg"/>
            <p class="subtitle">Desarrollo de Viviendas o Casas Habitación</p>

            <p>Además, <strong>los desarrollos de vivienda o habitacionales</strong> suelen ser cerradas (privadas) y permiten el paso solo a los habitantes de los inmuebles, obteniendo un sentido de seguridad y protección que no siempre puede encontrarse en otros lugares.</p>
            <p><strong>Una ventaja adicional es la creación de un sentido de pertenencia e identidad,</strong> esto se logra gracias a la coexistencia de los habitantes en las diferentes zonas en espacios comunes; resultando en una mejora en la convivencia y experiencia de todas las personas que habitan en dichos desarrollos urbanos</p>

            <h2>¿Cuáles son las características de un desarrollo de viviendas o habitacional perfecto?</h2>

            <p>Ya sea que seas un <strong>desarrollador de vivienda </strong>o seas un comprador que tenga la posibilidad de invertir en inmuebles de esta índole, en general estas son las características que debes ofrecer (desarrollador de vivienda), o buscar (comprador):</p>

            <ul class="list">
            <li> 1.- <span>Buen precio y facilidades de pago.</span><br/>Las casas o departamentos pertenecientes a un desarrollo de viviendas, suelen tener un precio accesible y son relativamente sencillos de obtener por medio de un crédito hipotecario otorgado por instituciones bancarias o gubernamentales (INFONAVIT, FOVISSSTE, SHF, SOFOL Y SOFOM).<br/>Para saber si se trata de un buen precio por el inmueble, tendrás que tomar en cuenta aspectos como su ubicación, tiempo de construcción y el resultado de un avalúo inmobiliario para conocer el valor real y comercial de la propiedad.</li>
            <li> 2.- <span>Ubicación del desarrollo habitacional.</span><br/>Otro punto muy importante de un <strong>buen desarrollo de vivienda o habitacional</strong>, es su ubicación y las vías de acceso a su alrededor. Este tipo de construcciones se establecen en distintos puntos de las ciudades, brindando a sus habitantes distintas opciones de movilidad, laborales, de entretenimiento y/o educativas.</li>
            <li> 3.- <span>Servicios y áreas comunes del desarrollo habitacional.</span><br/>Existen casos en los que dentro de los <strong>desarrollos habitacionales</strong> se encuentran algunos comercios de conveniencia o servicios de supermercado que los habitantes pueden usar para no salir de la zona y encontrar lo que necesiten; por otro lado, existe la opción de que el conjunto habitacional cuente con áreas verdes o recreativas, gimnasio e incluso alberca al aire libre.<br/>Es también conveniente ubicar los puntos de interés cercanos al desarrollo, como escuelas, plazas comerciales, centros deportivos, culturales, estaciones de transporte público, etc.</li>
            <li> 4.- <span>Posibilidad de aumento en la plusvalía del inmueble.</span><br/>La <strong>plusvalía del inmueble o plusvalía inmobiliaria</strong> es el valor agregado que una propiedad adquiere dependiendo de distintos factores, como su ubicación, calidad de sus materiales, estado al pasar el tiempo, accesibilidad y otros elementos. </li>
            </ul>

            <h2>¿Qué implica la construcción de un desarrollo de viviendas o habitacional?</h2>

            <img class="imgPost" alt="¿Qué es el desarrollo de viviendas o casas habitación? Imagen" src="/images/blog/postsImages/desarrollo-de-viviendas2.jpg"/>


            <p>Primeramente, se debe entender que existen ciertas <strong>etapas por las que debe pasar un desarrollo inmobiliario en general (incluyendo el desarrollo habitacional)</strong>. Conocer estas etapas ayudará a inversionistas, empresarios, agentes inmobiliarios y las personas involucradas en el desarrollo inmobiliario.</p>
            <p><strong>El desconocimiento de estas etapas podría ocasionar grandes problemas</strong>, ya sea fiscales, legales, financieros, técnicos o de mercado, por no cumplir con algún detalle que parecía de rutina o evidente.</p>
            <p><strong>Las etapas que implican el desarrollo de un conjunto de viviendas o conjuntos habitacionales son las siguientes:</strong></p>

            <ul class="list">
            <li> 1.- <span>Conceptualización del proyecto</span></li>
            <li> 2.- <span>Marco legal - jurídico y fiscal de las operaciones inmobiliarias</span></li>
            <li> 3.- <span>Elaboración de un plan de negocios</span></li>
            <li> 4.- <span>Adquisición de la propiedad</span></li>
            <li> 5.- <span>Diseño en forma del desarrollo</span></li>
            <li> 6.- <span>Construcción del desarrollo habitacional</span></li>
            <li> 7.- <span>Estrategias de Publicidad inmobiliaria</span></li>
            <li> 8.- <span>Comercialización y administración del inmueble.</span></li>
            </ul>

            <img class="imgPost" alt="¿Qué es el desarrollo de viviendas o casas habitación? Imagen" src="/images/blog/postsImages/desarrollo-de-viviendas3.jpg"/>

            <p>Todos estos aspectos son los que se deben tomar en cuenta para tomar la decisión de <strong>invertir en dicho inmueble</strong> (recuerda que el invertir es una adquisición a largo plazo con la que se busca certidumbre, patrimonio y nos permite tener altas ganancias con poco riesgo.) si somos los compradores o en caso de un desarrollador, saber qué es lo que están esperando los compradores e inversionistas de dicho <strong>desarrollo habitacional.</strong></p>
            
            <p>Ahora que ya conoces los <strong>factores por los que creemos que el próximo año habrá un repunte en el sector de bienes raíces,</strong> recuerda que si eres un <strong>desarrollador</strong> o tienes un <strong>proyecto de desarrollo de vivienda</strong>, <a class="link" href="/">YAVO Capital</a> te ofrece la oportunidad de obtener el 100% de financiamiento mediante un <a class="link" href="/productos-financieros/credito-integral-linea-3>Crédito Integral Línea III de INFONAVIT.</a> y así vuelvas una realidad dicho proyecto. Acércate a nosotros y obtén la mejor asesoría e información,<a class="link" href="/vehiculo-financiero"> somos la entidad financiera no. 1 en bienes raíces.</a> </p>
            
        </div>${styles}`
  },
  {
    id: 11,
    name: '5 Consejos para Cumplir tus Propósitos Financieros',
    url: 'cinco-consejos-para-cumplir-tus-propositos-financieros',
    content: `
        <div class="container">
            <div class="user">
                <img alt="Avatar Yavo Capital" class="avatar" src="/images/blog/postsImages/lp-icon4.png"/>
                <p>Yavo Capital</p>
                <p>13 Enero 2021</p>
                <p>Tiempo de lectura: <span>3 min.</span></p>
            </div>
            <h1>5 Consejos para Cumplir tus Propósitos Financieros</h1>
            <p>Es muy normal que en la última noche del año y al sonar de las 12 campanadas que indican que un nuevo año está iniciando, las personas comiencen a “pedir un deseo” o visualicen los <strong>propósitos de año nuevo</strong> (salud, trabajo, dinero, etc.) mientras disfrutan una porción de 12 uvas.</p>

            <p>Si es que dentro de tus “deseos” o <strong>propósitos de año nuevo está el encontrar una mejoría o estabilidad financiera</strong>, en <span>YAVO Capital</span> te enlistamos a continuación <strong>los que creemos que son los mejores consejos para que tus propósitos financieros se vuelvan una realidad.</strong></p>
            
            <img class="imgPost" alt="¿Qué es el desarrollo de viviendas o casas habitación? Imagen" src="/images/blog/postsImages/propositos-financieros1.jpg"/>
            <p class="subtitle">Cumple tus Propósitos Financieros este 2021</p>

            <h2>1. Reestructura o Liquida tus Deudas Anteriores</h2>

            <p>Tal vez el primer consejo te suene obvio o evidente, pero es tal vez el <strong>paso más importante</strong> (como todos los primeros pasos) si es que buscas esa estabilidad o mejoría financiera.</p>
            <p>Pagos atrasados de una o más tarjetas de crédito sumado a los intereses que estas generan al no liquidarse, son las que comúnmente no nos permiten llevar una vida financiera sana; <strong>acércate a una institución financiera para una negociación de adeudos o buscar una alternativa (como lo son los programas de liquidación de créditos)</strong> para evitar convertirte en una persona morosa y por consecuencia ver afectado tu historial crediticio.</p>

            <h2>2. Reducción de los Gastos Hormiga o Innecesarios</h2>

            <p>Los llamados <strong>“gastos hormiga”</strong> son <strong>aquellos gastos que no percibimos como un gasto importante al momento</strong>, pero que al final del mes cuando hacemos una lista de todos ellos nos damos cuenta de todo el dinero que estamos derrochando en ellos.</p>
            <p>No por ello te decimos que dejes de comprarte ese café por las mañanas u ordenar comida rápida o de restaurantes, si no que <strong>lleves un registro y te fijes un límite de gasto</strong> mensual para todos esos gastos.</p>
            <p>Puedes ayudarte de alguna aplicación en tu celular que lleve el registro de tus entradas y salidas de efectivo o simplemente anota en una libreta todos tus gastos y sepas cuánto presupuesto mensual resta.</p>

            <h2>3. Crear un Plan de Ahorro</h2>

            <p>El siguiente consejo va de la mano del anterior (<strong>reducción de gastos innecesarios</strong>) y para esto lo que haremos <strong>será establecer objetivos a corto, mediano y largo plazo</strong>, esto nos permitirá analizar cuánto es lo que necesitamos ahorrar de manera semanal o mensual lograr todos esos objetivos.</p>
            <p><strong>Podemos comenzar (si está dentro de nuestras posibilidades) con destinar un 10% de nuestro ingreso mensual a dicho plan de ahorro</strong>, esto funcionará como solución a 2 puntos importantes:</p>

            <ul class="list">
            <li><span>1) </span><strong>En caso de surgir gastos no planeados</strong> (por enfermedad, desastres naturales, siniestros, fallas mecánicas, imperfectos en el hogar, etc.) tendremos un respaldo que nos ayudará a hacerle frente.</li>
            <li> <span>2) </span><strong>Nos acercaremos mes con mes a aquellos objetivos</strong> que nos hemos planteado desde un inicio.</li>
            </ul>

            <h2>4. Buscar Diferentes Fuentes de Ingreso</h2>

            <p>Con esto vamos a asegurarnos que <strong>nuestras finanzas se mantengan saludables y que los objetivos</strong> y todas las acciones que estemos llevando a cabo, sigan su curso positivo.</p>
            <p>No es necesario comenzar la búsqueda de un segundo empleo, sino analizar y enlistar todas aquellas habilidades (artísticas, técnicas, inventivas, etc.) o talentos a los cuales sacar mejor provecho. Estos pueden ser: <strong>vender algún producto o servicio, dar asesorías gracias a tu experiencia y conocimientos en algún tema.</strong></p>
            <p>Una vez que comiences a generar estos ingresos extras, verás <strong>cómo tus finanzas personales mejorarán notablemente.</strong></p>

            <h2>5. Inversiones</h2>


            <p>Este consejo <strong>es la culminación del haber aplicado satisfactoriamente los anteriores</strong>; pues con el dinero ahorrado <strong>podremos realizar un plan de inversión</strong>. Debemos elegir una opción de inversión que sea apropiada para nuestra edad y posibilidades económicas.</p>
            <p><strong>Podemos comenzar invirtiendo desde $100 en productos con menor riesgo o que estén protegidos por el gobierno, como son los llamados CETES</strong>; ahora bien, si nuestro capital de inversión supera los $5,000 podemos revisar algunas opciones con mayores rendimientos y beneficio; actualmente el llamado Crowdfunding es una alternativa atractiva para esto.</p>
            <p><strong>La finalidad de estas opciones es que multipliquemos nuestro dinero al menor riesgo posible para así acortar los tiempos que nos impusimos</strong> anteriormente para cumplir todos nuestros objetivos financieros.</p>

        </div>${styles}`
  }
]
