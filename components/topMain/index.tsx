export const TopMain = () => {
  return (
    <div className="h-[50%] flex flex-row pt-[3%]">
      <div className="w-[50%]">
        <div className="relative overflow-hidden">
          <img className="rounded-xl" src="./bg2.png" alt="bg" />
          <img className="bottom-0 left-[40%] absolute h-[150px] w-[150px]" src="./transparent_pfp.png" alt="pfp" id="avatar"/>
        </div>
        <p className="text-slate-300 pt-[2%]">yo im geeb.eth, I'm a full-stack and solidity developer that enjoys building cool shit. I also like defi, memes, video games, anime, rap and kpop.</p>
      </div>
      <div className="w-[50%]">
        <img className="mx-auto mt-[10%]" src="./geebanimals.png" alt="animals" />
      </div>
    </div>
  )
}