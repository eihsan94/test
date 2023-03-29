// next 13 page.tsx for example

import { db } from "@/server/db";

export default async function Home() {
    const example = await db.selectFrom('Example').selectAll().execute()
    return (
        <div>
            <h1>hello example</h1>
        <pre>
            {JSON.stringify(example, null, 2)}
        </pre>
        </div>
    )
}
