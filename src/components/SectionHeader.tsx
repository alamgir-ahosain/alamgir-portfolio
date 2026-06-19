type Props = {
  index: string;
  title: string;
  blurb?: string;
};

export function SectionHeader({ index, title, blurb }: Props) {
  return (
    <div className="mb-12 flex flex-col items-center gap-3 text-center md:mb-16">
      <div className="font-mono text-sm uppercase tracking-widest text-syntax-comment">
        {index}
      </div>
      <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl capitalize">
        {title}
      </h2>
      {blurb && (
        <p className="max-w-2xl text-pretty text-lg text-muted-foreground">{blurb}</p>
      )}
    </div>
  );
}
