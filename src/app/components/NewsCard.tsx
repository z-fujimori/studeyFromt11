import React from 'react'

const NewsCard = () => {
  return (
    <div className="p-2 sm:px-5 sm:py-3 border-l border-slate-900 [writing-mode:vertical-rl] [&:nth-child(1)]:border-r [&:nth-child(n+4)]:hidden sm:[&:nth-child(n+4)]:block">
        <dt className="text-[9px]">
            2021.01.01
        </dt>
        <dd className="text-[10px]">タイトルタイトルタイトルタイトル</dd>
    </div>
  )
}

export default NewsCard