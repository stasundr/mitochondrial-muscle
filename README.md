# mitochondrial-muscle

This is Node.js wrapper over [MUSCLE](http://drive5.com/muscle/) software specifically for mitochondrial genomes aligning.

`process.env.MUSCLE_BIN` should be set to [MUSCLE](http://drive5.com/muscle/) binary path.

## Usage
```
const muscle = require('mitochondrial-muscle')

...
const reference = 'RSRS' // or 'rCRS'
const [seq1, seq2] = await muscle.align(pathToMyFasta, reference)
const ref = seq1.label === reference ? seq1 : seq2
const seq = seq1.label !== reference ? seq1 : seq2
...
```

## Tests
```
yarn test
```