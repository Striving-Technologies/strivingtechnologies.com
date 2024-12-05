import Image from "next/image";

export const ProjectList = () => {
  const projects = [
    {
      name: "Ochuko 'Folio 24",
      description: "A portfolio website for a creative engineer.",
      image: "/images/ochuko-folio-24.png",
      slug: "ochuko-folio-24",
      service: "Web Engineering | Brand Identity",
      releaseDate: "January, 2024",
    },
    {
      name: "LuxeVilla28",
      description: "An outstanding website for a luxury hotel in Warri.",
      image: "/images/luxe-villa-28.png",
      slug: "luxe-villa-28",
      service: "UI/UX Design | Web Engineering",
      releaseDate: "May, 2021",
    },
    {
      name: "FurstLegal",
      description: "A website for a law firm that stands out.",
      image: "/images/furst-legal.png",
      slug: "furst-legal",
      service: "Web Engineering | Brand Identity",
      releaseDate: "September, 2020",
    },
  ];
  return (
    <div className="w-full relative mb-10">
      {projects.map((project, index) => (
        <div
          className={`sticky top-5 z-[${index}] p-4 grey-gradient-round rounded-3xl mb-10`}
        >
          <Image
            src="/images/project-temp.png"
            width={2048}
            height={1026}
            alt={project.name}
          />
          <div className="flex justify-around pt-8 pb-4">
            <div>
              <p className="text-sm">Project Name</p>
              <p className="text-white text-lg">{project.name}</p>
            </div>
            <div>
              <p className="text-sm">Description</p>
              <p className="text-white text-lg">{project.description}</p>
            </div>
            <div>
              <p className="text-sm">Service</p>
              <p className="text-white text-lg">{project.service}</p>
            </div>
            <div>
              <p className="text-sm">Release Date</p>
              <p className="text-white text-lg">{project.releaseDate}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
