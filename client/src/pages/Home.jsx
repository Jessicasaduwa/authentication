import React from 'react'

const Home = () => {
  return (
    <div>
      <body className="bg-[#202227] text-gray-200 font-sans">
        <nav className="flex items-center h-20 mx-12">
          <div className="flex w-full max-w-7xl mx-auto items-center justify-between px-6 sm:px-16">

            <div className="flex items-center space justify-between">
              
              <h1 className="mr-8">Logo</h1>
              
              <div>
                <ul className="hidden sm:flex ml-24 space-x-4 sm:space-x-10 gap-6">
                  <li className="flex items-center hover:text-blue-600 cursor-pointer">Home</li>
                  <li className="flex items-center hover:text-blue-600 cursor-pointer">About</li>
                  <li className="flex items-center hover:text-blue-600 cursor-pointer">Services</li>
                  <li className="flex items-center hover:text-blue-600 cursor-pointer">FAQs</li>
                </ul>
              </div>
            </div>

          </div>

          <div>
            <button className="bg-[#020617] text-white px-[25px] text-sm rounded-full">
              Get Started
            </button>
          </div>
        </nav>



        <section className="my-20 mx-auto">

          <div className="flex-row">
            <h1 className="text-center text-4xl font-medium p-4">Manage your Development Tasks with Ease</h1>
            <p className="text-center">Unlock the full potential of your startup with our tailored services designed to guide you through with every stage of growth.</p>
          </div>
          <div className="flex justify-center items-center my-12 gap-8">
            <button className=""><a href="/login">Log In </a> </button>
            <button><a href="/signup">Sign In </a> </button>
          </div>

          <div>
            <img
             className=""
             src="/original-db52871927fcfd3034f14e3e1041f366.png"
             alt="" />
          </div>

        </section>



      </body>
    </div>
  )
}

export default Home