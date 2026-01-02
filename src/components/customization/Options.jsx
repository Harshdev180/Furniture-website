export default function FurnitureSelector({ type, setType }) {
    return (
        <select
            aria-label="Select furniture type"
            className="border p-2 rounded"
            value={type}
            onChange={e => setType(e.target.value)}
        >
            <option value="sofa">Sofa</option>
            <option value="chair">Chair</option>
        </select>
    );
}
