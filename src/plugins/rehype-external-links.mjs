import { visit } from 'unist-util-visit'

export function rehypeExternalLinks() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'a' && node.properties?.href) {
        if (/^(?:https?:|\/\/)/.test(node.properties.href)) {
          node.properties.target = '_blank'
          node.properties.rel = ['nofollow', 'noopener', 'noreferrer', 'external']
        }
      }
    })
  }
}
