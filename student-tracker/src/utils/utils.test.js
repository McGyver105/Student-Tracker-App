const filterStudentsByBlock = require('./utils')

describe('filterStudentsByBlock', () => {
    describe('functionality', () => {
        it('accepts an object and a filter term as an argument and returns an array', () => {
            const input = [{}];
            expect(Array.isArray(filterStudentsByBlock(input))).toBe(true);
        });
        it('returns an array with a name and _id key', () => {
            const input = []
            const filter = 'fun'
            expect(filterStudentsByBlock(input, filter)[0]).toEqual(
                expect.objectContaining({
                    name: expect.any(String),
                    _id: expect.any(String)
                })
            )
        })
        it('takes a single student object a matching filter term, and returns the student', () => {
            const input = [{ name: 'bob', startingCohort: '1', currentBlock: 'fun', _id: '1' }]
            const filter = 'fun'
            expect(filterStudentsByBlock(input, filter)).toEqual([{ name: 'bob', _id: '1' }])
        })
        it('takes more than one student objects with matching filters, and returns the students', () => {
            const input = [{
                name: 'bob',
                startingCohort: '1',
                currentBlock: 'fun',
                _id: '1'
            }, {
                name: 'steve',
                startingCohort: '2',
                currentBlock: 'fun',
                _id: '2'
                }]
            const filter = 'fun'
            expect(filterStudentsByBlock(input, filter)).toEqual([{name: 'bob', _id: '1'}, {name: 'steve', _id: '2'}])
        })
        it('takes a student object with a non-matching filter and does not return him', () => {
            const input = [{
                name: 'steve',
                startingCohort: '2',
                currentBlock: 'fun',
                _id: '2'
            }];
            const filter = 'fe';
            expect(filterStudentsByBlock(input, filter)).toEqual([]);
        });
        it('takes multiple student objects, some with matching filters, some without, and returns the matching students only', () => {
            const input = [{
                name: 'steve',
                startingCohort: '2',
                currentBlock: 'fun',
                _id: '1'
            }, {
                name: 'bob',
                startingCohort: '2',
                currentBlock: 'be',
                _id: '2'
            }, {
                name: 'tom',
                startingCohort: '2',
                currentBlock: 'fun',
                _id: '3'
            }];
            const filter = 'fun';
            expect(filterStudentsByBlock(input, filter)).toEqual([{ name: 'steve', _id: '1' }, { name: 'tom', _id: '3' }]);
        });
    })
    describe('pure function', () => {
        it('does not mutate the input array', () => {
            const input = [{ name: 'bob', startingCohort: '1', currentBlock: 'fun', _id: '1' }];
            const copyOfInput = [{ name: 'bob', startingCohort: '1', currentBlock: 'fun', _id: '1' }];
            const filter = 'fun';
            filterStudentsByBlock(input, filter);
            expect(input).toEqual(copyOfInput);
        });
        it('returns an array with a different reference to the input', () => {
            const input = [{ name: 'bob', startingCohort: '1', currentBlock: 'fun', _id: '1' }];
            const filter = 'fun';
            expect(filterStudentsByBlock(input, filter)).not.toBe(input);
        });
        it('returns the same value everytime you run the function', () => {
            const input = [{ name: 'bob', startingCohort: '1', currentBlock: 'fun', _id: '1' }];
            const filter = 'fun';
            expect(filterStudentsByBlock(input, filter)).toEqual([{ name: 'bob', _id: '1' }]);
            expect(filterStudentsByBlock(input, filter)).toEqual([{ name: 'bob', _id: '1' }]);
            expect(filterStudentsByBlock(input, filter)).toEqual([{ name: 'bob', _id: '1' }]);
            expect(filterStudentsByBlock(input, filter)).toEqual([{ name: 'bob', _id: '1' }]);
        });
    })
})