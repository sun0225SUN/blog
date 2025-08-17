import { SKIP, visit } from 'unist-util-visit'

export function rehypeCodeCopyButton() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'pre' || node.children?.[0]?.tagName !== 'code' || !parent) {
        return
      }
      if (node.properties?.['data-copy-button-added']) {
        return
      }

      node.properties ??= {}
      node.properties['data-copy-button-added'] = 'true'

      parent.children[index] = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['code-block-wrapper'] },
        children: [
          {
            type: 'element',
            tagName: 'button',
            properties: {
              'className': ['code-copy-button'],
              'type': 'button',
              'aria-label': 'Copy code',
            },
            children: [],
          },
          node,
        ],
      }
      return SKIP
    })
  }
}
