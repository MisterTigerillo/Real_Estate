import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

export const SliderNavButtons = ({ navButtons, classPrev, classNext }) => {
  console.log({ classPrev });
  return (
    <div className={navButtons}>
      <div className={classPrev}>
        <BsChevronLeft />
      </div>
      <div className={classNext}>
        <BsChevronRight />
      </div>
    </div>
  );
};
