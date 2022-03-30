let bitaverse;
let Bitaverse_contract

async function setNFT_ABI(){

    Bitaverse_contract= "0x1923342dE639fF40776509B5D6174C087729ba13";

    bitaverse = await new web3.eth.Contract(BitaverseABI,Bitaverse_contract);

    let nums = await bitaverse.methods.SpecialNFT().call();

    $("#RareRemained").text(60 - nums);

    if(60 - nums == 0){
        $("#raremint").text("贈送完畢")
    }

    let normalR = await bitaverse.methods.PartnerOwned(coinbase).call();
    console.log(normalR);
    console.log(normalR.Nomal);
    //NormalRemained
    $("#RareRemained").text(normalR.Special);
    $("#NormalRemained").text(normalR.Nomal);


}
setNFT_ABI();




async function MintNFT(){
    let mintAmount = await bitaverse.methods.total_Mint().call();
    console.log(mintAmount);
    if(mintAmount < 10000){
        await bitaverse.methods.mint().send({from:coinbase,value:web3.utils.toWei('0.088','ether')});
    }else{
        return;
    }
}

async function WhiteListMint(){

    let check = await bitaverse.methods.WhiteListMint(coinbase).call();



    if(check>0){
        await bitaverse.methods.WhiteListMints().send({from:coinbase});
    }else{
        alert("抱歉，你不在白名單內");
    }
}


async function AdminMint(){
    let normalR = await bitaverse.methods.PartnerOwned(coinbase).call();
    console.log(normalR.Nomal);

    let input_address = $("#freeInput").val();
    if(normalR.Nomal>0){
     await bitaverse.methods.SponsorAmount(input_address).send({from:coinbase});
     window.location.reload();
    }else{
        alert("額度使用完畢");
    }

}

async function AdminMintRare(){
    let normalR = await bitaverse.methods.PartnerOwned(coinbase).call();
    let input_address = $("#rareinput").val();


    if(normalR.Special>0){
    await bitaverse.methods.RareNftMint(input_address).send({from:coinbase});
    window.location.reload();
    }else{
        alert("額度使用完畢");
    }

}