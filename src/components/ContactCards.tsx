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
    <div className="flex flex-col md:flex-row space-x-4 w-full mx-auto justify-center">
      {React.Children.toArray(
        cards.map((item, index) => (
          <div
            className="bg-[#264653] rounded-lg justify-center w-48 h-48 hover:bg-[#264679]"
            key={`card-${index}`}
          >
            <p className="text-2xl text-[#e76f51] text-center">{item.title}</p>
            <p className="text-center text-[#e76f51]">{item.content}</p>
          </div>
        ))
      )}
    </div>
  );
};
