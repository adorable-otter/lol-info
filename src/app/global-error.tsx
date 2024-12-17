'use client';

import Link from 'next/link';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center w-full mt-40 p-10">
          <h2>예기치 못한 오류가 발생했습니다. 잠시 후 다시 시도 해주세요.</h2>
          <div className="flex gap-5 mt-5">
            <button onClick={() => reset()}>다시 시도</button>
            <Link href={'/'}>
              <button>홈으로 이동</button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
