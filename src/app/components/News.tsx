import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className="ml-auto mx-3 my-14 sm:my-32 [writing-mode:vertical-rl]">
        <div>
            <div className="[writing-mode:vertical-rl]">
                <p className="text-[9px]">News</p>
                <h3 id='お知らせ' className="text-xl sm:text-2xl">お知らせ</h3>
            </div>
            <div className="pt-5 pr-5 sm:pt-16 sm:pr-16">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    </div>
  )
}

export default News