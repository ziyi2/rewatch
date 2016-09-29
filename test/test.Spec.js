function add(x,y) {
	return x+y;
}

import { expect } from 'chai';


describe('add unit test.', function(){
    it('2 + 3 = 5', function(){
        const result = add(2, 3);
        expect(result).to.equal( 5 );
    });
});



