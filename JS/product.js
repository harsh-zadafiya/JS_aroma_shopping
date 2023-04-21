"use strict";

import all_list_products from "../data/products.json" assert { type: "json" };

// define global variables
let all_products = [];
let all_pricing = [];

// common function to display the output of all tasks
const displayPricing = (list) => {
  // get all tasks which are not done
  const list_of_tasks = list.filter((task) => !task.isDone);

  // display all the task to the ALL TASK TAB
  const html_of_all_list_of_tasks = taskList(list);
  $("#list_of_tasks").html(html_of_all_list_of_tasks);
};

// creating a list of tasks html elements
const taskList = (list_of_tasks) => {
  let html = "";

  // asssign css classes based on the task status and priority
  for (var i = 0; i < list_of_tasks.length; i++) {
    let priorityClass = "bg-primary";

    if (list_of_tasks[i].priority == "high") {
      priorityClass = "bg-danger";
    } else if (list_of_tasks[i].priority == "medium") {
      priorityClass = "bg-warning";
    }

    // if task is done than hide the done button & add like on the that task
    let disNone = "d-none";
    let isTaskDone = " text-decoration-line-through";
    if (!list_of_tasks[i].isDone) {
      disNone = "";
      isTaskDone = "";
    }

    // concating all the task in the html variable
    html +=
      '<li class="list-group-item d-flex-center   " >' +
      '<span class="badge rounded-pill ' +
      priorityClass +
      ' me-3 p-1"><span class="visually-hidden">.</span></span> <span class="' +
      isTaskDone +
      '">' +
      list_of_tasks[i].name +
      "</span> " +
      '<div class="ms-auto">' +
      '<span class="badge rounded-pill bg-secondary me-3 p-1">' +
      list_of_tasks[i].date +
      " " +
      list_of_tasks[i].time +
      "</span>" +
      '<button class="btn-squre btn-success btn-sm me-1 ' +
      disNone +
      '" onclick="markAsDoneTask(' +
      list_of_tasks[i].id +
      ');">' +
      '<img class="text-white" src="' +
      "./images/icons/check-circle.svg" +
      '" alt="check-circle" srcset="' +
      "./images/icons/check-circle.svg" +
      '" width="20" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"/>' +
      "</button>" +
      '<button class="btn-squre btn-primary btn-sm me-1" onclick="editRow(' +
      list_of_tasks[i].id +
      ');">' +
      '<img class="text-white" src="' +
      "./images/icons/edit.svg" +
      '" alt="trash" srcset="' +
      "./images/icons/edit.svg" +
      '" width="20" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"/>' +
      "</button>" +
      '<button class="btn-squre btn-danger btn-sm" onclick="deleteRow(' +
      list_of_tasks[i].id +
      ');">' +
      '<img class="text-white" src="' +
      "./images/icons/trash-2.svg" +
      '" alt="trash" srcset="' +
      "./images/icons/trash-2.svg" +
      '" width="20" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"/>' +
      "</button>" +
      "</div>" +
      "</li>";
  }

  // return the html
  return html;
};

// checking the dom is loaded or not
$(document).ready(() => {
  console.log("called");
});
