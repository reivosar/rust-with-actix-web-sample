import "./App.css"

function Header() {
  return (
    <header className='text-gray-700 border-b border-gray-200'>
      <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
        <a href='#' className='font-medium text-gray-900'>
          <span className='text-xl ms-3'>Sample Site</span>
        </a>
        <nav className='md:ml-auto text-base'>
          <a href='#Home' className='mr-5 hover:text-blue-400 duration-300'>Home</a>
          <a href='#About' className='mr-5 hover:text-blue-400 duration-300'>About</a>
          <a href='#Skills' className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
          <a href='#Blog' className='mr-5 hover:text-blue-400 duration-300'>Blog</a>
        </nav>
      </div>
    </header>
  );
}

export default Header
