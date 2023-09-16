import ServiceCard from "./service_card";
import MOCK_SERVICES from "../data/service_data.json";
import { Heading2 } from "./headings";

function ServicesPage() {
    return (
        <div className="w-full flex flex-col p-4">
            <div className="rounded-md bg-white bg-opacity-30">
                <div className="px-4 py-2">
                    <Heading2 text="Travel Services" colour="black"></Heading2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 m-4">
                    <ServiceCard service={MOCK_SERVICES[0]}></ServiceCard>
                    <ServiceCard service={MOCK_SERVICES[1]}></ServiceCard>
                    <ServiceCard service={MOCK_SERVICES[2]}></ServiceCard>
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;
