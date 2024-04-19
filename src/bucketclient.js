import { createBucketClient } from '@cosmicjs/sdk';

const cosmic = createBucketClient({
    bucketSlug: 'test-production-03c12cb0-e885-11ee-b929-6b4141e26b66',
readKey: 's0Htr6cfnBxrlUQtQgHO4Xwhkd33yl1iME9S75ehdVHX1CkLn7',
  }) 

export default cosmic;