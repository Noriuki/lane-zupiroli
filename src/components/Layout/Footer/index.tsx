import SocialLinks from "@/components/Common/SocialLinks";

const Footer = () => {
  return (
    <footer className="w-full pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-6 w-full max-w-xs">
          <SocialLinks />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        </div>
        <p className="text-sm text-zinc-500 font-light">
          Desenvolvido por <span className="text-zinc-300 font-medium">Lane Zupiroli</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
