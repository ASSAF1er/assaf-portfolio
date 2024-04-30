import github from "@assets/github.png";
import linkedin from "@assets/linkedin.png";
import email from "@assets/email.png";
import Image from "@rasenganjs/image";
import rasengan_logo from "@assets/rasengan-logo-text-black.svg";
import { Link } from "rasengan";
function Footer() {
  return (
    <footer className="py-10 px-5  bg-gray text-primary ">
      <ul className="flex justify-between items-center px-[5%] border-t pt-10 border-dotted border-t-primary font-ojuju font-medium">
        <li>
          <ul className="flex gap-2 items-center">
            <li>
              <Link to="https://github.com/ASSAF1er/">
                <Image
                  src={github}
                  alt="github"
                  width={35}
                  height={35}
                  className="object-cover "
                />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/beral-assonfack-5a462727b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <Image
                  src={linkedin}
                  alt="github"
                  width={35}
                  height={35}
                  className="object-cover "
                />
              </Link>
            </li>
            <li>
              <Link to="mailto:beral.assaf@gmail.com">
                <Image
                  src={email}
                  alt="github"
                  width={35}
                  height={35}
                  className="object-cover "
                />
              </Link>
            </li>
            <li className="ml-2">Beral ASSONFACK © 2024</li>
          </ul>
        </li>{" "}
        <li>
          Built with{" "}
          <Link to="https://www.beta.rasengan.dev/">
            {" "}
            <span className="font-bold hover:underline">RasenganJS</span>
          </Link>{" "}
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
