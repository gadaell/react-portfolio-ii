import React from "react";

// Props are passed through our functional component.
function Footer() {
  return (
    <footer class="d-flex justify-content-center">
      <a class="bg-secondary text-light m-2" href="https://github.com/gadaell">
        <i class="fab fa-github-square fa-3x"></i>
      </a>

      <a
        class="bg-secondary text-light m-2"
        href="https://www.linkedin.com/in/adarius-ellis-281a95101/"
      >
        <i class="fab fa-linkedin fa-3x"></i>
      </a>
      <a
        class="bg-secondary text-light m-2"
        href="mailto:ellisadarius@gmail.com"
      >
        <i class="fas fa-envelope-square fa-3x"></i>
      </a>
    </footer>
  );
}

export default Footer;
