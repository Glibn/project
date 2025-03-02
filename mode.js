document.addEventListener(
  "DOMContentLoaded",
  function () {
    const headButton = document.querySelector(
      ".button_head"
    );
    const bodyButton = document.querySelector(
      ".button_body"
    );
    const footerButton = document.querySelector(
      ".button_Footer"
    );

    headButton.addEventListener(
      "click",
      function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    );

    bodyButton.addEventListener(
      "click",
      function () {
        const zenithSection =
          document.querySelector(".name_two");
        zenithSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    );

    footerButton.addEventListener(
      "click",
      function () {
        const footer =
          document.querySelector("footer");
        footer.scrollIntoView({
          behavior: "smooth",
        });
      }
    );
  }
);
