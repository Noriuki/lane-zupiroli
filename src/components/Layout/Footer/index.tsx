import SocialLinks from "@/components/Common/SocialLinks";

const Footer = () => {
  return (
    <footer className="h-96 pt-48 pb-16 w-full flex flex-wrap flex-col items-center justify-between">
      <div className="w-fit">
        <SocialLinks />
        <hr className="h-1 bg-purple-900 border-none" />
      </div>
      <h6 className="text-xl text-purple-900 font-light md:text-2xl">Desenvolvido por Lane Zupiroli</h6>
    </footer>
  );
};

export default Footer;
