const { expect } = require('chai'); //chai is an assertion library, and hardhat os a development framework
const { ethers } = require('hardhat');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Escrow', () => {
    let buyer, seller, inspector, lender
    let realState, escrow
    it('Saves the address', async () => {
        
        [buyer, seller, inspector, lender]= await ethers.getSigners()
        //Deploy Real Estate
        const RealEstate = await ethers.getContractFactory('RealEstate')
        realEstate = await RealEstate.deploy()
        
        //Mint

        const Escrow = await ethers.getContractFactory('Escrow')
      //  escrow = await Escrow.deploy( )
       
        
})
})