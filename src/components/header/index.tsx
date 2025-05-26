'use client';

import { toggleMode } from '../../app/script'

export function Header(){
    return(
        <header className="flex px-2 py-4 bg-zinc-800 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                    
                        <path d="M 3.333 13.333 L 3.333 15 C 3.333 16.841 4.826 18.333 6.667 18.333 L 8.333 18.333" fill="transparent" stroke="rgb(16, 185, 129)"></path><path d="M 18.333 28.333 L 23.333 28.333 L 23.333 31.667 C 23.333 32.587 24.08 33.333 25 33.333 L 28.333 33.333 C 29.254 33.333 30 32.587 30 31.667 L 30 26.667 C 31.574 26.143 32.809 24.907 33.333 23.333 L 35 23.333 C 35.92 23.333 36.667 22.587 36.667 21.667 L 36.667 18.333 C 36.667 17.413 35.92 16.667 35 16.667 L 33.333 16.667 C 33.333 14.044 32.098 11.574 30 10 L 30 5 C 27.902 5 25.926 5.988 24.667 7.667 L 24.167 8.333 L 18.333 8.333 C 12.81 8.333 8.333 12.81 8.333 18.333 L 8.333 20 C 8.333 22.623 9.568 25.093 11.667 26.667 L 11.667 31.667 C 11.667 32.587 12.413 33.333 13.333 33.333 L 16.667 33.333 C 17.587 33.333 18.333 32.587 18.333 31.667 Z" fill="transparent" stroke="rgb(16, 185, 129)"></path></svg>
                 </div>
                 <h1 className="absolute left-1/2 -translate-x-1/2 text-emerald-500  text-3xl">
                    FINANCE
                 </h1>
                <nav>
                    <ul className="flex items-center justify-center gap-2 "
                    >
                        <button className='adicionar'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus-icon lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8m-4-4v8"/></svg>
                        </button>
                        <button className="mode" onClick={toggleMode} ></button>
                    </ul>
                </nav>
            </div>
        </header>

    )
}