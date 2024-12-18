import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LOL Rotation champions',
  description: 'introduces information about this week&apos;s rotation champions',
};

export default function RotationLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
