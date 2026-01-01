import {changeMoney} from '../../scripts/utils/money.js'




describe('test suite: convert cents to dollar ', ()=>{
    it('change cents to dollar',()=>{
        expect(changeMoney(2399)).toEqual('23.99');
    })

    it('can change 0',()=>{
        expect(changeMoney(0)).toEqual('0.00');
    })

    it('change the edge case',()=>{
        expect(changeMoney(50007)).toEqual('500.00')
    })
})

