import ReactCounterUp from "@/components/shared/ReactCounterUp";

const ExperienceCardItem = ({
  counterNumber,
  counterElement,
  decimals,
  text,
}: {
  counterNumber: number;
  counterElement?: string;
  decimals?: number;
  text: string;
}) => {
  return (
    <div className="experience-card__item">
      <p className="experience-card__item-number display-4">
        {counterElement}

        {counterNumber.toFixed(decimals || 0)}
      </p>
      <p className="experience-card__item-text textM">{text}</p>
    </div>
  );
};

export default ExperienceCardItem;
