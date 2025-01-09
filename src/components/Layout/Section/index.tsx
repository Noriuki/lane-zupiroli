interface ISectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Section(props: ISectionProps) {
  const { children, ...rest } = props;

  return (
    <section
      className="w-full flex flex-col gap-y-4 min-h-screen items-center justify-center text-white section"
      {...rest}
    >
      {children}
    </section>
  );
}
