function Header() {

  return (
  <div className="
    fixed top-8 z-1000 flex flex-row pb-3 pt-3 
    bg-transparent backdrop-blur-md rounded-md items-center
    justify-center w-sm sm:w-lg transition-shadow duration-300">
    <nav className="flex flex-row justify-between gap-16 sm:gap-36 text-md text-black mt-1">
      <ul className="cursor-pointer">Home</ul>
      <ul className="cursor-pointer">Projects</ul>
      <ul className="cursor-pointer">Contact</ul>
    </nav>
  </div>
);
}

export default Header;