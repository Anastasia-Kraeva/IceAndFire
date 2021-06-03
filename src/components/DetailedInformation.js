import React from "react";

const DetailedInformation = (props) => {//для рендера нужно пройти циклом по объекту, копировать данные как в примере
  console.log("props.id DetInf", props.dataAPI)

  // const rows = [];
  // let lastCategory = null;
  //
  // item.forEach((parameter) => {
  //   if (parameter.category !== lastCategory) {
  //     rows.push(
  //       <CategoryTitle category={parameter.category} key={parameter.category} />
  //     );
  //   }
  //   rows.push(<ListItem product={parameter} key={parameter.name} />);
  //   lastCategory = parameter.category;
  // });

  // return (
  // <table>
  //   <tbody>{rows}</tbody>
  // </table>
  // );
// };
};

export default DetailedInformation;