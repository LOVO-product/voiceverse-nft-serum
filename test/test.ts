import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";


describe("ERC721A", function () {
    let serum: Contract;
    const quantity = 5000;
    let owner: SignerWithAddress;
    let addr: SignerWithAddress;

    beforeEach(async function () {
        [owner, addr] = await ethers.getSigners();

        const Serum = await ethers.getContractFactory("MyERC1155NFT");
        serum = await Serum.deploy();
        await serum.deployed();
    })

    describe("Minting", function () {
        it("Should success mint", async function () {
            // console.log(owner.address);
            // console.log(await serumAirdrop.owner());
            await serum.connect(owner).toggleAirdropLive();
            const tx = await serum.connect(owner).mint(quantity);

            // wait until the transaction is mined
            const mintTxnResponse = await tx.wait();
            // console.log(`\tgas to mint ${quantity} nfts:`, mintTxnResponse.gasUsed.toString());

            expect(tx).to.not.be.undefined;

            const count = await serum.connect(owner).numberMinted(owner.getAddress());
            expect(count.toNumber()).equals(quantity);
        });

    })

});


