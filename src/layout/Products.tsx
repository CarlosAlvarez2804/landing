import ProductOverview from '../components/ProductOverview';
import ItemNavigator from '../components/ItemNavigator';
import EjecutivaData from '../data/EjecutivaData';
import OperativaData from '../data/OperativaData';
import VisitanteData from '../data/VisitanteData';
import EduData from '../data/EduData';
import ConfortData from '../data/ConfortData';
import IndustrialData from '../data/IndustrialData';

import { useState } from 'react';

function Products(): JSX.Element {
  const [showOne, changeOne] = useState(true);
  const [showTwo, changeTwo] = useState(false);
  const [showThree, changeThree] = useState(false);
  const [showFour, changeFour] = useState(false);
  const [showFive, changeFive] = useState(false);
  const [showSix, changeSix] = useState(false);

  const ItemNavigatorData = [
    {
      title: "Ejecutiva",
      onClick: () => {
        changeOne(true);
        changeTwo(false);
        changeThree(false);
        changeFour(false);
        changeFive(false);
        changeSix(false);
      }
    },
    {
      title: "Operativa",
      onClick: () => {
        changeOne(false);
        changeTwo(true);
        changeThree(false);
        changeFour(false);
        changeFive(false);
        changeSix(false);
      }
    },
    {
      title: "Visitante Y Eventos",
      onClick: () => {
        changeOne(false);
        changeTwo(false);
        changeThree(true);
        changeFour(false);
        changeFive(false);
        changeSix(false);
      }
    },
    {
      title: "Edu & Train",
      onClick: () => {
        changeOne(false);
        changeTwo(false);
        changeThree(false);
        changeFour(true);
        changeFive(false);
        changeSix(false);
      }
    },
    {
      title: "Confort",
      onClick: () => {
        changeOne(false);
        changeTwo(false);
        changeThree(false);
        changeFour(false);
        changeFive(true);
        changeSix(false);
      }
    },
    {
      title: "Industrial",
      onClick: () => {
        changeOne(false);
        changeTwo(false);
        changeThree(false);
        changeFour(false);
        changeFive(false);
        changeSix(true);
      }
    },
  ];

  return (
    <>
      <ItemNavigator data = {ItemNavigatorData}/>
      <div className="relative bg-gray-600">
        <ProductOverview className={`${showOne ? 'block' : 'hidden'} absolute top-0 right-0 bottom-0 left-0`} data = {EjecutivaData}/>
        <ProductOverview className={`${showTwo ? 'block' : 'hidden'} absolute top-0 right-0 bottom-0 left-0`} data = {OperativaData}/>
        <ProductOverview className={`${showThree ? 'block' : 'hidden'} absolute top-0 right-0 bottom-0 left-0`} data = {VisitanteData}/>
        <ProductOverview className={`${showFour ? 'block' : 'hidden'} absolute top-0 right-0 bottom-0 left-0`} data = {EduData}/>
        <ProductOverview className={`${showFive ? 'block' : 'hidden'} absolute top-0 right-0 bottom-0 left-0`} data = {ConfortData}/>
        <ProductOverview className={`${showSix ? 'block' : 'hidden'} absolute top-0 right-0 bottom-0 left-0`} data = {IndustrialData}/>
      </div>
    </>
  );
}

export default Products;