// MDX 2 recognized **_quoted text_** before a Korean particle. MDX 3 leaves the outer stars visible.
export default function remarkKoreanEmphasis() {
  return (tree, file) => {
    const source = String(file);

    function visit(parent) {
      const children = parent.children;
      if (!children) return;

      children.forEach((node, index) => {
        visit(node);
        if (node.type !== 'emphasis') return;

        const left = children[index - 1];
        const right = children[index + 1];
        if (left?.type !== 'text' || !left.value.endsWith('**')) return;
        if (right?.type !== 'text' || !/^\*\*\p{Script=Hangul}/u.test(right.value)) return;

        const start = node.position.start.offset;
        const end = node.position.end.offset;
        if (
          source.slice(start - 2, start + 1) !== '**_' ||
          source.slice(end - 1, end + 2) !== '_**'
        )
          return;
        if (source[start - 3] === '\\' || source[start - 3] === '*') return;

        left.value = left.value.slice(0, -2);
        right.value = right.value.slice(2);
        children[index] = { type: 'strong', children: [node] };
      });
    }

    visit(tree);
  };
}
