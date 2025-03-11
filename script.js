const wrapper = document.querySelector(".wrapper");
const menubtn = document.querySelector(".menu-btn");
const backbtn = document.querySelector(".back-btn");

const toggleScreen = () => {
  wrapper.classList.toggle("show-category");
};

menubtn.addEventListener("click", toggleScreen);
backbtn.addEventListener("click", toggleScreen);

const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".add-task");
const blackBackDrop = document.querySelector(".black-backdrop");

const toggleAddTaskForm = () => {
  addTaskForm.classList.toggle("active");
  blackBackDrop.classList.toggle("active");
  addTaskBtn.classList.toggle("active");
};
addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackDrop.addEventListener("click", toggleAddTaskForm);

// now start categories and add tasks with js

let categories = [
  {
    title: "Personal",
    img: "boy.png",
  },
  {
    title: "Shopping",
    img: "shopping.png",
  },
  {
    title: "Coding",
    img: "web-design.png",
  },
  {
    title: "Health",
    img: "healthcare.png",
  },
  {
    title: "Education",
    img: "education.png",
  },
  {
    title: "Fitness",
    img: "dumbbell.png",
  },
  {
    title: "Finance",
    img: "saving.png",
  },
  {
    title: "Work",
    img: "briefcase.png",
  },
];

let tasks = [
  {
    id: 1,
    task: "Go to market",
    category: "Shopping",
    completed: false,
  },
  {
    id: 2,
    task: "Go for a run",
    category: "Fitness",
    completed: false,
  },
  {
    id: 3,
    task: "Read about history",
    category: "Education",
    completed: false,
  },
  {
    id: 4,
    task: "Buy groceries",
    category: "Shopping",
    completed: false,
  },
  {
    id: 5,
    task: "Attend yoga class",
    category: "Fitness",
    completed: false,
  },
  {
    id: 6,
    task: "Study for math exam",
    category: "Education",
    completed: false,
  },
  {
    id: 7,
    task: "Clean the house",
    category: "Home",
    completed: false,
  },
  {
    id: 8,
    task: "Cook dinner",
    category: "Cooking",
    completed: false,
  },
  {
    id: 9,
    task: "Write a blog post",
    category: "Writing",
    completed: false,
  },
  {
    id: 10,
    task: "Call mom",
    category: "Personal",
    completed: false,
  },
  {
    id: 11,
    task: "Plan weekend trip",
    category: "Travel",
    completed: false,
  },
  {
    id: 12,
    task: "Fix the leaky faucet",
    category: "Home",
    completed: false,
  },
  {
    id: 13,
    task: "Learn a new recipe",
    category: "Cooking",
    completed: false,
  },
  {
    id: 14,
    task: "Read a novel",
    category: "Reading",
    completed: false,
  },
  {
    id: 15,
    task: "Organize the closet",
    category: "Home",
    completed: false,
  },
  {
    id: 16,
    task: "Go to the gym",
    category: "Fitness",
    completed: false,
  },
  {
    id: 17,
    task: "Watch a documentary",
    category: "Education",
    completed: false,
  },
  {
    id: 18,
    task: "Buy a new book",
    category: "Shopping",
    completed: false,
  },
  {
    id: 19,
    task: "Meditate for 10 minutes",
    category: "Wellness",
    completed: false,
  },
  {
    id: 20,
    task: "Update resume",
    category: "Career",
    completed: false,
  },
  {
    id: 21,
    task: "Water the plants",
    category: "Home",
    completed: false,
  },
  {
    id: 22,
    task: "Take the dog for a walk",
    category: "Pets",
    completed: false,
  },
  {
    id: 23,
    task: "Plan a budget",
    category: "Finance",
    completed: false,
  },
  {
    id: 24,
    task: "Write a thank you note",
    category: "Personal",
    completed: false,
  },
  {
    id: 25,
    task: "Attend a webinar",
    category: "Education",
    completed: false,
  },
  {
    id: 26,
    task: "Go to the dentist",
    category: "Health",
    completed: false,
  },
  {
    id: 27,
    task: "Buy a birthday gift",
    category: "Shopping",
    completed: false,
  },
  {
    id: 28,
    task: "Practice guitar",
    category: "Hobbies",
    completed: false,
  },
  {
    id: 29,
    task: "Clean the car",
    category: "Home",
    completed: false,
  },
  {
    id: 30,
    task: "Plan a family dinner",
    category: "Cooking",
    completed: false,
  },
];

let selectedCategory = categories[0];

const categoriesContainer = document.querySelector(".categories");
const categoryTitle = document.querySelector(".category-title");
const totalCategoryTasks = document.querySelector(".category-tasks");
const totalTasks = document.querySelector(".totalTasks");
const categoryImg = document.querySelector("#category-img");

const calculateTotal = () => {
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  totalCategoryTasks.innerHTML = `${categoryTasks.length} Tasks`;
  totalTasks.innerHTML = tasks.length;
};

const renderCategories = () => {
  categoriesContainer.innerHTML = "";
  categories.forEach((category) => {
    //get all the tasks of current category
    const categoryTasks = tasks.filter(
      (task) => task.category.toLowerCase() === category.title.toLowerCase()
    );

    //create a div to render category
    const div = document.createElement("div");
    div.classList.add("category");
    div.addEventListener("click", () => {
      wrapper.classList.add("show-category");
      selectedCategory = category;
      console.log(selectedCategory);
      categoryTitle.innerHTML = category.title;
      categoryImg.src = `images/${category.img}`;

      //rerender tasks when category change
      renderTasks();
    });
    div.innerHTML = ` 
    <div class="left">
    <img src="images/${category.img}" alt="${category.title}" />
    
    <div class="content">
    <h1>${category.title}</h1>
    <p>${categoryTasks.length} Tasks</p>
    </div>
    </div>
    <div class="options"> 
    <div class="toggle-btn">
    <svg
    width="50%"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 512"
    >
    <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
    <path
    d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
    />
    </svg>
    </div>
    </div>
    `;

    categoriesContainer.appendChild(div);
  });
};

const tasksContainer = document.querySelector(".tasks");

const renderTasks = () => {
  tasksContainer.innerHTML = "";
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );

  //if no task for selected category
  if (categoryTasks.length === 0) {
    tasksContainer.innerHTML = `
    <p class ="no-task">No tasks for this category</p>`;
  } else {
    //if there are tasks for selected category render them
    categoryTasks.forEach((task) => {
      const div = document.createElement("div");
      div.classList.add("task-wrapper");
      const label = document.createElement("label");
      label.classList.add("task");
      label.setAttribute("for", task.id);
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = task.id;
      checkbox.checked = task.completed;

      //add completion functionality on click checkbox
      checkbox.addEventListener("change", () => {
        const index = tasks.findIndex((t) => t.id === task.id);
        // change the true to false or vice versa
        tasks[index].completed = !tasks[index].completed;
        //save in local
        saveLocal();
      });

      div.innerHTML = `
      <div class="delete">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 x="0px"
                 y="0px"
                 width="25"
                 height="25"
                 viewBox="0 0 32 32"
               >
                 <path
                   d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"
                 ></path>
               </svg>
             </div>
     `;
      label.innerHTML = `
       <span class="checkmark">
                  <svg
                    fill="#000000"
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 490 490"
                    xml:space="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <polygon
                        points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "
                      ></polygon>
                    </g>
                  </svg>
                </span>
                <p>${task.task}</p>
                `;
      label.prepend(checkbox);
      div.prepend(label);
      tasksContainer.appendChild(div);

      //delete functionality
      const deleteBtn = div.querySelector(".delete");
      deleteBtn.addEventListener("click", () => {
        const index = tasks.findIndex((t) => t.id === task.id);

        //remove the clicked task
        tasks.splice(index, 1);
        saveLocal();
        renderTasks();
      });
    });

    renderCategories();
    calculateTotal();
  }
};
//save and get tasks from local strong
const saveLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
const getLocal = () => {
  const localTasks = JSON.parse(localStorage.getItem("tasks"));

  //if tasks found
  if (localTasks) {
    tasks = localTasks;
  }
};

//lets and functionality to add new tasks

//render all the categories in select
const categorySelect = document.querySelector("#category-select");
const cancelBtn = document.querySelector(".cancel-btn");
const addBtn = document.querySelector(".add-btn");

cancelBtn.addEventListener("click", toggleAddTaskForm);

const taskInput = document.querySelector("#task-input");
addBtn.addEventListener("click", () => {
  const task = taskInput.value;
  const category = categorySelect.value;

  if (task === "") {
    alert("Please enter a task");
  } else {
    const newTask = {
      id: tasks.length + 1,
      task,
      category,
      completed: false,
    };
    tasks.push(newTask);
    taskInput.value = "";
    saveLocal();
    toggleAddTaskForm();
    renderTasks();
  }
});

categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category.title.toLowerCase();
  option.textContent = category.title;
  categorySelect.appendChild(option);
});
//these all are already stored tasks
getLocal();
calculateTotal();
renderCategories();
renderTasks();
