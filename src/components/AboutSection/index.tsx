import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="section-full">
      <h2 className="text-4xl text-purple-900 text-center font-bold md:text-6xl mb-8">Sobre</h2>
      <div className="w-full h-auto my-4 flex flex-wrap dark:bg-zinc-800 shadow-md rounded-md ">
        <div className="w-full md:w-[35%] h-auto p-8">
          <Image
            src="/images/photo.png"
            alt="selfie"
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full rounded-2xl shadow-md"
          />
        </div>

        <div className="w-full md:w-[65%] flex-col h-auto flex flex-wrap p-8 flex gap-y-10">
          <h3 className="text-lg md:text-2xl text-justify">
            Olá! Me chamo Lane Zupiroli, bacharel em Sistemas de Informação pela Universidade de Sorocaba (UNISO) e
            desenvolvedor Full Stack. Acredito que a tecnologia é uma poderosa ferramenta para resolver grandes desafios
            e melhorar a vida das pessoas.
          </h3>
          <h3 className="text-lg md:text-2xl text-justify">
            Também sou um membro ativo da comunidade de desenvolvedores, compartilhando conhecimento através de artigos
            e projetos open-source.
          </h3>
        </div>
      </div>
    </section>
  );
}
