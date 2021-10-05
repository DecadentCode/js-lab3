"use strict";

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];
console.log(submissions);

//pushing a new submission to the array.
const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};

//deleting/splicing a submission from the array via index.
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

//deleting/splicing a submission from the array via "name."
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(index, 1);
};

//editing an existing submission.
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
editSubmission(submissions, 1, 92);
console.log(submissions);

//finding a submission via "name."
const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};
console.log(findSubmissionByName(submissions, "Jill"));

//finding the lowest score using forEach.
const findLowestScore = (array) => {
  let lowestScore = array[0];
  array.forEach((item) => {
    if (item.score < lowestScore.score) {
      lowestScore = item;
    }
  });
  return lowestScore;
};
console.log(findLowestScore(submissions));

//finding the average score using "for...of"
const findAverageScore = (array) => {
  //   let sum = 0;
  //   for (let item of array) {
  //     sum += item.score;
  //   }
  //   return sum / array.length;
  // };
  return (
    array.reduce((acc, cv) => {
      return acc + cv.score;
    }, 0) / array.length
  );
};
console.log(findAverageScore(submissions));

//filter the passing grades.
const filterPassing = (array) => {
  return array.filter((item) => {
    return item.passed;
  });
};
console.log(filterPassing(submissions));

//filter the grades that are 90+
const filter90AndAbove = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};
console.log(filter90AndAbove(submissions));
