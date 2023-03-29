import { prisma } from "@/server/db"



export default async function Home() {

    const example = await prisma.example.findMany()
    
    return (
        <div>
            <h1>hello example</h1>
        <pre>
            {JSON.stringify(example, null, 2)}
        </pre>
        </div>
    )
}
