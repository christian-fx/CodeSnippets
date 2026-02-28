// THIS FUNC FORMATS DATE FROM ISO TO MM/DD/YYYY
export const formatDate = (isoString) => {
    if (!isoString) return '—';

    const d = new Date(isoString);
    if (isNaN(d)) return 'Invalid date';

    return d.toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};
