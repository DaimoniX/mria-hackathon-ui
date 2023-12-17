export type Question = { text: string; variants: string[]; validVariantId: number };

export function questionFromString(string: string) : Question {
    const parts = string.split(':');
    const text = parts[0];
    const variants = parts[1].split(';');
    const validVariantId = parseInt(parts[2])
    return { text, variants, validVariantId };
}
