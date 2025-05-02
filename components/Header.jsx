

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
                linkElements.push((<li><a href={linkNames[i]["link"]} className="text-black">{linkNames[i]["name"]}</a></li>))
            } else{
                linkElements.push((<li><a href={linkNames[i]["link"]} className="text-slate-400" value={i}>{linkNames[i]["name"]}</a></li>))
            }
            
        }
        return linkElements;
    }
    

    return(
        <div className="bg-white w-full h-21 flex justify-between px-25 ">
            <div className="flex font-[family-name:var(--font-monomaniac-one)] text-6xl h-full  items-center gap-8">
                <a className="h-15 w-15 bg-slate-400 self-alight-center"></a>
                <a className="pb-2">Yury</a>
                
                
            </div>
            <ul className="flex gap-10 text-2xl font-[family-name:var(--font-martian-mono)] h-full items-center">
                {linkElementsHandler()}
            </ul>
        
        </div>
    )

}