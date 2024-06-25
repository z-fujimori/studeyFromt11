import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white text-xs">
        <div className="flex flex-col justify-between w-full pt-8 sm:pt-16 [writing-mode:vertical-rl]">
            <div className=''>
                <Image 
                    src='image/logo.svg'
                    alt="ロゴ"
                    height={150}
                    width={150}
                    className="w-7 mx-5 sm:mx-12"
                />
                <div className='mx-5 sm:mx-12'>
                    <p className="mx-1 sm:mx-3">〒１０６-００３２　東京都港区六本木５丁目×××××</p>
                    <p className='mx-1 sm:mx-3'>電話：０３-ＸＸＸＸ-ＸＸＸＸ</p>
                </div>
                <ul className="">
                    <li className='mx-1 sm:mx-5'><a href="">お知らせ</a></li>
                    <li className='mx-1 sm:mx-5'><a href="">商品のご紹介</a></li>
                    <li className='mx-1 sm:mx-5'><a href="#お知らせ">店舗のご案内</a></li>
                </ul>
            </div>
            <div>
                <ul className="flex mx-3 sm:mx-5">
                    <li><a href="#">オンラインストアを見る</a></li>
                    ｜
                    <li><a href="">お問い合わせ</a></li>
                </ul>
            </div>
        </div>
        <p className="text-center p-3">&copy; SOUSAKU</p>
    </footer>
  )
}

export default Footer