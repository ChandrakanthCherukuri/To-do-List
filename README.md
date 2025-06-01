# React To-Do List App 📝

A simple React app to manage tasks with features like add, delete, mark complete, sort, filter, and persistence using localStorage.

---

## 🔧 Features

- Add, delete, complete/incomplete tasks
- Sort (Time, A–Z) and Filter (All, Completed, Incomplete)
- Saves tasks in `localStorage`
- Clean, responsive UI with gradient background
- Automated testing with Jest + React Testing Library

---

##  Getting Started
``bash
npm install
npm start

##  Manual Testing Guide

- Test	Steps	Expected Result
- Add Task	Type in input → Click "Add"	Task appears in the list
- Empty Task Validation	Leave input empty → Click "Add"	Alert: "Task cannot be empty."
- Mark Complete	Click on task text	Text shows strikethrough
- Delete Task	Click ❌ next to a task	Task disappears
- Sort/Filter	Use dropdowns to sort/filter tasks	UI updates accordingly
- Refresh	Refresh the page	Tasks persist via localStorage


