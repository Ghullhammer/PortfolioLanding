import Image from "next/image";
import Header from "@/components/Header"
import BigSlide from "@/components/BigSlide"
import BoxCard from "@/components/BoxCard"
import Footer from "@/components/Footer"

import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { LiaTelegramPlane } from "react-icons/lia";

function createForm(text){
    return(
        <div className="flex flex-col my-2">
            <p className="flex" >{text}</p>
            <input className="border-2 border-slate-300 flex-1"></input>
        </div>
    )
}

export default function Home() {
  return (
    <div className="">
      <Header activeIndex={3} backColor = {"#FF9500"}/>
      <BigSlide backColor={"#FF9500"} labelText={"Контакти."} imgSrc = {"https://www.singulart.com/blog/wp-content/uploads/2020/05/dave.jpg"}>
        <div className="flex flex-col border-2 border-black xl:w-[75%] p-5">
          <p className="text-lg xl:text-3xl font-bold">Зв’яжись зі мною!</p>
          <div className="grid grid-cols-2 grid-rows-2 font-martian-mono text-sm xl:text-2xl pt-5">
            <div className="flex"><CiTwitter /> Twitter</div>
            <div className="flex"><FiFacebook /> Facebook</div>
            <div className="flex"><CiLinkedin />LinkedIn</div>
            <div className="flex"><CiInstagram />Instagram</div>


          </div>
        </div>
      </BigSlide>
      <div className="flex flex-col justify-center items-center h-auto bg-white py-40 gap-5 ">
        <div className="text-4xl font-martian-mono " >Надіслати мені листа</div>
        
        <div className="border-2 border-slate-300 xl:p-15 p-2 mt-40 flex flex-col">

            <div className="grid xl:grid-cols-2 grid-cols-1 font-martian-mono text-sm xl:gap-20 mb-5 xl:mb-20">
                <div>
                    {createForm("Ім'я")}
                    {createForm("Пошта")}
                </div>
                    {createForm("Повідомлення")}               
            </div>
            
            

            <div className="flex justify-center items-center bg-[#4D4D4D] text-white mx-auto p-2">
                <LiaTelegramPlane />
                <a>Відправити!</a>
            </div>

        </div>

      </div>
      <Footer/>

    </div>
  );
}
