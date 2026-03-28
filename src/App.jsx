import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GoggleUI from './components/tailwindgogglr'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     {/* <h1 className="bg-violet-500 text-white">hello mayank</h1>
      <div className='bg-amber-200 text-white-2xl w-50 h-50 '>hello</div>
      <div className='bg-amber-200 text-white-2xl size-50 '>hello</div>
      <div className='size-fit  bg-violet-500 text-white-5xl'>mayank kumar yadav ji</div>
      <div className='size-1/4 hover:size-200  bg-violet-500 text-white-5xl'>mayank kumar yadav ji</div> */}
     
      {/* <div className='relative bg-amber-300 size-200 '>
      <div className='bg-violet-300 size-80 text-shadow-white-3xl hover:size-100 absolute bottom-0 right-0'>position of element in our page </div>
      <div className='bg-pink-300 size-80 text-shadow-white-3xl hover:size-100 absolute top-0 right-0'>position of element in our page </div>
      <div className='bg-blue-300 size-80 text-shadow-white-3xl hover:size-100 absolute top-0 left-0'>position of element in our page </div>
      <div className='bg-green-300 size-80 text-shadow-white-3xl hover:size-100 fixed bottom-0 left-0'>position of element in our page </div>
      
     </div>
     <div className='bg-blue-500 size-150 relative'> <div className='bg-blend-darken inset-10 absolute'></div></div>
     */}

     {/* <div className='bg-yellow-300 text-3xl container mx-auto '>container class</div> */}



     {/* background classes in tailwind  */}

     {/* <div className=' size-400  bg-red-500 bg-no-repeat bg-center bg-[url(https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg)]' > mayank kumar yadav </div>
     <div className='gradient bg-gradient-to-l to-blue-500 from-red-500 '> grandiant </div>

     <div className='size-100 m-30 shadow-black-400 shadow-2xl'>shadow</div> */}



     {/* filter in tailwind */}
     
     {/* <h1>BLUR </h1>
     <img className='blur-sm' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />
     <img className='blur-md' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />
     <img className='blur-xl' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />
     <img className='blur-3xl' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />

    <h1>contrast</h1>
    <img className='contrast-50' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />
    <img className='contrast-100' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />
    <img className='contrast-200' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />
    <img className='contrast-300' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />
    <img className='contrast-50' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />


   <h1>greyscale</h1>
  <img className='' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />
  <img className='grayscale' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />
   

   <h1>hue</h1>
  <img className='' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />
  <img className='hue-rotate-15' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />
  <img className='hue-rotate-30' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />
  <img className='hue-rotate-60' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />
  <img className='hue-rotate-90' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " />
  <img className='hue-rotate-100' src="https://static.vecteezy.com/system/resources/previews/038/023/362/non_2x/ai-generated-monkey-high-quality-image-free-photo.jpg" alt=" monkey image " /> */}
  





  {/* interactivity in tailwind  */}
{/* 
<h1>hover </h1>
  <button className='borded-1 m-5 p-2 rounded-2xl bg-blue-200 '>submit</button>
  <button className='borded-1 m-5 p-2 rounded-2xl bg-blue-200  hover:bg-blue-500 hover:p-10'>submit</button>


<h1>clike or focus  </h1>
<button className='borded-1 m-5 p-2 rounded-2xl bg-blue-200 '>submit</button>
<button className='borded-1 m-5 p-2 rounded-2xl bg-blue-200  focus:bg-violet-300'>submit</button>

<h1>active  </h1>
<button className='borded-1 m-5 p-2 rounded-2xl bg-blue-200 '>submit</button>
<button className='borded-1 m-5 p-2 rounded-2xl bg-blue-200 active:bg-red-400'>submit</button>

<h1>combo of all </h1>
<button className='borded-1 m-5 p-2 rounded-2xl bg-blue-200 '>submit</button>
<button className='borded-1 m-5 p-2 rounded-2xl bg-blue-200 active:bg-red-400   focus:bg-violet-300  hover:bg-blue-500 hover:p-10 '>submit</button>

<div>
  <a className = "text-blue-400 hover:text-blue-600">mayank portfoilo</a>
</div> */}



{/* media query and break point  */}

{/* 
 <div className='bg-red-200 size-200 m-20 p-40 shadow-blue-400 shadow-2xl lg:bg-green-300' > hello mayank</div>
 <div className='bg-red-200 size-200 m-20 p-40 shadow-blue-400 shadow-2xl sm:bg-blue-500' > hello mayank</div>
 <div className='bg-red-200 size-200 m-20 p-40 shadow-blue-400 shadow-2xl xl:bg-violet-500' > hello mayank</div>
 <div className='bg-red-200 size-200 m-20 p-40 shadow-blue-400 shadow-2xl 2xl:bg-black-500' > hello mayank</div>



<h1 className='text-4xl 2xl:text-8xl'>code step by step </h1> */}


{/* tailwind css colum classes  */}

{/* <div className=' bg-black-2500 columns-5 text-2xl'>
  
<h1 className='bg-red-200'>heading 1 </h1>
<h1 className='bg-violet-200'>heading 2 </h1>
<h1 className='bg-yellow-300'>heading 3</h1>
<h1 className='bg-blue-300'> heqding 4</h1>
<h1 className=' bg-black-500'>heading 5 </h1>

// </div> */}
{/* // <div className='columns-1 lg:columns-3'>
//   <img src="https://i.ytimg.com/vi/5IbIgK6no1c/maxresdefault.jpg" alt="" />
//   <img src="https://i.ytimg.com/vi/5IbIgK6no1c/maxresdefault.jpg" alt="" />
//   <img src="https://i.ytimg.com/vi/5IbIgK6no1c/maxresdefault.jpg" alt="" />
//   <img src="https://i.ytimg.com/vi/5IbIgK6no1c/maxresdefault.jpg" alt="" />
  
//   <img src="https://i.ytimg.com/vi/5IbIgK6no1c/maxresdefault.jpg" alt="" />
//   <img src="https://i.ytimg.com/vi/5IbIgK6no1c/maxresdefault.jpg" alt="" />
//   <img src="https://i.ytimg.com/vi/5IbIgK6no1c/maxresdefault.jpg" alt="" />
//   <img src="https://i.ytimg.com/vi/5IbIgK6no1c/maxresdefault.jpg" alt="" /> */}

{/* </div> */}



{/* flex in tail wind  */}

{/* 
<div className='bg-gray-300 size-500 flex-col-reverse 
justify-between'> 


<div className='bg-red-300 size-20'></div>
<div className='bg-yellow-300 size-20'></div>
<div className='bg-green-300 size-20'></div>
<div className='bg-blue-300 size-20'></div> */}



{/* gird with tailwind css */}


{/* 
<div className='grid grid-cols-4 gap-2 md:grid-cols-2'>
  
  <div className="bg-red-300 col-span-2 p-10 border border-red-800 "></div>
  <div className="bg-red-300  p-10 border border-red-800 "></div>
  <div className="bg-red-300  p-10 border border-red-800 "></div>
  <div className="bg-red-300  p-10 border border-red-800 "></div>
  <div className="bg-red-300  p-10 border border-red-800 "></div>
  <div className="bg-red-300  p-10 border border-red-800 "></div>
  <div className="bg-red-300 row-span-2  p-10 border border-red-800 "></div>
  <div className="bg-red-300  p-10 border border-red-800 "></div>
  
  <div className="bg-red-300 col-span-2 p-10 border border-red-800 "></div>
  <div className="bg-red-300  p-10 border border-red-800 "></div>
  <div className="bg-red-300  p-10 border border-red-800 "></div>
  <div className="bg-red-300  p-10 border border-red-800 "></div>
  <div className="bg-red-300  p-10 border border-red-800 "></div>
  <div className="bg-red-300  p-10 border border-red-800 "></div>
  <div className="bg-red-300 row-span-2  p-10 border border-red-800 "></div>
  <div className="bg-red-300  p-10 border border-red-800 "></div>
  
  </div>   */}





{/* transition and tranformation in tailwindcss */}

{/* transition is a time duration of transformation thing  ,,,,,, and transformation is a change the state of element like ( shape , size , position , lengh, height and many more )  */}


{/* <button className='bg-blue-400 text-white p-2 m-10 rounded-xl hover:bg-blue-700'>Login</button>
<button className='bg-blue-400 text-white p-2 m-10 rounded-xl hover:bg-blue-700 transition duration-1000'>Login</button>
<button className='bg-blue-400 text-white p-2 m-10 rounded-xl hover:opacity-5 transition duration-1000'>button 1 </button>
<button className='bg-red-400 text-white p-2 m-10 rounded-xl  hover:rotate-360 transition duration-1000 hover:scale-25'>button,button  </button>
<button className='bg-red-400 text-white p-2 m-10 rounded-xl  hover:scale-x-150 transition duration-1000'>button,button  </button> */}



{/* Animation in tailwind css  */}

{/* animation is use for animated our element  */}/
{/* 

<div className='bg-red-400 rounded-full size-10 mt-10 ml-10 animate-bounce'></div>
<hr />

<div className=' w-32 h-2 bg-red-400  size-10 m-10 animate-spin'></div>

<div className=' rounded-full bg-red-400  size-10 m-10 animate-ping'></div>
<div className=' rounded-full bg-red-400  size-10 m-10 animate-pulse'></div> */}




{/* screen breakpoint costimization in tailwind css */}

{/* <div className='bg-pink-400 text-4xl md:bg-red-700 '> hello mayank kumar yadav  </div> */}





{/* how to apply dark maode of use of tailwind css  */}

 
 {/* <div>
  <h1 className='text-7xl'>dark mode test with tailwind css </h1>
  <p classNmae="text-2xl">code with mayank kumar yadav and grow with mayank kumar </p>

 <div className='border-2'>

 <div className='bg-blue-300 size-8 flex  '>   </div>
  <h1 className='inline text-3xl'>dark mode ON kar do </h1>


 </div>
 </div> */}


 <GoggleUI/>







</>
)
}

export default App
