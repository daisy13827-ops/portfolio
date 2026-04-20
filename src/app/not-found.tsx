import Link from "next/link";
import Container from "@/components/site/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="py-16">
        <div className="rounded-3xl border border-black/5 bg-white/60 p-8">
          <h1 className="text-2xl font-semibold">Page not found</h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            The link you followed doesn't exist in this portfolio.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white transition hover:bg-black/90"
            >
              Back home
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

