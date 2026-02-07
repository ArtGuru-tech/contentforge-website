// Allow dynamic rendering for contact page since it uses the API route
export const dynamic = 'force-dynamic';

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
