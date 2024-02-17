import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div>
       <section class="flex items-center py-10 xl:h-screen font-poppins ">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div class="flex flex-wrap ">
                <div class="w-full px-4 mb-5 lg:w-1/2 lg:mb-0">
                    <div class="relative">
                        <img src="https://static.vecteezy.com/system/resources/previews/035/728/236/non_2x/talking-to-a-chatbot-online-on-laptop-computer-communication-with-a-chat-bot-customer-service-and-support-artificial-intelligence-concept-vector.jpg" alt=""
                            class="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"/>
                        <div
                            class="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                    <div class="relative">
                        <h1
                            class="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-black font-bold  opacity-20 md:block">
                            About Us
                        </h1>
                        <h1 class="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl text-blue-500">
                            Welcome to our site
                        </h1>
                    </div>
                    <p class="mt-6 mb-10 text-base leading-7 text-gray-600 ">
                    EduNetAi was founded by a team of passionate educators and AI enthusiasts who saw the opportunity to bridge the gap between traditional education and the rapidly evolving world of AI. We are committed to creating a platform that empowers both students and teachers, leveraging AI to enhance the learning process and unlock new opportunities for growth and development.
                    </p>
                    <Link to="#"
                        class="px-4 py-3 text-gray-50 transition-all transform bg-blue-400 rounded-[80px] hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100 font-bold">
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}