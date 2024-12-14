export interface IWork {
  id: string;
  slug: string;
  title: string;
  clip: string;
  images: IImage[];
  tool: string;
  service: string;
  problem: string;
  steps: {
    research: string[];
    design: string[];
    development?: string[];
  };
  releaseDate: string;
}

export interface IImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}
