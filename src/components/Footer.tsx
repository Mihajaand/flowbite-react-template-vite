import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitch } from "react-icons/bs";

export default function FooterComponent() {
  return (
    <>
      <Footer container>
        <div className="w-full ">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
                <FooterBrand href="https://flowbite.com" src="htttps://flowbite.com/docs/images/logo.svg" alt="Flowbite logo" name="flowbite"/>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                    <FooterTitle title="about" />
                    <FooterLinkGroup col>
                        <FooterLink href="#">Flowbite</FooterLink>
                        <FooterLink href="#">Tailwind Css</FooterLink>
                    </FooterLinkGroup>
                </div>
                <div>
                    <FooterTitle title="Follow Us"/>
                    <FooterLinkGroup col>
                        <FooterLink href="#">Github</FooterLink>
                        <FooterLink href="#">Discord</FooterLink>
                    </FooterLinkGroup>
                </div>
                <div>
                    <FooterTitle title="Legal"/>
                    <FooterLinkGroup col>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                    </FooterLinkGroup>
                </div>
            </div>
          </div>

            <FooterDivider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <FooterCopyright href="#" by="Flowbite" year={2025}/>
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <FooterIcon href="#" icon={BsFacebook} />
                    <FooterIcon href="#" icon={BsInstagram} />
                    <FooterIcon href="#" icon={BsTwitch} />
                    <FooterIcon href="#" icon={BsFacebook} />
                    <FooterIcon href="#" icon={BsFacebook} />
                </div>
            </div>

        </div>
      </Footer>
    </>
  );
}
