import ContactTag from "./contact_tag";
import CONTACT_DATA from "../../data/contact_data.json";
import SectionButton from "../section_button";

import {
    AiFillInstagram,
    AiFillMail,
    AiOutlineTwitter,
    AiFillFacebook,
    AiFillLinkedin,
} from "react-icons/ai";
import { RefObject } from "react";

interface HomeProps {
    artId: RefObject<HTMLDivElement>;
    travelId: RefObject<HTMLDivElement>;
}

function Home({artId, travelId}: HomeProps) {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-6xl">EMMA TAYLOR</h1>
            <h2>ART & TRAVEL FOR YOU</h2>
            <div className="flex justify-center items-center pt-4">
                <ContactTag
                    title="Email"
                    icon={AiFillMail}
                    link={`mailto:${CONTACT_DATA.email}`}
                ></ContactTag>
                <ContactTag
                    title="Instagram"
                    icon={AiFillInstagram}
                    link={CONTACT_DATA.instagram}
                ></ContactTag>
                <ContactTag
                    title="Twitter"
                    icon={AiOutlineTwitter}
                    link={CONTACT_DATA.twitter}
                ></ContactTag>
                <ContactTag
                    title="Facebook"
                    icon={AiFillFacebook}
                    link={CONTACT_DATA.facebook}
                ></ContactTag>
                <ContactTag
                    title="LinkedIn"
                    icon={AiFillLinkedin}
                    link={CONTACT_DATA.linkedin}
                ></ContactTag>
            </div>
            <div className="flex flex-row gap-4">
                <SectionButton targetRef={artId} text="Art"></SectionButton>
                <SectionButton targetRef={travelId} text="Travel"></SectionButton>
            </div>
            <img className="w-20 h-20" src="/down_arrow_2.gif" alt="" />
        </div>
    );
}

export default Home;
