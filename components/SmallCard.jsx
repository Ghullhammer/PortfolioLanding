



export default function SmallCard(props){

    let skillElements = []
    let handleSkills = () => {
        return props.skills.map((skillName, index) => (
          <a key={index} className="text-lg xl:text-2xl block">
            {skillName}
          </a>
        ));
      }; 
    return (
        <div className="flex flex-col font-fira-code w-full justify-center h-[5hv] ">
            <div className="pl-2 text-xl lg:text-3xl font-fira-code text-[#4D4D4D] border-slate-400 border-2 h-auto">
                <a className="text-blue-500 font-fira-code">/</a>
                <a className="font-semibold">{props.name}</a>
            </div>
            <div className=" border-2 border-slate-400 pl-2">{handleSkills()}</div>
            
        </div>
    )

}