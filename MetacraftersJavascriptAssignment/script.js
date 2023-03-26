// create a variable to hold your NFT's
let nftcontainer = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(newnft) {
    nftcontainer.push(newnft);
    console.log(`The entered NFt "${newnft}", is now added to the List.`)
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for(i=0; i<nftcontainer.length; i++ ){
        console.log(`Name: ${nftcontainer[i]}`);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply () {
    console.log(nftcontainer.length)
}

// call your functions below this line
mintNFT("Cat");
mintNFT("Dog");
mintNFT("Dog");

listNFTs();
getTotalSupply();
