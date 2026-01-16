import { CopyAndPastePixJS } from './pix';
import { PixJSProps, ResponsePixJSCopyAndPaste } from './types';

export function CopyAndPaste(props: PixJSProps): ResponsePixJSCopyAndPaste {
  return new CopyAndPastePixJS(props).generate();
}
