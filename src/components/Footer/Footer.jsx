// import { Link } from "react-router-dom";
import { LuFacebook, LuInstagram, LuPhone } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import SubscribeToMail from "./SubscribeToMail";
import { FOOTER_LINKS } from "@/assets/data";

const Footer = () => {
  return (
    <>
      <div className="border-t border-default-200">
        <div className="container">
          <div className="grid items-center gap-6 py-6 lg:grid-cols-3 lg:py-10">
            <div className="lg:col-span-2">
              <div className="mb-6 grid grid-cols-2 gap-6 md:grid-cols-4">
                {Object.keys(FOOTER_LINKS).map((title, idx) => {
                  return (
                    <div className="flex flex-col gap-3" key={title + idx}>
                      <h5 className="mb-3 font-semibold text-default-950">
                        {title}
                      </h5>
                      {FOOTER_LINKS[title].map((item, idx) => (
                        <div className="text-default-600" key={item.name + idx}>
                          <a href={item.link ?? ""}>{item.name}</a>
                        </div>
                      ))}
                    </div>
                  );
                })}

                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 font-semibold text-default-950">
                    Get in touch
                  </h5>
                  <div className="text-default-600">
                    <a href="tel:+1234567891012">(+123) 456 789 123</a>
                  </div>
                  <div className="text-default-600">
                    <a href="mailto:example@mail.com">example@mail.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    {[LuPhone, LuFacebook, LuInstagram, FaXTwitter].map(
                      (icon, idx) => {
                        const Icon = icon;
                        return (
                          <a key={idx} href="" className="cursor-pointer">
                            <Icon
                              size={24}
                              className="text-default-600 transition-all hover:text-primary"
                            />
                          </a>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>

            <SubscribeToMail />
          </div>
        </div>
      </div>
      <footer className="absolute w-full border-t border-default-200 p-6 hide-in-print">
        <div className="container">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <p className="text-default-600">
              Designed, crafted and coded with{" "}
              {/* <LuHeart size={16} className="inline fill-red-500 text-red-500" />{" "} */}
              by Coderthemes.com
            </p>
              <div className="flex justify-end gap-6 max-lg:hidden">
                <a href="" className="font-medium text-default-500">
                  Terms
                </a>
                <a href="" className="font-medium text-default-500">
                  Privacy
                </a>
                <a href="" className="font-medium text-default-500">
                  Cookies
                </a>
              </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
