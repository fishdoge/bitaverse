let bitaverse;
let Bitaverse_contract

async function setNFT_ABI(){

    Bitaverse_contract= "0x5Bd2FafF632390ce9ddeC86Cb83EDD8B837cD1F8";

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


    checkFreeMint();

}
setNFT_ABI();




async function MintNFT(){
    let mintAmount = await bitaverse.methods.total_Mint().call();
    let personalMint = await bitaverse.methods.NFTSale(coinbase).call();


    console.log(mintAmount);
    if(mintAmount < 10000 && personalMint < 100){
        let mintnum = $("#NFTmintValue").val();

        if((parseInt(personalMint) + parseInt(mintnum)) >100 ){
            alert("買超過100張額度了");

            return;
        }

        await bitaverse.methods.mint(mintnum).send({from:coinbase,value:web3.utils.toWei('0.088','ether')*mintnum});
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