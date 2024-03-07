import React from 'react'

const Card = () => {
  return (
    <>  
        <section className='text-gray-700'>
            <div className='container px-5 py-2 mx-auto'>
                <div className='flex flex-wrap'>
                    {/* カードのdivタグ */}
                    {/* 2023年 */}
                    <div className='md:w-1/3 p-4'>
                        <div className='bg-gray-200 rounded-lg p-8'>
                            <div className='flex items-center mb-3'>
                            <div className='bg-green-500 text-white rounded-full'>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z"
                                fill="currentColor"
                                />
                                <path
                                d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z"
                                fill="currentColor"
                                />
                                <path
                                d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z"
                                fill="currentColor"
                                />
                            </svg>
                            </div>
                            <h2 className='text-gray-900 text-lg font-medium ml-2'>2023年度</h2>
                            </div>
                            {/* プロジェクトの写真 */}
                            <div className='container px-5 py-5 mx-auto flex flex-wrap'>
                            <div className='mb-10 lg:mb-0 w-full flex justify-center'>
                                <img className='w-full rounded' src="./img/23nendo.jpg" alt="" />
                            </div>
                            </div>
                            {/* 概要 */}
                            <div>
                            <p>ハンガリー大使館との協働プロジェクト。インタラクティブアプリケーションの展示を麻布駅最寄りにあるハンガリー文化センターで１週間を実施した。</p>
                            <a href="https://www.meisei-u.ac.jp/2024/2024012504.html" className='flex mt-3 text-green-500 items-center'>もっとみる
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                                    fill="currentColor"
                                    />
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* 2022年 */}
                    <div className='md:w-1/3 p-4'>
                        <div className='bg-gray-200 rounded-lg p-8'>
                            <div className='flex items-center mb-3'>
                            <div className='bg-green-500 text-white rounded-full'>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z"
                                fill="currentColor"
                                />
                                <path
                                d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z"
                                fill="currentColor"
                                />
                                <path
                                d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z"
                                fill="currentColor"
                                />
                            </svg>
                            </div>
                            <h2 className='text-gray-900 text-lg font-medium ml-2'>2022年度</h2>
                            </div>
                            {/* プロジェクトの写真 */}
                            <div className='container px-5 py-5 mx-auto flex flex-wrap'>
                            <div className='mb-10 lg:mb-0 w-full flex justify-center'>
                                <img className='w-full rounded' src="./img/23nendo.jpg" alt="" />
                            </div>
                            </div>
                            {/* 概要 */}
                            <div>
                            <p>多摩地区を対象とした「TAMABLE展」</p>
                            <a href="https://www.meisei-u.ac.jp/2024/2024012504.html" className='flex mt-3 text-green-500 items-center'>もっとみる
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                                    fill="currentColor"
                                    />
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* 2021年 */}
                    <div className='md:w-1/3 p-4'>
                        <div className='bg-gray-200 rounded-lg p-8'>
                            <div className='flex items-center mb-3'>
                            <div className='bg-green-500 text-white rounded-full'>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z"
                                fill="currentColor"
                                />
                                <path
                                d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z"
                                fill="currentColor"
                                />
                                <path
                                d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z"
                                fill="currentColor"
                                />
                            </svg>
                            </div>
                            <h2 className='text-gray-900 text-lg font-medium ml-2'>2021年度</h2>
                            </div>
                            {/* プロジェクトの写真 */}
                            <div className='container px-5 py-5 mx-auto flex flex-wrap'>
                            <div className='mb-10 lg:mb-0 w-full flex justify-center'>
                                <img className='w-full rounded' src="./img/23nendo.jpg" alt="" />
                            </div>
                            </div>
                            {/* 概要 */}
                            <div>
                            <p>レストラン「TOUMAI（トゥーマイ）」での東ヨーロッパのジョージア産ワインのプロモーション・アプリケーション開発。</p>
                            <a href="https://www.meisei-u.ac.jp/2024/2024012504.html" className='flex mt-3 text-green-500 items-center'>もっとみる
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                                    fill="currentColor"
                                    />
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* 2020年 */}
                    <div className='md:w-1/3 p-4'>
                        <div className='bg-gray-200 rounded-lg p-8'>
                            <div className='flex items-center mb-3'>
                            <div className='bg-green-500 text-white rounded-full'>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z"
                                fill="currentColor"
                                />
                                <path
                                d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z"
                                fill="currentColor"
                                />
                                <path
                                d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z"
                                fill="currentColor"
                                />
                            </svg>
                            </div>
                            <h2 className='text-gray-900 text-lg font-medium ml-2'>2020年度</h2>
                            </div>
                            {/* プロジェクトの写真 */}
                            <div className='container px-5 py-5 mx-auto flex flex-wrap'>
                            <div className='mb-10 lg:mb-0 w-full flex justify-center'>
                                <img className='w-full rounded' src="./img/23nendo.jpg" alt="" />
                            </div>
                            </div>
                            {/* 概要 */}
                            <div>
                            <p>地域ブランド・プロモーション用アプリケーションを開発、静岡県伊東市NPOに提案。</p>
                            <a href="https://www.meisei-u.ac.jp/2024/2024012504.html" className='flex mt-3 text-green-500 items-center'>もっとみる
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                                    fill="currentColor"
                                    />
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Card