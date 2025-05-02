import Header from "@/components/Header"
import BigSlide from "@/components/BigSlide"
import SmallCard from "../../components/SmallCard"
import Footer from "@/components/Footer"

export default function About(){

    let smallCardsDescription = [
        {"name":"мови", "skills": ["TypeScript", "Python", "Javascript"]},
        {"name":"бд", "skills": ["SQLite", "PostgreSQL"]},
        {"name":"інструменти", "skills": ["VSCode", "Figma", "Git", "Font Awesome"]},
        {"name":"фреймворки", "skills": ["React", "Next", "Flask"]},
        {"name":"інше", "skills": ["HTML", "CSS", "REST", "Docker"]}
    ]
    
    let facts = [
        "я ♥ літо", "чай > кава", "я подорожую між містами на велосипеді", "фарба на моїх клавішах WASD вже стерлась  😔", "дизайн цього сайту був створений у камері сенсорної депривації", "я 🤝 безсоння"
    ]

    function handleSmallCards(){
        let smallCards = []

        for(let descriptionIndex in smallCardsDescription){
            smallCards.push((<SmallCard name = {smallCardsDescription[descriptionIndex].name} skills = {smallCardsDescription[descriptionIndex].skills} key = {descriptionIndex}/>))
        }

        return smallCards
    }



    return (
        <>
            <Header activeIndex={1} backColor = {"#00AEFF"} />
            <BigSlide backColor={"#00AEFF"} labelText={"Про."} labelDesc={"Декілька фактів про мене"} imgSrc={"https://freestock.ai/wp-content/uploads/edd/2024/05/Calming-Minimalist-Art-Close-Up-of-White-Sculpture-on-Gray-Background-Neutral-Color-Palette-for-Wallpaper-Large.jpeg"}>
                <button className="text-8xl font-martian-mono">
                    ↓
                </button>
            </BigSlide>

            <div className="bg-white h-[90svh] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] border-slate-200 border-b-3">
                <div className="flex flex-row h-[30svh] pt-10 px-10 pb-5 items-end w-full">
                    <div className="items-center flex flex-row w-full gap-10">
                        <a className="font-martian-mono text-4xl">Біографія</a>
                        <div className="flex bg-[#00AEFF] h-2 w-[50%] items-center"></div>
                    </div>
                </div>
                <div className="inline-grid grid-cols-2 gap-4 px-10">
                        <img className="w-[40vw] h-[40vh] bg-slate-400" src="https://i.fbcd.co/products/original/sun-boho-neutral-minimalism-high-resolution-wall-art-with-300dpi-wall-print-wall-decor-c16f5fd71022cbec6e6dc84d67f006eee9be691682f33af9b5f29a8a53dbafc5.jpg"></img>
                        <div className="text-4xl font-martian-mono">
                            Я - <span className="font-semibold">студент</span> за спеціальністю "Інженерія програмного забезпечення" у <a className="text-[#00AEFF] font-semibold" href="https://www.nau.edu.ua/">Національному універститі "Одеська політехніка"</a>. Маю досвід роботи з <span className="font-semibold">JavaScript</span>, <span className="font-semibold">Python</span> та іншими мовами програмування. Маю досвід роботи з <span className="font-semibold">React</span>, <span className="font-semibold">Next.js</span>, <span className="font-semibold">Flask</span> та іншими фреймворками. Маю досвід роботи з <span className="font-semibold">PostgreSQL</span>

                        </div>
                </div>
            </div>

            <div className="bg-white h-[80svh] drop-shadow-[0px_4px_8px_rgba(0,0,0,0.25)] border-slate-200 border-b-3">
                <div className="flex flex-row h-[30svh] pt-10 px-10 pb-5 items-end w-full">
                    <div className="items-center flex flex-row w-full justify-end gap-10">
                    <div className="flex bg-[#00AEFF] h-2 w-[50%] items-center"></div>
                    <a className="font-martian-mono text-4xl">Навички</a>
                    </div>
                </div>
                <div className="inline-grid grid-cols-5 gap-10 px-40 w-full justify-center items-start mt-20">
                    {handleSmallCards()}
                </div>
            </div>

            <div className="bg-white h-[80vh] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] py-10">
                <div className="mx-auto text-5xl w-full px-auto text-center font-semibold font-fira-code">Фан факти</div>
                <div className="relative w-full h-[100vh]">
                    {facts.map((fact, index) => (
                        <div
                        key={index}
                        className="absolute bg-white border border-gray-300 p-2 text-4xl font-fira-code"
                        style={{
                            top: `${Math.random() * 60}vh`,
                            left: `${Math.random() * 60}vw`, 
                        }}
                        >
                        {fact}
                        </div>
                    ))}
                </div>

            </div>
            <Footer/>


        </>
    )
}