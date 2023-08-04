import { TopMain, Projects, Socials } from "../"

export const Main = () => {
  return (
    <div className="h-[85%] bg-repeat bg-[url('/bg_main.png')]">
      <div className="h-[100%] mx-[5%] lg:mx-[18%] font-inter">
        <TopMain />
        <div className="w-[100%] h-[50%] flex flex-col sm:flex-row sm:justify-around pt-[3%] sm:pt-[8%] max-[400px]:h-[65%]">
          <Projects />
          <Socials />
        </div>
      </div>        
    </div>
  )
}