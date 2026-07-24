import Link from "next/link";

type ActionButtonProps = {
  title: string;
  icon: string;
  href: string;
};

export default function ActionButton({
  title,
  icon,
  href,
}: ActionButtonProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-white transition hover:bg-cyan-600"
    >
      <span className="text-2xl">{icon}</span>
      <span>{title}</span>
    </Link>
  );
}