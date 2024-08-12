import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";

const Grid = () => {
  return (
    <div
      id="about">
      <BentoGrid className="w-full py-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        
        <BentoGridItem
          id={1}
          title="I prioritize client collaboration, fostering open communication"
          description=""
          className="lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]"
          img="/b1.svg"
          imgClassName="w-full h-full"
          titleClassName="justify-end"
          spareImg=""
        />

        <BentoGridItem
          id={2}
          title="I'm very flexible with time zone communications"
          description=""
          className="lg:col-span-2 md:col-span-3 md:row-span-2"
          img=""
          imgClassName=""
          titleClassName="justify-start"
          spareImg=""
        />

        <BentoGridItem
          id={3}
          title="My tech stack"
          description="I constantly try to improve"
          className="lg:col-span-2 md:col-span-3 md:row-span-2"
          img=""
          imgClassName=""
          titleClassName="justify-center"
          spareImg=""
        />

        <BentoGridItem
          id={4}
          title="Tech enthusiast with a passion for development."
          description=""
          className="lg:col-span-2 md:col-span-3 md:row-span-1"
          img="/grid.svg"
          imgClassName=""
          titleClassName="justify-start"
          spareImg="/b4.svg"
        />

        <BentoGridItem
          id={5}
          title="Currently building a JS Animation library"
          description="The Inside Scoop"
          className="md:col-span-3 md:row-span-2"
          img="/b5.svg"
          imgClassName="absolute right-0 bottom-0 md:w-96 w-60"
          titleClassName="justify-center md:justify-start lg:justify-center"
          spareImg="/grid.svg"
        />

        <BentoGridItem
          id={6}
          title="Do you want to start a project together?"
          description=""
          className="lg:col-span-2 md:col-span-3 md:row-span-1"
          img=""
          imgClassName=""
          titleClassName="justify-center md:max-w-full max-w-60 text-center"
          spareImg=""
        />
      </BentoGrid>
    </div>
  );
};

export default Grid;
