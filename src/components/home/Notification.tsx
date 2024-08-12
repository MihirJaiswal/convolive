import { notificationImages } from "../../../constant";
import Image from "next/image";

const Notification = ({ className, title, image, onMouseEnter, onMouseLeave }: any) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur bg-black border border-white rounded-2xl gap-5`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={image}
        width={62}
        height={62}
        alt="image"
        loading="lazy"
        className="rounded-xl"
        placeholder="blur"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base leading-8">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <Image
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt='notification'
                  loading="lazy"
                  placeholder="blur"
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;