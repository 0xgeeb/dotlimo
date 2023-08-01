export const Projects = () => {
  return (
    <div className="flex flex-col text-slate-300 w-[50%]">
      <h1 className="text-[1.5rem] font-bold mx-auto">projects</h1>
      <div className="flex flex-col pt-[5%] mx-auto">
        <a href="https://github.com/0xgeeb/goldilocks" target="blank"><p className="hover:underline">Goldilocks - novel AMM and NFT lending</p></a>
        <a href="https://github.com/0xgeeb/geebwatch" target="blank"><p className="hover:underline">Geebwatch - onchain discord analytics bot</p></a>
        <a href="https://github.com/0xgeeb/eth_tokyo" target="blank"><p className="hover:underline">Celo PoP - dynamic NFT tracking participation on Celo</p></a>
        <a href="https://github.com/0xgeeb/eth_denver" target="blank"><p className="hover:underline">Submintr - allow others to mint subdomains on your ENS</p></a>
      </div>
    </div>
  )
}