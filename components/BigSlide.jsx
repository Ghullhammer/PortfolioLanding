import style from "./BigSlide.css"

export default function BigSlide(props){
    return (
        <div className = "">
            <div className="relative">
                <div className={`flex text-black px-60 py-16 text-left min-h-[600px] justify-between`} style={{ backgroundColor: props.backColor }}>

                    <div>
                        <h1 className="text-9xl font-bold mb-4">{props.labelText}</h1>
                        <p className="font-mono text-2xl mb-6 ">
                            {props.labelDesc}
                        </p>
                        <div>
                            {props.children}
                        </div>
                        
                    </div>
                    <div className="justify-start items-start">
                        <img src={props.imgSrc} className="flex bg-black w-160 items-start h-80 justify-start " alt = "big slide description"></img>
                    </div>
                    


                </div>
                <div className={`clip-custom h-40 w-full absolute left-0 top-[100%] z-2 pointer-events-none `} style={{ backgroundColor: props.backColor }}></div>
            </div>
            
            
            <div className="h-10 bg-[#4D4D4D] z-10 border-b-4 border-[#242323]"></div>
        </div>
    )
}