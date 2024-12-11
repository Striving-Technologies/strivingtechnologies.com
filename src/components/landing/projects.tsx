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
            <div className={`p-4 grey-gradient-round rounded-2xl phone:p-2`}>
              <Image
                src={project.images[0].url}
                width={project.images[0].width}
                height={project.images[0].height}
                className="w-full h-auto rounded-t-xl"
                alt={project.images[0].alt}
              />
              <div className="flex justify-between pt-8 pb-2 gap-2 tab:flex-wrap phone:flex-col">
                <div>
                  <p className="text-sm whitespace-nowrap">Project Name</p>
                  <p className="text-white whitespace-nowrap">
                    {project.title}
                  </p>
                </div>
                <div className="phone:hidden">
                  <p className="text-sm">Description</p>
                  <p className="text-white max-w-md">{project.clip}</p>
                </div>
                <div>
                  <p className="text-sm phone:hidden">Service</p>
                  <p
                    className="text-white phone:text-sm phone:text-mono-grey"
                    dangerouslySetInnerHTML={{ __html: project.service }}
                  ></p>
                </div>
                <div className="phone:hidden">
                  <p className="text-sm whitespace-nowrap">Release Date</p>
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
