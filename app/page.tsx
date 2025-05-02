import Image from "next/image";
import Header from "@/components/Header"
import BigSlide from "@/components/BigSlide"
import BoxCard from "@/components/BoxCard"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="">
      <Header activeIndex={0} backColor = {"#FFAA00"}/>
      <BigSlide backColor={"#FFAA00"} labelText={"Головна."} labelDesc = {"Фулл-стек програміст з Одеси, Україна"} imgSrc = {"https://www.singulart.com/blog/wp-content/uploads/2020/05/dave.jpg"}>
        <button className="bg-black text-white px-4 py-2 border border-white text-2xl">
          Зв’яжись зі мною!
        </button>
      </BigSlide>
      <div className="flex flex-col justify-center items-center h-[100svh] bg-white pt-40 gap-5 ">
        <div className="text-4xl font-martian-mono " >Останні роботи</div>
        <div className="flex flex-col md:flex-row gap-10 flex-wrap ">
         
          <BoxCard label="Перша робота" imageLink="https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg" 
            description="Опис першої роботи. Найкраща комерційна робота в портфолі, що ще не відбулась =("
          />

          <BoxCard label="Друга робота" imageLink="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif" 
            description="Опис другої роботи, що, як можна було догадатись, також ще не відбулась."
          />

          <BoxCard label="Третя робота" imageLink="https://preview.redd.it/af446nff4fq51.jpg?width=640&crop=smart&auto=webp&s=4f109ac392afe60a99674e6ebd1ff75df4719b5b" 
            description="Моя улюблена - третя неіснуюча робота, просто фантастика!"
          />


        </div>
      </div>
      <Footer/>

    </div>
  );
}
