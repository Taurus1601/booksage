import './home.css'
import './home.css'
import Link from 'next/link'  ;
import 'tailwindcss/tailwind.css'

function Home() {
  return (
    <>
   <section className='container h-[100vh] w-[100vw]'>
          <div className="section1">
          
          <center className='text-over-svg'>
                <h1 className='head '>
                  Welcome to
                </h1>
                <h1 className='heading'>
                  Book Sage 
                </h1>
                <div className='arrow'>
                  ⌵
                </div>
              </center>
            </div>
    <div className="section2 relative">
    <Link href="/status/status">
      <div className='status'>Check Status</div>
    </Link>
    <div className="absolute top-20 left-40 flex gap-24">

    <Link href="/apply/apply">
      <div className=" m-5
      max-w-64 rounded-xl overflow-hidden
      shadow-2xl shadow-gray-400  bg-white
      transition ease-in-out duration-300 hover:scale-110 hover:drop-shadow-2xl ">
        <img className="w-full h-[280px]" src="/image/apply.jpeg" alt="Card image cap" />
        <div className="px-6 py-4 bg-white">
          <div className="font-bold text-xl mb-2">Apply</div>
          <p className="text-gray-700 text-base">
           </p>
        </div>
      </div>
    </Link>

    <Link href="/donate/donate">
      <div className=" m-5
      max-w-64 rounded-xl overflow-hidden
      shadow-2xl shadow-gray-400 bg-white
      transition ease-in-out duration-300 hover:scale-110 hover:drop-shadow-2xl">
        <img className="w-full h-[280px]" src="/image/donate.jpeg" alt="Card image cap" />
        <div className="px-6 py-4 bg-white">
          <div className="font-bold text-xl mb-2">Donate</div>
          <p className="text-gray-700 text-base">
            
             </p>
        </div>
      </div>
    </Link>

    <Link href='/sponsor/sponsor'>
      <div className=" m-5
      max-w-64 rounded-xl overflow-hidden
      shadow-2xl shadow-gray-400 bg-white
      transition ease-in-out duration-300 hover:scale-110 hover:drop-shadow-2xl">
        <img className="w-full h-[280px]" src="/image/sponsors.jpeg" alt="Card image cap" />
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl mb-2">Sponsors</div>
          <p className="text-gray-700 text-base ">
            </p>
        </div>
      </div>
    </Link>
    </div>
      </div>
   </section>
    </>
  )
}

export default Home;