import React from 'react'
import Title from './Main/Title'
import Image from 'next/image'

const MainContent = () => {
  return (
    <div id='商品のご紹介' className="">
        <div className="flex flex-row-reverse my-8">
            <Title text='新しい価値の創造' eText='Create New Values' />
            <div className="mt-16 sm:mt-20 sm:max-w-96 w-full ml-8 sm:ml-32 relative">
                <Image 
                    src='/image/products1.jpg'
                    alt='コンテンツ画像'
                    height={2000}
                    width={3000}
                    className=""
                ></Image>
                <p className="text-white bg-amber-400 bg-opacity-75 w-3/5 p-5 flex justify-center text-[10px] absolute bottom-[-10px] left-[-10px]">テキストテキストテキスト<br />テキストテキストテキスト</p>
            </div>
        </div>
        
        <div className="flex flex-row my-8">
            <Title text='科学と技術の調和' eText='Science & Technology' />
            <div className="mt-16 sm:mt-20 sm:max-w-96 w-full mr-8 sm:mr-32 relative">
                <Image 
                    src='/image/products2.jpg'
                    alt='コンテンツ画像'
                    height={2000}
                    width={3000}
                    className=""
                ></Image>
                <p className="bg-red-800 text-white bg-opacity-75 w-3/5 p-5 flex justify-center text-[10px] absolute bottom-[-10px] right-[-10px]">テキストテキストテキスト<br />テキストテキストテキスト</p>
            </div>
        </div>


        <Title text='' eText='' />
    </div>
  )
}

export default MainContent