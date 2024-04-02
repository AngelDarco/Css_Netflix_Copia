(() => {
  const close = document.querySelectorAll<HTMLDivElement>(".x-svg");
  const message = document.querySelectorAll<HTMLDivElement>(".answer");

  close.forEach((element: HTMLDivElement) => {
    element.addEventListener("click", (e) => {
      const icon: EventTarget | null = e.target;
      const text: HTMLDivElement =
        icon?.parentElement.parentElement.lastElementChild;

      // hide all messages
      message.forEach((element: HTMLDivElement) => {
        if (element.classList.contains("show") && element !== text)
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

      // show text
      if (text.classList.contains("show")) text.classList.remove("show");
      else text.classList.add("show");

      // console.log(icon, message);

      // element.parentElement?.classList.toggle("show");
    });
  });
})();
