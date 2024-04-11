import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/BadgeSliderWrapper";
import { useDashboardContext } from "./../pages/DashboardLayout";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";


const BadgeSlider = () => {
  const { badgesData } = useDashboardContext();

  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    setIndex(0);
  }, []);

  const slideLeft = () => {
   setIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      return newIndex < 0 ? badgesData.length - itemsPerPage : newIndex;
    });
  };

  const slideRight = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      return newIndex >= badgesData.length ? 0 : newIndex;
    });
  };
  return (
    <Wrapper>
      <div className="container">
        <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            className="slider-container"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: .8 }}
          >
            {badgesData.slice(index, index + itemsPerPage).map((badge) => (
              <div className="slider-card" key={badge.id}>
                <img src={badge.badgePhoto} alt="badge" />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
      </div>
    </Wrapper>
  );
};

export default BadgeSlider;
