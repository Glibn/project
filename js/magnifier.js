document.addEventListener(
  "DOMContentLoaded",
  function () {
    const zoomImages =
      document.querySelectorAll(".img-zoom");

    zoomImages.forEach((imgContainer) => {
      const img =
        imgContainer.querySelector("img");
      const magnifier =
        document.createElement("div");
      magnifier.classList.add("magnifier");
      imgContainer.appendChild(magnifier);

      imgContainer.addEventListener(
        "mousemove",
        function (e) {
          const rect =
            img.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const bgX = (x / img.width) * 100;
          const bgY = (y / img.height) * 100;

          magnifier.style.left = `${x}px`;
          magnifier.style.top = `${y}px`;
          magnifier.style.backgroundImage = `url(${img.src})`;
          magnifier.style.backgroundPosition = `${bgX}% ${bgY}%`;
        }
      );
    });
  }
);
