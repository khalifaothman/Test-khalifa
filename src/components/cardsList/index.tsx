/* eslint-disable react-hooks/exhaustive-deps */
import Card from "@components/card";
import React, { useState, useEffect } from "react";
import css from "./_cardsList.module.scss";
import { ReactComponent as SVG } from "../../assets/loading.svg";
import Partner from "@domains/entities/Partner";

const CardsList = ({ partners }: { partners: Partner[] }) => {
  const nbDisplayedItems = 8;
  const [countScrolls, setCountScrolls] = useState(1);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [displayedPartners, setDisplayedPartners] = useState<Partner[]>([]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setCountScrolls(1);
    setScrolledToBottom(false);
    setDisplayedPartners(
      [...partners].slice(0, nbDisplayedItems)
    );
  }, [partners]);
  useEffect(() => {
    if (!scrolledToBottom) {
      return
    }
    setCountScrolls(countScrolls + 1);
    setDisplayedPartners(
      [...partners].slice(0, countScrolls * nbDisplayedItems)
    );
  }, [scrolledToBottom]);
  const handleScroll = (e: any) => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) -
        document.documentElement.scrollHeight >
      0;

    setScrolledToBottom(bottom);
  };
  return (
    <div>
      <div className={css.container}>
        <div className={css.cards_container}>
          {displayedPartners.map((item, index) => (
            <Card key={index.toString()} partner={item} />
          ))}
        </div>
      </div>
      {((displayedPartners.length < partners.length && scrolledToBottom) ||
        displayedPartners.length === 0) && <SVG />}
    </div>
  );
};

export default CardsList;
