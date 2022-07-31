import React, { useEffect, useState, useLayoutEffect } from "react";
import { PieChart } from "react-native-svg-charts";
import { Text } from "react-native-svg";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";

const data = [
  {
    attendance: "p",

    key: 1,
    status: 40,
    svg: { fill: "#D2F790" },
  },
  {
    attendance: "A",
    key: 2,
    status: 30,
    svg: { fill: "#A4C3DA" },
  },
  {
    attendance: "L",
    key: 3,
    status: 30,
    svg: { fill: "gray" },
  },
];

var filters = {
  attendance: "p",
};

var out = data.filter((person) => {
  return Object.keys(filters).every((filter) => {
    return filters[filter] === person[filter];
  });
});

console.log(out);

const Labels = ({ slices }) => {
  return slices.map((slice, index) => {
    const { labelCentroid, data } = slice;
    return (
      <Text
        key={index}
        x={labelCentroid[0]}
        y={labelCentroid[1]}
        fill={"black"}
        textAnchor={"middle"}
        alignmentBaseline={"middle"}
        fontSize={20}
        stroke={"black"}
        strokeWidth={0.2}
      >
        {data.status}
      </Text>
    );
  });
};

const TeacherPieChartForSchoolAdmin = ({ outerRadius }) => {
  const myData = useSelector((state) => state.schoolAdmin);

  const focus = useIsFocused();

  const fetchData = () => {
    fetch(
      "https://ams.firefly-techsolutions.com/services/getteacherattendancedashboardbyschoolid",
      {
        method: "POST", //GET and ...
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ schoolId: myData.schoolId }),
      }
    )
      .then((response) => response.json()) //   <------ this line
      .then((response) => {
        const students = response;
        const attendanceOfAbsent = students.data.filter(
          (x) => x.attendance == "A"
        ).length;

        const attendanceOfPresent = students.data.filter(
          (x) => x.attendance == "P"
        ).length;

        const attendanceOfLeave = students.data.filter(
          (x) => x.attendance == "L"
        ).length;

        const attendanceOfTotalStudents = students.data.filter(
          (x) => x.attendance
        ).length;

        const absentaverage =
          (attendanceOfAbsent / attendanceOfTotalStudents) * 100;

        const presentaverage =
          (attendanceOfPresent / attendanceOfTotalStudents) * 100;

        const leaveAverage =
          (attendanceOfLeave / attendanceOfTotalStudents) * 100;

        data[0].status = Math.round(absentaverage);
        data[1].status = Math.round(presentaverage);
        data[2].status = Math.round(leaveAverage);
      });
  };

  useLayoutEffect(() => {
    fetchData();
  }, [myData]);

  return (
    <PieChart
      height={210}
      backgroundColor="transperant"
      paddingLeft="20"
      style={{ height: 150 }}
      valueAccessor={({ item }) => item.status}
      data={data}
      outerRadius={outerRadius}
      innerRadius={0}
    >
      <Labels />
    </PieChart>
  );
};

export default TeacherPieChartForSchoolAdmin;
