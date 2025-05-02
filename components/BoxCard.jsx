

export default function BoxCard(props){


    return (

        <div className="flex flex-col gap-5 justify-center items-center w-140 border-slate-400 border-2 text-center py-5">
            <a className="font-martian-mono text-2xl">{props.label}</a>
            <img src ={props.imageLink}></img>
            <div className="flex flex-row justify-between items-center px-5 gap-5">
                <a className="flex text-xl justify-start font-martian-mono text-slate-400">{props.description}</a>
                <button className="flex text-xl justify-end font-martian-mono text-slate-400 items-center border-2 h-10 ">Переглянути</button>
            </div>      
        </div>
    )
}