interface ExperienceCardProps {
    title: string;
    key: string;
    image: string;
    description: string;
}

function ExperienceCard({ title, image, description }: ExperienceCardProps) {
    return (
        <div className="bg-white flex flex-col lg:flex-row rounded-md md:px-24 h-full">
            <div className="flex justify-center items-center">
                <img
                    className="max-h-96 p-4 rounded-md"
                    src={`./${image}`}
                    alt=""
                />
            </div>
            <div className="flex flex-col p-4">
                <h3 className="text-xl text-black text-left">{title}</h3>
                <hr />
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ExperienceCard;
