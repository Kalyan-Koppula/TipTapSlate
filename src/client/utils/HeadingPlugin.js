import { Extension, TextSelection } from 'tiptap';

const HeadingPrefixExtension = Extension.create({
  name: 'headingPrefix',

  content: content => {
    return content.clone().inject(({ schema }) => {
      const headingMarks = schema.marks.filter(mark => mark.name.startsWith('heading'));

      // Function to update heading prefix based on cursor position
      const updateHeadingPrefix = (state, { $from, $to }) => {
        const { $cursor } = state.selection;

        if (!$cursor || !$cursor.block) {
          return state;
        }

        const { block } = $cursor;
        const isHeading = headingMarks.some(mark => block.marks.has(mark));

        if (isHeading && $from.pos !== $to.pos) {
          // If cursor is within a heading and has selection, prevent prefix update
          return state;
        }

        const newText = isHeading ? block.text.replace(/^h /, '') : `h ${block.text}`;
        return state.tr.replaceWith(block.content.range, newText);
      };

      // Update prefix on selection change and cursor movement
      return {
        onSelectionChange(state, dispatch) {
          dispatch(updateHeadingPrefix(state));
        },
        onSetSelection(state, { selection }) {
          if (selection instanceof TextSelection) {
            dispatch(updateHeadingPrefix(state));
          }
        },
      };
    });
  },
});

export default HeadingPrefixExtension;
