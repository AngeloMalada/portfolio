import { getPayload } from 'payload';
import configPromise from '@payload-config';

const payload = await getPayload({
  config: configPromise,
});
export const projects = await payload.find({
  collection: 'projects',
});
