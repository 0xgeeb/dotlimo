import { TopMain, Projects, Socials } from "../"

export const Main = () => {
  return (
    <div className="h-[85%] bg-repeat bg-[url('/bg_main.png')]">
      <div className="h-[100%] mx-[18%]">
        <TopMain />
        <div className="w-[100%] h-[50%] flex flex-row justify-around pt-[5%]">
          <Projects />
          <Socials />
        </div>
      </div>        
    </div>
  )
}