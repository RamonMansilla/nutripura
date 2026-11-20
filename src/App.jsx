import * as React from "react";
import * as JsxRuntime from "react/jsx-runtime";
import { readSheet } from "read-excel-file/browser";
import {
  Activity,
  ArrowRight,
  Bot,
  Boxes,
  ChartColumn,
  Check,
  ChevronRight,
  ChevronLeft,
  CircleQuestionMark,
  CreditCard,
  Download,
  ExternalLink,
  Eye,
  FileSpreadsheet,
  FileText,
  Flame,
  Gauge,
  LayoutDashboard,
  Leaf,
  Menu,
  MessageCircle,
  PackageCheck,
  PackagePlus,
  Play,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  TriangleAlert,
  Upload,
  Users,
  WavesHorizontal,
  Workflow,
  X,
  Zap,
} from "lucide-react";
const affiliateUrl = `https://www.mercadolibre.cl/berberina-nutre-pure-control-azucar-gotas-60-ml/up/MLCU3934624235`,
  affiliateNotice = `Compra externa en Mercado Libre. El precio, la disponibilidad y las condiciones se confirman allí.`,
  affiliateClickStorageKey = `nexo:demo:affiliate-clicks:v1`;
function trackAffiliateClick(e, t) {
  try {
    let n = JSON.parse(
        sessionStorage.getItem(affiliateClickStorageKey) || `[]`,
      ),
      r = Array.isArray(n) ? n : [];
    (r.push({
      source: e,
      product: `berberina-nutre-pure-60-ml`,
      pack: t || `1`,
      occurredAt: new Date().toISOString(),
    }),
      sessionStorage.setItem(
        affiliateClickStorageKey,
        JSON.stringify(r.slice(-100)),
      ));
  } catch {}
}
const ingredients = [
    {
      name: `Berberina`,
      benefit: `Apoyo metabólico en estudio`,
      icon: Activity,
      text: `Es el componente más investigado de la fórmula. Una revisión de 46 ensayos observó efectos sobre glucosa y lípidos en adultos con diabetes tipo 2, aunque la calidad de los estudios fue variable.`,
    },
    {
      name: `Canela de Ceilán`,
      benefit: `Tradición y respuesta metabólica`,
      icon: Flame,
      text: `Especia usada tradicionalmente y estudiada por su posible relación con la respuesta de la glucosa. La evidencia disponible todavía no es concluyente.`,
    },
    {
      name: `Cromo`,
      benefit: `Metabolismo de nutrientes`,
      icon: Gauge,
      text: `Mineral que participa en procesos relacionados con carbohidratos y grasas. Según los NIH, los resultados de los estudios sobre glucosa son desiguales.`,
    },
    {
      name: `Melón amargo`,
      benefit: `Extracto vegetal tradicional`,
      icon: Leaf,
      text: `Fruto usado en cocinas y prácticas tradicionales de Asia. Se investiga su relación con la glucosa, pero las revisiones consideran que aún falta evidencia.`,
    },
    {
      name: `Cúrcuma`,
      benefit: `Compuestos vegetales antioxidantes`,
      icon: Sparkles,
      text: `Raíz rica en curcuminoides y utilizada ampliamente como especia. Sus posibles efectos como suplemento continúan bajo investigación.`,
    },
    {
      name: `Panax ginseng`,
      benefit: `Energía y adaptación`,
      icon: Zap,
      text: `Raíz empleada tradicionalmente en Asia. Se estudia por su relación con energía y glucosa, con resultados todavía limitados.`,
    },
    {
      name: `Glucomanano`,
      benefit: `Fibra soluble de konjac`,
      icon: WavesHorizontal,
      text: `Fibra que absorbe agua y forma un gel. Por esa capacidad es especialmente importante consumirla con suficiente líquido y respetar el modo de uso.`,
    },
  ],
  ingredientPhotos = [
    {
      alt: `Frutos de agracejo (Berberis vulgaris), planta que contiene berberina`,
      caption: `Agracejo · planta de origen`,
      file: `Berberis_vulgaris_-_img_19287.jpg`,
      author: `Pmau`,
      license: `CC BY-SA 4.0`,
      licenseUrl: `https://creativecommons.org/licenses/by-sa/4.0/`,
    },
    {
      alt: `Rollos de corteza de canela de Ceilán`,
      caption: `Canela de Ceilán · corteza`,
      file: `Cinnamomum_verum_spices.jpg`,
      author: `Simon A. Eugster`,
      license: `CC BY-SA 3.0`,
      licenseUrl: `https://creativecommons.org/licenses/by-sa/3.0/`,
    },
    {
      alt: `Cristales del elemento cromo`,
      caption: `Cromo elemental · no es la forma del suplemento`,
      file: `Chromium_crystals_and_1cm3_cube.jpg`,
      author: `Alchemist-hp`,
      license: `FAL`,
      licenseUrl: `https://artlibre.org/licence/lal/en/`,
    },
    {
      alt: `Fotografía de melón amargo fresco`,
      caption: `Melón amargo · fruto`,
      file: `Bittermelloncloseup.jpg`,
      author: `FlyingToaster`,
      license: `CC BY 3.0`,
      licenseUrl: `https://creativecommons.org/licenses/by/3.0/`,
    },
    {
      alt: `Rizomas y polvo de cúrcuma`,
      caption: `Cúrcuma · rizoma y polvo`,
      file: `Curcuma_longa_roots.jpg`,
      author: `Simon A. Eugster`,
      license: `CC BY-SA 3.0`,
      licenseUrl: `https://creativecommons.org/licenses/by-sa/3.0/`,
    },
    {
      alt: `Raíces de ginseng`,
      caption: `Ginseng · raíz`,
      file: `Insam_(ginseng).jpg`,
      author: `국립국어원`,
      license: `CC BY-SA 2.0 KR`,
      licenseUrl: `https://creativecommons.org/licenses/by-sa/2.0/kr/`,
    },
    {
      alt: `Tubérculo de konjac, fuente de glucomanano`,
      caption: `Konjac · origen del glucomanano`,
      file: `Amorphophallus_konjac_knolle.jpg`,
      author: `Sebastian Stabinger`,
      license: `CC BY-SA 3.0`,
      licenseUrl: `https://creativecommons.org/licenses/by-sa/3.0/`,
    },
  ],
  frequentlyAskedQuestions = [
    {
      q: `¿Es un medicamento?`,
      a: `No. Es un suplemento alimenticio. No diagnostica, trata, cura ni previene enfermedades, y no reemplaza ningún tratamiento indicado por tu médico.`,
    },
    {
      q: `¿Puedo tomarlo si uso metformina u otros medicamentos?`,
      a: `Consulta primero con tu médico. La berberina y el cromo pueden sumarse al efecto de medicamentos para la diabetes (metformina, insulina) y la berberina puede interactuar con otros fármacos.`,
    },
    {
      q: `¿Cómo se toma?`,
      a: `Agita el frasco y sigue la dosis indicada en la etiqueta. Puedes diluir las gotas en agua. No superes la dosis recomendada.`,
    },
    {
      q: `¿Tiene efectos secundarios?`,
      a: `Los más reportados con berberina son molestias digestivas leves: náuseas, diarrea, hinchazón o estreñimiento. Si aparecen, suspende y consulta.`,
    },
    {
      q: `¿Cómo pago y cuándo llega?`,
      a: `La compra, el pago y el despacho se completan en Mercado Libre. Allí se confirman el precio, la disponibilidad y la fecha estimada de entrega.`,
    },
  ],
  researchSources = [
    {
      org: `NCCIH · NIH`,
      title: `Diabetes and Dietary Supplements (sección Berberine)`,
      url: `https://www.nccih.nih.gov/health/diabetes-and-dietary-supplements`,
    },
    {
      org: `PubMed · 2021`,
      title: `Guo J. et al. Efecto de la berberina en perfiles metabólicos en diabetes tipo 2: revisión sistemática y metaanálisis de 46 ensayos`,
      url: `https://pubmed.ncbi.nlm.nih.gov/34956436/`,
    },
    {
      org: `PubMed · 2012`,
      title: `Dong H. et al. Berberine in the treatment of type 2 diabetes mellitus: a systemic review and meta-analysis`,
      url: `https://pubmed.ncbi.nlm.nih.gov/23118793/`,
    },
    {
      org: `NCCIH · NIH`,
      title: `Goldenseal (sello de oro): berberina, embarazo y lactancia`,
      url: `https://www.nccih.nih.gov/health/goldenseal`,
    },
    {
      org: `NIH · ODS`,
      title: `Cromo: datos en español`,
      url: `https://ods.od.nih.gov/factsheets/Chromium-DatosEnEspanol/`,
    },
    {
      org: `Cochrane · 2012`,
      title: `Momordica charantia (melón amargo) para la diabetes tipo 2`,
      url: `https://pubmed.ncbi.nlm.nih.gov/22895968/`,
    },
    {
      org: `NCCIH · NIH`,
      title: `Cinnamon (canela)`,
      url: `https://www.nccih.nih.gov/health/cinnamon`,
    },
    {
      org: `NCCIH · NIH`,
      title: `Turmeric (cúrcuma)`,
      url: `https://www.nccih.nih.gov/health/turmeric`,
    },
    {
      org: `NCCIH · NIH`,
      title: `Asian Ginseng (Panax ginseng)`,
      url: `https://www.nccih.nih.gov/health/asian-ginseng`,
    },
    {
      org: `EFSA · 2010`,
      title: `Opinión científica sobre glucomanano (konjac)`,
      url: `https://doi.org/10.2903/j.efsa.2010.1798`,
    },
  ],
  videos = [
    {
      id: `WavbAEjrtws`,
      title: `Berberina y cómo tomarla: control de glucosa, síndrome metabólico…`,
      author: `Fitness Revolucionario`,
    },
    {
      id: `qrjR6Jvtkbo`,
      title: `Beneficios de la berberina (y sus riesgos)`,
      author: `Dr. Alberto Sanagustín`,
    },
  ];
function VideoCard({ id: e, title: t, author: n }) {
  let [r, i] = (0, React.useState)(!1);
  return (
    <article className={`info-video`}>
      <div className={`info-video-frame`}>
        {r ? (
          <iframe
            loading={`lazy`}
            src={`https://www.youtube-nocookie.com/embed/${e}?autoplay=1&rel=0`}
            title={t}
            allow={`accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`}
            allowFullScreen={!0}
          />
        ) : (
          <button
            aria-label={`Reproducir: ${t}`}
            onClick={() => i(!0)}
            style={{
              backgroundImage: `url(https://i.ytimg.com/vi/${e}/hqdefault.jpg)`,
            }}
          >
            <span>
              <Play />
            </span>
          </button>
        )}
      </div>
      <strong>{t}</strong>
      <small>
        {n}
        {` · YouTube`}
      </small>
    </article>
  );
}
function IngredientOrbit() {
  let [e, t] = (0, React.useState)(0),
    n = ingredients[e],
    _Component2 = n.icon,
    i = ingredientPhotos[e];
  return (
    <section className={`ingredient-orbit-section`} id={`ingredientes`}>
      <header>
        <span>{`FÓRMULA HERBAL 7 EN 1`}</span>
        <h2>
          {`Siete componentes.`}
          <br />
          <em>{`Una fórmula que puedes explorar.`}</em>
        </h2>
        <p>{`Pasa el mouse o pulsa cada icono para conocer qué aporta cada componente.`}</p>
      </header>
      <div className={`ingredient-orbit-layout`}>
        <div className={`ingredient-orbit-stage`}>
          <i className={`orbit-ring orbit-ring-outer`} />
          <i className={`orbit-ring orbit-ring-inner`} />
          <img
            alt={`Botella de Berberina Nutre Pure rodeada por sus siete componentes`}
            className={`orbit-bottle`}
            src={`/products/berberina/01-frasco.png`}
          />
          {ingredients.map((n, r) => {
            let _Component = n.icon;
            return (
              <button
                aria-label={`Ver aporte de ${n.name}`}
                aria-pressed={e === r}
                className={`ingredient-node ingredient-node-${r + 1}${e === r ? ` is-active` : ``}`}
                onClick={() => t(r)}
                onFocus={() => t(r)}
                onMouseEnter={() => t(r)}
                key={n.name}
              >
                <_Component />
                <span>{n.name}</span>
              </button>
            );
          })}
        </div>
        <article
          className={`ingredient-orbit-detail ingredient-photo-card`}
          aria-live={`polite`}
        >
          <img
            className={`ingredient-photo`}
            src={`/ingredients/${e}.jpg`}
            alt={i.alt}
            key={i.file}
          />
          <div className={`ingredient-photo-content`}>
            <div>
              <span>
                {String(e + 1).padStart(2, `0`)}
                {` / 07`}
              </span>
              <i>
                <_Component2 />
              </i>
            </div>
            <small>{n.benefit}</small>
            <h3>{n.name}</h3>
            <p>{n.text}</p>
            <footer>{`Selecciona otro icono para seguir explorando.`}</footer>
          </div>
          <div className={`ingredient-photo-credit`}>
            <span>{i.caption}</span>
            <small>
              <a
                href={`https://commons.wikimedia.org/wiki/File:${i.file}`}
                target={`_blank`}
                rel={`noreferrer`}
              >
                {`Foto: `}
                {i.author}
              </a>
              {` · `}
              <a href={i.licenseUrl} target={`_blank`} rel={`noreferrer`}>
                {i.license}
              </a>
              {` · encuadre y degradado`}
            </small>
          </div>
        </article>
      </div>
    </section>
  );
}
function ProductInformation() {
  return (
    <JsxRuntime.Fragment>
      <section className={`info-section`} id={`que-es`}>
        <header>
          <span>{`QUÉ ES LA BERBERINA`}</span>
          <h2>
            {`Un compuesto vegetal`}
            <br />
            <em>{`con siglos de historia.`}</em>
          </h2>
        </header>
        <div className={`info-columns`}>
          <p>{`La berberina es un alcaloide de color amarillo que se encuentra en plantas como el agracejo, el sello de oro, el coptis y la uva de Oregón. Se ha usado durante miles de años en la medicina ayurvédica y la tradicional china.`}</p>
          <p>{`Hoy es uno de los suplementos más investigados en relación con el metabolismo de la glucosa y los lípidos. Los estudios son prometedores pero tienen límites: muchos son pequeños, de corta duración y hechos en una sola población.`}</p>
        </div>
        <div className={`info-facts`}>
          <p>
            <b>{`60 ml`}</b>
            <small>{`Formato gotas`}</small>
          </p>
          <p>
            <b>{`7`}</b>
            <small>{`Componentes`}</small>
          </p>
          <p>
            <b>{`46`}</b>
            <small>{`Ensayos en la revisión de 2021`}</small>
          </p>
        </div>
      </section>
      <section className={`info-section`} id={`uso`}>
        <header>
          <span>{`MODO DE USO Y PRECAUCIONES`}</span>
          <h2>
            {`Úsalo con`}
            <br />
            <em>{`información clara.`}</em>
          </h2>
        </header>
        <div className={`usage-grid`}>
          <article>
            <h3>{`Cómo tomarlo`}</h3>
            <ol>
              <li>{`Agita el frasco antes de usar.`}</li>
              <li>{`Sigue la dosis indicada en la etiqueta.`}</li>
              <li>{`Puedes diluir las gotas en un vaso de agua.`}</li>
              <li>{`Acompáñalo de alimentación equilibrada y actividad física.`}</li>
            </ol>
          </article>
          <article className={`caution`}>
            <h3>
              <TriangleAlert />
              {` No lo uses sin consultar si…`}
            </h3>
            <ul>
              <li>{`Estás embarazada o en período de lactancia (no recomendado).`}</li>
              <li>{`Es para un niño o un recién nacido.`}</li>
              <li>{`Tomas metformina, insulina u otros medicamentos para la glucosa.`}</li>
              <li>{`Tomas cualquier otro medicamento de forma habitual.`}</li>
              <li>{`Tienes una enfermedad renal o hepática.`}</li>
            </ul>
            <p>{`Suplemento alimenticio. No es un medicamento. Consulta a tu médico antes de usarlo.`}</p>
          </article>
        </div>
      </section>
      <section className={`info-section info-alt`} id={`videos`}>
        <header>
          <span>{`VIDEOS`}</span>
          <h2>
            {`Aprende más`}
            <br />
            <em>{`en video.`}</em>
          </h2>
          <p>{`Videos de divulgación de terceros. Sus opiniones son de sus autores y no reemplazan una consulta médica.`}</p>
        </header>
        <div className={`video-grid`}>
          {videos.map((e) => (
            <VideoCard {...e} key={e.id} />
          ))}
        </div>
      </section>
      <section className={`info-section`} id={`estudios`}>
        <header>
          <span>{`ESTUDIOS Y DOCUMENTOS`}</span>
          <h2>
            {`Lee las fuentes`}
            <br />
            <em>{`tú mismo.`}</em>
          </h2>
          <p>{`Enlaces a organismos de salud y revisiones científicas publicadas. Se abren en una pestaña nueva.`}</p>
        </header>
        <div className={`source-list`}>
          {researchSources.map((e) => (
            <a href={e.url} target={`_blank`} rel={`noreferrer`} key={e.url}>
              <FileText />
              <span>
                <small>{e.org}</small>
                <strong>{e.title}</strong>
              </span>
              <ExternalLink />
            </a>
          ))}
        </div>
      </section>
      <section className={`info-section info-alt`} id={`preguntas`}>
        <header>
          <span>{`PREGUNTAS FRECUENTES`}</span>
          <h2>
            {`Respuestas`}
            <br />
            <em>{`directas.`}</em>
          </h2>
        </header>
        <div className={`faq-list`}>
          {frequentlyAskedQuestions.map((e) => (
            <details key={e.q}>
              <summary>{e.q}</summary>
              <p>{e.a}</p>
            </details>
          ))}
        </div>
      </section>
    </JsxRuntime.Fragment>
  );
}
var money = new Intl.NumberFormat(`es-CL`, {
    style: `currency`,
    currency: `CLP`,
    maximumFractionDigits: 0,
  }),
  productImages = [
    `/products/berberina/01-frasco.png`,
    `/products/berberina/02-componentes.webp`,
    `/products/berberina/03-ingredientes.webp`,
    `/products/berberina/04-formula.webp`,
    `/products/berberina/05-informacion.webp`,
  ],
  productReviews = [
    {
      rating: 5,
      age: `Hace 3 meses`,
      text: `Efectos: lo estoy empezando a utilizar. Sabor: diluido en agua sin sabor fuerte. Buena presentación. Se ve de buena calidad.`,
    },
    {
      rating: 5,
      age: `Hace 2 meses`,
      text: `Efectos: primera vez que la tomo. Disolución: agitar antes. Rico sabor, es fácil de tomar.`,
    },
    {
      rating: 5,
      age: `Hace 3 meses`,
      text: `Muy bueno, efectivo.`,
    },
    {
      rating: 4,
      age: `Hace 1 mes`,
      text: `Buenoooo.`,
    },
    {
      rating: 3,
      age: `Hace 2 semanas`,
      text: `Recién llevo una semana, la glucosa anda como ascensor; espero estabilizarla luego.`,
    },
    {
      rating: 1,
      age: `Hace 4 semanas`,
      text: `Realmente no sirve para nada.`,
    },
  ],
  marketplaceUrl = affiliateUrl,
  initialProducts = [
    {
      id: 1,
      slug: `berberina-premium`,
      name: `Berberina Nutre Pure 7 en 1`,
      category: `Suplemento herbal · 60 ml`,
      price: 24990,
      compareAt: 29990,
      stock: 48,
      active: !0,
      badge: `Más de 1.000 vendidos`,
      tone: `red`,
      description: `Suplemento alimenticio líquido en gotas con berberina, canela de Ceilán, cromo, melón amargo, cúrcuma, Panax ginseng y glucomanano. No es un medicamento.`,
      images: productImages,
    },
  ],
  navigationItems = [
    {
      id: `dashboard`,
      label: `Resumen`,
      icon: LayoutDashboard,
    },
    {
      id: `products`,
      label: `Productos`,
      icon: Boxes,
    },
    {
      id: `leads`,
      label: `Contactos`,
      icon: Users,
    },
    {
      id: `chatbot`,
      label: `Chatbot`,
      icon: Bot,
    },
    {
      id: `flows`,
      label: `Automatizaciones`,
      icon: Workflow,
    },
    {
      id: `store`,
      label: `Ver tienda`,
      icon: Store,
    },
  ],
  initialView = () =>
    window.location.pathname.startsWith(`/admin`) ? `dashboard` : `store`;
function App({ previewMode: e = !1, onProductChange: t } = {}) {
  let [n, r] = (0, React.useState)(initialView),
    [i, a] = (0, React.useState)(initialProducts),
    [o, s] = (0, React.useState)(!1),
    [c, l] = (0, React.useState)(!1),
    [u, d] = (0, React.useState)(!1),
    [f, p] = (0, React.useState)(``),
    [m, h] = (0, React.useState)(null);
  (0, React.useEffect)(() => {
    t?.(m?.name ?? null);
  }, [m, t]);
  let [g, v] = (0, React.useState)(!1),
    [y, b] = (0, React.useState)(!1),
    [x, ee] = (0, React.useState)(
      () => localStorage.getItem(`nexo-owner-name`) ?? ``,
    ),
    [S, C] = (0, React.useState)(
      () => localStorage.getItem(`nexo-accent`) ?? `verde`,
    ),
    te = (e) => {
      (ee(e), localStorage.setItem(`nexo-owner-name`, e));
    },
    w = (e) => {
      (C(e), localStorage.setItem(`nexo-accent`, e));
    },
    T = {
      verde: {
        primary: `#b5f35b`,
        mint: `#78dfac`,
      },
      violeta: {
        primary: `#b9a0ff`,
        mint: `#a99cff`,
      },
      azul: {
        primary: `#79c7ff`,
        mint: `#7be0df`,
      },
      coral: {
        primary: `#ffad75`,
        mint: `#ffc28e`,
      },
    },
    E =
      x
        .trim()
        .split(/\s+/)
        .map((e) => e[0])
        .join(``)
        .slice(0, 2)
        .toUpperCase() || `NX`;
  (0, React.useEffect)(() => {
    let e = () => {
      (r(initialView()), h(null), d(!1));
    };
    return (
      window.addEventListener(`popstate`, e),
      () => window.removeEventListener(`popstate`, e)
    );
  }, []);
  let D = (e) => {
      let t = e === `store` ? `/` : `/admin`;
      (window.location.pathname !== t && window.history.pushState({}, ``, t),
        r(e),
        h(null),
        d(!1),
        window.scrollTo({
          top: 0,
          behavior: `smooth`,
        }));
    },
    O = (e) => {
      (p(e), window.setTimeout(() => p(``), 2500));
    };
  return n === `store` ? (
    <Storefront
      previewMode={e}
      products={i.filter((e) => e.active)}
      back={() => D(`dashboard`)}
      chatOpen={g}
      setChatOpen={v}
      selected={m}
      setSelected={h}
    />
  ) : (
    <div
      className={`app-shell`}
      style={{
        "--green": T[S].primary,
        "--mint": T[S].mint,
      }}
    >
      <aside className={u ? `sidebar open` : `sidebar`}>
        <button className={`close-mobile`} onClick={() => d(!1)}>
          <X />
        </button>
        <button className={`admin-brand`} onClick={() => D(`dashboard`)}>
          <span>
            <Zap />
          </span>
          <div>
            <strong>{`ENLIVA`}</strong>
            <small>{`COMMERCE`}</small>
          </div>
        </button>
        <div className={`store-pill`}>
          <i>{`LM`}</i>
          <span>
            <small>{`TIENDA`}</small>
            <strong>{`La Movida Natural`}</strong>
          </span>
          <ChevronRight />
        </div>
        <nav>
          {navigationItems.map((_Component3) => (
            <button
              className={n === _Component3.id ? `active` : ``}
              onClick={() => D(_Component3.id)}
              key={_Component3.id}
            >
              <_Component3.icon />
              <span>{_Component3.label}</span>
              {_Component3.id === `leads` ? <b>{`18`}</b> : null}
            </button>
          ))}
        </nav>
        <div className={`sidebar-bottom`}>
          <button onClick={() => b(!0)}>
            <Settings2 />
            {` Configuración`}
          </button>
          <div>
            <span>{E}</span>
            <p>
              <strong>{x.trim() || `Tu cuenta`}</strong>
              <small>{`Administrador`}</small>
            </p>
            <ChevronRight />
          </div>
        </div>
      </aside>
      <main className={`admin-main`}>
        <header className={`admin-topbar`}>
          <button className={`menu-button`} onClick={() => d(!0)}>
            <Menu />
          </button>
          <div>
            <small>{`ESPACIO DE TRABAJO`}</small>
            <strong>{`La Movida Natural`}</strong>
          </div>
          <div className={`top-actions`}>
            <span>
              <i />
              {` Todo operativo`}
            </span>
            <button onClick={() => D(`store`)}>
              <Eye />
              {` Ver tienda`}
            </button>
            <button className={`avatar`} onClick={() => b(!0)}>
              {E}
            </button>
          </div>
        </header>
        <div className={`admin-content`}>
          {n === `dashboard` && (
            <Overview products={i} navigate={D} ownerName={x} />
          )}
          {n === `products` && (
            <Products
              products={i}
              setProducts={a}
              openImport={() => l(!0)}
              openModal={() => s(!0)}
              notify={O}
            />
          )}
          {n === `leads` && <Leads />}
          {n === `chatbot` && <Chatbot notify={O} />}
          {n === `flows` && <Flows notify={O} />}
        </div>
      </main>
      {o ? (
        <ProductModal
          close={() => s(!1)}
          save={(e) => {
            (a((t) => [
              ...t,
              {
                ...e,
                id: Date.now(),
              },
            ]),
              s(!1),
              O(`Producto agregado a la tienda`));
          }}
        />
      ) : null}
      {c ? (
        <BulkImportModal
          close={() => l(!1)}
          importProducts={(e) => {
            (a((t) => [
              ...t,
              ...e.map((e, t) => ({
                ...e,
                id: Date.now() + t,
              })),
            ]),
              l(!1),
              O(`${e.length} productos importados correctamente`));
          }}
        />
      ) : null}
      {y ? (
        <SettingsModal
          close={() => b(!1)}
          name={x}
          setName={te}
          accent={S}
          setAccent={w}
          notify={O}
        />
      ) : null}
      {f ? (
        <div className={`toast`}>
          <Check />
          {f}
        </div>
      ) : null}
    </div>
  );
}
function SettingsModal({
  close: e,
  name: t,
  setName: n,
  accent: r,
  setAccent: i,
  notify: a,
}) {
  return (
    <div className={`modal-backdrop`} onMouseDown={e}>
      <section
        aria-modal={`true`}
        className={`modal settings-modal`}
        onMouseDown={(e) => e.stopPropagation()}
        role={`dialog`}
      >
        <button className={`modal-close`} onClick={e}>
          <X />
        </button>
        <span>{`PERSONALIZACIÓN`}</span>
        <h2>{`Tu espacio ENLIVA`}</h2>
        <p>{`Define cómo quieres que te reciba el panel y el color principal de tu cuenta.`}</p>
        <label>
          {`¿CÓMO TE LLAMAS?`}
          <input
            autoFocus={!0}
            value={t}
            onChange={(e) => n(e.target.value)}
            placeholder={`Ej. Camila`}
          />
        </label>
        <small className={`settings-hint`}>
          {`Vista previa: `}
          <b>
            {t.trim()
              ? `¡Bienvenido/a, ${t.trim()}!`
              : `¡Bienvenido/a a ENLIVA!`}
          </b>
        </small>
        <div className={`color-picker`}>
          <strong>{`COLOR PRINCIPAL`}</strong>
          <div>
            {[
              {
                id: `verde`,
                label: `Verde`,
                hex: `#b5f35b`,
              },
              {
                id: `violeta`,
                label: `Violeta`,
                hex: `#b9a0ff`,
              },
              {
                id: `azul`,
                label: `Azul`,
                hex: `#79c7ff`,
              },
              {
                id: `coral`,
                label: `Coral`,
                hex: `#ffad75`,
              },
            ].map((e) => (
              <button
                aria-label={`Usar color ${e.label}`}
                className={r === e.id ? `selected` : ``}
                onClick={() => i(e.id)}
                type={`button`}
                key={e.id}
              >
                <i
                  style={{
                    background: e.hex,
                  }}
                />
                <span>{e.label}</span>
              </button>
            ))}
          </div>
        </div>
        <button
          className={`primary full`}
          onClick={() => {
            (a(`Personalización guardada`), e());
          }}
        >
          <Check />
          {` Guardar cambios`}
        </button>
      </section>
    </div>
  );
}
function PageTitle({ eyebrow: e, title: t, body: n, children: r }) {
  return (
    <div className={`page-title`}>
      <div>
        <span>{e}</span>
        <h1>{t}</h1>
        <p>{n}</p>
      </div>
      {r}
    </div>
  );
}
function Overview({ products: e, navigate: t, ownerName: n }) {
  let r = n.trim() ? `¡Bienvenido/a, ${n.trim()}!` : `¡Bienvenido/a a ENLIVA!`;
  return (
    <JsxRuntime.Fragment>
      <PageTitle
        eyebrow={`CENTRO DE OPERACIONES`}
        title={r}
        body={`Esto es lo que está pasando hoy en tu tienda.`}
      />
      <section className={`overview-hero`}>
        <div>
          <span>{`CAMPAÑA ACTIVA · META ADS`}</span>
          <h2>
            {`Berberina: del anuncio`}
            <br />
            {`a la compra, `}
            <em>{`sin perder el contacto.`}</em>
          </h2>
          <p>{`El chatbot está atendiendo consultas y derivando intención de compra hacia Mercado Libre.`}</p>
          <button onClick={() => t(`flows`)}>
            {`Ver automatización `}
            <ArrowRight />
          </button>
        </div>
        <div className={`campaign-score`}>
          <span>{`RENDIMIENTO`}</span>
          <strong>
            {`8.4`}
            <small>{`/10`}</small>
          </strong>
          <p>
            <i />
            {` Campaña saludable`}
          </p>
        </div>
      </section>
      <section className={`stat-grid`}>
        <Stat
          icon={Users}
          label={`Leads capturados`}
          value={`184`}
          change={`+22%`}
        />
        <Stat
          icon={MessageCircle}
          label={`Conversaciones`}
          value={`73`}
          change={`+14%`}
        />
        <Stat
          icon={ExternalLink}
          label={`Inicios de pago`}
          value={`46`}
          change={`+31%`}
        />
        <Stat
          icon={ShoppingBag}
          label={`Productos activos`}
          value={String(e.filter((e) => e.active).length)}
          change={`Tienda`}
        />
      </section>
      <section className={`dashboard-grid`}>
        <div className={`panel`}>
          <header>
            <div>
              <span>{`EMBUDO DE CONVERSIÓN`}</span>
              <h3>{`Recorrido de esta semana`}</h3>
            </div>
            <button>{`Últimos 7 días⌄`}</button>
          </header>
          <div className={`funnel`}>
            {[
              [`Impresiones`, `12.480`, 100],
              [`Conversaciones`, `382`, 72],
              [`Leads`, `184`, 51],
              [`Clics de compra`, `46`, 28],
            ].map(([e, t, n]) => (
              <div key={e}>
                <span>{e}</span>
                <i>
                  <b
                    style={{
                      width: `${n}%`,
                    }}
                  />
                </i>
                <strong>{t}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className={`panel`}>
          <header>
            <div>
              <span>{`CONVERSACIONES RECIENTES`}</span>
              <h3>{`Contactos con intención`}</h3>
            </div>
            <button onClick={() => t(`leads`)}>{`Ver todos →`}</button>
          </header>
          <LeadRows compact={!0} />
        </div>
      </section>
    </JsxRuntime.Fragment>
  );
}
function Stat({ icon: _Component4, label: t, value: n, change: r }) {
  return (
    <article className={`stat`}>
      <span>
        <_Component4 />
      </span>
      <div>
        <strong>{n}</strong>
        <small>{t}</small>
      </div>
      <b>{r}</b>
    </article>
  );
}
function Products({
  products: e,
  setProducts: t,
  openImport: n,
  openModal: r,
  notify: i,
}) {
  let [a, o] = (0, React.useState)(``),
    s = (0, React.useMemo)(
      () => e.filter((e) => e.name.toLowerCase().includes(a.toLowerCase())),
      [e, a],
    );
  return (
    <JsxRuntime.Fragment>
      <PageTitle
        eyebrow={`CATÁLOGO`}
        title={`Productos`}
        body={`Administra lo que aparece en tu tienda y deriva la compra hacia Mercado Libre.`}
      >
        <div className={`title-actions`}>
          <button className={`secondary`} onClick={n}>
            <Upload />
            {` Carga masiva`}
          </button>
          <button className={`primary`} onClick={r}>
            <Plus />
            {` Agregar producto`}
          </button>
        </div>
      </PageTitle>
      <section className={`panel products-panel`}>
        <div className={`list-tools`}>
          <label>
            <Search />
            <input
              placeholder={`Buscar producto`}
              value={a}
              onChange={(e) => o(e.target.value)}
            />
          </label>
          <span>
            {s.length}
            {` productos`}
          </span>
        </div>
        <div className={`product-table`}>
          <div className={`product-table-head`}>
            <span>{`PRODUCTO`}</span>
            <span>{`PRECIO`}</span>
            <span>{`INVENTARIO`}</span>
            <span>{`CANAL DE VENTA`}</span>
            <span>{`ESTADO`}</span>
            <span />
          </div>
          {s.map((e) => (
            <article key={e.id}>
              <ProductVisual product={e} />
              <div>
                <strong>{e.name}</strong>
                <small>
                  {e.category}
                  {` · SKU LM-`}
                  {String(e.id).padStart(3, `0`)}
                </small>
              </div>
              <strong>{money.format(e.price)}</strong>
              <span>
                {e.stock}
                {` unidades`}
              </span>
              <span className={`marketplace`}>{`MERCADO LIBRE`}</span>
              <button
                className={e.active ? `toggle on` : `toggle`}
                aria-label={`Cambiar estado`}
                onClick={() => {
                  (t((t) =>
                    t.map((t) =>
                      t.id === e.id
                        ? {
                            ...t,
                            active: !t.active,
                          }
                        : t,
                    ),
                  ),
                    i(e.active ? `Producto ocultado` : `Producto publicado`));
                }}
              >
                <i />
              </button>
              <button className={`dots`}>{`•••`}</button>
            </article>
          ))}
        </div>
      </section>
    </JsxRuntime.Fragment>
  );
}
function ProductVisual({ product: e }) {
  return e.images?.[0] ? (
    <div className={`product-visual product-photo`}>
      <img alt={e.name} src={e.images[0]} />
    </div>
  ) : (
    <div className={`product-visual ${e.tone}`}>
      <span>{`LM`}</span>
      <b>{e.name.split(` `)[0]}</b>
      <small>{e.name.split(` `).slice(1).join(` `)}</small>
    </div>
  );
}
var jo = [
  [`Camila Rojas`, `CR`, `Instagram`, `Control de glucosa`, `92`, `Calificado`],
  [`Tomás Vera`, `TV`, `WhatsApp`, `Conocer el producto`, `76`, `Conversando`],
  [`Valentina Soto`, `VS`, `Meta Ads`, `Comprar berberina`, `88`, `Derivado`],
  [`Diego Muñoz`, `DM`, `Sitio web`, `Consultar despacho`, `61`, `Nuevo`],
];
function LeadRows({ compact: e = !1 }) {
  return (
    <div className={e ? `lead-rows compact` : `lead-rows`}>
      {jo.slice(0, e ? 3 : 4).map((t) => (
        <article key={t[0]}>
          <b>{t[1]}</b>
          <div>
            <strong>{t[0]}</strong>
            <small>{t[3]}</small>
          </div>
          {e ? null : <span>{t[2]}</span>}
          <i className={Number(t[4]) > 84 ? `hot` : ``}>{t[4]}</i>
          <em>{t[5]}</em>
          <ChevronRight />
        </article>
      ))}
    </div>
  );
}
function Leads() {
  return (
    <JsxRuntime.Fragment>
      <PageTitle
        eyebrow={`CONTACTOS Y MEMORIA`}
        title={`Leads`}
        body={`Cada conversación conserva su origen, intención y próxima acción.`}
      >
        <button className={`secondary`}>
          <ChartColumn />
          {` Exportar`}
        </button>
      </PageTitle>
      <section className={`stat-grid mini`}>
        <Stat
          icon={Users}
          label={`Total contactos`}
          value={`184`}
          change={`+22%`}
        />
        <Stat
          icon={Sparkles}
          label={`Alta intención`}
          value={`37`}
          change={`20%`}
        />
        <Stat
          icon={ExternalLink}
          label={`Derivados`}
          value={`46`}
          change={`25%`}
        />
      </section>
      <section className={`panel leads-panel`}>
        <header>
          <div>
            <span>{`MEMORIA COMERCIAL`}</span>
            <h3>{`Contactos recientes`}</h3>
          </div>
          <label className={`inline-search`}>
            <Search />
            <input placeholder={`Buscar contacto`} />
          </label>
        </header>
        <LeadRows />
      </section>
    </JsxRuntime.Fragment>
  );
}
function Chatbot({ notify: e }) {
  let [t, n] = (0, React.useState)(!0);
  return (
    <JsxRuntime.Fragment>
      <PageTitle
        eyebrow={`ASISTENTE CONVERSACIONAL`}
        title={`Chatbot de ventas`}
        body={`Responde dudas, captura datos y acompaña a cada persona hacia la compra.`}
      >
        <button
          className={`primary`}
          onClick={() => {
            (n(!t), e(t ? `Chatbot pausado` : `Chatbot activado`));
          }}
        >
          {t ? `Pausar asistente` : `Activar asistente`}
        </button>
      </PageTitle>
      <div className={`bot-layout`}>
        <section className={`panel bot-config`}>
          <header>
            <div>
              <span>{`IDENTIDAD`}</span>
              <h3>{`Asistente La Movida`}</h3>
            </div>
            <i className={t ? `online` : ``}>{t ? `ACTIVO` : `PAUSADO`}</i>
          </header>
          <label>
            {`NOMBRE DEL ASISTENTE`}
            <input defaultValue={`Mila`} />
          </label>
          <label>
            {`MENSAJE DE BIENVENIDA`}
            <textarea
              defaultValue={`¡Hola! Soy Mila de La Movida Natural 🌿 ¿En qué te puedo ayudar hoy?`}
            />
          </label>
          <label>
            {`OBJETIVO PRINCIPAL`}
            <select defaultValue={`capture`}>
              <option
                value={`capture`}
              >{`Calificar y derivar a Mercado Libre`}</option>
              <option>{`Responder preguntas frecuentes`}</option>
            </select>
          </label>
          <label>
            {`TONO DE VOZ`}
            <select defaultValue={`friendly`}>
              <option
                value={`friendly`}
              >{`Cercano, claro y responsable`}</option>
              <option>{`Formal y directo`}</option>
            </select>
          </label>
          <button
            className={`primary`}
            onClick={() => e(`Configuración guardada`)}
          >
            <Check />
            {` Guardar cambios`}
          </button>
        </section>
        <section className={`phone-preview`}>
          <div className={`phone`}>
            <header>
              <span>{`LM`}</span>
              <div>
                <strong>{`La Movida Natural`}</strong>
                <small>{`En línea`}</small>
              </div>
              <i>{`•••`}</i>
            </header>
            <div className={`phone-chat`}>
              <time>{`HOY, 16:42`}</time>
              <p>{`¡Hola! Soy Mila de La Movida Natural 🌿 ¿En qué te puedo ayudar hoy?`}</p>
              <p className={`user`}>{`Quiero saber más sobre la berberina`}</p>
              <p>{`Claro. Puedo contarte sobre el producto, sus ingredientes y cómo comprarlo. ¿Qué te gustaría saber?`}</p>
              <div>
                <button>{`Ver producto`}</button>
                <button>{`Hablar con una persona`}</button>
              </div>
            </div>
            <footer>
              {`Escribe un mensaje… `}
              <span>{`➤`}</span>
            </footer>
          </div>
          <small>{`VISTA PREVIA · WHATSAPP`}</small>
        </section>
      </div>
    </JsxRuntime.Fragment>
  );
}
function Flows({ notify: e }) {
  return (
    <JsxRuntime.Fragment>
      <PageTitle
        eyebrow={`AUTOMATIZACIÓN`}
        title={`Recorrido de ventas`}
        body={`Conecta anuncios, conversaciones y compra con reglas fáciles de revisar.`}
      >
        <button
          className={`primary`}
          onClick={() => e(`Nueva automatización creada`)}
        >
          <Plus />
          {` Crear automatización`}
        </button>
      </PageTitle>
      <section className={`flow-canvas`}>
        <header>
          <div>
            <i />
            <span>
              <strong>{`Campaña Berberina · Conversión`}</strong>
              <small>{`Última ejecución: hace 8 min`}</small>
            </span>
          </div>
          <b>{`ACTIVA`}</b>
        </header>
        <div className={`flow-line`}>
          <FlowNode
            icon={Zap}
            tag={`DISPARADOR`}
            title={`Nuevo mensaje`}
            body={`Meta Ads, Instagram o WhatsApp`}
          />
          <ArrowRight />
          <FlowNode
            icon={Bot}
            tag={`CONVERSACIÓN`}
            title={`Mila califica`}
            body={`Detecta intención y captura contacto`}
          />
          <ArrowRight />
          <FlowNode
            icon={CircleQuestionMark}
            tag={`CONDICIÓN`}
            title={`¿Intención alta?`}
            body={`Score igual o mayor a 75`}
          />
          <ArrowRight />
          <FlowNode
            icon={ExternalLink}
            tag={`ACCIÓN`}
            title={`Enviar producto`}
            body={`Abre publicación en Mercado Libre`}
          />
        </div>
        <div className={`flow-result`}>
          <Check />
          <span>
            <strong>{`46 personas derivadas esta semana`}</strong>
            <small>{`La trazabilidad permanece en ENLIVA aunque la compra termine en Mercado Libre.`}</small>
          </span>
        </div>
      </section>
    </JsxRuntime.Fragment>
  );
}
function FlowNode({ icon: _Component5, tag: t, title: n, body: r }) {
  return (
    <article>
      <span>
        <_Component5 />
      </span>
      <small>{t}</small>
      <strong>{n}</strong>
      <p>{r}</p>
      <button>{`Configurar`}</button>
    </article>
  );
}
var Lo = [`nombre`, `precio_clp`, `stock`],
  Ro = [
    `categoria`,
    `descripcion`,
    `precio_comparacion_clp`,
    `activo`,
    `destacado`,
    `url_imagen`,
    `url_mercadolibre`,
  ],
  zo = (e) =>
    String(e ?? ``)
      .trim()
      .toLowerCase()
      .normalize(`NFD`)
      .replace(/[\u0300-\u036f]/g, ``)
      .replace(/\s+/g, `_`),
  Bo = (e, t) => e[t] ?? e[Object.keys(e).find((e) => zo(e) === t) ?? ``],
  Vo = (e) =>
    ![`false`, `0`, `no`, `inactivo`].includes(
      String(e ?? ``)
        .trim()
        .toLowerCase(),
    ),
  Ho = (e) =>
    e
      .toLowerCase()
      .normalize(`NFD`)
      .replace(/[\u0300-\u036f]/g, ``)
      .replace(/[^a-z0-9]+/g, `-`)
      .replace(/(^-|-$)/g, ``)
      .slice(0, 64) || `producto-${Date.now()}`;
function downloadImportTemplate() {
  let e = [...Lo, ...Ro],
    t = [
      `Ejemplo de producto`,
      `19990`,
      `25`,
      `Bienestar`,
      `Descripción breve y clara del producto.`,
      `24990`,
      `si`,
      `Nuevo`,
      ``,
      ``,
    ],
    n = (e) => `"${e.replaceAll(`"`, `""`)}"`,
    r = new Blob(
      [
        [e, t].map((e) => e.map(n).join(`,`)).join(`
`),
      ],
      {
        type: `text/csv;charset=utf-8`,
      },
    ),
    i = document.createElement(`a`);
  ((i.href = URL.createObjectURL(r)),
    (i.download = `plantilla-productos-nexo.csv`),
    i.click(),
    URL.revokeObjectURL(i.href));
}
function readCsv(e) {
  let t = [],
    n = [],
    r = ``,
    i = !1;
  for (let a = 0; a < e.length; a += 1) {
    let o = e[a],
      s = e[a + 1];
    o === `"`
      ? i && s === `"`
        ? ((r += `"`), (a += 1))
        : (i = !i)
      : o === `,` && !i
        ? (n.push(r), (r = ``))
        : (o ===
              `
` ||
              o === `\r`) &&
            !i
          ? (o === `\r` &&
              s ===
                `
` &&
              (a += 1),
            n.push(r),
            n.some(Boolean) && t.push(n),
            (n = []),
            (r = ``))
          : (r += o);
  }
  return (n.push(r), n.some(Boolean) && t.push(n), t);
}
function BulkImportModal({ close: e, importProducts: t }) {
  let [n, r] = (0, React.useState)(``),
    [i, a] = (0, React.useState)([]),
    [o, s] = (0, React.useState)([]),
    [c, l] = (0, React.useState)(!1);
  async function u(e) {
    (l(!0), r(e.name), a([]), s([]));
    try {
      let t = e.name.toLowerCase().endsWith(`.csv`)
        ? readCsv(await e.text())
        : await readSheet(e);
      if (t.length < 2) throw Error(`El archivo no contiene productos.`);
      let n = t[0].map(zo),
        r = Lo.filter((e) => !n.includes(e));
      if (r.length)
        throw Error(`Faltan columnas obligatorias: ${r.join(`, `)}.`);
      let i = t.slice(1).filter((e) => e.some((e) => String(e ?? ``).trim()));
      if (i.length > 5e3)
        throw Error(
          `Cada carga admite hasta 5.000 productos. Divide el archivo e intenta nuevamente.`,
        );
      let o = [],
        c = [];
      (i.forEach((e, t) => {
        let r = t + 2,
          i = Object.fromEntries(n.map((t, n) => [t, e[n] ?? ``])),
          a = String(Bo(i, `nombre`)).trim(),
          s = Number(
            String(Bo(i, `precio_clp`))
              .replace(/[^0-9.,-]/g, ``)
              .replace(`,`, `.`),
          ),
          l = Number(String(Bo(i, `stock`)).replace(/[^0-9-]/g, ``));
        (a ||
          c.push({
            row: r,
            message: `Falta nombre.`,
          }),
          (!Number.isFinite(s) || s < 0) &&
            c.push({
              row: r,
              message: `precio_clp debe ser un número mayor o igual a 0.`,
            }),
          (!Number.isInteger(l) || l < 0) &&
            c.push({
              row: r,
              message: `stock debe ser un número entero mayor o igual a 0.`,
            }),
          o.push({
            slug: Ho(a),
            name: a,
            price: s,
            stock: l,
            mlUrl: String(Bo(i, `url_mercadolibre`)).trim() || void 0,
            category: String(Bo(i, `categoria`)).trim() || `Bienestar`,
            description:
              String(Bo(i, `descripcion`)).trim() ||
              `Producto disponible en La Movida Natural.`,
            compareAt:
              Number(
                String(Bo(i, `precio_comparacion_clp`))
                  .replace(/[^0-9.,-]/g, ``)
                  .replace(`,`, `.`),
              ) || void 0,
            active: Vo(Bo(i, `activo`)),
            badge: String(Bo(i, `destacado`)).trim() || void 0,
            tone: `lime`,
          }));
      }),
        a(o),
        s(c));
    } catch (e) {
      s([
        {
          row: 0,
          message:
            e instanceof Error ? e.message : `No pudimos leer este archivo.`,
        },
      ]);
    } finally {
      l(!1);
    }
  }
  let d = o.length ? 0 : i.length;
  return (
    <div className={`modal-backdrop`} onMouseDown={e}>
      <section
        aria-modal={`true`}
        className={`modal bulk-modal`}
        onMouseDown={(e) => e.stopPropagation()}
        role={`dialog`}
      >
        <button className={`modal-close`} onClick={e}>
          <X />
        </button>
        <span>{`IMPORTACIÓN DE CATÁLOGO`}</span>
        <h2>{`Carga masiva de productos`}</h2>
        <p>{`Sube un archivo Excel o CSV con hasta 5.000 productos. Primero revisamos todos los datos antes de importarlos.`}</p>
        <div className={`bulk-template`}>
          <FileSpreadsheet />
          <div>
            <strong>{`Descarga la plantilla oficial`}</strong>
            <small>{`Incluye encabezados y un ejemplo; Excel abre el archivo directamente.`}</small>
          </div>
          <button onClick={downloadImportTemplate}>
            <Download />
            {` Plantilla CSV`}
          </button>
        </div>
        <label className={`file-drop`}>
          <input
            accept={`.xlsx,.csv`}
            onChange={(e) => {
              let t = e.target.files?.[0];
              t && u(t);
            }}
            type={`file`}
          />
          <Upload />
          <strong>{n || `Selecciona tu archivo Excel o CSV`}</strong>
          <small>{`Formatos permitidos: .xlsx y .csv · Máximo 5.000 filas`}</small>
        </label>
        <div className={`import-fields`}>
          <strong>{`Campos mínimos`}</strong>
          <span>
            <b>{`nombre`}</b>
            <b>{`precio_clp`}</b>
            <b>{`stock`}</b>
          </span>
          <small>
            {`Opcionales: `}
            {Ro.join(`, `)}
            {`.`}
          </small>
        </div>
        {c ? <p className={`import-loading`}>{`Leyendo archivo…`}</p> : null}
        {o.length ? (
          <div className={`import-errors`}>
            <TriangleAlert />
            <div>
              <strong>
                {o[0].row
                  ? `${o.length} problema${o.length > 1 ? `s` : ``} detectado${o.length > 1 ? `s` : ``}`
                  : `Archivo no válido`}
              </strong>
              {o.slice(0, 4).map((e, t) => (
                <small key={`${e.row}-${t}`}>
                  {e.row ? `Fila ${e.row}: ` : ``}
                  {e.message}
                </small>
              ))}
            </div>
          </div>
        ) : null}
        {i.length && !o.length ? (
          <div className={`import-ready`}>
            <Check />
            <span>
              <strong>
                {d.toLocaleString(`es-CL`)}
                {` productos listos para importar`}
              </strong>
              <small>
                {`Se agregarán al catálogo actual y quedarán activos según la columna `}
                <b>{`activo`}</b>
                {`.`}
              </small>
            </span>
          </div>
        ) : null}
        <button
          className={`primary full`}
          disabled={!d || c}
          onClick={() => t(i)}
        >
          <Upload />
          {` Importar `}
          {d ? `${d.toLocaleString(`es-CL`)} productos` : `productos`}
        </button>
      </section>
    </div>
  );
}
function ProductModal({ close: e, save: t }) {
  let [n, r] = (0, React.useState)(``),
    [i, a] = (0, React.useState)(`24990`);
  return (
    <div className={`modal-backdrop`} onMouseDown={e}>
      <section className={`modal`} onMouseDown={(e) => e.stopPropagation()}>
        <button className={`modal-close`} onClick={e}>
          <X />
        </button>
        <span>{`NUEVO PRODUCTO`}</span>
        <h2>{`Agregar al catálogo`}</h2>
        <p>{`Publica una ficha en tu tienda y conecta su destino de compra en Mercado Libre.`}</p>
        <label>
          {`NOMBRE`}
          <input
            autoFocus={!0}
            value={n}
            onChange={(e) => r(e.target.value)}
            placeholder={`Ej. Berberina Premium`}
          />
        </label>
        <div className={`field-row`}>
          <label>
            {`PRECIO CLP`}
            <input value={i} onChange={(e) => a(e.target.value)} />
          </label>
          <label>
            {`INVENTARIO`}
            <input defaultValue={`10`} type={`number`} />
          </label>
        </div>
        <button
          className={`primary full`}
          disabled={!n.trim()}
          onClick={() =>
            t({
              slug: Ho(n),
              name: n,
              category: `Bienestar`,
              price: Number(i),
              stock: 10,
              active: !0,
              tone: `lime`,
              description: `Nuevo producto de La Movida Natural.`,
            })
          }
        >
          <PackagePlus />
          {` Publicar producto`}
        </button>
      </section>
    </div>
  );
}
function Storefront({
  products: e,
  back: t,
  chatOpen: n,
  setChatOpen: r,
  selected: i,
  setSelected: a,
  previewMode: o = !1,
}) {
  let s = e[0] ?? initialProducts[0];
  return (
    (0, React.useEffect)(() => {
      window.scrollTo({
        top: 0,
      });
    }, [i]),
    i ? (
      <ProductDetail product={i} previewMode={o} back={() => a(null)} />
    ) : (
      <div className={`storefront nutre-store`}>
        <div
          className={`announcement`}
        >{`COMPRA EXTERNA EN MERCADO LIBRE · REVISA PRECIO Y DISPONIBILIDAD`}</div>
        <header className={`store-header simple-header`}>
          <button
            className={`store-logo`}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: `smooth`,
              })
            }
          >
            <i>{`LM`}</i>
            <span>
              {`LA MOVIDA`}
              <br />
              <b>{`NATURAL`}</b>
            </span>
          </button>
          <div className={`simple-header-actions`}>
            <button className={`header-help`} onClick={() => r(!0)}>
              <MessageCircle />
              {` Ayuda`}
            </button>
            <a
              className={`header-buy`}
              href={affiliateUrl}
              target={`_blank`}
              rel={`noopener noreferrer`}
              onClick={() => trackAffiliateClick(`header`)}
            >
              <ShoppingBag />
              {` Comprar`}
            </a>
          </div>
        </header>
        <section className={`store-hero nutre-hero`}>
          <div>
            <span>{`FÓRMULA HERBAL 7 EN 1`}</span>
            <h1>
              {`Berberina`}
              <br />
              <em>{`Nutre Pure.`}</em>
            </h1>
            <p>{`Suplemento líquido de 60 ml con siete componentes, información clara y compra externa en Mercado Libre.`}</p>
            <small>{`Suplemento alimenticio · No es un medicamento`}</small>
          </div>
          <ProductGallery product={s} />
        </section>
        <section className={`trust-strip`}>
          <p className={`trust-item`}>
            <span>
              <ShieldCheck />
            </span>
            <strong>{`Información respaldada`}</strong>
            <small>{`Estudios y fuentes visibles`}</small>
          </p>
          <p className={`trust-item`}>
            <span>
              <CreditCard />
            </span>
            <strong>{`Diferentes formas de pago`}</strong>
            <small>{`Pago 100% seguro`}</small>
          </p>
          <p className={`trust-item`}>
            <span>
              <PackageCheck />
            </span>
            <strong>{`Más de 30.000 unidades vendidas`}</strong>
            <small>{`En diferentes plataformas`}</small>
          </p>
          <a className={`trust-item`} href={`#opiniones`}>
            <span>
              <MessageCircle />
            </span>
            <strong>{`Opiniones verificables`}</strong>
            <small>{`Fuente: Mercado Libre`}</small>
          </a>
        </section>
        <IngredientOrbit />
        <section className={`collection single-product`} id={`producto`}>
          <header>
            <div>
              <span>{`ÚNICO PRODUCTO DISPONIBLE`}</span>
              <h2>
                {`Berberina Nutre Pure`}
                <br />
                {`7 en 1.`}
              </h2>
            </div>
            <p>{`Presentación líquida de 60 ml con berberina y extractos herbales. Revisa su ficha, galería e información antes de comprar.`}</p>
          </header>
          <article className={`single-product-card`}>
            <div className={`single-product-image`}>
              <ProductVisual product={s} />
            </div>
            <div>
              <span>{s.category}</span>
              <h3>{s.name}</h3>
              <div className={`marketplace-rating`}>
                <b>{`4,3`}</b>
                <span>{`★★★★☆`}</span>
                <small>{`43 opiniones en Mercado Libre`}</small>
              </div>
              <p>{s.description}</p>
              <div className={`single-price`}>
                <strong>{money.format(s.price)}</strong>
                {s.compareAt ? <del>{money.format(s.compareAt)}</del> : null}
              </div>
              <a
                className={`view-product`}
                href={affiliateUrl}
                target={`_blank`}
                rel={`noopener noreferrer`}
                onClick={() => trackAffiliateClick(`product_card`)}
              >
                {`Comprar `}
                <ArrowRight />
              </a>
              <small className={`buy-note`}>{affiliateNotice}</small>
            </div>
          </article>
        </section>
        <ProductInformation />
        <Reviews />
        <button className={`chat-trigger`} onClick={() => r(!n)}>
          {n ? <X /> : <MessageCircle />}
          <span>{`¿Te ayudamos?`}</span>
        </button>
        {n ? (
          <div className={`store-chat`}>
            <header>
              <span>{`LM`}</span>
              <div>
                <strong>{`Mila · La Movida Natural`}</strong>
                <small>
                  <i />
                  {` En línea`}
                </small>
              </div>
            </header>
            <div>
              <p>{`¡Hola! 🌿 Puedo ayudarte con la Berberina Nutre Pure o resolver dudas sobre la compra.`}</p>
              <button onClick={() => a(s)}>{`Ver la berberina`}</button>
              <button>{`¿Cómo compro?`}</button>
              <button>{`Hablar con una persona`}</button>
            </div>
            <footer>
              {`Escribe tu mensaje… `}
              <span>{`➤`}</span>
            </footer>
          </div>
        ) : null}
      </div>
    )
  );
}
var Jo = [
  {
    id: `96vTY5lUdMQ`,
    title: `Berberina Nutre Pure · Video 1`,
  },
  {
    id: `EyAKKV9F80U`,
    title: `Berberina Nutre Pure · Video 2`,
  },
];
function ProductGallery({ product: e }) {
  let [t, n] = (0, React.useState)(0),
    r = Jo.length + 1,
    i = (e) => n((e + r) % r);
  return (
    <div
      className={`hero-carousel`}
      aria-label={`Galería destacada del producto`}
    >
      <div className={`hero-carousel-stage`}>
        {t === 0 ? (
          <div className={`hero-product hero-bottle-slide`}>
            <i />
            <i />
            <ProductVisual product={e} />
            <span>
              {`60 ML`}
              <br />
              <b>{`FORMATO GOTAS`}</b>
            </span>
          </div>
        ) : (
          <div className={`hero-video-slide`}>
            <iframe
              loading={`lazy`}
              src={`https://www.youtube-nocookie.com/embed/${Jo[t - 1].id}?rel=0`}
              title={Jo[t - 1].title}
              allow={`accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share`}
              referrerPolicy={`strict-origin-when-cross-origin`}
              allowFullScreen={!0}
              key={Jo[t - 1].id}
            />
          </div>
        )}
      </div>
      <div className={`hero-carousel-controls`}>
        <button aria-label={`Ver elemento anterior`} onClick={() => i(t - 1)}>
          <ChevronLeft />
        </button>
        <div
          className={`hero-carousel-dots`}
          aria-label={`Seleccionar elemento del carrusel`}
        >
          {[`Botella`, `Video 1`, `Video 2`].map((e, n) => (
            <button
              aria-current={t === n ? `true` : void 0}
              aria-label={`Ver ${e}`}
              className={t === n ? `active` : ``}
              onClick={() => i(n)}
              key={e}
            />
          ))}
        </div>
        <button aria-label={`Ver elemento siguiente`} onClick={() => i(t + 1)}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
function ProductSummary({ product: e }) {
  let t = e.images?.length ? e.images : productImages,
    [n, r] = (0, React.useState)(t[0]);
  return (
    <div className={`real-product-gallery`}>
      <div className={`gallery-main`}>
        <img alt={`${e.name} - imagen principal`} src={n} />
      </div>
      <div className={`gallery-thumbnails`}>
        {t.map((e, t) => (
          <button
            aria-label={`Ver imagen ${t + 1}`}
            className={n === e ? `active` : ``}
            onClick={() => r(e)}
            key={e}
          >
            <img alt={``} src={e} />
          </button>
        ))}
      </div>
    </div>
  );
}
function Reviews() {
  return (
    <section className={`marketplace-reviews`} id={`opiniones`}>
      <header>
        <div>
          <span>{`OPINIONES DEL PRODUCTO`}</span>
          <h2>{`Lo que dicen compradores en Mercado Libre`}</h2>
          <p>{`Consulta realizada el 20 de octubre de 2026. Se corrigieron únicamente tildes y puntuación para facilitar la lectura.`}</p>
        </div>
        <div className={`review-score`}>
          <strong>{`4,3`}</strong>
          <span>{`★★★★☆`}</span>
          <small>{`43 opiniones · 30 comentarios`}</small>
        </div>
      </header>
      <div className={`review-grid`}>
        {productReviews.map((e, t) => (
          <a
            className={`review-card`}
            href={marketplaceUrl}
            target={`_blank`}
            rel={`noreferrer`}
            aria-label={`Ver esta opinión de ${e.rating} estrellas en Mercado Libre`}
            key={`${e.rating}-${t}`}
          >
            <div>
              <span>
                {`★`.repeat(e.rating)}
                {`☆`.repeat(5 - e.rating)}
              </span>
              <small>{e.age}</small>
            </div>
            <p>
              {`“`}
              {e.text}
              {`”`}
            </p>
            <footer>
              {`Ver opinión en Mercado Libre `}
              <ExternalLink />
            </footer>
          </a>
        ))}
      </div>
      <div className={`review-source`}>
        <p>{`Mercado Libre no entrega un enlace público independiente para cada comentario; cada tarjeta abre la publicación donde se encuentran las opiniones originales.`}</p>
        <a href={marketplaceUrl} target={`_blank`} rel={`noreferrer`}>
          {`Ver publicación original `}
          <ExternalLink />
        </a>
      </div>
    </section>
  );
}
function ProductDetail({ product: e, back: t }) {
  return (
    <div className={`storefront nutre-store`}>
      <header className={`store-header detail-header`}>
        <button className={`store-logo`} onClick={t}>
          <i>{`LM`}</i>
          <span>
            {`LA MOVIDA`}
            <br />
            <b>{`NATURAL`}</b>
          </span>
        </button>
        <button
          className={`back-to-store`}
          onClick={t}
        >{`← Volver a la tienda`}</button>
      </header>
      <main className={`product-detail`}>
        <button className={`breadcrumb`} onClick={t}>
          {`Productos / `}
          <b>{e.name}</b>
        </button>
        <div className={`product-detail-grid`}>
          <ProductSummary product={e} />
          <section>
            <span>{e.category}</span>
            <h1>{e.name}</h1>
            <div className={`reviews`}>
              {`★★★★☆ `}
              <small>{`4,3 · 43 opiniones en Mercado Libre`}</small>
            </div>
            <div className={`detail-price`}>
              <strong>{money.format(e.price)}</strong>
              {e.compareAt ? <del>{money.format(e.compareAt)}</del> : null}
            </div>
            <p>{e.description}</p>
            <ul>
              <li>
                <Check />
                {` Fórmula líquida 7 en 1`}
              </li>
              <li>
                <Check />
                {` Contenido neto: 60 ml`}
              </li>
              <li>
                <Check />
                {` Libre de gluten y lactosa según la publicación`}
              </li>
            </ul>
            <a
              className={`buy-button`}
              href={affiliateUrl}
              target={`_blank`}
              rel={`noopener noreferrer`}
              onClick={() => trackAffiliateClick(`product_detail`)}
            >
              <ShoppingBag />
              {` Continuar compra en Mercado Libre `}
              <ExternalLink />
            </a>
            <small className={`buy-note`}>{affiliateNotice}</small>
            <div className={`detail-help`}>
              <MessageCircle />
              <span>
                <strong>{`¿Tienes dudas antes de comprar?`}</strong>
                <small>{`Conversa con Mila o solicita atención de una persona.`}</small>
              </span>
            </div>
          </section>
        </div>
      </main>
      <Reviews />
    </div>
  );
}
var $o = `nexo:demo:la-movida:berberina:v1`,
  es = {
    role: `bot`,
    text: `Hola, soy Mila, el asistente de prueba de La Movida Natural. Puedo mostrarte cómo consultar por el producto, packs, compra o entrega. Uso respuestas de demostración, sin IA conectada. No compartas datos personales ni de salud.`,
  };
function replyToBuyer(e, t) {
  let n = e
      .normalize(`NFD`)
      .replace(/[\u0300-\u036f]/g, ``)
      .toLowerCase(),
    r = `Por aclarar`,
    i = `No tengo información validada para responder eso. Puedes reformular o elegir Atención humana. En esta prueba no se enviará una solicitud real.`;
  return (
    /human|persona|asesor|agente/.test(n)
      ? ((r = `Atención humana`),
        (i = `He marcado esta conversación como pendiente de atención humana en esta prueba local. No se ha notificado a una persona ni hay un agente conectado.`))
      : /dosis|gota|tomar|uso|precauc|embaraz|diabet|medic|glucosa|azucar|salud|beneficio|sirve|efecto|contraindic/.test(
            n,
          )
        ? ((r = `Uso y precauciones`),
          (i = `No tengo una etiqueta contrastada para indicar dosis, beneficios o precauciones específicas. No puedo recomendar este producto según tu salud o medicamentos. Consulta a un profesional de salud para orientación personal. Puedo marcar la consulta para revisión humana, sin enviar datos fuera de esta prueba.`))
        : /envio|entrega|despacho|devol|reembolso|pedido|posventa|llega|reclamo/.test(
              n,
            )
          ? ((r = `Entrega y posventa`),
            (i = `Las zonas, costos, plazos de despacho y políticas de devolución aún deben confirmarse con la tienda. No puedo prometer una fecha ni consultar pedidos reales. Puedes solicitar atención humana de prueba.`))
          : /compr|pago|pagar|precio|cuanto|transfer|descuento|webpay|stock|disponib|afilia/.test(
                n,
              )
            ? ((r = `Compra`),
              (i = `Tu selección de prueba es pack ${t}. Los precios, disponibilidad y condiciones comerciales deben validarse antes de comprar. Los importes de la tienda son datos de la demo. Puedes abrir directamente la publicación del producto en Mercado Libre. No confirma que el pack seleccionado exista allí. ENLIVA no procesa el pago ni aplica descuentos.`))
            : /pack|present|producto|berberina|formato|frasco|ingrediente/.test(
                n,
              ) &&
              ((r = `Producto y presentaciones`),
              (i = `Estás consultando por Berberina Nutre Pure, presentada en esta demo como un frasco de 60 ml. Puedes explorar packs de 1, 2, 3, 4 o 6 unidades; seleccionaste ${t}. Son opciones de prueba, no ofertas ni stock confirmados. La composición debe contrastarse con la etiqueta antes de dar indicaciones.`)),
    {
      role: `bot`,
      text: i,
      category: r,
      showAffiliate: r === `Compra`,
    }
  );
}
function loadDemoMessages() {
  try {
    let e = JSON.parse(sessionStorage.getItem($o) || `null`);
    if (
      Array.isArray(e) &&
      e.every(
        (e) =>
          e && [`buyer`, `bot`].includes(e.role) && typeof e.text == `string`,
      )
    )
      return e.slice(-80);
  } catch {}
  return [es];
}
function DemoPage() {
  let [e, t] = (0, React.useState)(!1),
    [n, r] = (0, React.useState)(!1),
    [i, a] = (0, React.useState)(null),
    [o, s] = (0, React.useState)(`1`),
    [c, l] = (0, React.useState)(loadDemoMessages),
    [u, d] = (0, React.useState)(``),
    [f, p] = (0, React.useState)(!0),
    m = (0, React.useRef)(null);
  (0, React.useEffect)(() => {
    try {
      (sessionStorage.setItem($o, JSON.stringify(c)), p(!0));
    } catch {
      p(!1);
    }
    m.current?.scrollTo(0, m.current.scrollHeight);
  }, [c, n]);
  function h(e) {
    if (!e.trim()) return;
    let t = `${i || `Portada · Berberina Nutre Pure`} · pack ${o}`;
    (l((n) =>
      [
        ...n,
        {
          role: `buyer`,
          text: e.trim().slice(0, 1e3),
          context: t,
        },
        {
          ...replyToBuyer(e, o),
          context: t,
        },
      ].slice(-80),
    ),
      d(``));
  }
  return (
    <div className={`nexo-demo`}>
      <div className={`demo-banner`}>
        <strong>{`ENLIVA · PRUEBA DE COMPRADOR`}</strong>
        <span>{`Anuncio simulado · Sin IA · Compra externa`}</span>
        <button
          onClick={() => {
            (t(!1), r(!1));
          }}
        >{`Ver anuncio`}</button>
      </div>
      {e ? (
        <JsxRuntime.Fragment>
          <div
            className={`demo-store`}
            onClickCapture={(e) => {
              e.target
                .closest(`.header-help, nav button`)
                ?.textContent?.trim() === `Ayuda` &&
                (e.preventDefault(), e.stopPropagation(), r(!0));
            }}
          >
            <App previewMode={!0} onProductChange={a} />
          </div>
          <button
            className={`demo-launcher`}
            onClick={() => r(!n)}
            aria-expanded={n}
          >
            {n ? `Cerrar conversación` : `Conversar con Mila`}
          </button>
          {n && (
            <section
              className={`demo-chat`}
              aria-label={`Chat de prueba de La Movida Natural`}
            >
              <header>
                <div>
                  <strong>{`Mila · La Movida Natural`}</strong>
                  <small>{`Demostración · respuestas por reglas`}</small>
                </div>
                <button
                  aria-label={`Cerrar chat`}
                  onClick={() => r(!1)}
                >{`×`}</button>
              </header>
              <div className={`demo-context`}>
                <span>
                  {i ? `Ficha del producto` : `Portada de la tienda`}
                  {` · Berberina`}
                </span>
                <label>
                  {`Pack de prueba `}
                  <select
                    aria-label={`Pack de prueba`}
                    value={o}
                    onChange={(e) => s(e.target.value)}
                  >
                    {[1, 2, 3, 4, 6].map((e) => (
                      <option value={e} key={e}>
                        {e}
                        {` `}
                        {e === 1 ? `unidad` : `unidades`}
                      </option>
                    ))}
                  </select>
                </label>
                <small>{`Selección de contexto; no es un carrito ni una reserva.`}</small>
              </div>
              <div
                className={`demo-messages`}
                ref={m}
                role={`log`}
                aria-live={`polite`}
              >
                {c.map((e, t) => (
                  <article className={e.role} key={t}>
                    <small>
                      {e.role === `buyer` ? `Tú` : `Mila`}
                      {e.category ? ` · ${e.category}` : ``}
                    </small>
                    <p>{e.text}</p>
                    {e.role === `bot` && e.showAffiliate && (
                      <div className={`demo-affiliate`}>
                        <a
                          href={`https://www.mercadolibre.cl/berberina-nutre-pure-control-azucar-gotas-60-ml/up/MLCU3934624235`}
                          target={`_blank`}
                          rel={`noopener noreferrer`}
                          onClick={() => trackAffiliateClick(`chat`, o)}
                        >{`Continuar compra en Mercado Libre ↗`}</a>
                        <small>{`Compra externa en Mercado Libre. El precio, la disponibilidad y las condiciones se confirman allí.`}</small>
                      </div>
                    )}
                    {e.role === `bot` && e.category && (
                      <div className={`demo-rating`}>
                        <span>{`¿Te ayudó? (opcional)`}</span>
                        {[`Sí`, `No`].map((n) => (
                          <button
                            aria-pressed={e.rating === n}
                            onClick={() =>
                              l((e) =>
                                e.map((e, r) =>
                                  t === r
                                    ? {
                                        ...e,
                                        rating: e.rating === n ? void 0 : n,
                                      }
                                    : e,
                                ),
                              )
                            }
                            key={n}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
              <div className={`demo-quick`}>
                {[
                  `Ver packs`,
                  `Uso y precauciones`,
                  `Cómo comprar`,
                  `Entrega`,
                  `Atención humana`,
                ].map((e) => (
                  <button onClick={() => h(e)} key={e}>
                    {e}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  (e.preventDefault(), h(u));
                }}
              >
                <input
                  aria-label={`Tu mensaje`}
                  placeholder={`Escribe una consulta de prueba…`}
                  value={u}
                  maxLength={1e3}
                  onChange={(e) => d(e.target.value)}
                />
                <button disabled={!u.trim()}>{`Enviar`}</button>
              </form>
              <footer>
                <span>
                  {f
                    ? `Historial, valoración y salidas: solo esta pestaña, hasta cerrarla.`
                    : `Almacenamiento no disponible: historial solo en memoria.`}
                  {` Sin envío a un servidor.`}
                </span>
                <button onClick={() => l([es])}>{`Borrar conversación`}</button>
              </footer>
            </section>
          )}
        </JsxRuntime.Fragment>
      ) : (
        <main className={`demo-ad-page`}>
          <div className={`demo-ad-intro`}>
            <span>{`01 / DEL ANUNCIO A LA CONVERSACIÓN`}</span>
            <h1>
              {`Prueba la experiencia`}
              <br />
              {`como comprador.`}
            </h1>
            <p>{`Este anuncio es una simulación. No se publica ni genera gasto. Los enlaces a Mercado Libre sí abren una página externa real.`}</p>
          </div>
          <article className={`demo-ad`}>
            <small>{`LA MOVIDA NATURAL · ANUNCIO SIMULADO`}</small>
            <img
              src={`/products/berberina/01-frasco.webp`}
              alt={`Frasco de Berberina Nutre Pure`}
            />
            <h2>{`Conoce la Berberina Nutre Pure`}</h2>
            <p>{`Explora la ficha y consulta tus dudas al asistente de demostración.`}</p>
            <button
              onClick={() => {
                (t(!0), r(!1));
              }}
            >{`Ver producto y conversar →`}</button>
          </article>
          <p
            className={`demo-ad-foot`}
          >{`Mila atiende al comprador de esta tienda. El futuro asistente ENLIVA del operador es un rol separado y no forma parte de esta prueba.`}</p>
        </main>
      )}
    </div>
  );
}
export { App, DemoPage };
