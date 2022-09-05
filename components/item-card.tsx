import { ItemCardProps } from '../utils/interfaces';

const itemCard = (props: ItemCardProps) => {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-16 ">
      <div>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={props.avatar}
            alt={props.name}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{props.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">${props.price}</p>
      </div>
    </div>
  );
};

export default itemCard;
