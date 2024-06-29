import { FaGithub, FaGlobe, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const GithubIcon = () => <FaGithub className="my-auto" size={"1.3em"} />;
export const MailIcon = () => <IoMail className="my-auto" size={"1.3em"} />;
export const LinkedinIcon = () => (
    <FaLinkedinIn className="my-auto" size={"1.3em"} />
);
export const LiveLinkIcon = () => (
    <FaGlobe className="my-auto" size={"1.3em"} />
);
