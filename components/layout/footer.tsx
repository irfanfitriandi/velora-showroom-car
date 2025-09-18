import { FOOTER_CONTENT } from '@/lib/constants';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-b-vl-primary border-b-[12px] bg-black px-4 py-[80px] text-white md:px-0">
      <div className="container mx-auto flex justify-between gap-8 px-5 lg:px-0">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-1">
            <Image src={FOOTER_CONTENT.brand.icon} alt="footer-icon" width={40} height={40} />
            <h2 className="text-[28px] font-semibold text-white">{FOOTER_CONTENT.brand.name}</h2>
          </div>
          <p className="max-w-2xs text-base">{FOOTER_CONTENT.brand.description}</p>
          <p className="text-base">{FOOTER_CONTENT.brand.copyright}</p>
        </div>

        <div className="flex md:gap-6 lg:gap-14">
          {/* Menus */}
          <div className="">
            <h3 className="text-vl-neutral-5 text-sm text-nowrap">{FOOTER_CONTENT.menus.title}</h3>
            <ul className="mt-6 flex flex-col gap-1">
              {FOOTER_CONTENT.menus.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group hover:text-vl-primary flex items-center text-nowrap text-white transition-colors duration-300"
                  >
                    {/* Dash */}
                    <span className="bg-vl-primary mr-0 h-[2px] w-0 transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="">
            <h3 className="text-vl-neutral-5 text-sm text-nowrap">{FOOTER_CONTENT.social.title}</h3>
            <ul className="mt-6 flex flex-col gap-1">
              {FOOTER_CONTENT.social.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover:text-vl-primary flex items-center text-nowrap text-white transition-colors duration-300"
                  >
                    {/* Dash */}
                    <span className="bg-vl-primary mr-0 h-[2px] w-0 transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="max-w-xs">
            <h3 className="text-vl-neutral-5 text-sm text-nowrap">
              {FOOTER_CONTENT.contact.title}
            </h3>
            <ul className="mt-6 flex flex-col gap-1">
              {FOOTER_CONTENT.contact.items.map((item) =>
                item.label !== 'Address' ? (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group hover:text-vl-primary flex items-center text-white transition-colors duration-300"
                    >
                      {/* Dash */}
                      <span className="bg-vl-primary mr-0 h-[2px] w-0 transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                      {item.label} – {item.value}
                    </a>
                  </li>
                ) : (
                  <li key={item.label}>
                    <a href={item.href} className="text-white">
                      {item.value}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
