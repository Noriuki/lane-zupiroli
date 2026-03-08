interface ITitleProps {
  title: string;
}

export default function Title(props: ITitleProps) {
  const { title } = props;

  return (
    <div className="w-full text-center mb-8 md:mb-10">
      <h2 className="text-2xl md:text-4xl font-bold">
        <span className="gradient-text">{title}</span>
      </h2>
      <span className="block mt-2 h-0.5 w-12 mx-auto rounded-full bg-gradient-to-r from-accent to-accent-light" />
    </div>
  );
}
