export function formatSentence(input) {
	if (typeof input !== 'string') return '';

	return input
		.trim()
		.split(/\s+/)
		.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');
}