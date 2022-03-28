let bitaverse;
let Bitaverse_contract

async function setNFT_ABI(){

    Bitaverse_contract= "0x1923342dE639fF40776509B5D6174C087729ba13";

    bitaverse = await new web3.eth.Contract(BitaverseABI,Bitaverse_contract);


}

setNFT_ABI();


async function MintNFT(){
    await bitaverse.methods.mint().send({from:coinbase,value:web3.utils.toWei('0.088','ether')});

}