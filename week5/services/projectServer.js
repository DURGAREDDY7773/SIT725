
const projects = [
    {
      title: "Kitten",
      image: "images/kitten.jpg",
      link: "About Kitten",
      description: "Demo description about kitten"
    },
    {
      title: "Kitten 2",
      image: "images/kitten2.jpeg",
      link: "About Kitten 2",
      description: "Demo description about kitten 2"
    },
    {
      title: "Kitten 3",
      image: "images/kitten3.jpg",
      link: "About Kitten 3",
      description: "Demo description about kitten 3"
    }
  ];
  
  function getAllProjects() {
    return projects;
  }
  
  module.exports = { getAllProjects };
  