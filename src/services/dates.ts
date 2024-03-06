export async function getDates() {
    const response = await fetch('http://localhost:8000/api/dates');
    return await response.json();
}

export function formatDate( value: Date ): string{
    return value.toLocaleTimeString('es-419', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}