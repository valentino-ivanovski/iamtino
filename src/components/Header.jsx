function Header() {
  return (
    <div className="fixed top-8 z-1000 dark:bg-[rgba(0,0,0,0.8)] flex flex-row pb-3 pt-3 bg-[rgba(255,255,255,0.8)]
     rounded-sm items-center justify-center backdrop-blur-sm
      w-sm sm:w-lg">
      <nav className="flex flex-row justify-between gap-16 sm:gap-36 text-md mt-1">
        <ul className="cursor-pointer text-sm text-black dark:text-white">HOME</ul>
        <ul className="cursor-pointer text-sm text-black dark:text-white">PROJECTS</ul>
        <ul className="cursor-pointer text-sm text-black dark:text-white">CONTACT</ul>
      </nav>
    </div>
  );
}

export default Header;