import Header from "@/components/Header";
import BigSlide from "@/components/BigSlide";
import Footer from "@/components/Footer";

export default function Experience() {
    let projects = [
      { id: 1, client: "Lorem", name: "Duis", description: "Quisque rutrum.", framework: "Next.js", year: 2025 },
      { id: 2, client: "Lorem", name: "Duis", description: "Quisque rutrum.", framework: "WordPress", year: 2025 },
      { id: 3, client: "Lorem", name: "Duis", description: "Quisque rutrum.", framework: "Next.js", year: 2025 },
      { id: 4, client: "Lorem", name: "Duis", description: "Quisque rutrum.", framework: "WordPress", year: 2025 },
      { id: 5, client: "Lorem", name: "Duis", description: "Quisque rutrum.", framework: "Next.js", year: 2025 },
    ];
  
    return (
      <>
        <Header activeIndex={2} backColor={"#00FF90"} />
        <BigSlide
          backColor={"#00FF90"}
          labelText={"Досвід."}
          labelDesc={"Каталог усіх створених проектів"}
          imgSrc={
            "https://i.fbcd.co/products/original/sun-boho-neutral-minimalism-high-resolution-wall-art-with-300dpi-wall-print-wall-decor-aa76cb85ea9595f9071771e9ff8a9200a9b1272efd97fa38dc096c95984217da.jpg"
          }
        >
            <button className="text-8xl font-martian-mono">
                ↓
            </button>
        </BigSlide>



        <div className="font-martian-mono bg-white h-[80vh] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] pt-40 px-10">
          <table className="text-center table-auto w-full border-collapse border-gray-300 text-2xl">
            <thead>
              <tr className="bg-gray-100 ">
                <th className="border-t-2 border-gray-300 px-4 py-2">Замовник</th>
                <th className="border-t-2 border-gray-300 px-4 py-2">Назва</th>
                <th className="border-t-2 border-gray-300 px-4 py-2">Опис</th>
                <th className="border-t-2 border-gray-300 px-4 py-2">Фреймворк</th>
                <th className="border-t-2 border-gray-300 px-4 py-2">Рік</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="border-t-2  border-b-2 border-gray-300 px-4 py-2">{project.client}</td>
                  <td className="border-t-2 border-b-2 border-gray-300 px-4 py-2">{project.name}</td>
                  <td className="border-t-2 border-b-2 border-gray-300 px-4 py-2">{project.description}</td>
                  <td className="border-t-2 border-b-2 border-gray-300 px-4 py-2">{project.framework}</td>
                  <td className="border-t-2 border-b-2 border-gray-300 px-4 py-2">{project.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </>
    );
  }