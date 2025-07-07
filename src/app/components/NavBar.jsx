export default function NavBar() {
  return (
    <nav className="absolute w-[96dvw] h-[10dvh] left-1/2 -translate-x-1/2 flex flex-row justify-evenly items-center top-[2.5dvh] border rounded-full border-[#360000]">
      <ul>
        <a href="">Logo</a>
      </ul>
      <ul>
        <a href="">Servicios</a>
      </ul>
      <ul>
        <a href="">Nosotros</a>
      </ul>
      <ul>
        <a href="">Precios</a>
      </ul>
      <ul>
        <a href="">Contacto</a>
      </ul>
    </nav>
  );
}
