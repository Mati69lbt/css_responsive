document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    document.querySelector("#load-iframe-map").innerHTML = `<iframe
                  loading="lazy"
                  class="contact__iframe"
                  frameborder="0"
                  scrolling="no"
                  referrerpolicy="no-referrer-when-downgrade"
                  marginheight="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848.2567511709947!2d-60.51866893041129!3d-31.742463857877596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b44d8ddedd97d9%3A0x5d9fac4c43ebf256!2sAv.%20Francisco%20Ram%C3%ADrez%202588%2C%20Paran%C3%A1%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1708348372281!5m2!1ses-419!2sar"
                ></iframe>`;
  }, 1000);
});
