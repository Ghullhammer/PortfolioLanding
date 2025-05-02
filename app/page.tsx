import Image from "next/image";
import Header from "@/components/Header"
import BigSlide from "@/components/BigSlide"
import BoxCard from "@/components/BoxCard"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="">
      <Header activeIndex={0} />
      <BigSlide backColor={"#FFAA00"}/>
      <div className="flex flex-col justify-center items-center h-[100svh] bg-white pt-20 gap-5 drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)]">
        <div className="text-4xl font-martian-mono " >Останні роботи</div>
        <div className="flex flex-row gap-10">
         
          <BoxCard label="Robota1" imageLink="https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg" 
            description="Morbi tempor ut diam nec consectetur. Donec scelerisque mauris non velit pharetra, sit amet blandit ex sagittis. Nunc dapibus faucibus mauris vitae ornare. Donec venenatis consequat sagittis."
          />

          <BoxCard label="Robota1" imageLink="https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg" 
            description="Morbi tempor ut diam nec consectetur. Donec scelerisque mauris non velit pharetra, sit amet blandit ex sagittis. Nunc dapibus faucibus mauris vitae ornare. Donec venenatis consequat sagittis."
          />

          <BoxCard label="Robota1" imageLink="https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg" 
            description="Morbi tempor ut diam nec consectetur. Donec scelerisque mauris non velit pharetra, sit amet blandit ex sagittis. Nunc dapibus faucibus mauris vitae ornare. Donec venenatis consequat sagittis."
          />


        </div>
      </div>
      <Footer/>

    </div>
  );
}
