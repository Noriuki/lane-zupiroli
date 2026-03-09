interface ISectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Section(props: ISectionProps) {
  const { children, ...rest } = props;

  return (
    <section
      className="w-full flex flex-col min-h-screen items-center justify-center py-20 md:py-28 px-4 snap-start snap-always"
      {...rest}
    >
      <div className="w-full flex flex-col items-center gap-8 md:gap-10">{children}</div>
    </section>
  );
}
