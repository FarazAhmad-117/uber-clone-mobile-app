import { neon } from '@neondatabase/serverless';


export async function POST(request: Request) {
    const sql = neon(process.env.DATABASE_URL!);

    const { name, email, clerkId } = await request.json();

    if (!email || !name || !clerkId) {
        return Response.json(
            { error: "Missing required fields" },
            { status: 400 }
        );
    }

    try {
        const response = await sql`
            INSERT INTO users (
                name,
                email,
                clerk_id
            ) 
            VALUES (
                ${name},
                ${email},
                ${clerkId}
            )
        `;

        return Response.json({ data: response }, { status: 201 });

    } catch (error) {
        console.log("ERROR: ", error);

        return Response.json(
            { error: "Failed to create user" },
            { status: 500 }
        );
    }
}