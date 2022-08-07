import { useRecoilValue } from 'recoil';
import testWithComma from 'stores/test/testWithComma';

function CompletionPage() {
  const test = useRecoilValue(testWithComma);
  return <>{test}</>;
}

export default CompletionPage;
