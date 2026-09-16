import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      id: 1,
      company: "Google",
      img: "https://cdn.simpleicons.org/google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$32/hour",
      location: "Mumbai, India",
    },
    {
      id: 2,
      company: "Microsoft",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJANb0XItp3xw1MB-dF4ccHxxCtgDc7auj-nAXlk-vw&s=10",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$35/hour",
      location: "Mumbai, India",
    },
    {
      id: 3,
      company: "Amazon",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPjeZ-FjJ-FHOMlVO9c1ZtEPo8ypuNnRN1uCMugVyyA&s=10",
      datePosted: "3 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$40/hour",
      location: "Mumbai, India",
    },
    {
      id: 4,
      company: "Meta",
      img: "https://cdn.simpleicons.org/meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$38/hour",
      location: "Mumbai, India",
    },
    {
      id: 5,
      company: "Apple",
      img: "https://cdn.simpleicons.org/apple",
      datePosted: "4 weeks ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$45/hour",
      location: "Mumbai, India",
    },
    {
      id: 6,
      company: "Netflix",
      img: "https://cdn.simpleicons.org/netflix",
      datePosted: "10 weeks ago",
      post: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$50/hour",
      location: "Mumbai, India",
    },
    {
      id: 7,
      company: "IBM",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcpOlrqzV8OLMC7_8pW5_-tb0ti9MMSPR2BBS_cZo0g&s=10",
      datePosted: "6 days ago",
      post: "Associate Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$28/hour",
      location: "Mumbai, India",
    },
    {
      id: 8,
      company: "NVIDIA",
      img: "https://cdn.simpleicons.org/nvidia",
      datePosted: "3 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$48/hour",
      location: "Mumbai, India",
    },
    {
      id: 9,
      company: "Adobe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUZ34xGKHLtTpwHjkBKf0Tp5MmtDKhqNoG8HW2HnDzw&s=10",
      datePosted: "8 days ago",
      post: "UI/UX Software Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$30/hour",
      location: "Mumbai, India",
    },
    {
      id: 10,
      company: "Salesforce",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDnHxaiWDSP12X4w_hN3tSE4JkgLTt6wfJDED8D8IOg&s=10",
      datePosted: "5 weeks ago",
      post: "Cloud Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$42/hour",
      location: "Mumbai, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.company}
              img={elem.img}
              datePosted={elem.datePosted}
              location={elem.location}
              pay={elem.pay}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              key={elem.id}
            />
          </div>
        );
      })}
      ;
    </div>
  );
};

export default App;
