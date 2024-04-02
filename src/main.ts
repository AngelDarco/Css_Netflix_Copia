(() => {
  const close = document.querySelectorAll<HTMLDivElement>(".x-svg");
  const message = document.querySelectorAll<HTMLDivElement>(".answer");

  close.forEach((element: HTMLDivElement) => {
    element.addEventListener("click", (e) => {
      const icon = e.currentTarget as HTMLDivElement;
      const parent = icon.parentElement as HTMLDivElement;
      const grandParent = parent.parentElement as HTMLDivElement;
      const lastElementChild = grandParent.lastElementChild;

      // hide all messages
      message.forEach((element: HTMLDivElement) => {
        if (element.classList.contains("show") && element !== lastElementChild)
          element.classList.remove("show");
      });

      // rotate all icons to the default position
      close.forEach((element: HTMLDivElement) => {
        if (element.classList.contains("rotate") && element !== icon)
          if (element.classList.contains("rotate"))
            element.classList.remove("rotate");
      });

      // change icon
      if (icon) icon.classList.toggle("rotate");

      // show lastElementChild
      if (lastElementChild) {
        if (lastElementChild.classList.contains("show"))
          lastElementChild.classList.remove("show");
        else lastElementChild.classList.add("show");
      }
    });
  });
})();
