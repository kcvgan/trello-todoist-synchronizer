const { diffCollections } = require('../src/utils/collectionUtils');
const { expect } = require('chai');

const a = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 4
    }
];

const b = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    }
];

describe('diffCollections test', () => {
    it('returns the items missing from collections', () => {
        const { diff, first, second } = diffCollections(a, b);
        expect(diff).to.be.true;

        expect(first.has).to.eql([{ id: 4 }]);
        expect(first.doesNotHave).to.eql([{ id: 3 }]);

        expect(second.doesNotHave).to.eql([{ id: 4 }]);
        expect(second.has).to.eql([{ id: 3 }]);
    });
});
