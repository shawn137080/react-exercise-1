const initState = {
  projects: [
    { id: "1", title: "help me ", content: " heyyy" },
    { id: "2", title: "collect dust", content: " heyyy" },
    { id: "3", title: "meme ", content: " heyyy" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;

    case "CREATE_PROJECT_ERR":
      console.log("create project err", action.err);
      return state;

    default:
      return state;
  }
};

export default projectReducer;
