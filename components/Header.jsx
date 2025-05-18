

export default function Header(props){

    let linkNames = [
        {name:"Головна", link:".."}, 
        {name:"Про", link:"about"},
        {name:"Досвід", link:"experience"}, 
        {name:"Контакти", link:"contacts"}
    ]
    
    let linkElementsHandler = () =>{
        let linkElements = [];
        for(let i = 0; i < linkNames.length; i++){
            if(i == props.activeIndex){
                linkElements.push((<li key={i}><a href={linkNames[i]["link"]} className="text-black">{linkNames[i]["name"]}</a></li>))
            } else{
                linkElements.push((<li key={i}><a href={linkNames[i]["link"]} className="text-slate-400">{linkNames[i]["name"]}</a></li>))
            }
            
        }
        return linkElements;
    }
    

    return(
        <div className="bg-white w-full h-auto h-max-21 flex justify-between md:px-25 ">
            <div className="flex font-[family-name:var(--font-monomaniac-one)] text-6xl h-full  items-center gap-8">
                <a className="h-auto md:h-15 w-15 self-alight-center" style={{background:props.backColor}}>🕶</a>
                <a className="pb-2">Yury</a>
                
                
            </div>
            <ul className="flex flex-col xl:flex-row gap-10 xl:text-2xl text-xl font-[family-name:var(--font-martian-mono)] items-center">
                {linkElementsHandler()}
            </ul>
        
        </div>
    )

}