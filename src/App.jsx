import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About'
import Card from './Card'
import Research from './Research'

function App() {

  return (
    <>
      <header className="text-gray-700 border-b border-gray-200" >
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">Takuya Taketomi Portforio</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#About" className="mr-5 hover:text-green-400 duration-300">About</a>
            <a href="#Project" className="mr-5 hover:text-green-400 duration-300">Project</a>
            <a href="#Research" className="mr-5 hover:text-green-400 duration-300">Research</a>
            <a href="#Exhibition & Workshop" className=" hover:text-green-400 duration-300">Exhibition & Workshop</a>
          </nav>
        </div>
      </header>
      {/* 挨拶と自分の名前と写真 */}
      {/* <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center" >
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
              Hi!
              <br/>
              I'm Shincode
              <br/>
              Web Developer
            </h1>
            <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsa placeat beatae animi expedita esse possimus culpa, est assumenda ipsum!</p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact</button>
          </div>
          <div className="md:w-1/2 lg:max-w-lg">
            <img src="./img/icon.jpg" alt="" />
          </div>
        </div>
      </section> */}

      <About />
      <section className='text-gray-700 border-t border-gray-200' id='Project'>
            <div className='container px-5 py-5 mx-auto'>
                <div className='text-center mb-2'>
                <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>Project</h1>
                  {/* <p className='pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aliquid. Aperiam dicta accusamus numquam quos ab tempore quidem, dignissimos quam!</p> */}
                  <Card />
                </div>
            </div>
      </section>

      <Research />

      <section className='text-gray-700 border-t border-gray-200' id='Exhibition & Workshop'>
            <div className='container px-5 py-5 mx-auto'>
                <div className='text-center mb-2'>
                  <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>Exhibition & Workshop</h1>
                </div>
                <div className='mb-2'>
                <h5 className='text-xl py-2'>Exhibition</h5>
                    <li className='py-1'>
                      <span>
                      "Code to Frame" 高架画廊, 2022/4/9 ~ 2022/4/10
                      </span>
                      <a href="http://www.koukagarou.jp/bk.html" className="text-red-300 ml-1 mr-5">
                        [Koukagarou]
                      </a>
                    </li>
                    <li className='py-1'>
                      <span>
                      明星大学50周年企画展示 "おもしろいかたち"企画, パルテノン多摩, 2014.4
                      </span>
                    </li>
                    <h5 className='text-xl py-2'>Workshop</h5>
                    <li className='py-1'>
                      <span>
                      "明星大学 情報学部 オープンラボワークショップ「Robotic Drum Machineの制作と演奏体験」" 明星大学 (2024.2.22 ~ 2024.2.29)
                      </span>
                      <a href=""></a>
                    </li>
                    <li className='py-1'>
                      <span>
                      "明星大学 情報学部オープンラボワークショップ：建築分野とのコラボレーション・ハッカソン「モノの移り変わり」" 明星大学 & FILTER gallery (2023.8.26 ~ 2023.9.2)
                      </span>
                      <a href="https://www.meisei-u.ac.jp/2023/2023082202.html"　className="text-red-300 ml-1 mr-5">[明星大学]</a>
                    </li>
                </div>
            </div>
      </section>

      <footer className="text-gray-700 border-t border-gray-200 px-2 py-5 mx-auto">
        <span className="container p-5 text-s ml-3 ">Copyright © 2023 Takuya Taketomi All Rights Reserved.</span>
      </footer>
    </>
  );
};

export default App
