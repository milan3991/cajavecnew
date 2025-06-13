import React from 'react';
import '../about.style.css';

import baljic from '../../../assets/team/baljic.png';
import udovicic from '../../../assets/team/udovicic.png';
import risovic from '../../../assets/team/risovic.png';
import majstorovic from '../../../assets/team/majstorovic.png';

import zoric from '../../../assets/team/zoric.png';
import vukolic from '../../../assets/team/vukolic.png';
import gracanin from '../../../assets/team/gracanin.png';
import lajic from '../../../assets/team/lajic.png';
import bujak from '../../../assets/team/bujak.png';
import mihajlovic from '../../../assets/team/mihajlovic.png';
import kurija from '../../../assets/team/kurija.png';

import marjanac from '../../../assets/team/marjanac.png';
import gril from '../../../assets/team/gril.png';

import adamovic from '../../../assets/team/adamovic.png';

const teamData = [
  {
    role: "Предсједник Друштва",
    members: [{ name: "др Милован Баљић", image: baljic }]
  },
  {
    role: "Умјетнички руководилац",
    members: [{ name: "мр Љубиша Удовичић", image: udovicic }]
  },
  {
    role: "Директор ансамбла",
    members: [{ name: "дипл.инг. Драшко Адамовић", image: adamovic }]
  },

  {
    role: "Шеф оркестра",
    members: [{ name: "Александар Рисовић", image: risovic }]
  },
  {
    role: "Музички педагог",
    members: [{ name: "ма Гордана Мајсторовић", image: majstorovic }]
  },
    {
    role: "Костимографи",
    members: [
      { name: "Мирјана Марјанац", image: marjanac },
      { name: "Мирјана Грил", image: gril }
    ]
  },
  {
    role: "Руководиоци фолклора",
    members: [
      { name: "Маринко Зорић", image: zoric },
      { name: "Катарина Вуколић", image: vukolic },
      { name: "Андреа Грачанин", image: gracanin },
      { name: "Данијела Лајић", image: lajic },
      { name: "Бујак Марија", image: bujak },
      { name: "Синиша Михајловић", image: mihajlovic },
      { name: "Курија Никола", image: kurija }
    ]
  },

];

const TeamSection = () => {
  return (
    <div className="team-section">
      <h2 className="team-heading">Тим Ансамбла</h2>
      <div className="team-grid">
        {teamData.map((item, index) => (
          <div key={index} className="team-card">
            <h3 className="team-role">{item.role}</h3>
            <ul className="team-members">
              {item.members.map((member, idx) => (
                <li key={idx} className="member-item">
                  <img src={member.image} alt={member.name} className="member-avatar" />
                  <span>{member.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
