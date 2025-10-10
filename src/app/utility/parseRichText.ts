export function parseRichText(blocks: any[]): string {
  if (!blocks) return '';
  return blocks
    .map((block) => {
      if (block.type === 'paragraph') {
        const paragraphText = block.children
          .map((child: any) => child.text || '')
          .join('');
        return `<p>${paragraphText}</p>`;
      }

      if (block.type === 'heading') {
        const level = block.level || 2;
        const headingText = block.children
          .map((child: any) => child.text || '')
          .join('');
        return `<h${level}>${headingText}</h${level}>`;
      }

      return '';
    })
    .join('');
}
