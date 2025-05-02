import Header from "@/components/Header"
import BigSlide from "@/components/BigSlide"

export default function About(){


    return (
        <>
            <Header activeIndex={1}/>
            <BigSlide backColor={"#00AEFF"} labelText={"Про."} labelDesc={"Декілька фактів про мене"}>
                <button className="text-8xl font-martian-mono">
                    ↓
                </button>
            </BigSlide>

            <div className="bg-white h-[100svh]">
                <div className="flex flex-row h-[30svh] pt-20 px-10 pb-5 items-end w-full">
                    <div className="items-center flex flex-row w-full gap-10">
                        <a className="font-martian-mono text-4xl">Біографія</a>
                        <div className="flex bg-[#00AEFF] h-2 w-[40%] items-center"></div>
                    </div>
                    
                </div>

            </div>
        </>
    )
}