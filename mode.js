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
        console.log("Head button clicked");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    );

    bodyButton.addEventListener(
      "click",
      function () {
        console.log("Body button clicked");
        const mainContent =
          document.querySelector("main");
        mainContent.scrollIntoView({
          behavior: "smooth",
        });
      }
    );

    footerButton.addEventListener(
      "click",
      function () {
        console.log("Footer button clicked");
        const footer =
          document.querySelector("footer");
        footer.scrollIntoView({
          behavior: "smooth",
        });
      }
    );
  }
);
