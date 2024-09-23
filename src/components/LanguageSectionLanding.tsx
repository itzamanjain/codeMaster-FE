import React from "react"

export function  LanguageSectionLanding (){
   const languages=['C.svg','C++.svg','Csharp.svg','Go.svg','Java.svg','JS.svg','Php.svg','Ruby.svg']
   return(
      <section className="bg-gray-900 bg-gradient-to-t from-[#020817] to-[#0F172A] mx-4 md:mx-0 py-10 md:py-16">
      <div className="flex flex-col items-center text-center gap-4">
         <div className="text-5xl font-bold">Supported <span className="text-[#4E7AFF]">Languages</span></div>
         <div className="text-sm text-gray-500 w-full md:w-1/3">Solve problems in your preferred language with Code Master, offering a wide range of programming language options.</div>
         <div className="flex flex-wrap justify-center   gap-2 bg-black rounded-md p-2">
            {languages.map((lang:string,index:number)=><img key={index} src={`/languagesIcon/${lang}`} alt="lng icons" />)}
         </div>
         <div>& Many More</div>
      </div>
    </section>
   )
}