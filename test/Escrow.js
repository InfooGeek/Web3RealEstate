const { expect } = require('chai'); //chai is an assertion library, and hardhat os a development framework
const { ethers } = require('hardhat');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Escrow', () => {
    it('Saves the address', async ()=> {
        const RealEstate = await ethers.getContractFactory('RealEstate')
        realEstate = await RealEstate.deploy()
        // console.log(realEstate.address)
})
})