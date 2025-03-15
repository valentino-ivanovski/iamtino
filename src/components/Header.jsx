function Header() {
  return (
    <div className="fixed top-8 z-1000 dark:bg-[rgba(0,0,0,0.8)] flex flex-row pb-3 pt-3 bg-[rgba(255,255,255,0.8)]
     rounded-sm items-center justify-center backdrop-blur-lg
      w-sm sm:w-lg">
      <nav className="flex flex-row justify-between gap-16 sm:gap-36 text-md mt-1">
        <ul className="cursor-pointer text-black dark:text-white">Home</ul>
        <ul className="cursor-pointer text-black dark:text-white">Projects</ul>
        <ul className="cursor-pointer text-black dark:text-white">Contact</ul>
      </nav>
    </div>
  );
}

export default Header;