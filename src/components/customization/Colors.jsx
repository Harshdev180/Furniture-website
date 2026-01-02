export default function CustomizationPanel({ data, setOptions }) {
    return (
        <section className="space-y-4">
            <h2 className="font-semibold">Customize</h2>

            <select onChange={e =>
                setOptions(o => ({ ...o, color: e.target.value }))
            }>
                {data.colors.map(c => <option key={c}>{c}</option>)}
            </select>

            <select onChange={e =>
                setOptions(o => ({
                    ...o,
                    material: data.materials.find(m => m.name === e.target.value)
                }))
            }>
                {data.materials.map(m => (
                    <option key={m.name}>{m.name}</option>
                ))}
            </select>
        </section>
    );
}
