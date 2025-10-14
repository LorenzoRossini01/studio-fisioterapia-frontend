export function parseRichText(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';

  const renderTextNode = (child: any): string => {
    let text = child.text || '';

    // Formattazioni base
    if (child.bold) text = `<strong>${text}</strong>`;
    if (child.italic) text = `<em>${text}</em>`;
    if (child.underline) text = `<u>${text}</u>`;
    if (child.strikethrough) text = `<s>${text}</s>`;
    if (child.code) text = `<code>${text}</code>`;

    // Link
    if (child.type === 'link' || child.url) {
      const href = child.url || '#';
      const target = child.openInNewTab ? '_blank' : '_self';
      text = `<a href="${href}" target="${target}" rel="noopener noreferrer">${text}</a>`;
    }

    return text;
  };

  return blocks
    .map((block) => {
      switch (block.type) {
        case 'paragraph': {
          const content =
            block.children?.map((c: any) => renderTextNode(c)).join('') || '';
          return `<p>${content}</p>`;
        }

        case 'heading': {
          const level = block.level || 2;
          const content =
            block.children?.map((c: any) => renderTextNode(c)).join('') || '';
          return `<h${level}>${content}</h${level}>`;
        }

        case 'list': {
          const tag = block.format === 'ordered' ? 'ol' : 'ul';
          const items =
            block.children
              ?.map((li: any) => {
                const content =
                  li.children?.map((c: any) => renderTextNode(c)).join('') ||
                  '';
                return `<li>${content}</li>`;
              })
              .join('') || '';
          return `<${tag}>${items}</${tag}>`;
        }

        case 'quote': {
          const content =
            block.children?.map((c: any) => renderTextNode(c)).join('') || '';
          return `<blockquote>${content}</blockquote>`;
        }

        case 'code': {
          const content =
            block.children?.map((c: any) => c.text).join('') || '';
          const language = block.language
            ? ` class="language-${block.language}"`
            : '';
          return `<pre><code${language}>${content}</code></pre>`;
        }

        case 'image': {
          const img = block.image || block;
          if (!img) return '';
          const alt = img.alternativeText || '';
          const url = img.url?.startsWith('http')
            ? img.url
            : `${window.location.origin}${img.url}`;
          const caption = img.caption
            ? `<figcaption>${img.caption}</figcaption>`
            : '';
          return `<figure><img src="${url}" alt="${alt}" />${caption}</figure>`;
        }

        case 'link': {
          const href = block.url || '#';
          const target = block.openInNewTab ? '_blank' : '_self';
          const content =
            block.children?.map((c: any) => renderTextNode(c)).join('') || href;
          return `<a href="${href}" target="${target}" rel="noopener noreferrer">${content}</a>`;
        }

        case 'divider': {
          return `<hr />`;
        }

        default: {
          // fallback: se il blocco ha figli, prova a renderizzarli
          if (block.children) {
            return block.children.map((c: any) => renderTextNode(c)).join('');
          }
          return '';
        }
      }
    })
    .join('');
}
