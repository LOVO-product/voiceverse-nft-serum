import { ethers } from "hardhat";

async function main() {
  let [owner, addr1, addr2, addr3, addr4, addr5, addr6] = await ethers.getSigners();
  //========================================================================================================================
  // Is this right?
  const baseUri = 'https://lovo.mypinata.cloud/ipfs/QmRaZaBPChJc4HhRUqFZDCpHidjZ6dbHHGLpBa4RA6hsvu/';
  //========================================================================================================================


  // Deploy contract
  const Serum = await ethers.getContractFactory("MyERC1155NFT");
  const serum = await Serum.deploy();
  await serum.deployed();

  console.log("SerumAirdrop deployed to:", serum.address);

  //Set baseUri after deploy
  // await serum.connect(owner).setBaseURI(baseUri);



}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
