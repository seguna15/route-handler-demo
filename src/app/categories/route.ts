export const dynamic = "force-dynamic";


export async function GET() {
    const categories = [
        {id: 1, name: "Electronics"},
        {id: 2, name: "Clothing"},
        {id: 3, name: "Home Appliances"},
        {id: 4, name: "Books"},
        {id: 5, name: "Sports Equipment"},
    ]

    return Response.json(categories)

}