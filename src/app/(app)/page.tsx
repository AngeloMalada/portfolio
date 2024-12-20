import configPromise from '@payload-config';
import { getPayload } from 'payload';

export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });
  const data = await payload.find({
    collection: 'users',
  });

  console.log('data', data);
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        {data.docs.map((doc) => (
          <div key={doc.id}>
            <h1>{doc.id}</h1>
            <p>{doc.email}</p>
            <hr />
          </div>
        ))}
      </main>
    </div>
  );
}
