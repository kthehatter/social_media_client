export default function TodosPage() {

return(
  <>
    <div className="relative min-h-screen flex flex-col bg-black bg-opacity-90 shadow-inner lg:overflow-hidden">
  <div className="flex-shrink-0 flex-wrap md:flex-no-wrap w-full flex md:items-center px-3 pt-2 bg-black bg-opacity-90 shadow-inner">
    <img src="https://staging.devfair.com/images/logoDark.svg" className="h-8 w-auto" alt="logo image" />

    <span className="mx-auto w-full md:w-auto flex flex-grow-1 text-center">
      <h1 className="text-white font-bold text-xl mt-2 md:mt-0">Team Huddle</h1>
    </span>

    <div className="overflow-hidden shadow-inner flex flex-row flex-grow-1 w-full md:w-auto">
      <div className="flex flex-col">
        <span className="flex items-center text-gray-200">
          <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
          6 / 7 Members in huddle
        </span>
        <span className="flex items-center text-gray-200 mb-2">
          <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" strokeWidth="1" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
          </svg>
          Standup started: 1:30mins ago
        </span>
        <button type="button" className="flex md:ml-auto mb-2 items-center justify-center px-4 py-0.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-pink-500 hidden">
          Start anyway
        </button>
      </div>
      <a className="ml-auto mt-auto md:mt-0 flex-shrink-0 py-1 flex outline-none md:ml-2" href=""><img className="inline-block relative rounded-full h-8 w-8 rounded-full flex" src="https://assets.codepen.io/1149983/avatar-15.png" alt="avatar" />
      </a>
    </div>
  </div>
  <div className="flex-grow w-full mx-auto flex overflow-auto lg:overflow-hidden">
    <div className="flex-1 min-w-0 flex">
      <div className="border-b border-gray-800 xl:border-b-0 xl:flex-shrink-0 w-24 lg:w-36 xl:w-48 xl:border-r xl:border-gray-800">
        <div className="h-full">
          <div className="h-full relative bg-black bg-opacity-90 shadow-2xl">
            <div className="absolute inset-0 rounded-lg overflow-auto">
              <ul className="grid grid-flow-row-dense grid-cols-1 mb-3 mt-2">
                <li className="px-2">
                  <span className="relative overflow-hidden flex rounded-lg flex-col justify-center ring-4 ring-green-500 ring-opacity-90 text-gray-200">
                    <img className="object-cover shadow-lg rounded-lg mx-auto" src="https://assets.codepen.io/1149983/avatar-14.png" alt="" />
                    <span className="absolute w-full inset-0 h-full flex items-end justify-end z-99">
                      <span className="rounded-full w-6 h-6 md:w-9 md:h-9 flex items-center justify-center bg-dark-secondary bg-opacity-50 shadow-lg">
                        <svg className="md:w-6 md:h-6 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                    <span className="absolute z-50 bg-dark-main text-white left-0 bottom-0 p-0.5 md:p-3 bg-opacity-90">
                      Carlito
                    </span>
                  </span>
                </li>

                <li className="mt-3 px-2">
                  <span className="relative overflow-hidden flex flex-col">
                    <img className="object-cover shadow-lg rounded-lg mx-auto" src="https://assets.codepen.io/1149983/avatar-17_1.png" alt="" />
                    <span className="absolute z-50 bg-dark-main text-white left-0 bottom-0 p-0.5 md:p-3 bg-opacity-90">
                      Kaina
                    </span>
                  </span>
                </li>

                <li className="mt-3 px-2">
                  <span className="relative overflow-hidden flex flex-col">
                    <img className="object-cover shadow-lg rounded-lg mx-auto" src="https://assets.codepen.io/1149983/avatar-22.png" alt="" />

                    <span className="absolute z-50 bg-dark-main text-white left-0 bottom-0 p-0.5 md:p-3 bg-opacity-90">
                      Tom
                    </span>
                  </span>
                </li>

                <li className="mt-3 px-2">
                  <span className="relative overflow-hidden flex rounded-lg flex-col justify-center ring-4 ring-indigo-500 ring-opacity-90 text-gray-200">
                    <img className="object-cover shadow-lg rounded-lg mx-auto" src="https://assets.codepen.io/1149983/avatar-4.png" alt="" />
                    <span className="absolute z-50 bg-dark-main text-white left-0 bottom-0 p-0.5 md:p-3 bg-opacity-90">
                      Johan
                    </span>
                  </span>
                </li>

                <li className="mt-3 px-2">
                  <span className="relative overflow-hidden flex flex-col">
                    <img className="object-cover shadow-lg rounded-lg mx-auto" src="https://assets.codepen.io/1149983/avatar-23.png" alt="" />
                    <span className="absolute z-50 bg-dark-main text-white left-0 bottom-0 p-0.5 md:p-3 bg-opacity-90">
                      Sarah
                    </span>
                  </span>
                </li>

                <li className="mt-3 px-2">
                  <span className="relative overflow-hidden flex flex-col">
                    <img className="object-cover shadow-lg rounded-lg mx-auto" src="https://assets.codepen.io/1149983/avatar-3.png" alt="" />
                    <span className="absolute z-50 bg-dark-main text-white left-0 bottom-0 p-0.5 md:p-3 bg-opacity-90">
                      Amy
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full h-full overflow-auto">

        <div className="min-w-0 flex-1 mb-10 lg:mb-0">
          <div className="h-full">
            <div className="relative h-full">
              <div className="absolute inset-0 rounded-lg">
                <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-4 h-full gap-1 relative md:overflow-hidden shadow-inner flex-grow">
                  <div className="flex flex-col flex-wrap w-full md:flex-col border h-full border-gray-800">
                    <div className="flex flex-wrap w-full items-center border-b border-dark-main bg-dark-secondary">
                      <h6 className="font-bold pl-2 text-white">Backlog</h6>
                      <span className="py-2 px-4 h-full bg-dark-secondary text-white ml-auto text-black font-bold text-center flex items-center">2</span>
                    </div>

                    <div className="relative flex-grow max-w-full border-2 border-gray-800 border-dashed">
                      <div className="absolute left-0 top-0 h-full overflow-auto px-2 flex flex-col w-full max-w-full bg-dark-main">
                        <div className="grid w-full bg-dark-secondary shadow-md rounded mt-3 cursor-move hover:border-indigo-600 focus:outline-none transform -rotate-1 active:-rotate-3 ring-4 ring-green-500 ring-opacity-70">
                          <div className="w-full items-center px-1 py-2">
                            <a className="text-white"><span className="text-dark-gray font-black pr-1">ST-1:</span>Create wireframes for new module.</a>
                          </div>
                          <div className="flex w-full flex-wrap">
                            <div className="flex w-full flex-wrap justify-start p-1 items-center text-xs bg-dark-secondary shadow-inner">
                              <div className="flex mr-0.5">
                                <div className="inline-flex justify-center items-center my-0.5 even:mx-1 w-auto board-badge-status">
                                  <div className="inline-flex items-center w-full bbg-blue-300 text-black">
                                    <div className="inline-flex items-center board-tag-badge font-medium py-1 px-3 bg-blue-300 text-black">
                                      <p className="whitespace-nowrap text-center w-full text-xs tag-text">
                                        R&D
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex mr-0.5">
                                <div className="inline-flex justify-center items-center my-0.5 even:mx-1 w-auto board-badge-status">
                                  <div className="inline-flex items-center w-full bg-yellow-500 text-white">
                                    <div className="inline-flex items-center board-tag-badge font-medium py-1 px-3 bg-yellow-500 text-white">
                                      <p className="whitespace-nowrap text-center w-full text-xs tag-text">
                                        M
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="grid w-full py-2 px-2 grid-flow-col-dense grid-cols-2">
                            <div className="w-full whitespace-nowrap hidden md:flex flex-wrap text-dark-gray pt-1 col-start-1">
                              <span className="text-xs w-full flex items-center text-white"><span className="flex items-center"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                  </svg>
                                  22 Jun 2220
                                </span>
                              </span>
                            </div>
                            <div className="flex ml-auto self-start justify-end col-start-2">
                              <img className="inline-block relative rounded-full text-cool-gray-50 dark:text-gray-600 h-6 w-6" src="https://assets.codepen.io/1149983/avatar-4.png" alt="avatar" />
                            </div>
                          </div>
                        </div>
                        <div className="grid w-full bg-dark-secondary shadow-md rounded mt-3 cursor-move transform hover:-rotate-2 active:-rotate-3 border-2 border-dashed border-transparent hover:border-indigo-600">
                          <div className="w-full items-center px-1 py-2">
                            <a className="text-white"><span className="text-dark-gray font-black pr-1">ST-8:</span>Investigate migrating to tailwind</a>
                          </div>
                          <div className="flex w-full flex-wrap">
                            <div className="flex w-full flex-wrap justify-start p-1 items-center text-xs bg-dark-secondary shadow-inner">
                              <div className="flex mr-0.5">
                                <div className="inline-flex justify-center items-center my-0.5 even:mx-1 w-auto board-badge-status">
                                  <div className="inline-flex items-center w-full bg-green-300 text-black">
                                    <div className="inline-flex items-center board-tag-badge font-medium py-1 px-3 bg-green-300 text-black">
                                      <p className="whitespace-nowrap text-center w-full text-xs tag-text">
                                        Enhancement
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex mr-0.5">
                                <div className="inline-flex justify-center items-center my-0.5 even:mx-1 w-auto board-badge-status">
                                  <div className="inline-flex items-center w-full bg-green-500 text-white">
                                    <div className="inline-flex items-center board-tag-badge font-medium py-1 px-3 bg-green-500 text-white">
                                      <p className="whitespace-nowrap text-center w-full text-xs tag-text">
                                        S
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="grid w-full py-2 px-2 grid-flow-col-dense grid-cols-2">
                            <div className="w-full whitespace-nowrap hidden md:flex flex-wrap text-dark-gray pt-1 col-start-1">
                              <span className="text-xs w-full flex items-center text-white"><span className="flex items-center"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                  </svg>
                                  22 Jun 2220
                                </span>
                              </span>
                            </div>
                            <div className="flex ml-auto self-start justify-end col-start-2">
                              <img className="inline-block relative rounded-full text-cool-gray-50 dark:text-gray-600 h-6 w-6" src="https://assets.codepen.io/1149983/avatar-23.png" alt="avatar" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col flex-wrap w-full md:flex-col border h-full bg-dark-main border-gray-800">
                    <div className="flex flex-wrap w-full items-center border-b bborder-dark-main bg-dark-secondary">
                      <h6 className="font-bold pl-2 text-white">In progress</h6>
                      <span className="py-2 px-4 h-full bg-dark-secondary text-white ml-auto text-black font-bold text-center flex items-center">1</span>
                    </div>
                    <div className="relative flex-grow max-w-full border-2 border-gray-800 border-dashed">
                      <div className="absolute left-0 top-0 h-full overflow-auto px-2 flex flex-col w-full max-w-full bg-dark-main">
                        <div className="grid w-full bg-dark-secondary shadow-md rounded mt-3 cursor-move transform hover:-rotate-2 active:-rotate-3 border-2 border-dashed border-transparent hover:border-indigo-600">
                          <div className="w-full items-center px-1 py-2">
                            <a className="text-white"><span className="text-dark-gray font-black pr-1">ST-4:</span>
                              Create GSAP animations for marketing website
                            </a>
                          </div>
                          <div className="flex w-full flex-wrap">
                            <div className="flex w-full flex-wrap justify-start p-1 items-center text-xs bg-dark-secondary shadow-inner">
                              <div className="flex mr-0.5">
                                <div className="inline-flex justify-center items-center my-0.5 even:mx-1 w-auto board-badge-status">
                                  <div className="inline-flex items-center w-full bg-pink-600 text-white">
                                    <div className="inline-flex items-center board-tag-badge font-medium py-1 px-3 bg-pink-600 text-white">
                                      <p className="whitespace-nowrap text-center w-full text-xs tag-text">
                                        Spike
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex mr-0.5">
                                <div className="inline-flex justify-center items-center my-0.5 even:mx-1 w-auto board-badge-status">
                                  <div className="inline-flex items-center w-full bg-green-500 text-white">
                                    <div className="inline-flex items-center board-tag-badge font-medium py-1 px-3 bg-green-500 text-white">
                                      <p className="whitespace-nowrap text-center w-full text-xs tag-text">
                                        S
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="grid w-full py-2 px-2 grid-flow-col-dense grid-cols-2">
                            <div className="w-full whitespace-nowrap hidden md:flex flex-wrap text-dark-gray pt-1 col-start-1">
                              <span className="text-xs w-full flex items-center text-white"><span className="flex items-center"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                  </svg>
                                  22 Jun 2220
                                </span>
                              </span>
                            </div>
                            <div className="flex ml-auto self-start justify-end col-start-2">
                              <img className="inline-block relative rounded-full text-cool-gray-50 dark:text-gray-600 h-6 w-6" src="https://assets.codepen.io/1149983/avatar-22.png" alt="avatar" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col flex-wrap w-full md:flex-col border h-full bg-dark-main border-gray-800">
                    <div className="flex flex-wrap w-full items-center border-b border-dark-main bg-dark-secondary">
                      <h6 className="font-bold pl-2 text-white">Review</h6>
                      <span className="py-2 px-4 h-full bg-dark-secondary text-white ml-auto text-black font-bold text-center flex items-center">2</span>
                    </div>
                    <div className="relative flex-grow max-w-full border-2 border-gray-800 border-dashed">
                      <div className="absolute left-0 top-0 h-full overflow-auto px-2 flex flex-col w-full max-w-full bg-dark-main">
                        <div className="grid w-full bg-dark-secondary shadow-md rounded mt-3 cursor-move transform hover:-rotate-2 active:-rotate-3 border-2 border-dashed border-transparent hover:border-indigo-600">
                          <div className="w-full items-center px-1 py-2">
                            <a className="text-white"><span className="text-dark-gray font-black pr-1">ST-2:</span>Write new website copy</a>
                          </div>
                          <div className="flex w-full flex-wrap">
                            <div className="flex w-full flex-wrap justify-start p-1 items-center text-xs bg-dark-secondary shadow-inner">
                              <div className="flex mr-0.5">
                                <div className="inline-flex justify-center items-center my-0.5 even:mx-1 w-auto board-badge-status">
                                  <div className="inline-flex items-center w-full bg-purple-300 text-black">
                                    <div className="inline-flex items-center board-tag-badge font-medium py-1 px-3 bg-purple-300 text-black">
                                      <p className="whitespace-nowrap text-center w-full text-xs tag-text">
                                        Feature
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex mr-0.5">
                                <div className="inline-flex justify-center items-center my-0.5 even:mx-1 w-auto board-badge-status">
                                  <div className="inline-flex items-center w-full bg-red-500 text-white">
                                    <div className="inline-flex items-center board-tag-badge font-medium py-1 px-3 bg-red-500 text-white">
                                      <p className="whitespace-nowrap text-center w-full text-xs tag-text">
                                        L
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="grid w-full py-2 px-2 grid-flow-col-dense grid-cols-2">
                            <div className="w-full whitespace-nowrap hidden md:flex flex-wrap text-dark-gray pt-1 col-start-1">
                              <span className="text-xs w-full flex items-center text-white"><span className="flex items-center"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                  </svg>
                                  22 Jun 2220
                                </span>
                              </span>
                            </div>
                            <div className="flex ml-auto self-start justify-end col-start-2">
                              <img className="inline-block relative rounded-full text-cool-gray-50 dark:text-gray-600 h-6 w-6" src="https://assets.codepen.io/1149983/avatar-15.png" alt="avatar" />

                            </div>
                          </div>

                        </div>
                        <div className="grid w-full bg-dark-secondary shadow-md rounded mt-3 cursor-move transform hover:-rotate-2 active:-rotate-3 border-2 border-dashed border-transparent hover:border-indigo-600">
                          <div className="w-full items-center px-1 py-2">
                            <a className="text-white"><span className="text-dark-gray font-black pr-1">ST-6:</span>Create new video product videos.</a>
                          </div>
                          <div className="flex w-full flex-wrap">
                            <div className="flex w-full flex-wrap justify-start p-1 items-center text-xs bg-dark-secondary shadow-inner">
                              <div className="flex mr-0.5">
                                <div className="inline-flex justify-center items-center my-0.5 even:mx-1 w-auto board-badge-status">
                                  <div className="inline-flex items-center w-full bg-purple-300 text-black">
                                    <div className="inline-flex items-center board-tag-badge font-medium py-1 px-3 bg-purple-300 text-black">
                                      <p className="whitespace-nowrap text-center w-full text-xs tag-text">
                                        Feature
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex mr-0.5">
                                <div className="inline-flex justify-center items-center my-0.5 even:mx-1 w-auto board-badge-status">
                                  <div className="inline-flex items-center w-full bg-red-500 text-white">
                                    <div className="inline-flex items-center board-tag-badge font-medium py-1 px-3 bg-red-500 text-white">
                                      <p className="whitespace-nowrap text-center w-full text-xs tag-text">
                                        L
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="grid w-full py-2 px-2 grid-flow-col-dense grid-cols-2">
                            <div className="w-full whitespace-nowrap hidden md:flex flex-wrap text-dark-gray pt-1 col-start-1">
                              <span className="text-xs w-full flex items-center text-white"><span className="flex items-center"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                  </svg>
                                  22 Jun 2220
                                </span>
                              </span>
                            </div>
                            <div className="flex lg:ml-auto self-start col-start-2">
                              <img className="inline-block relative rounded-full text-cool-gray-50 dark:text-gray-600 h-6 w-6" src="https://assets.codepen.io/1149983/avatar-3.png" alt="avatar" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="hidden md:flex flex-col flex-wrap w-full md:flex-col border h-full bg-dark-main border-gray-800">
                    <div className="flex flex-wrap w-full items-center border-b border-dark-main bg-dark-secondary">
                      <h6 className="font-bold pl-2 text-white">Done</h6>
                      <span className="py-2 px-4 h-full bg-dark-secondary text-white ml-auto text-black font-bold text-center flex items-center">2</span>
                    </div>
                    <div className="relative flex-grow max-w-full border-2 border-gray-800 border-dashed">
                      <div className="absolute left-0 top-0 h-full overflow-auto px-2 flex flex-col w-full max-w-full bg-dark-main">
                        <div className="grid w-full bg-dark-secondary shadow-md rounded mt-3 cursor-move transform hover:-rotate-2 active:-rotate-3 border-2 border-dashed border-transparent hover:border-indigo-600">
                          <div className="w-full items-center px-1 py-2">
                            <a className="text-white"><span className="text-dark-gray font-black pr-1">ST-5:</span>Investigate making storybook pubiclly accesible.</a>
                          </div>
                          <div className="flex w-full flex-wrap">
                            <div className="flex w-full flex-wrap justify-start p-1 items-center text-xs bg-dark-secondary shadow-inner">
                              <div className="flex mr-0.5">
                                <div className="inline-flex justify-center items-center my-0.5 even:mx-1 w-auto board-badge-status">
                                  <div className="inline-flex items-center w-full bg-purple-300 text-black">
                                    <div className="inline-flex items-center board-tag-badge font-medium py-1 px-3 bg-purple-300 text-black">
                                      <p className="whitespace-nowrap text-center w-full text-xs tag-text">
                                        Enhancement
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex mr-0.5">
                                <div className="inline-flex justify-center items-center my-0.5 even:mx-1 w-auto board-badge-status">
                                  <div className="inline-flex items-center w-full bg-green-500 text-white">
                                    <div className="inline-flex items-center board-tag-badge font-medium py-1 px-3 bg-green-300 text-white">
                                      <p className="whitespace-nowrap text-center w-full text-xs tag-text">
                                        S
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="grid w-full py-2 px-2 grid-flow-col-dense grid-cols-2">
                            <div className="w-full whitespace-nowrap hidden md:flex flex-wrap text-dark-gray pt-1 col-start-1">
                              <span className="text-xs w-full flex items-center text-white"><span className="flex items-center"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                  </svg>
                                  22 Jun 2220
                                </span>
                              </span>
                            </div>
                            <div className="flex ml-auto self-start justify-end col-start-2">
                              <img className="inline-block relative rounded-full text-cool-gray-50 dark:text-gray-600 h-6 w-6" src="https://assets.codepen.io/1149983/avatar-14.png" alt="avatar" />
                            </div>
                          </div>
                        </div>
                        <div className="grid w-full bg-dark-secondary shadow-md rounded mt-3 cursor-move transform hover:-rotate-2 active:-rotate-3 border-2 border-dashed border-transparent hover:border-indigo-600">
                          <div className="w-full items-center px-1 py-2">
                            <a className="text-white"><span className="text-dark-gray font-black pr-1">ST-7:</span>This story is being contributed to by the whole
                              team, in real-time, while on an integrated video
                              call.</a>
                          </div>
                          <div className="flex w-full flex-wrap">
                            <div className="flex w-full flex-wrap justify-start p-1 items-center text-xs bg-dark-secondary shadow-inner">
                              <div className="flex mr-0.5">
                                <div className="inline-flex justify-center items-center my-0.5 even:mx-1 w-auto board-badge-status">
                                  <div className="inline-flex items-center w-full bg-purple-300 text-black">
                                    <div className="inline-flex items-center board-tag-badge font-medium py-1 px-3 bg-purple-300 text-black">
                                      <p className="whitespace-nowrap text-center w-full text-xs tag-text">
                                        Feature
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex mr-0.5">
                                <div className="inline-flex justify-center items-center my-0.5 even:mx-1 w-auto board-badge-status">
                                  <div className="inline-flex items-center w-full bg-red-500 text-white">
                                    <div className="inline-flex items-center board-tag-badge font-medium py-1 px-3 bg-red-500 text-white">
                                      <p className="whitespace-nowrap text-center w-full text-xs tag-text">
                                        L
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="grid w-full py-2 px-2 grid-flow-col-dense grid-cols-2">
                            <div className="w-full whitespace-nowrap hidden md:flex flex-wrap text-dark-gray pt-1 col-start-1">
                              <span className="text-xs w-full flex items-center text-white"><span className="flex items-center"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                  </svg>
                                  22 Jun 2220
                                </span>
                              </span>
                            </div>
                            <div className="flex ml-auto self-start justify-end col-start-2">
                              <img className="inline-block relative rounded-full text-cool-gray-50 dark:text-gray-600 h-6 w-6" src="https://assets.codepen.io/1149983/avatar-17_1.png" alt="avatar" />

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex-shrink-0 lg:border-l lg:border-gray-800 shadow-2xl">
          <div className="lg:h-full lg:w-60 xl:w-80">
            <div className="lg:h-full relative">
              <div className="absolute inset-0 rounded-lg overflow-auto">

                <div className="flex flex-col p-3 bg-dark-secondary mb-2">
                  <h2 className="leading-none font-bold text-white mb-5 flex ">
                    <span className="flex-shrink-0">
                      Activity on:
                    </span>
                    <span className="text-white pl-2 flex flex-row"><span className="text-dark-gray font-black pr-1 flex-shrink-0">ST-1:</span>Create wireframes for new module.</span>
                  </h2>

                  <div className="flow-root">
                    <ul className="-mb-6">
                      <li>
                        <div className="relative pb-4">

                          <span className="absolute top-5 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                          <div className="relative flex items-start space-x-3">

                            <img className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-1 ring-white" src="https://assets.codepen.io/1149983/avatar-17_1.png" alt=""/>

                            <div className="min-w-0 flex-1">
                              <div>
                                <div className="text-sm">
                                  <a href="#" className="font-medium text-gray-200">Kaina</a>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">
                                  Commented 6mins ago
                                </p>
                              </div>
                              <div className="mt-1 text-sm text-gray-300">
                                <p>
                                  Have you tried the new wireframe tool we talked about yesterday?.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>

                        <div className="relative pb-4">

                          <span className="absolute top-5 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                          <div className="relative flex items-start space-x-3">

                            <img className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-1 ring-white" src="https://assets.codepen.io/1149983/avatar-15.png" alt=""/>

                            <div className="min-w-0 flex-1 py-1.5">
                              <div className="text-sm text-gray-500">
                                <a href="#" className="font-medium text-indigo-200">You</a>
                                assigned
                                <a href="#" className="font-medium text-gray-200">Sarah</a>
                                <span className="whitespace-nowrap">12mins ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>

                        <div className="relative pb-4">

                          <span className="absolute top-5 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                          <div className="relative flex items-start space-x-3">

                            <img className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-1 ring-white" src="https://assets.codepen.io/1149983/avatar-4.png" alt=""/>

                            <div className="min-w-0 flex-1 py-0">
                              <div className="text-sm leading-8">
                                <span className="mr-0.5 text-gray-500">
                                  <a href="#" className="font-medium text-gray-200">Johan</a>
                                  added tags
                                </span>
                                <span className="mr-0.5">

                                  <a href="#" className="relative inline-flex items-center rounded-full bg-red-500 border border-gray-300 px-3 py-0.5 text-sm">
                                    <span className="absolute flex-shrink-0 flex items-center justify-center">
                                      <span className="h-1.5 w-1.5 rounded-full bg-red-900" aria-hidden="true"></span>
                                    </span>
                                    <span className="ml-3.5 font-medium text-white">Bug</span>
                                  </a>

                                  <a href="#" className="relative inline-flex items-center rounded-full bg-indigo-500 border border-gray-300 px-3 py-0.5 text-sm">
                                    <span className="absolute flex-shrink-0 flex items-center justify-center">
                                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-900" aria-hidden="true"></span>
                                    </span>
                                    <span className="ml-3.5 font-medium text-white">Accessibility</span>
                                  </a>

                                </span>
                                <span className="whitespace-nowrap text-gray-500">6h ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
                  <div className="mt-6">
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <img className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-1 ring-white" src="https://assets.codepen.io/1149983/avatar-15.png" alt=""/>

                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <form action="#">
                          <div className="flex flex-col items-end">
                            <label htmlFor="comment" className="sr-only">Comment</label>
                            <textarea id="comment" name="comment" rows="2" className="text-sm outline-none px-3 py-2 rounded-md shadow-sm focus:ring-brand-900 focus:border-brand-500 focus:ring-2 leading-8 border bg-gray-800 border-gray-800 text-white transition-colors duration-200 ease-in-out w-full placeholder-opacity-50 placeholder-gray-300" placeholder="Leave a comment"></textarea>

                            <button type="button" className=" mt-2 inline-flex items-center p-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                              Reply
                            </button>
                          </div>

                        </form>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="flex flex-col p-3 bg-dark-secondary mb-5 md:mb-0">
                  <h4 className="py-4 mb-2 leading-none font-bold text-white">
                    Update issue
                  </h4>
                  <form action="#">
                    <div className="mb-2">
                      <label className="block mb-2 font-semibold text-gray-dark" htmlFor="heading">
                        <div className="flex items-center font-semibold text-white">
                          <span className="">Title</span>
                        </div>
                      </label><input name="title" className="text-sm outline-none px-3 py-2 rounded-md shadow-sm focus:ring-brand-900 focus:border-brand-500 focus:ring-2 leading-8 border bg-gray-800 border-gray-800 text-white transition-colors duration-200 ease-in-out w-full placeholder-opacity-50 placeholder-gray-300" id="heading" type="text" placeholder="Title" value="Create wireframes for new module" />
                    </div>
                    <div className="mb-2">
                      <label className="block mb-2 font-semibold text-gray-dark" htmlFor="description">
                        <div className="flex items-center font-semibold text-white">
                          <span className="">Description</span>
                        </div>
                      </label><textarea id="description" name="description" className="text-sm outline-none px-3 py-2 rounded-md shadow-sm focus:ring-brand-900 focus:border-brand-500 focus:ring-2 leading-8 border bg-gray-800 border-gray-800 text-white transition-colors duration-200 ease-in-out w-full placeholder-opacity-50 placeholder-gray-300" placeholder="Description" rows="2"></textarea>
                    </div>
                    <div className="flex flex-col grid grid-cols-2 gap-2 items-center">
                      <div className="mb-2">
                        <label className="block mb-2 font-semibold text-gray-dark" htmlFor="type">
                          <div className="flex items-center font-semibold text-white">
                            <span>Type</span>
                          </div>
                        </label>
                        <div className="w-full relative mb-4">
                          <select name="typeOfItems" className="text-sm flex items-center outline-none px-3 py-2 rounded-md shadow-sm focus:ring-brand-900 focus:border-brand-500 focus:ring-2 leading-8 border bg-gray-800 border-gray-700 text-white transition-colors duration-200 ease-in-out w-full appearance-none">
                            <option value="FEATURE">Feature</option>
                            <option value="ENHANCEMENT">Enhancement</option>
                            <option value="SPIKE">Spike</option>
                            <option value="BUG">Bug</option>
                            <option value="CHORE">Chore</option>
                            <option value="CHORE" selected>R&D</option>
                          </select>
                          <span className="absolute right-3 self-center top-0 bottom-0 m-auto text-gray-400 flex items-center justify-center">
                            <svg fill="none" className="w-6 lg:w-5 h-5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="mb-2">
                        <label className="block mb-2 font-semibold text-gray-dark" htmlFor="type">
                          <div className="flex items-center font-semibold text-white">
                            <span>Size</span>
                          </div>
                        </label>
                        <div className="w-full relative mb-4">
                          <select name="sizeOfItems" className="text-sm flex items-center outline-none px-3 py-2 rounded-md shadow-sm focus:ring-brand-900 focus:border-brand-500 focus:ring-2 leading-8 border bg-gray-800 border-gray-700 text-white transition-colors duration-200 ease-in-out w-full appearance-none">
                            <option value="s" selected>Small</option>
                            <option value="m" selected>Medium</option>
                            <option value="l">Large</option>
                            <option value="n/a">Bug</option>
                          </select>
                          <span className="absolute right-3 self-center top-0 bottom-0 m-auto text-gray-400 flex items-center justify-center">
                            <svg fill="none" className="w-6 lg:w-5 h-5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <label className="block mb-2 font-semibold text-gray-dark" htmlFor="type">
                        <div className="flex items-center font-semibold text-white">
                          <span>Status</span>
                        </div>
                      </label>
                      <div className="w-full relative mb-4">
                        <select name="sizeOfItems" className="text-sm flex items-center outline-none px-3 py-2 rounded-md shadow-sm focus:ring-brand-900 focus:border-brand-500 focus:ring-2 leading-8 border bg-gray-800 border-gray-700 text-white transition-colors duration-200 ease-in-out w-full appearance-none">
                          <option value="CREATED" selected>Backlog</option>
                          <option value="IN_PROGRESS">In Progress</option>
                          <option value="REVIEW">Review</option>
                          <option value="DONE">Done</option>
                        </select>
                        <span className="absolute right-3 self-center top-0 bottom-0 m-auto text-gray-400 flex items-center justify-center">
                          <svg fill="none" className="w-6 lg:w-5 h-5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </span>
                      </div>

                      <div className="flex">
                        <button type="button" className="ml-auto mt-2 inline-flex items-center p-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
  <div className="flex-shrink-0 w-full bg-black bg-opacity-90 shadow-inner h-12 md:h-auto">
    <div className="flex flex-row items-center w-full">
      <div className="flex items-center">
        <button className="h-16 hidden md:flex justify-center flex-col relative focus:outline-none lg:border-l-4 border-transparent hover:border-brand-800 lg:px-3 hover:bg-cool-gray-300 text-cool-gray-50 hover:text-black items-center grid place-items-center text-white" type="button">
          <div className="h-full flex justify-center items-center grid place-items-center">
            <span><svg xmlns="http://www.w3.org/2000/svg" className="Svg w-12" viewBox="0 0 24 24">
                <g fillRule="evenodd" fill="currentColor">
                  <path d="M12.616 4C13.379 4 14 4.62 14 5.384c0 .31.171.566.457.684.286.118.588.059.808-.16.539-.54 1.415-.54 1.956-.001l.872.873c.539.539.539 1.417 0 1.956-.22.219-.28.52-.161.807.118.286.374.457.684.457.763 0 1.384.62 1.384 1.384v1.233C20 13.38 19.379 14 18.616 14c-.309 0-.565.17-.684.458-.119.286-.059.588.161.807.539.54.539 1.417 0 1.956l-.872.873c-.541.539-1.417.539-1.956 0-.22-.22-.522-.28-.808-.161-.286.119-.457.374-.457.684C14 19.38 13.379 20 12.616 20h-1.233C10.62 20 10 19.38 10 18.617c0-.31-.171-.565-.457-.684-.292-.12-.589-.06-.808.16-.539.539-1.417.54-1.956 0l-.872-.872c-.261-.261-.405-.608-.406-.978 0-.37.145-.717.406-.98.219-.217.28-.52.16-.805-.119-.287-.375-.458-.684-.458C4.62 14 4 13.38 4 12.617v-1.233C4 10.62 4.62 10 5.383 10c.309 0 .566-.171.684-.457.119-.286.059-.588-.16-.807-.261-.261-.406-.61-.406-.978 0-.37.145-.717.406-.98l.872-.87c.537-.54 1.415-.541 1.956 0 .219.219.523.28.807.16.287-.118.458-.374.458-.684C10 4.62 10.62 4 11.383 4zm0 1h-1.233c-.211 0-.383.172-.383.384 0 .717-.412 1.334-1.075 1.608-.662.274-1.39.13-1.897-.377-.15-.15-.391-.15-.542 0l-.872.872c-.073.072-.113.169-.113.27 0 .103.04.199.113.272.507.507.652 1.234.377 1.897-.274.663-.89 1.074-1.608 1.074-.211 0-.383.172-.383.384v1.233c0 .21.172.383.383.383.718 0 1.334.412 1.608 1.075.275.663.13 1.39-.377 1.897-.073.073-.113.169-.113.27.001.104.04.199.113.27l.872.875c.152.15.393.149.542 0 .337-.338.772-.515 1.22-.515.226 0 .455.045.677.137.663.275 1.075.89 1.075 1.608 0 .21.172.383.383.383h1.233c.212 0 .384-.172.384-.383 0-.717.411-1.333 1.074-1.608.659-.272 1.389-.13 1.898.378.149.149.394.149.542-.001l.872-.872c.149-.15.149-.393 0-.542-.508-.507-.653-1.234-.378-1.897.274-.663.89-1.075 1.608-1.075.212 0 .384-.172.384-.383v-1.233c0-.212-.172-.384-.384-.384-.718 0-1.334-.412-1.608-1.075-.275-.662-.13-1.39.378-1.896.149-.15.149-.393 0-.542l-.872-.872c-.15-.15-.393-.15-.542 0-.509.508-1.239.65-1.898.377C13.412 6.717 13 6.1 13 5.384c0-.212-.172-.384-.384-.384zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm0 1c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"></path>
                </g>
              </svg>
            </span>
          </div>
        </button>

        <button className="h-16 hidden md:flex justify-center flex-col relative focus:outline-none lg:border-l-4 border-transparent hover:border-brand-800 lg:px-3 hover:bg-cool-gray-300 text-cool-gray-50 hover:text-black items-center grid place-items-center text-white">
          <div className="h-full flex justify-center items-center grid place-items-center">
            <span><svg xmlns="http://www.w3.org/2000/svg" className="Svg sc-pFZIQ gIPckd w-12 h-12" viewBox="0 0 24 24" data-testid="good-connection-mic">
                <title>Microphone</title>
                <g fillRule="evenodd" fill="currentColor">
                  <path d="M14.5 19c.276 0 .5.224.5.5s-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm3-7.5c.276 0 .5.224.5.5 0 3.309-2.691 6-6 6s-6-2.691-6-6c0-.276.224-.5.5-.5s.5.224.5.5c0 2.757 2.243 5 5 5s5-2.243 5-5c0-.276.224-.5.5-.5zM12 4c1.654 0 3 1.448 3 3.227v4.546C15 13.552 13.654 15 12 15s-3-1.448-3-3.227V7.227C9 5.447 10.346 4 12 4zm0 1c-1.103 0-2 .999-2 2.227v4.546C10 13 10.897 14 12 14s2-1 2-2.227V7.227C14 5.999 13.103 5 12 5z"></path>
                </g>
              </svg>
            </span>
          </div>
        </button>
        <button className="h-16 hidden md:flex justify-center flex-col relative focus:outline-none lg:border-l-4 border-transparent hover:border-brand-800 lg:px-3 hover:bg-cool-gray-300 text-cool-gray-50 hover:text-black items-center grid place-items-center text-white">
          <div className="h-full flex justify-center items-center grid place-items-center">
            <span><svg xmlns="http://www.w3.org/2000/svg" className="Svg w-12 h-12" viewBox="0 0 24 24">
                <g fillRule="evenodd" fill="currentColor">
                  <path d="M19 14.164c0 .176-.131.262-.187.29-.052.027-.234.1-.416-.028l-2.256-1.622v-.001c-.09-.064-.141-.16-.141-.262v-1.082c0-.102.051-.197.141-.262l2.255-1.622c.081-.057.159-.075.227-.075.09 0 .16.03.19.046.056.029.187.115.187.29v4.328zm-4 .336c0 .828-.673 1.5-1.5 1.5h-7c-.827 0-1.5-.672-1.5-1.5v-5C5 8.673 5.673 8 6.5 8h7c.827 0 1.5.673 1.5 1.5v5zm4.27-5.843c-.471-.242-1.028-.202-1.457.106L16 10.066V9.5C16 8.122 14.879 7 13.5 7h-7C5.121 7 4 8.122 4 9.5v5C4 15.879 5.121 17 6.5 17h7c1.379 0 2.5-1.121 2.5-2.5v-.566l1.814 1.304c.243.174.527.262.813.262.219 0 .438-.051.643-.156.45-.231.73-.683.73-1.18V9.837c0-.497-.28-.95-.73-1.18z"></path>
                </g>
              </svg>
            </span>
          </div>
        </button>
      </div>

      <div x-data="{ tooltip: false }" className="relative z-99 flex flex-grow-1 items-center mx-auto justify-center w-full relative">
        <button  className="absolute -top-0 -mt-5 md:-mt-10 focus:outline-none outline-none bg-gradient-to-b from-red-800 to-red-700 hover:bg-gradient-to-tr focus:bg-gradient-to-tr focus:shadow-sm active:bg-gradient-to-tr scale-150 transform rounded-full mx-auto flex justify-center items-center text-white w-12 h-12 place-items-center" type="button">
          <span><svg xmlns="http://www.w3.org/2000/svg" className="Svg w-10" viewBox="0 0 24 24">
              <g fillRule="evenodd" fill="currentColor">
                <path d="M14.407 5c2.405 0 4.384 1.91 4.495 4.289l.005.211v5c0 2.405-1.91 4.384-4.29 4.495l-.21.005h-2c-1.372 0-2.647-.625-3.498-1.676-.174-.215-.14-.53.074-.704.215-.173.53-.14.703.074.62.765 1.524 1.24 2.509 1.3l.212.006h2c1.86 0 3.394-1.473 3.494-3.309l.006-.191v-5c0-1.86-1.473-3.395-3.31-3.495L14.408 6h-2c-.936 0-1.817.374-2.472 1.029-.195.195-.512.195-.707 0-.195-.196-.195-.513 0-.708.785-.783 1.825-1.255 2.939-1.315l.24-.006h2zM8.682 8.843c.174.173.193.443.058.637l-.058.07-1.976 1.974h6.658c.276 0 .5.224.5.5 0 .246-.177.45-.41.492l-.09.008H6.707L8.682 14.5c.195.195.195.511 0 .707-.174.173-.443.193-.638.058l-.07-.058-2.828-2.83-.013-.013-.032-.038.045.052c-.027-.027-.05-.056-.07-.087l-.02-.035-.019-.041-.006-.016-.007-.019-.008-.03-.005-.02-.006-.032c-.003-.02-.005-.041-.005-.062v-.022c0-.022.002-.043.005-.064L5 12.024c0-.036.004-.071.01-.105l.013-.045c.004-.015.01-.03.016-.044l.006-.014.01-.023.013-.021.007-.012.013-.02.013-.018.032-.038.013-.013 2.829-2.829c.195-.195.512-.195.707 0z"></path>
              </g>
            </svg></span>
        </button>

        <div className="relative" x-cloak >
          <div className="absolute top-0 z-10 w-32 p-2 -mt-1 text-sm leading-tight text-white transform -translate-x-full -translate-y-full bg-dark-main rounded-lg shadow-lg">
            Leave team huddle
          </div>
        </div>

      </div>
      <div className="hidden md:flex pr-3">
        <span x-data="{ tooltip: false }" className="relative z-99 flex">
          <a  className="text-white bg-gradient-to-t from-brand-800 border border-brand-900 dark:hover:bg-brand-800 focus:bg-brand-800 dark:bg-none to-brand-700 dark:bg-brand-600 hover:bg-gradient-to-tr focus:bg-gradient-to-tr focus:shadow-sm active:bg-gradient-to-tr focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 btn rounded-full w-12 h-12 shadow-sm border border-transparent grid place-items-center" href=""><span><svg className="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
              </svg></span></a>

          <div className="relative" x-cloak >
            <div className="absolute top-0 z-10 w-32 p-2 -mt-1 text-sm leading-tight text-white transform -translate-x-1/2 -translate-y-full bg-dark-main rounded-lg shadow-lg">
              Create new bug
            </div>
          </div>
        </span>

        <span x-data="{ tooltip: false }" className="relative z-99 flex">
          <a  className="ml-2 text-white bg-gradient-to-t from-brand-800 border border-brand-900 dark:hover:bg-brand-800 focus:bg-brand-800 dark:bg-none to-brand-700 dark:bg-brand-600 hover:bg-gradient-to-tr focus:bg-gradient-to-tr focus:shadow-sm active:bg-gradient-to-tr focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 btn rounded-full w-12 h-12 shadow-sm border border-transparent grid place-items-center" href=""><span><svg className="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg></span></a>

          <div className="relative" x-cloak >
            <div className="absolute top-0 z-10 w-32 p-2 -mt-1 text-sm leading-tight text-white transform -translate-x-full -translate-y-full bg-dark-main rounded-lg shadow-lg">
              Create new story
            </div>
          </div>
        </span>
      </div>

      <div className="hidden md:flex pr-3">
        <span x-data="{ tooltip: false }" className="relative z-99 flex">
          <a  className="text-white bg-gradient-to-t from-brand-800 border border-brand-900 dark:hover:bg-brand-800 focus:bg-brand-800 dark:bg-none to-brand-700 dark:bg-brand-600 hover:bg-gradient-to-tr focus:bg-gradient-to-tr focus:shadow-sm active:bg-gradient-to-tr focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 btn rounded-full w-12 h-12 shadow-sm border border-transparent grid place-items-center" href=""><span>

              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-current" viewBox="0 0 512 512">
                <defs />
                <path d="M484 167.383c4.142 0 7.5-3.358 7.5-7.5v-27.165c0-15.297-8.91-29.031-22.354-35.402L272.88 3.83c-10.73-5.107-23.033-5.106-33.751.001l-143.1 68.161c-3.74 1.781-5.327 6.257-3.546 9.996s6.256 5.327 9.996 3.546L245.58 17.372c6.622-3.155 14.222-3.155 20.852 0l196.278 93.491c1.212.574 2.361 1.258 3.452 2.021L256 212.99 45.844 112.887c1.096-.765 2.251-1.452 3.471-2.03L73.6 99.29c3.739-1.781 5.327-6.257 3.545-9.996-1.782-3.74-6.255-5.326-9.997-3.545l-24.271 11.56C29.314 103.737 20.5 117.512 20.5 132.718v246.583c0 15.039 8.776 28.936 22.358 35.405l131.112 62.445c3.739 1.781 8.215.194 9.996-3.546s.194-8.215-3.546-9.996L49.309 401.164C40.92 397.168 35.5 388.587 35.5 379.301V132.718c0-2.595.411-5.144 1.209-7.567L248.5 226.032v269.776c-.999-.325-1.976-.714-2.921-1.165l-36.271-17.275c-3.74-1.784-8.216-.194-9.996 3.546-1.781 3.74-.194 8.215 3.546 9.996l36.264 17.272c5.231 2.499 11.068 3.82 16.879 3.82 5.819 0 11.659-1.321 16.882-3.816l196.265-93.474c.043-.021.111-.053.154-.074l.254-.123c13.332-6.545 21.946-20.364 21.946-35.204V191.696c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v187.612c0 9.164-5.321 17.697-13.644 21.783l-196.433 93.555c-.945.451-1.923.84-2.923 1.165v-269.78L475.293 125.15c.798 2.423 1.209 4.972 1.209 7.567v27.165c-.002 4.143 3.356 7.501 7.498 7.501z" />
                <path d="M359.334 301.469c-2.886 21.371 9.721 36.918 24.916 36.918 13.591 0 25.526-12.466 27.866-29.789 2.511-18.589-7.114-34.716-21.913-36.715-14.807-1.997-28.358 10.998-30.869 29.586zm37.916 5.122c-1.315 9.741-7.845 17.563-13.996 16.729-6.14-.829-10.371-10.102-9.055-19.843 1.316-9.742 7.862-17.562 13.996-16.729 6.14.83 10.371 10.102 9.055 19.843zM218.905 261.602c-1.022-18.73-13.453-32.771-28.316-31.955-14.856.811-25.692 16.118-24.669 34.847.994 18.214 12.783 31.99 27.094 31.989 13.743 0 27.037-13.891 25.891-34.881zm-25.488 19.87c-6.126.334-11.986-7.981-12.521-17.796-.536-9.815 4.376-18.718 10.51-19.053 6.13-.319 11.985 7.981 12.521 17.796.426 7.804-3.248 18.656-10.51 19.053zM57.015 358.592c1.061 19.451 14 31.988 27.156 31.987 14.131 0 26.948-14.43 25.831-34.879-1.102-20.207-14.887-32.691-28.317-31.955-13.5.736-25.767 14.775-24.67 34.847zm25.487-19.87c7.299-.387 12.095 9.982 12.522 17.795.417 7.643-3.172 18.652-10.511 19.053-7.299.39-12.094-9.982-12.521-17.795-.425-7.804 3.249-18.657 10.51-19.053zM165.31 135.177c18.73-1.022 32.767-13.46 31.957-28.316-.747-13.69-14.983-25.749-34.849-24.669-18.73 1.022-32.768 13.46-31.957 28.316.876 16.025 17.659 25.613 34.849 24.669zm-2.075-38.008c7.578-.41 18.65 3.127 19.054 10.509.334 6.135-7.981 11.986-17.796 12.522-9.818.542-18.718-4.375-19.054-10.51-.335-6.134 7.981-11.985 17.796-12.521zM252.29 37.786c-18.73 1.022-32.768 13.46-31.957 28.315.72 13.211 14.436 25.78 34.849 24.669 18.73-1.022 32.767-13.46 31.957-28.315-.812-14.855-16.118-25.693-34.849-24.669zm2.075 38.008c-7.663.415-18.653-3.181-19.054-10.509-.334-6.134 7.981-11.985 17.796-12.521 7.706-.42 18.654 3.194 19.054 10.51.334 6.133-7.981 11.984-17.796 12.52zM349.283 138.349c20.208-1.102 32.69-14.887 31.957-28.316-.75-13.747-15.06-25.75-34.849-24.669-18.73 1.022-32.767 13.46-31.957 28.316.748 13.677 14.687 25.776 34.849 24.669zm-2.075-38.008c7.578-.41 18.65 3.127 19.054 10.509.398 7.283-9.967 12.093-17.796 12.521-9.813.543-18.719-4.375-19.054-10.509-.334-6.134 7.982-11.985 17.796-12.521zM258.634 126.598c-18.73 1.022-32.767 13.46-31.957 28.316.776 14.206 14.806 24.736 32.412 24.736 21.36 0 35.163-14.298 34.394-28.383-.75-13.748-15.057-25.748-34.849-24.669zm2.074 38.008c-9.821.538-18.718-4.375-19.054-10.509-.334-6.135 7.981-11.986 17.796-12.522 7.571-.409 18.65 3.121 19.054 10.51.399 7.283-9.966 12.093-17.796 12.521z" />
              </svg></span></a>

          <div className="relative" x-cloak >
            <div className="absolute top-0 z-10 w-32 p-2 -mt-1 text-sm leading-tight text-white transform -translate-x-1/2 -translate-y-full bg-dark-main rounded-lg shadow-lg">
              Random issue next
            </div>
          </div>
        </span>

        <span x-data="{ tooltip: false }" className="relative z-99 flex">
          <a  className="ml-2 text-white bg-gradient-to-t from-brand-800 border border-brand-900 dark:hover:bg-brand-800 focus:bg-brand-800 dark:bg-none to-brand-700 dark:bg-brand-600 hover:bg-gradient-to-tr focus:bg-gradient-to-tr focus:shadow-sm active:bg-gradient-to-tr focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 btn rounded-full w-12 h-12 shadow-sm border border-transparent grid place-items-center" href=""><span>

              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-current" viewBox="0 0 334.938 334.938">
                <defs />
                <path d="M170.124 75.058c20.692 0 37.527-16.836 37.527-37.529S190.817 0 170.124 0c-20.694 0-37.53 16.835-37.53 37.528s16.836 37.53 37.53 37.53zm0-57.058c10.768 0 19.527 8.761 19.527 19.528 0 10.769-8.76 19.529-19.527 19.529-10.769 0-19.53-8.761-19.53-19.529 0-10.767 8.762-19.528 19.53-19.528zm58.329 307.934c0 4.971-4.029 9-9 9h-24.278c-.015 0-.031.003-.046.003-.306 0-.607-.019-.907-.049-.012-.001-.024-.003-.037-.005-.274-.029-.545-.07-.812-.124-.076-.015-.15-.036-.225-.053-.199-.045-.396-.093-.591-.152-.104-.031-.204-.067-.306-.102-.162-.055-.322-.111-.479-.175-.114-.046-.225-.096-.337-.146-.141-.064-.28-.13-.417-.201-.115-.06-.229-.121-.341-.186-.129-.073-.254-.15-.379-.23-.111-.071-.22-.142-.327-.217-.122-.085-.239-.175-.356-.267-.101-.079-.202-.157-.3-.24-.118-.1-.231-.206-.344-.313-.088-.083-.178-.164-.263-.251-.115-.118-.224-.242-.332-.366-.074-.084-.152-.167-.223-.254-.111-.137-.214-.281-.317-.424-.06-.083-.124-.163-.181-.249-.106-.158-.202-.324-.298-.49-.132-.226-.252-.459-.364-.697-.042-.09-.089-.175-.128-.267-.081-.188-.149-.384-.217-.579-.024-.069-.053-.136-.075-.206-.064-.2-.116-.405-.167-.611-.017-.07-.038-.139-.054-.209-.044-.2-.076-.404-.106-.608-.01-.066-.026-.13-.034-.196l-.021-.168c-.002-.022-.006-.043-.008-.064l-22.419-176.399c-.627-4.931 2.862-9.437 7.793-10.063 4.937-.63 9.437 2.862 10.063 7.793l21.448 168.765h16.385c4.97 0 9 4.029 9 9zm19.778-102.677c-1.1.442-2.236.651-3.354.651-3.566 0-6.941-2.134-8.354-5.646l-28.386-70.611c-8.646-21.51-16.798-35.302-30.702-37.595-4.435-.699-34.578-.594-38.856.135-16.331 3.052-27.85 20.757-38.247 38.629l-.317.547 18.36 47.494c1.792 4.636-.513 9.848-5.149 11.64-4.633 1.79-9.847-.514-11.64-5.149l-19.919-51.525c-.985-2.548-.76-5.405.613-7.768l2.491-4.286c11.949-20.541 26.691-42.825 50.516-47.277 6.428-1.205 39.362-1.143 45.078-.198 24.629 4.062 35.87 27.237 44.474 48.642l28.386 70.611c1.854 4.61-.382 9.851-4.994 11.706zm-86.616 10.276l-28.266 83.4h11.763c4.971 0 9 4.029 9 9s-4.029 9-9 9h-24.253c-.021 0-.042.005-.063.005-.295 0-.592-.02-.889-.05-.037-.003-.073-.009-.11-.013-.232-.026-.465-.062-.697-.106-.083-.016-.165-.033-.247-.051-.178-.04-.356-.086-.533-.137-.103-.03-.206-.058-.307-.09-.036-.012-.072-.02-.107-.032-.088-.03-.17-.069-.257-.102-.162-.061-.324-.121-.482-.191-.134-.059-.263-.124-.393-.189-.128-.064-.256-.127-.38-.197-.15-.084-.294-.175-.438-.267-.096-.061-.192-.121-.285-.186-.155-.107-.304-.221-.452-.338-.077-.061-.155-.122-.23-.186-.147-.124-.287-.253-.425-.386-.072-.069-.144-.137-.213-.209-.127-.131-.249-.266-.367-.404-.074-.085-.147-.171-.218-.259-.103-.129-.2-.261-.296-.396-.077-.107-.152-.216-.224-.327-.079-.122-.153-.247-.226-.372-.076-.13-.15-.261-.219-.395-.06-.117-.116-.235-.171-.354-.067-.146-.133-.292-.192-.442-.048-.121-.091-.242-.134-.365-.052-.149-.103-.299-.147-.452-.04-.138-.073-.277-.107-.417-.033-.139-.066-.277-.093-.418-.032-.167-.055-.336-.077-.506-.015-.117-.033-.234-.043-.353-.018-.197-.025-.395-.03-.594-.002-.075-.011-.148-.011-.223 0-.027.004-.052.004-.079.002-.19.015-.381.029-.573.009-.118.014-.237.027-.354.016-.144.042-.287.066-.431.026-.165.052-.33.087-.492.021-.095.049-.189.073-.284.052-.207.107-.412.174-.612.007-.021.01-.041.017-.061l32.296-95.291c1.595-4.709 6.707-7.237 11.412-5.635 4.707 1.597 7.229 6.707 5.634 11.414z" />
              </svg>
            </span>
          </a>

          <div className="relative" x-cloak >
            <div className="absolute top-0 z-10 w-32 p-2 -mt-1 text-sm leading-tight text-white transform -translate-x-full -translate-y-full bg-dark-main rounded-lg shadow-lg">
              Walk the board
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</div>
  </>
)
}