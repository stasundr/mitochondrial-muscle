const muscle = require('../index')
const path = require('path')

test('rCRS reference is available', () => {
  expect(muscle.reference['rCRS'].sequence.length).toBe(16569)
})

test('RSRS reference is available', () => {
  expect(muscle.reference['RSRS'].sequence.length).toBe(16569)
})

test('Non-existing reference is not available', () => {
  expect(muscle.reference['random']).toBeUndefined()
})

test('Throw error if no fasta provided', async () => {
  expect.assertions(1)
  try {
    await muscle.align()
  } catch (e) {
    expect(e).toEqual(
      new Error('Cannot perform read/write operations with fasta-files.')
    )
  }
})

test('Not supported reference is rejected', async () => {
  expect.assertions(1)
  try {
    await muscle.align('EU725621.2.fa', 'nope')
  } catch (e) {
    expect(e).toEqual(
      new Error('Not supported reference. Please use RSRS or rCRS.')
    )
  }
})

test('All good', async () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000

  const data = await muscle.align(path.join(__dirname, 'EU725621.2.fa'))
  expect(data.length).toEqual(2)
})
