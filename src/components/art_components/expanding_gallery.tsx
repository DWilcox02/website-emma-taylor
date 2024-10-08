import { useState } from "react";

interface Image {
    id: number;
    src: string;
    alt: string;
    description: string;
}

interface ExpandingGalleryProps {
    images1: Image[];
    images2: Image[];
    images3: Image[];
}

interface ImageColumnProps {
    images: Image[];
    openImage: (image: Image) => void;
}

interface ImageCardProps {
    image: Image;
    openImage: (image: Image) => void;
}

function ImageCard({ image, openImage }: ImageCardProps) {
    return (
        <div key={image.id} className="py-2">
            <img
                src={image.src}
                alt={image.alt}
                className="max-h-96 rounded-md transition-all scale-90 hover:scale-100 cursor-pointer"
                onClick={() => openImage(image)}
            />
        </div>
    );
}

function ImageColumn({ images, openImage }: ImageColumnProps) {
    return (
        <div className="flex flex-col justify-center items-center">
            {images.map((image) => (
                <div key={image.id}>
                    <ImageCard image={image} openImage={openImage}></ImageCard>
                </div>
            ))}
        </div>
    );
}

function ExpandingGallery({
    images1,
    images2,
    images3,
}: ExpandingGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);

    const openImage = (image: Image) => {
        setSelectedImage(image);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ImageColumn
                images={images1}
                openImage={openImage}
            ></ImageColumn>
            <ImageColumn
                images={images2}
                openImage={openImage}
            ></ImageColumn>
            <ImageColumn
                images={images3}
                openImage={openImage}
            ></ImageColumn>

            {selectedImage && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-all z-40">
                    <div className=" flex flex-col items-center max-w-3xl bg-white p-4 rounded-lg mx-2">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className=" block w-auto max-h-[32rem]"
                        />
                        <div className="flex flex-row pt-4 break-words mx-auto">
                            <button
                                className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer transition-all"
                                onClick={closeImage}
                            >
                                Close
                            </button>
                            <p className="my-auto mx-2" >{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
}

export default ExpandingGallery;
