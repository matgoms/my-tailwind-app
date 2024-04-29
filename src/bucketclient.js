import { createBucketClient } from '@cosmicjs/sdk';

const cosmic = createBucketClient({
    bucketSlug: 'my-portfolio-production-d85e2f60-0174-11ef-90d8-41ef09030fc9',
readKey: 'HBYqgIlKT0BrbeF3INWO49yUTdpsbYjhPuhQZQnWjuZWY6KJ6E',
  }) 

export default cosmic;