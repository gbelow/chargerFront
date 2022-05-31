import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Consumo mensal"
                  statTitle="420,23"
                  statArrow="up"
                  statPercent="39%"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Desde o Mês Passado"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Quantidade de Abastecimentos"
                  statTitle="4"
                  statArrow="down"
                  statPercent="25"
                  statPercentColor="text-red-500"
                  statDescripiron="Desde o Último Mês"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Saldo"
                  statTitle="R$-330"
                  statArrow="down"
                  statPercent=""
                  statPercentColor="text-red-500"
                  statDescripiron=""
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Velocidade de Carga"
                  statTitle="10KW"
                  statArrow="up"
                  statPercent="0"
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
