export default function Summary({ type, options, price }) {
    return (
        <aside className="mt-4 p-4 border rounded">
            <h3 className="font-bold capitalize">{type} Summary</h3>
            <pre className="text-sm">{JSON.stringify(options, null, 2)}</pre>
            <p className="font-semibold">Total: ${price}</p>
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
                Add to Cart
            </button>
        </aside>
    );
}
