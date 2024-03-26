import React from 'react'

const Card = (props: { data: any }) => {
    console.log(props.data)
    return (
        <>

            <div
                className="group relative cursor-pointer overflow-hidden bg-[#1F2029] md:w-[500px] px-6 pt-10 pb-8  shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md ">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341"></path> </g></svg>
                    </span>
                    <div
                        className="space-y-6 pt-5  text-xl text-base leading-7 text-orange-500 transition-all duration-300 group-hover:text-white/90">
                        <p>{props.data?.post}</p>
                    </div>
                    <div
                        className="space-y-6 text-base leading-7 text-white transition-all duration-300 group-hover:text-white/90">
                        <p>{props.data?.name}</p>
                    </div>

                    <div className="pt-1  text-base font-semibold leading-7">
                        <p>
                            <a href={props.data?.link} className="text-sky-500 transition-all duration-300 group-hover:text-white">Connect with me
                            </a>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
