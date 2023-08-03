export const Projects = () => {
  return (
    <div className="flex flex-col text-slate-300 mx-auto w-[90%] sm:w-[60%] lg:w-[50%]">
      <h1 className="text-[1.5rem] font-bold mx-auto">cool shit</h1>
      <div className="flex flex-col pt-[2%] sm:pt-[5%] mx-auto">
        <a href="https://github.com/0xgeeb/goldilocks" target="blank"><p className="hover:underline text-[12px] sm:text-[16px]">Goldilocks - novel AMM and NFT lending</p></a>
        <a href="https://github.com/0xgeeb/sdNFT" target="blank"><p className="hover:underline text-[12px] sm:text-[16px]">sdNFT - dynamic NFT based on staked derivative holdings</p></a>
        <a href="https://github.com/0xgeeb/geebwatch" target="blank"><p className="hover:underline text-[12px] sm:text-[16px]">Geebwatch - onchain discord analytics bot</p></a>
        <a href="https://github.com/0xgeeb/eth_tokyo" target="blank"><p className="hover:underline text-[12px] sm:text-[16px]">Celo PoP - dynamic NFT tracking participation on Celo</p></a>
        <a href="https://github.com/0xgeeb/eth_denver" target="blank"><p className="hover:underline text-[12px] sm:text-[16px]">Submintr - allow others to mint subdomains on your ENS</p></a>
      </div>
    </div>
  )
}