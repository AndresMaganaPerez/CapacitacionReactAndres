const Card = ({ img, title, rest, desc }) => {
    return (
        <div>
            <div className="w-full m-4">
                <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 drop-shadow-lg">
                    <img class="w-1/2 h-1/2 md:w-48 md:h-auto md:rounded-xl rounded-xl mx-auto" src={img} alt="" width="384" height="512"/>
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                        <p class="text-lg font-medium">{title}</p>
                        </blockquote>
                        <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">{rest}</div>
                        <div class="text-slate-700 dark:text-slate-500">{desc}</div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-5 mt-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </div>
    );
}

export default Card;