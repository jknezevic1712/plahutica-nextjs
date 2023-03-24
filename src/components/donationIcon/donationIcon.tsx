import { SiBuymeacoffee } from "react-icons/si";

const DonationIcon = () => {
  return (
    <>
      <a
        href="https://www.buymeacoffee.com/plahutica"
        target={"_blank"}
        rel="noreferrer"
        className="hidden md:block"
      >
        <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=plahutica&button_colour=20966a&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00" />
      </a>
      <a
        href="https://www.buymeacoffee.com/plahutica"
        target={"_blank"}
        rel="noreferrer"
        className="md:hidden"
      >
        <SiBuymeacoffee className="text-2xl text-emerald-600" />
      </a>
    </>
  );
};

export default DonationIcon;
