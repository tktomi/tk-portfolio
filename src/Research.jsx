import React from 'react'

const Research = () => {
    return (
      <>
        <section className='text-gray-700 border-t border-gray-200' id='Research'>
            <div className='container px-5 py-5 mx-auto'>
                <div className='text-center mb-2'>
                  <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>Research</h1>
                </div>
                <div className='mb-2'>
                  <h2 className='text-xl'>学会発表</h2>
                  <h4 className="text-gray-700 font-medium py-2">口頭発表</h4>
                  <h5 className='py-2'>単著</h5>
                    <li className='py-1'>
                      <span>
                      武富拓也,「異なる背景を持つメンバー間におけるアプリ開発のディスコース分析
                              ―学部横断PBL型授業での対話とソースコードから―」, 社会言語科学会第47回大会, 2023
                      </span>
                      <a href="https://www.art-science.org/nicograph/nicoint2023/" className="text-red-300 ml-1 mr-5">
                        [PDF]
                      </a>
                    </li>
                    <li className='py-1'>
                      武富拓也,「文化的不透明なリソースへのアクセスを支援するリンガフランカとしての日本語」, 社会言語科学会第45回大会, 2021
                    </li>
                  <h5 className='py-2'>共著</h5>
                  <li className='py-1'>
                      <span>
                      武富拓也, 菊池康太, 遠藤勝也 “Other Selves: 影を用いたSNSによる主観性表現,芸術科学会　NICOGRAPH 2018
                      </span>
                      <a href="https://assets.ctfassets.net/jpru9tuejkni/5VGEqC9lYBslM2eLweLyjV/ea9f649e7f5ed4935f1016d4efb53104/OtherSelves.pdf" className="text-red-300 ml-1 mr-5">
                        [PDF]
                      </a>
                  </li>
                  <li className='py-1'>
                      <span>
                      遠藤勝也, 武富拓也, 川瀬彩香, 伊藤瑞海, 李振亜, 大滝真司, 小野隆之, 尼岡利崇
                      "惑星の作り方: 惑星の作り方：手書きのイラストとレゴブロックを用いたエンタテインメントシステム", エンタテインメントコンピューティング2015
                      </span>
                      <a href="https://assets.ctfassets.net/jpru9tuejkni/2gvVhtVwVbEm85mxWztzt1/9b43fdec8897b4475eeec6855572ef05/HowToMakePlanets.pdf" className="text-red-300 ml-1 mr-5">
                        [PDF]
                      </a>
                  </li>
                  <br/>
                  <h4>ポスター発表</h4>
                  <h5 className='py-2'>単著</h5>
                  <li className='py-1'>
                    <span>
                      武富拓也, 「複数の実践共同体の関係構築のあり方と観光アプリケーション開発への影響の考察」, 日本認知科学会第36回, 2019
                    </span>
                    <a href="https://www.jcss.gr.jp/meetings/jcss2019/proceedings/pdf/JCSS2019_P2-26.pdf" className="text-red-300 ml-1 mr-5">
                      [PDF]
                      </a>
                  </li>
                  <h5 className='py-2'>共著</h5>
                    <li className='py-1'>
                      <span>
                        Takuya Taketomi and Katsuya Endoh, "An attempt to visualize the representations of Champloo culture in Bingata", NICOGRAPH International 2023
                      </span>
                      <a href="https://www.art-science.org/nicograph/nicoint2023/" className="text-red-300 ml-1 mr-5">
                          [PDF]
                      </a>
                    </li>

                    <li className='py-1'>
                      <span>
                        Takuya Taketomi & Satomi Ura, "Literacies in agile software application development", 6th ESTIDIA Conference, 2022
                      </span>
                      <a href="https://web.ua.es/en/estidia22/documents/6th-estidia-conference-programme.pdf" className="text-red-300 ml-1 mr-5">
                          [PDF]
                      </a>
                    </li>
                    <li className='py-1'>
                      <span>
                        遠藤勝也, 武富拓也 "アプリ開発における異なる実践共同体の可視化システムの開発", WISS 2021
                      </span>
                      <a href="https://www.wiss.org/WISS2021Proceedings/data/T08.pdf" className="text-red-300 ml-1 mr-5">
                          [PDF]
                      </a>
                    </li>
                  <br/>
                  <h2 className='text-xl'>他活動</h2>
                  <p className='py-2'>講演</p>
                  <li className='py-1'>Takuya Taketomi, Team management of team members with various backgrounds to develop application software using multiple digitally mediated communication platforms, III SIIFA of FAVAG, 2020</li>
                  
                  <p className='py-2'>出版(所属機関の企画費より)</p>
                  <li className='py-1'>武富拓也,"学際的PBLにおけるインタラクティブ・システム開発と実践報告 ~ディスコース分析の観点から~",明星大学 ISBN 978-4-9911317-3-8, 2022</li>
                </div>
            </div>
        </section>
      </>
    )
  } 

export default Research