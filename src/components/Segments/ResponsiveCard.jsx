import React, { useState } from "react";
import styles from "../../modules/responsiveCard.module.sass";
import { IconMobile, IconWeb, IconEdit, IconDelete } from "../../components";
import Shoes from "../../assets/shoes.png";
export default function ResponsiveCard() {
  const [isResponsive, setIsResponsive] = useState(false);

  const changeView = (view) => {
    setIsResponsive(view === "web");
  };

  return (
    <div
      className={`${styles.contentCard} ${
        isResponsive ? styles.responsive : ""
      }`}
    >
      <div className={styles.actionsResponsive}>
        <div
          onClick={() => changeView("mobile")}
          className={`${!isResponsive ? styles.active : styles.disabled}`}
        >
          <IconMobile />
        </div>
        <div
          onClick={() => changeView("web")}
          className={`${isResponsive ? styles.active : styles.disabled}`}
        >
          <IconWeb />
        </div>
      </div>
      <div className={styles.responsiveCard}>
        <img className={styles.image} src={Shoes} alt="zapatillas azules" />
        <div className={styles.data}>
          <div className={styles.price}>$129.80</div>
          <div className={styles.information}>
            <div className={styles.description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eligendi, possimus?
            </div>
            <div className={styles.actions}>
              <div className={styles.edit}>
                <IconEdit />{" "}
              </div>
              <div className={styles.delete}>
                <IconDelete />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
