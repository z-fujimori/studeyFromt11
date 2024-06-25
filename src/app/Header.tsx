import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="h-screen bg-cover bg-center bg-[url('/image/mainvisual-sp.jpg')] sm:bg-[url('/image/mainvisual-pc.jpg')] ">
        <div className="p-4 sm:p-10 w-full h-full [writing-mode:vertical-rl]">
            <div className="">
                <Image 
                    src='image/logo.svg'
                    alt="ロゴ"
                    height={50}
                    width={50}
                    className="w-7 mx-10"
                />
                <ul className="text-white text-xs">
                    <li className="px-2"><a href="#お知らせ" >お知らせ</a></li>
                    <li className="px-2"><a href="#商品のご紹介" >商品のご紹介</a></li>
                    <li className="px-2"><a href="">店舗のご案内</a></li>
                </ul>
            </div>
            
            <div className="bg-white bg-opacity-20 p-2 text-white absolute bottom-6 left-6 hover:opacity-75">
                <a 
                    className="block border border-gray-300 px-3 py-5 sm:px-4 sm:py-8 text-xs sm:text-sm"
                    href='#'
                    target='_blank'
                >
                    オンラインストアを見る
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header