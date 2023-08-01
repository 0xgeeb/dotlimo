export const TopMain = () => {
  return (
    <div className="h-[50%] flex flex-row pt-[3%]">
      <div className="w-[50%]">
        <img className="rounded-xl" src="./main_pic.png" alt="bg" />
        <p className="text-slate-300 pt-[3%]">yo im geeb.eth I like building cool shit</p>
      </div>
      <div className="w-[50%] lg:my-auto">
        <img className="mx-auto" src="./geebanimals.png" alt="animals" />
        <a href="https://github.com/0xgeeb" target="blank"><div className="bg-[#eb8d29] text-[1.3rem] text-center text-white py-1 w-[25%] mx-auto mt-[5%] rounded-md hover:scale-125 cursor-pointer" id="github-button">github</div></a>
      </div>
    </div>
  )
}