/* empty css                                */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, f as renderSlot } from '../astro_ojMSZEYH.mjs';
import { $ as $$Contenedor, a as $$Layout } from './404_dflsk_Ki.mjs';
/* empty css                          */
import { $ as $$SocialMedia, a as $$Facebook, b as $$Phone, c as $$Instagram, d as $$Mail } from './Sobre Mi_VSHxCzLn.mjs';

const CITY = [
  {
    class: "col-span-10 md:col-span-4",
    title: "Tunja - Boyacá",
    subTitle: "Y sus alrededores",
    img: "city/tunja.avif",
    description: "En mi práctica legal, priorizo la comunicación abierta y transparente con mis clientes. Mi objetivo es asegurarme de que comprendan completamente sus derechos legales y las opciones disponibles para resolver su situación legal de manera satisfactoria."
  },
  {
    class: "col-span-10 md:col-span-6",
    title: "Chiquinquirá - Boyacá",
    subTitle: "Y sus alrededores",
    img: "city/Chiquinquira.avif",
    description: "Mi objetivo es asegurarme de que comprendan completamente sus derechoslegales y las opciones disponibles para resolver su situación legal demanera favorable. Trabajaré incansablemente para proteger sus interesesy buscar la mejor solución posible para su caso."
  },
  {
    class: "col-span-10 md:col-span-6",
    title: "Bogotá - Cundinamarca",
    subTitle: "Y sus alrededores",
    img: "city/bogotá.webp",
    description: "Además de mis servicios de representación legal, ofrezco talleres informativos y sesiones de asesoramiento gratuitas para ayudar a informar a nuestros ciudadanos sobre temas legales relevantes, desde sus derechos básicos hasta cómo navegar por el sistema legal con confianza."
  },
  {
    class: "col-span-10 md:col-span-4",
    title: "Barbosa - Santander",
    subTitle: "Y sus alrededores",
    img: "city/Barbosa.avif",
    description: "Me encargo de representar a trabajadores y empleadores en casos relacionados con el ámbito laboral. Estos casos pueden involucrar disputas sobre despidos injustificados, discriminación, incumplimiento de contratos laborales, condiciones de trabajo, y otras cuestiones relacionadas con el empleo. "
  }
];

const $$Astro$c = createAstro("https://www.abogadasandraalba.com");
const $$GrillasBento = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$GrillasBento;
  return renderTemplate`${renderComponent($$result, "Container", $$Contenedor, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="grid grid-cols-10 auto-rows-[400px] gap-5 mx-auto px-10 text-white/80 my-10"> ${CITY.map((cities) => renderTemplate`<article${addAttribute(`${cities.class} relative group overflow-hidden rounded-xl backdrop-blur-md border border-black/10 shadow-inner shadow-white/10`, "class")}> <div class="absolute z-100 bottom-0 top-0 size-full bg-gradient-to-b from-transparent from-40% via-black/50 to-black/80"></div> <div class="absolute left-0 top-0 bottom-0 object-cover object-center w-full
      h-full group-hover:scale-110 group-hover:bg-white transition-scale duration-1000
      ease-in-out opacity-90 bg-blend-luminosity bg-center bg-cover bg-no-repeat bg-transparent -z-10"${addAttribute(`background-image: url("${cities.img}");`, "style")}></div> <div class="relative select-none flex flex-col gap-1 p-4 text-lg z-20 justify-end h-full"> <h2 class="text-3xl font-bold text-balance text-[#f1e9d0] mb-1"> ${cities.title} </h2> ${cities.subTitle && renderTemplate`<h4 class="text-xl font-bold  text-[#f1e9d0]"> ${cities.subTitle} </h4>`} <p class="max-w-xl text-base font-extralight">${cities.description}</p> </div> </article>`)} </section> ` })}`;
}, "C:/Users/neider_nieto/Desktop/Web/portfolio Sandra/src/components/GrillasBento.astro", void 0);

const $$Astro$b = createAstro("https://www.abogadasandraalba.com");
const $$Deal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Deal;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Business_1_Bold_16_"> <path d="M338.564,35.65c-11.882-11.913-31.328-11.913-43.195,0l-6.324,6.339c-11.882,11.913-11.882,31.405,0,43.302l0.505,0.505 c-9.509,6.14-23.917,15.527-39.811,26.245c-14.546-17.93-32.354-34.529-40.638-41.909c2.113-9.846-0.582-20.533-8.161-28.143 l-6.324-6.339c-11.882-11.913-31.328-11.913-43.195,0L8.912,178.511c-11.882,11.913-11.882,31.405,0,43.303l6.324,6.339 c9.233,9.248,22.983,11.224,34.253,6.094c5.91,8.314,20.916,29.093,39.964,53.179c-10.489,10.764-27.271,31.068-27.975,51.647 c-0.337,10.167,3.231,19.339,10.32,26.49c21.957,22.187,87.6,87.815,87.6,87.815l1.96,1.654c0.873,0.612,12.005,8.253,30.042,8.253 c14.868,0,34.437-5.328,56.762-23.917c4.655,3.384,7.671,5.497,8.33,5.941c2.205,1.363,17.67,10.489,34.85,10.489 c5.512,0,11.208-0.949,16.705-3.399c7.334-3.277,16.43-10.274,21.529-25.204c12.801-4.593,28.434-14.883,34.973-33.794 c14.715-3.583,30.364-13.827,35.815-33.671c14.102-1.945,30.302-9.738,36.151-30.578c4.364-15.618,0-29.032-6.844-39.337 c10.244-11.162,23.55-29.797,26.168-52.995c6.906-0.597,13.658-3.399,18.926-8.682l6.324-6.339 c11.882-11.913,11.882-31.405,0-43.303L338.564,35.65z M424.878,221.462c3.399,19.37-7.962,36.596-16.813,46.564l-82.302-77.356 l-10.213,7.273c-20.824,14.792-47.605,1.807-47.819,1.715l-8.835-4.456l-7.717,6.155c-0.245,0.199-24.928,19.645-58.094,22.601 c-2.664,0.245-4.946,0.322-6.921,0.322c-8.299,0-10.902-1.654-10.856-1.485c-0.75-2.71,2.404-13.153,13.429-26.49 c12.495-15.098,80.005-60.835,122.94-88.32L424.878,221.462z M119.066,323.302l-22.172,24.101 c-1.179-1.194-2.343-2.358-3.338-3.369c-1.164-1.179-1.546-2.174-1.485-3.92c0.245-7.671,8.559-19.523,16.874-28.695 C112.283,315.401,115.652,319.351,119.066,323.302z M164.099,414.776c-3.231-3.246-6.768-6.768-10.535-10.55l21.743-23.642 c3.782,3.399,7.534,6.707,11.254,9.922L164.099,414.776z M131.898,382.544c-4.548-4.548-9.034-9.065-13.368-13.398l21.146-22.999 c2.971,3.139,5.956,6.217,8.911,9.187c1.439,1.455,2.925,2.863,4.379,4.303L131.898,382.544z M189.349,432.584l20.748-22.417 c4.486,3.629,8.758,6.997,12.801,10.167C208.228,430.945,196.867,432.982,189.349,432.584z M407.024,320.883 c-2.036,7.273-8.667,8.713-13.367,8.774l-85.411-81.246l-21.115,22.187l83.91,79.806c-1.991,8.712-8.024,12.066-13.551,13.26 l-84.277-80.174l-21.115,22.187l82.915,78.872c-3.047,7.212-9.034,11.055-13.781,13.015l-83.022-78.979l-21.115,22.187 l82.608,78.597c-0.995,2.22-2.327,4.18-4.15,5.007c-5.528,2.542-17.103-1.608-22.325-4.716 c-0.551-0.398-56.823-39.75-102.973-86.008c-43.149-43.256-91.198-110.66-97.645-119.771L191.094,95.107 c8.023,7.289,21.85,20.503,33.288,34.299c-25.847,18.114-50.407,36.642-59.258,47.345c-8.942,10.81-28.48,38.311-16.981,60.146 c7.243,13.781,23.244,19.676,47.651,17.517c30.762-2.725,55.215-16.154,67.005-23.856c12.495,4.272,36.121,9.463,59.38-1.271 l81.353,76.453C406.458,309.812,408.678,315.003,407.024,320.883z"></path> </g> </g></svg>`;
}, "C:/Users/neider_nieto/Desktop/Web/portfolio Sandra/src/icons/services/Deal.astro", void 0);

const $$Astro$a = createAstro("https://www.abogadasandraalba.com");
const $$Expert = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Expert;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#351d13" d="M8.92 13.67l-1.61-1.53-1.5-1.42 2-0.29 2.25-0.32 0.29-0.57c-0.006 0-0.013 0-0.020 0-0.482 0-0.884-0.34-0.979-0.794-0.001-0.617 0.799-0.417 1.429-1.457 0.080-0.020 2.82-7.29-2.78-7.29s-2.86 7.27-2.86 7.27c0.63 1 1.44 0.85 1.43 1.45s-0.74 0.8-1.43 0.87c-1.14 0.13-2.14-0.13-3.14 1.76-0.6 1.090-0.85 4.65-0.85 4.65h7.36v-0.17z"></path> <path fill="#351d13" d="M11.72 16h0.56l-0.28-0.14-0.28 0.14z"></path> <path fill="#351d13" d="M12 14.73l2.47 1.27-0.47-2.69 2-1.9-2.76-0.39-1.24-2.45-1.24 2.45-2.76 0.39 2 1.9-0.47 2.69 2.47-1.27z"></path> </g></svg>`;
}, "C:/Users/neider_nieto/Desktop/Web/portfolio Sandra/src/icons/services/Expert.astro", void 0);

const $$Astro$9 = createAstro("https://www.abogadasandraalba.com");
const $$Study = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Study;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">
      .st0 {
        fill: #351d13;
      }
    </style> <g> <path class="st0" d="M463.29,305.295v-84.777h-9.38c-39.71,0-75.128,6.873-104.271,15.713c-3.467-7.023-7.264-14.182-10.956-20.92 c1.59-1.441,3.166-2.919,4.682-4.435c22.331-22.316,36.183-53.253,36.168-87.343c0.016-34.089-13.837-65.026-36.168-87.336 C321.035,13.837,290.089,0,256.007,0c-34.082,0-65.027,13.837-87.343,36.198c-22.331,22.309-36.182,53.246-36.182,87.336 c0,34.09,13.851,65.027,36.182,87.343c1.516,1.516,3.076,3.017,4.682,4.435c-3.706,6.738-7.503,13.897-10.97,20.92 c-29.159-8.84-64.547-15.713-104.257-15.713h-9.38v84.777c-28.318,0.526-39.154,23.877-39.154,52.631 c0,28.754,10.836,52.106,39.154,52.631v67.481l9.035,0.315h0.255c2.836,0.098,28.634,1.208,63.586,5.89 c34.938,4.667,79.044,12.958,118.244,27.193l1.545,0.563h29.22l1.545-0.563c40.445-14.692,86.158-23.044,121.59-27.629 c17.739-2.288,32.896-3.661,43.611-4.456c5.358-0.398,9.604-0.646,12.501-0.811c1.441-0.068,2.536-0.128,3.286-0.15 c0.36-0.023,0.646-0.038,0.811-0.038h0.27l9.049-0.315v-67.481c28.319-0.548,39.124-23.877,39.124-52.631 C502.414,329.172,491.609,305.836,463.29,305.295z M49.746,391.821c-0.315,0-0.646,0-1.006-0.015 c-6.438-0.068-20.395-1.756-20.395-33.879c0-32.131,13.957-33.819,20.395-33.88c0.36-0.022,0.691-0.022,1.006-0.022 c6.498,0,12.576,1.861,17.739,5.043c9.694,5.958,16.147,16.673,16.147,28.859c0,12.186-6.453,22.894-16.147,28.852 C62.322,389.967,56.244,391.821,49.746,391.821z M230.63,286.259v202.262c-38.089-12.126-78.069-19.15-109.974-23.314 c-23.502-3.046-42.576-4.48-53.171-5.125V407.51c20.365-7.293,34.906-26.728,34.906-49.584c0-22.856-14.542-42.299-34.906-49.584 v-68.921c48.863,1.395,90.494,13.536,120.389,25.73c15.893,6.453,28.469,12.914,36.978,17.731c2.192,1.246,4.127,2.371,5.778,3.37 V286.259z M268.884,492.708c-0.495,0.165-1.006,0.353-1.501,0.541h-22.736c-0.495-0.188-0.99-0.376-1.516-0.541V292.396h25.753 V492.708z M256.007,228.682c-28.574,0-54.402-11.353-73.341-29.812c-0.33-0.33-0.66-0.646-1.006-0.975 c-10.28-10.296-18.414-22.669-23.742-36.46c18.459-3.482,35.418-10.445,50.545-19.03c25.498-14.452,45.923-33.459,60.09-48.849 c6.123-6.649,11.061-12.629,14.723-17.296c5.898,7.602,14.797,18.752,24.942,30.315c9.11,10.378,19.21,21.086,29.235,29.978 c4.997,4.458,9.995,8.464,14.947,11.773c1.681,1.103,3.347,2.108,5.013,3.061c-4.878,17.836-14.317,33.774-27.043,46.508 c-0.346,0.33-0.675,0.668-1.021,0.998C310.379,217.352,284.552,228.682,256.007,228.682z M444.545,460.082 c-10.595,0.645-29.67,2.079-53.201,5.125c-31.875,4.142-71.856,11.188-109.944,23.314c0,0,0,0-0.014,0V286.236 c0.014,0,0.014,0,0.014,0c8.164-4.899,23.157-13.168,43.492-21.4c29.834-12.066,71.18-24.042,119.654-25.415v68.921 c-20.365,7.286-34.922,26.728-34.922,49.584c0,22.856,14.557,42.291,34.922,49.584V460.082z M463.29,391.806 c-0.375,0.015-0.705,0.015-1.02,0.015c-6.498,0-12.562-1.831-17.724-5.02c-9.695-5.98-16.178-16.688-16.178-28.874 c0-12.186,6.483-22.901,16.178-28.882c5.162-3.181,11.226-5.02,17.724-5.02c0.315,0,0.646,0,1.02,0.022 c6.453,0.083,20.38,1.794,20.38,33.88C483.669,390.012,469.743,391.723,463.29,391.806z"></path> <circle class="st0" cx="215.383" cy="161.037" r="12.502"></circle> <circle class="st0" cx="296.632" cy="161.037" r="12.502"></circle> </g> </g></svg>`;
}, "C:/Users/neider_nieto/Desktop/Web/portfolio Sandra/src/icons/services/Study.astro", void 0);

const SERVICES = [
  {
    number: "8",
    image: "anios.svg",
    content: "Años de experiencia"
  },
  {
    number: "1000",
    image: "seguidores.svg",
    content: "Seguidores en redes sociales"
  },
  {
    number: "180",
    image: "trabajos.svg",
    content: "Servicios realizados"
  }
];

const $$Astro$8 = createAstro("https://www.abogadasandraalba.com");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Features;
  const { id } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Container", $$Contenedor, { "id": id, "data-astro-cid-vnivfuh2": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-14 mx-auto" data-astro-cid-vnivfuh2> <h3 class="text-center text-4xl mb-16 text-[#351d13] font-bold" data-astro-cid-vnivfuh2>
Experiencia reconocida
</h3> <div class="flex flex-col md:flex-row justify-center items-center gap-24 font-semibold" data-astro-cid-vnivfuh2> ${SERVICES.map((service) => renderTemplate`<article class="flex flex-col text-xl text-[#351d13]" data-astro-cid-vnivfuh2> <div class="flex flex-row items-center gap-5 justify-center mb-2" data-astro-cid-vnivfuh2> <p class="text-6xl" data-astro-cid-vnivfuh2>+${service.number}</p> <img class="size-16"${addAttribute(service.image, "src")} alt="Imagen de servicios" data-astro-cid-vnivfuh2> </div> <p class="font-extralight" data-astro-cid-vnivfuh2>${service.content}</p> </article>`)} </div> <footer class="my-10 mt-14" data-astro-cid-vnivfuh2> <div class="cards" data-astro-cid-vnivfuh2> <div class="relative card color" data-astro-cid-vnivfuh2> <div data-astro-cid-vnivfuh2> ${renderComponent($$result2, "Study", $$Study, { "class": "size-10 mt-2", "data-astro-cid-vnivfuh2": true })} </div> <p class="tip font-extrabold" data-astro-cid-vnivfuh2>Profesional Capacitado</p> <p class="second-text font-extralight" data-astro-cid-vnivfuh2>
Abogada especialista en la rama del derecho laboral, protegiendo sus
            intereses.
</p> </div> <div class="relative card color" data-astro-cid-vnivfuh2> <div data-astro-cid-vnivfuh2> ${renderComponent($$result2, "Expert", $$Expert, { "class": "size-10 mt-2", "data-astro-cid-vnivfuh2": true })} </div> <p class="tip font-extrabold" data-astro-cid-vnivfuh2>Abogada experta</p> <p class="second-text font-extralight" data-astro-cid-vnivfuh2>
Abogados expertos dispuestos a prestarle un servicio de la mejor
            calidad.
</p> </div> <div class="relative card color" data-astro-cid-vnivfuh2> <div data-astro-cid-vnivfuh2> ${renderComponent($$result2, "Deal", $$Deal, { "class": "size-10 mt-2", "data-astro-cid-vnivfuh2": true })} </div> <p class="tip font-extrabold" data-astro-cid-vnivfuh2>Servicio Amigable</p> <p class="second-text font-extralight" data-astro-cid-vnivfuh2>
Ofrecer soluciones legales, dispuesta a orientarlos y defender sus
            derechos.
</p> </div> </div> </footer> </section>  ` })}`;
}, "C:/Users/neider_nieto/Desktop/Web/portfolio Sandra/src/components/Features.astro", void 0);

const $$Astro$7 = createAstro("https://www.abogadasandraalba.com");
const $$Whatsapp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Whatsapp;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 259" width="256" height="259" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z" fill="#00E676"></path><path d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z" fill="#FFF"></path></svg>`;
}, "C:/Users/neider_nieto/Desktop/Web/portfolio Sandra/src/icons/Whatsapp.astro", void 0);

const $$Astro$6 = createAstro("https://www.abogadasandraalba.com");
const $$Adress = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Adress;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M309.2 584.776h105.5l-49 153.2H225.8c-7.3 0-13.3-6-13.3-13.3 0-2.6 0.8-5.1 2.2-7.3l83.4-126.7c2.5-3.6 6.7-5.9 11.1-5.9z" fill="#FFFFFF"></path><path d="M404.5 791.276H225.8c-36.7 0-66.5-29.8-66.5-66.5 0-13 3.8-25.7 11-36.6l83.4-126.7c12.3-18.7 33.1-29.9 55.5-29.9h178.4l-83.1 259.7z m-95.3-206.5c-4.5 0-8.6 2.2-11.1 6l-83.4 126.7c-1.4 2.2-2.2 4.7-2.2 7.3 0 7.3 6 13.3 13.3 13.3h139.9l49-153.2H309.2z" fill="#333333"></path><path d="M454.6 584.776h109.6l25.3 153.3H429.3z" fill="#FFFFFF"></path><path d="M652.2 791.276H366.6l42.8-259.6h200l42.8 259.6z m-222.9-53.2h160.2l-25.3-153.3H454.6l-25.3 153.3z" fill="#333333"></path><path d="M618.6 584.776h105.5c4.5 0 8.6 2.2 11.1 6l83.5 126.7c4 6.1 2.3 14.4-3.8 18.4-2.2 1.4-4.7 2.2-7.3 2.2H667.7l-49.1-153.3z" fill="#FFFFFF"></path><path d="M807.6 791.276H628.9l-83.1-259.7h178.4c22.4 0 43.2 11.2 55.5 29.9l83.4 126.7c9.8 14.8 13.2 32.6 9.6 50s-13.7 32.3-28.6 42.1c-10.8 7.2-23.5 11-36.5 11z m-139.9-53.2h139.9c2.6 0 5.1-0.8 7.3-2.2 4-2.6 5.3-6.4 5.7-8.4 0.4-2 0.7-6-1.9-10l-83.4-126.6c-2.5-3.8-6.6-6-11.1-6H618.6l49.1 153.2z" fill="#333333"></path><path d="M534.1 639.7C652.5 537.4 711.7 445.8 711.7 365c0-127-102.7-212.1-195-212.1s-195 85.1-195 212.1c0 80.8 59.2 172.3 177.7 274.7 9.9 8.6 24.7 8.6 34.7 0z" fill="#ff9500"></path><path d="M516.7 672.7c-12.5 0-24.9-4.3-34.8-12.9C356.2 551.2 295.1 454.7 295.1 365c0-142.8 114.6-238.7 221.6-238.7S738.3 222.2 738.3 365c0 89.7-61.1 186.2-186.9 294.8-9.8 8.6-22.3 12.9-34.7 12.9z m0-493.2c-79.7 0-168.4 76.2-168.4 185.5 0 72.3 56.7 158 168.4 254.6C628.5 523 685.1 437.3 685.1 365c0-109.3-88.7-185.5-168.4-185.5z" fill="#333333"></path><path d="M516.7 348m-97.5 0a97.5 97.5 0 1 0 195 0 97.5 97.5 0 1 0-195 0Z" fill="#FFFFFF"></path><path d="M516.7 472.1c-68.4 0-124.1-55.7-124.1-124.1s55.7-124.1 124.1-124.1S640.8 279.5 640.8 348 585.1 472.1 516.7 472.1z m0-195.1c-39.1 0-70.9 31.8-70.9 70.9 0 39.1 31.8 70.9 70.9 70.9s70.9-31.8 70.9-70.9c0-39.1-31.8-70.9-70.9-70.9z" fill="#333333"></path></g></svg>`;
}, "C:/Users/neider_nieto/Desktop/Web/portfolio Sandra/src/icons/others/Adress.astro", void 0);

const $$Astro$5 = createAstro("https://www.abogadasandraalba.com");
const $$Binoculars = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Binoculars;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M704 341.333333m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z" fill="#37474F"></path><path d="M320 341.333333m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z" fill="#37474F"></path><path d="M996.266667 533.333333l-326.4 64H356.266667L29.866667 533.333333l91.733333-168.533333C145.066667 324.266667 187.733333 298.666667 234.666667 298.666667h558.933333c46.933333 0 89.6 25.6 113.066667 66.133333l89.6 168.533333z" fill="#37474F"></path><path d="M810.666667 640m-213.333334 0a213.333333 213.333333 0 1 0 426.666667 0 213.333333 213.333333 0 1 0-426.666667 0Z" fill="#37474F"></path><path d="M213.333333 640m-213.333333 0a213.333333 213.333333 0 1 0 426.666667 0 213.333333 213.333333 0 1 0-426.666667 0Z" fill="#37474F"></path><path d="M512 597.333333m-106.666667 0a106.666667 106.666667 0 1 0 213.333334 0 106.666667 106.666667 0 1 0-213.333334 0Z" fill="#37474F"></path><path d="M512 597.333333m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z" fill="#546E7A"></path><path d="M810.666667 640m-149.333334 0a149.333333 149.333333 0 1 0 298.666667 0 149.333333 149.333333 0 1 0-298.666667 0Z" fill="#ffb35c"></path><path d="M213.333333 640m-149.333333 0a149.333333 149.333333 0 1 0 298.666667 0 149.333333 149.333333 0 1 0-298.666667 0Z" fill="#ffb35c"></path><path d="M889.6 590.933333c-21.333333-23.466667-49.066667-36.266667-78.933333-36.266666s-59.733333 12.8-78.933334 36.266666c-8.533333 8.533333-6.4 21.333333 2.133334 29.866667 8.533333 8.533333 21.333333 6.4 29.866666-2.133333 25.6-27.733333 70.4-27.733333 96 0 4.266667 4.266667 10.666667 6.4 14.933334 6.4 4.266667 0 10.666667-2.133333 14.933333-6.4 8.533333-6.4 8.533333-19.2 0-27.733334zM213.333333 554.666667c-29.866667 0-59.733333 12.8-78.933333 36.266666-8.533333 8.533333-6.4 21.333333 2.133333 29.866667 8.533333 8.533333 21.333333 6.4 29.866667-2.133333 25.6-27.733333 70.4-27.733333 96 0 4.266667 4.266667 10.666667 6.4 14.933333 6.4 4.266667 0 10.666667-2.133333 14.933334-6.4 8.533333-8.533333 8.533333-21.333333 2.133333-29.866667-21.333333-21.333333-51.2-34.133333-81.066667-34.133333z" fill="#f8d291"></path></g></svg>`;
}, "C:/Users/neider_nieto/Desktop/Web/portfolio Sandra/src/icons/others/Binoculars.astro", void 0);

const $$Astro$4 = createAstro("https://www.abogadasandraalba.com");
const $$Direccion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Direccion;
  return renderTemplate`${renderComponent($$result, "Container", $$Contenedor, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col justify-center text-center text-[#351d13] gap-x-10"> <h3 class="py-10 text-[#351d13] text-2xl md:text-4xl font-extrabold">
Oficinas y Consultorios
</h3> <div class="mb-10"> <p class="text-lg px-10 font-extralight">
Ofrezco consultoría jurídica laboral y demás para atender sus
        necesidades. <br> Como abogada especializada en derecho laboral, estoy
        lista para asesorarl@ y salvaguardar sus intereses.
</p> </div> <div class="flex flex-col md:flex-row gap-10 justify-center items-center"> <div class="flex flex-col gap-y-10 justify-start"> <div class="[&>p:my-10] flex flex-col"> <h3 class="mb-3 text-3xl text-[#A28541] font-extrabold">
Chiquinquirá - Boyacá
</h3> <p class="font-normal text-lg">Calle 18 No. 8-70</p> <div class="flex justify-center items-center gap-3 mt-3"> <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.3325712303287!2d-73.81490444848887!3d5.61703665141051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e41c9966eae0b81%3A0xe02b38376cb81207!2sHotel%20Primer%20Centauro!5e0!3m2!1ses!2sco!4v1712860598390!5m2!1ses!2sco" target="ubicacion"> ${renderComponent($$result2, "Adress", $$Adress, { "class": "size-10 cursor-pointer hover:scale-110 transition" })} </a> <a href="https://wa.link/vca77p"> ${renderComponent($$result2, "Whatsapp", $$Whatsapp, { "class": "size-8 cursor-pointer hover:scale-110 transition" })} </a> <a href="https://www.google.com/maps/@5.6170367,-73.8149044,3a,75y,2.62h,79.3t/data=!3m6!1e1!3m4!1sG9hQi_x7iep75WId-2n9Tw!2e0!7i13312!8i6656?hl=es&entry=ttu" target="_blank"> ${renderComponent($$result2, "Binoculars", $$Binoculars, { "class": "size-8 cursor-pointer hover:scale-110 transition" })} </a> </div> </div> <div class="[&>p:my-10] flex flex-col"> <h3 class="mb-3 text-3xl text-[#A28541] font-extrabold">
Bogotá - Cundinamarca
</h3> <p class="font-normal text-lg">Avenidas Jiménez No. 4-90</p> <p class="font-normal text-lg">Oficina 503-504</p> <div class="flex justify-center items-center gap-3 mt-3"> <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9625012663428!2d-74.07411992546871!3d4.600739342516957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a6a3d03c47%3A0x669754c6d7a49249!2sAv%20Jimenez%20de%20Quesada%20%234-90%2C%20La%20Candelaria%2C%20Bogot%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1712861025798!5m2!1ses!2sco" target="ubicacion"> ${renderComponent($$result2, "Adress", $$Adress, { "class": "size-10 cursor-pointer hover:scale-110 transition" })} </a> <a href="https://wa.link/vca77p"> ${renderComponent($$result2, "Whatsapp", $$Whatsapp, { "class": "size-8 cursor-pointer hover:scale-110 transition" })} </a> <a href="https://www.google.com/maps/@4.6007269,-74.0715697,3a,75y,35.28h,90t/data=!3m7!1e1!3m5!1s7TVta5LYKJmoBixKw9ARCw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D7TVta5LYKJmoBixKw9ARCw%26cb_client%3Dsearch.gws-prod.gps%26w%3D360%26h%3D120%26yaw%3D35.283554%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?hl=es&entry=ttu" target="_blank"> ${renderComponent($$result2, "Binoculars", $$Binoculars, { "class": "size-8 cursor-pointer hover:scale-110 transition" })} </a> </div> </div> </div> <aside> <iframe name="ubicacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.3325712303287!2d-73.81490444848887!3d5.61703665141051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e41c9966eae0b81%3A0xe02b38376cb81207!2sHotel%20Primer%20Centauro!5e0!3m2!1ses!2sco!4v1712860598390!5m2!1ses!2sco" class="rounded-3xl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </aside> </div> </section> ` })}`;
}, "C:/Users/neider_nieto/Desktop/Web/portfolio Sandra/src/components/Direccion.astro", void 0);

const $$Astro$3 = createAstro("https://www.abogadasandraalba.com");
const $$Bagde = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Bagde;
  return renderTemplate`${maybeRenderHead()}<span class="py-[2.5px] px-[2px] relative flex overflow-hidden rounded-full"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f1e9d0_0%,red_50%,#f1e9d0_100%)]"></span> <div class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-[#f9f6ed] backdrop-blur-3xl"> ${renderSlot($$result, $$slots["default"])} </div> </span>`;
}, "C:/Users/neider_nieto/Desktop/Web/portfolio Sandra/src/components/Bagde.astro", void 0);

const $$Astro$2 = createAstro("https://www.abogadasandraalba.com");
const $$SectionMain = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SectionMain;
  return renderTemplate`${renderComponent($$result, "Contenedor", $$Contenedor, { "class": "min-h-[80vh]" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-x-20 ml-1"> <div class="flex flex-col sm:col-span-10 m-auto lg:col-span-6 auto-rows-auto"> <h1 class="text-[#351d13]/60 text-xl md:text-3xl xl:text-5xl font-bold flex flex-row gap-4 pb-5 justify-center">
Dra. Sandra Alba<div class="flex justify-center items-center"> ${renderComponent($$result2, "BadgeButton", $$Bagde, {}, { "default": ($$result3) => renderTemplate`Abogada Litigante` })} </div> </h1> <p class="text-pretty text-sm md:text-lg xl:text-xl opacity-80 text-black/80 font-extralight text-justify">
Me enorgullece presentarme como abogada especializada en Derecho
        Laboral. Con una profunda pasión por la justicia y un compromiso
        inquebrantable con los derechos de los trabajadores. Creo firmemente en
        la importancia de equilibrar el poder entre empleadores y empleados, y
        trabajo incansablemente para asegurar que mis clientes reciban la
        representación legal experta que merecen.
</p> <nav class="flex justify-center gap-1.5 lg:gap-3 flex-row py-4 flex-wrap"> ${renderComponent($$result2, "SocialMedia", $$SocialMedia, { "href": "https://www.facebook.com/profile.php?id=100066769206943" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FacebookIcon", $$Facebook, { "class": "size-4 lg:size-5" })} <span class="text-[12px] text-black/80">Facebook</span> ` })} ${renderComponent($$result2, "SocialMedia", $$SocialMedia, { "href": "tel:+573132405135" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Phone", $$Phone, { "class": "size-4 md:size-6" })} <span class="text-[12px] text-black/80"> Teléfono</span> ` })} ${renderComponent($$result2, "SocialMedia", $$SocialMedia, { "href": "/" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "InstagramIcon", $$Instagram, { "class": "size-4 md:size-5" })} <span class="text-[12px] text-black/80">Instagram</span> ` })} ${renderComponent($$result2, "SocialMedia", $$SocialMedia, { "href": "mailto:sandraliliana@hotmail.com" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "MailIcon", $$Mail, { "class": "size-4 md:size-5" })} <span class="text-[12px] text-black/80">
sandraliliana1202@hotmail.com</span> ` })} </nav> </div> <div class="col-span-10 m-auto lg:col-span-4 auto-rows-auto w-72 max-w-full"> <img class="lg:-mt-8 rounded-3xl w-96" src="Foto-Sandra-conFondo.avif" alt=""> </div> </div> ` })}`;
}, "C:/Users/neider_nieto/Desktop/Web/portfolio Sandra/src/components/SectionMain.astro", void 0);

const $$Astro$1 = createAstro("https://www.abogadasandraalba.com");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "Container", $$Contenedor, {})}`;
}, "C:/Users/neider_nieto/Desktop/Web/portfolio Sandra/src/components/Services.astro", void 0);

const $$Astro = createAstro("https://www.abogadasandraalba.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sandra Liliana Alba Mendieta - Abogada Litigante", "description": "\xA1Protege tus derechos laborales con la ayuda de un experto! Sandra Liliana Alba, abogada especializada en Derecho Laboral, ofrece asesoramiento legal integral y representaci\xF3n en casos de discriminaci\xF3n, salarios impagos, despidos injustificados y m\xE1s. \xA1Contacta ahora para una consulta personalizada!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class=""> ${renderComponent($$result2, "SectionMain", $$SectionMain, {})} ${renderComponent($$result2, "GrillasBento", $$GrillasBento, {})} <!-- <ExperienciaTotal /> --> ${renderComponent($$result2, "Features", $$Features, { "id": "experiencia" })} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Direccion", $$Direccion, {})} </main> ` })}`;
}, "C:/Users/neider_nieto/Desktop/Web/portfolio Sandra/src/pages/index.astro", void 0);

const $$file = "C:/Users/neider_nieto/Desktop/Web/portfolio Sandra/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
