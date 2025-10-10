export function parseRichText(blocks: any[]): string {
  if (!blocks) return '';

  return blocks
    .map((block) => {
      switch (block.type) {
        case 'paragraph':
          return `<p>${
            block.children?.map((c: any) => c.text).join('') || ''
          }</p>`;

        case 'heading':
          const level = block.level || 2;
          const headingText =
            block.children?.map((c: any) => c.text).join('') || '';
          return `<h${level}>${headingText}</h${level}>`;

        case 'list':
          const items =
            block.children
              ?.map(
                (li: any) =>
                  `<li>${li.children?.map((c: any) => c.text).join('')}</li>`
              )
              .join('') || '';
          return `<ul>${items}</ul>`;

        case 'image':
          const img = block.image;
          if (!img) return '';
          const alt = img.alternativeText || '';
          const url = img.url?.startsWith('http')
            ? img.url
            : `${window.location.origin}${img.url}`;
          const caption = img.caption
            ? `<figcaption>${img.caption}</figcaption>`
            : '';
          return `<figure><img src="${url}" alt="${alt}" />${caption}</figure>`;

        default:
          return '';
      }
    })
    .join('');
}
