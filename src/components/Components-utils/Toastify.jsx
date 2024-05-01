import Swal from "sweetalert2";
import confetti from "canvas-confetti";

function SweetAlertComponent() {
  const showAlert = () => {
    Swal.fire({
      title: "Soy Sandra Alba, tu Abogada de Confianza!",
      text: "¡Gracias por contactarme, revisaré tu petición y me pondré en contacto contigo.!",
      icon: "success",
      showConfirmButton: false,
      timer: 10000,
    });
    // Disparar confeti
    confetti();
  };
  const handleSubmit = (e) => {
    const loading = document.getElementById("loading");
    loading.classList.remove("hidden");
    setTimeout(() => {
      showAlert(); // Mostrar la alerta
      loading.classList.add("hidden");
      window.location.href = "https://abogadasandraalba.com"; // Redireccionar a la página deseada
    }, 5000); // Simulación de envío de formulario durante 8 segundos
    // Ahora llama a showAlert() después de que el tiempo de espera haya terminado

    // setTimeout(() => {}, 5000);
    // e.preventDefault();

    // FormSubmit
    const form = e.target;
    const formData = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form
        id="formulario"
        action="https://formsubmit.co/161c8595662608dd2523592a727d133e"
        method="post"
        onSubmit={handleSubmit}
        class="flex flex-col"
      >
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div class="relative z-0">
            <input
              type="text"
              name="nombre"
              class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-300/60 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_standard"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-300/60 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Nombres
            </label>
          </div>
          <div class="relative z-0">
            <input
              type="text"
              name="apellidos"
              required
              class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-300/60 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
            />
            <label
              for="floating_standard"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-300/60 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Apellidos
            </label>
          </div>
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div class="relative z-0">
            <input
              type="email"
              name="email"
              required
              class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-300/60 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
            />
            <label
              for="floating_standard"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-300/60 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Correo Electrónico
            </label>
          </div>
          <div class="relative z-0">
            <input
              type="tel"
              name="telefono"
              class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-300/60 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
              maxlength="10"
              required
            />
            <label
              for="floating_standard"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-300/60 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Teléfono
            </label>
          </div>
        </div>
        <div class="relative z-0 mb-6">
          <input
            type="text"
            name="asunto"
            id="floating_standard"
            class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-300/60 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_standard"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-300/60 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Asunto
          </label>
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-1">
          <div class="relative z-0">
            <textarea
              name="mensaje"
              required
              class="block py-2.5 px-0 w-full text-sm text-slate-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-300/60 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=""
            ></textarea>
            <label
              for="floating_standard"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-7 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-300/60 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Comentarios
            </label>
          </div>
        </div>

        <div class="flex items-center mb-6">
          <input
            type="checkbox"
            id="autorizar"
            name="autorizar"
            class="mr-2 form-checkbox h-4 w-4 text-pink-600 transition duration-150 ease-in-out"
          />
          <label
            for="autorizar"
            class="text-sm text-[#CAA152] dark:text-gray-300 font-semibold"
          >
            Autorizo la manipulación de mis datos.
          </label>
        </div>
        <button
          type="submit"
          id="button"
          class="font-semibold cursor-pointer w-fit m-auto text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg text-sm px-5 py-2.5 text-center mb-2"
        >
          Enviar Formulario
        </button>

        <input
          type="hidden"
          name="_next"
          value="https://abogadasandraalba.com"
        />
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </div>
  );
}

export default SweetAlertComponent;
