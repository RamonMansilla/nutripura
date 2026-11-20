import React, { useState } from 'react';
import { ArrowUpRight, Check, Leaf, Menu, X } from 'lucide-react';
import './pure-storefront.css';
const products = [
 {id:'berberina', name:'Berberina Nutre Pure', tag:'Fórmula herbal · 7 en 1', size:'60 ml', price:'$24.990', image:'/products/berberina/01-frasco.png', detail:'/products/berberina/03-ingredientes.webp', description:'Berberina, canela de Ceilán, cromo, melón amargo, cúrcuma, Panax ginseng y glucomanano, en formato líquido.', caution:'Si tomas medicamentos para la glucosa, consulta con tu profesional de salud antes de usar berberina.', url:'https://www.mercadolibre.cl/berberina-nutre-pure-control-azucar-gotas-60-ml/up/MLCU3934624235'},
 {id:'magnesio', name:'Magnesium Complex Nutre Pure', tag:'Complejo mineral · Formato líquido', size:'50 ml', price:'$14.850', image:'/products/magnesio/frasco.png', detail:'/products/magnesio/03-ingredientes.webp', description:'Magnesio con glicinato, citrato y malato, vitamina B6, zinc, potasio y minerales traza, según la publicación del vendedor.', caution:'Si tienes enfermedad renal o tomas medicamentos, consulta con tu profesional de salud antes de usar magnesio.', url:'https://www.mercadolibre.cl/magnesium-complex-magnesio-gotas-descanso-muscular-50-ml/up/MLCU5850421298'}
];
function Gallery({product}) {
 const [selected,setSelected]=useState(0);
 const [failed,setFailed]=useState(false);
 const images=[product.image,product.detail];
 return <div className="pure-gallery">
   <div className="pure-photo">{failed ? <p role="status">No pudimos cargar la imagen. <button onClick={()=>{setFailed(false);setSelected(0)}}>Volver a la foto del frasco</button></p> : <img key={images[selected]} src={images[selected]} alt={`${product.name}: ${selected ? 'composición de la fórmula' : 'frasco'}`} onError={()=>setFailed(true)}/>}<span>{product.size} · Gotas</span></div>
   <div className="pure-thumbnails" aria-label="Imágenes del producto">{images.map((src,index)=><button key={src} aria-label={index?'Ver composición':'Ver frasco'} aria-pressed={selected===index} onClick={()=>{setSelected(index);setFailed(false)}}><img src={src} alt=""/> <span>{index?'Composición':'Frasco'}</span></button>)}</div>
 </div>
}
export default function PureStorefront(){
 const [selected,setSelected]=useState(0);
 const [menu,setMenu]=useState(false);
 const p=products[selected];
 function choose(index){setSelected(index);setMenu(false);history.replaceState(null,'',`#${products[index].id}`)}
 React.useEffect(()=>{const sync=()=>{const i=products.findIndex(p=>`#${p.id}`===location.hash);if(i>=0)setSelected(i)};sync();window.addEventListener('hashchange',sync);return()=>window.removeEventListener('hashchange',sync)},[]);
 return <div className="pure-site" id="inicio">
 <a className="pure-skip" href="#producto">Saltar al producto</a>
 <div className="pure-announcement">Compra en Mercado Libre · Precio, stock y despacho se confirman allí</div>
 <header className="pure-header"><a className="pure-logo" href="#inicio">NUTRICIÓN<span>PURA</span></a><nav aria-label="Principal"><a href="#producto">Productos</a><a href="#comparar">Comparar fórmulas</a><a href="#preguntas">Preguntas frecuentes</a></nav><button className="pure-menu" aria-label={menu?'Cerrar menú':'Abrir menú'} aria-expanded={menu} aria-controls="pure-mobile-nav" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
 {menu&&<nav id="pure-mobile-nav" className="pure-mobile-nav" aria-label="Navegación móvil">{[['#producto','Productos'],['#comparar','Comparar fórmulas'],['#preguntas','Preguntas frecuentes']].map(([href,label])=><a href={href} key={href} onClick={()=>setMenu(false)}>{label}</a>)}</nav>}
 <main><div className="pure-breadcrumb">Productos / <span>{p.name}</span></div>
 <section className="pure-product" id="producto" aria-label="Ficha de producto">
 <Gallery key={p.id} product={p}/>
 <div className="pure-buybox"><p className="pure-eyebrow">NUTRE PURE · SUPLEMENTO ALIMENTICIO</p><div className="pure-selector" aria-label="Elegir producto">{products.map((product,index)=><button key={product.id} aria-pressed={selected===index} onClick={()=>choose(index)}>{index?'Magnesio':'Berberina'}</button>)}</div>
 <div key={p.id} aria-live="polite"><h1>{p.name}</h1><p className="pure-tag">{p.tag}</p><p className="pure-description">{p.description}</p><ul className="pure-facts"><li><Check aria-hidden="true"/>Contenido neto: {p.size}</li><li><Check aria-hidden="true"/>Presentación en gotas</li><li><Check aria-hidden="true"/>Consulta composición y etiqueta antes de usar</li></ul>
 <div className="pure-price"><strong>{p.price}</strong><span>CLP · Precio de referencia</span></div>
 <a className="pure-buy" href={p.url} target="_blank" rel="noopener noreferrer">Ver y comprar en Mercado Libre <ArrowUpRight aria-hidden="true"/></a><p className="pure-disclosure">Se abre una nueva pestaña. Confirma el precio final, la disponibilidad, el envío y las devoluciones antes de pagar.</p></div>
 <div className="pure-care"><Leaf aria-hidden="true"/><p>{p.caution}</p></div>
 <details><summary>Cómo usarlo y qué revisar</summary><p>Sigue la dosis y las advertencias de la etiqueta. No superes la cantidad recomendada. Confirma los ingredientes y la cantidad por porción en la publicación del vendedor.</p></details>
 <details><summary>Pago, entrega y devoluciones</summary><p>La compra se completa en Mercado Libre. Allí podrás revisar los medios de pago, la entrega para tu dirección y las condiciones de devolución. Esta página no reserva productos ni procesa pagos.</p></details>
 </div></section>
 <section className="pure-comparison" id="comparar"><p className="pure-eyebrow">ELIGE CON INFORMACIÓN</p><h2>Dos fórmulas. Distintas composiciones.</h2><p>Compara antes de elegir. La evidencia de un ingrediente no garantiza el resultado de una fórmula comercial.</p><div className="pure-comparison-grid">{products.map((product,index)=><article key={product.id}><span>{product.size} · Formato líquido</span><h3>{product.name}</h3><p>{product.description}</p><p className="pure-warning">{product.caution}</p><a href={`#${product.id}`} onClick={()=>{choose(index);document.getElementById('producto').scrollIntoView()}}>Ver {index?'magnesio':'berberina'} <ArrowUpRight aria-hidden="true"/></a></article>)}</div></section>
 <section className="pure-faq" id="preguntas"><div><p className="pure-eyebrow">ANTES DE DECIDIR</p><h2>Tus preguntas, con calma.</h2><p>Información para acompañar una elección consciente.</p></div><div>{[
 ['¿Es un medicamento?','No. Son suplementos alimenticios. No diagnostican, tratan, curan ni previenen enfermedades y no reemplazan un tratamiento indicado por tu médico.'],
 ['¿Puedo usar ambos productos?','No asumas que combinar suplementos es apropiado para ti. Consulta con un profesional de salud, especialmente si tomas medicamentos o tienes una condición médica.'],
 ['¿Dónde se completa la compra?','El botón de cada producto abre su publicación en Mercado Libre en una nueva pestaña. Allí se confirman precio, stock, envío y condiciones de compra. Si no se abre, revisa el bloqueo de ventanas de tu navegador y vuelve a intentarlo.'],
 ['¿Dónde puedo revisar la evidencia?','Puedes consultar las fuentes independientes enlazadas debajo. Sus conclusiones se refieren a ingredientes y no certifican estos productos comerciales.']
 ].map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}<div className="pure-sources"><a href="https://www.nccih.nih.gov/health/diabetes-and-dietary-supplements" target="_blank" rel="noopener noreferrer">NCCIH: diabetes y suplementos ↗</a><a href="https://ods.od.nih.gov/factsheets/Magnesium-Consumer/" target="_blank" rel="noopener noreferrer">NIH: magnesio ↗</a></div></div></section>
 </main><footer className="pure-footer"><a className="pure-logo" href="#inicio">NUTRICIÓN<span>PURA</span></a><p>Información clara para elegir con calma.</p><nav aria-label="Pie de página"><a href="#berberina" onClick={()=>choose(0)}>Berberina</a><a href="#magnesio" onClick={()=>choose(1)}>Magnesio</a><a href="#preguntas">Preguntas frecuentes</a><a href="#inicio">Volver arriba</a></nav><small>© 2026 Nutrición Pura · Los suplementos alimenticios no reemplazan una alimentación equilibrada ni las indicaciones de un profesional de salud.</small></footer></div>
}
