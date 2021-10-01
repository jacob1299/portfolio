import React from "react";

interface ContactCardsProps {
  cards: ICard[];
}

export type ICard = {
  title: any;
  content: any;
};

export const ContactCards: React.FC<ContactCardsProps> = ({ cards }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4 w-full space-y-2 lg:space-y-0">
      {React.Children.toArray(
        cards.map((item, index) => (
          <div className="mx-auto">
            <div
              className="bg-gray-300 rounded-lg justify-center w-96 h-96 lg:w-48 lg:h-48"
              key={`card-${index}`}
            >
              <p className="text-6xl lg:text-lg text-black text-center">
                {item.title}
              </p>
              <p className="text-md text-center text-black">{item.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
