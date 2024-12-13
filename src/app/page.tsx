// import Image from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center p-8 gap-5 mt-10">
      <h1 className="font-bold text-3xl">리그 오브 레전드 정보 앱</h1>
      <p className='mb-10 text-gray-500'>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
      <section className="flex flex-wrap gap-5 text-center justify-center">
        <Link href={'/champions'}>
          <Image
            src="/home/home-champions.webp"
            width={400}
            height={350}
            alt="lol champion"
          ></Image>
          <p>챔피언 목록 보기</p>
        </Link>
        <Link href={'/rotation'}>
          <Image
            src="/home/home-rotation.webp"
            width={400}
            height={350}
            alt="lol champion"
          ></Image>
          <p>챔피언 로테이션 보기</p>
        </Link>
        <Link href={'/items'}>
          <Image
            src="/home/home-items.webp"
            width={400}
            height={350}
            alt="lol champion"
          ></Image>
          <p>아이템 목록 보기</p>
        </Link>
      </section>
    </div>
  );
}
