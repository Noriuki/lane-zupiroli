interface ITitleProps {
  title: string;
}
export default function Title(props: ITitleProps) {
  const { title } = props;

  return <h2 className="text-4xl text-purple-900 text-center font-bold md:text-6xl mb-8">{title}</h2>;
}
