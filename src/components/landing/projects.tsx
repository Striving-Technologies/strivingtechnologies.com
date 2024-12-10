import work from "@/data/work-pages.json";
import Image from "next/image";
import { InteractiveLink } from "../shared";

export const ProjectList = () => {
  return (
    <div className="w-full relative mb-10">
      {work.map((project, index) => (
        <div
          key={project.slug}
          className={`sticky top-5 mb-10 z-[${index}] block w-auto aspect-video max-w-7xl mx-auto`}
        >
          <InteractiveLink
            href={`/client-work/${project.slug}`}
            wrapperType="link"
          >
            <div className={`p-4 grey-gradient-round rounded-3xl`}>
              <Image
                src={project.images[0].url}
                width={project.images[0].width}
                height={project.images[0].height}
                className="w-full h-auto rounded-xl"
                alt={project.images[0].alt}
              />
              <div className="flex justify-around pt-8 pb-2">
                <div>
                  <p className="text-sm">Project Name</p>
                  <p className="text-white">{project.title}</p>
                </div>
                <div>
                  <p className="text-sm">Description</p>
                  <p className="text-white max-w-md">{project.clip}</p>
                </div>
                <div>
                  <p className="text-sm">Service</p>
                  <p className="text-white">{project.service}</p>
                </div>
                <div>
                  <p className="text-sm">Release Date</p>
                  <p className="text-white">{project.releaseDate}</p>
                </div>
              </div>
            </div>
          </InteractiveLink>
        </div>
      ))}
    </div>
  );
};
