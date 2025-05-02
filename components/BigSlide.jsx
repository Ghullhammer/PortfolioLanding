import style from "./BigSlide.css"

export default function BigSlide(props){
    return (
        <div className = "">
            <div className="relative">
                <div className={`flex text-black px-60 py-16 text-left h-[70%] justify-between  `} style={{ backgroundColor: props.backColor }}>
                    <div>
                        <h1 className="text-9xl font-bold mb-4">Головна.</h1>
                        <p className="font-mono text-2xl mb-6 ">
                            Фулл-стек програміст з Одеси, Україна
                        </p>
                        <button className="bg-black text-white px-4 py-2 border border-white text-2xl">
                            Зв’яжись зі мною!
                        </button>
                    </div>
                    <div className="justify-center items-center self-center">
                        <div className="flex bg-black w-160 h-80 "></div>
                    </div>
                    


                </div>
                <div className={`clip-custom h-40 w-full absolute left-0 top-[100%] z-1 pointer-events-none`} style={{ backgroundColor: props.backColor }}></div>
            </div>
            
            
            <div className="h-10 bg-[#4D4D4D] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] shadow-2xl z-0"></div>
        </div>
    )
}