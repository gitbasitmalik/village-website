

   const blogPosts = [
    {
      title: "Village Life",
      content: "Village life is peaceful and serene, surrounded by nature and fresh air.",
      date: "February 8, 2023",
      image: "https://i.ytimg.com/vi/jbmkTYb0-tg/maxresdefault.jpg"
    },
    {
      title: "Village Traditions",
      content: "Our village has a rich history and unique traditions passed down from generation to generation.",
      date: "February 6, 2023",
      image: "https://media.istockphoto.com/id/619526528/photo/traditional-konso-tribe-village-ethiopia.jpg?s=612x612&w=0&k=20&c=qv57-P0vYgl7u1208YQL9tdtASpb09dSLa7HFrkpPJ0="
    },
    {
      title: "Village People",
      content: "Our village people are so hardworking and they take care of cattles and do farming to feed  themselves and their family.",
      date: "February 6, 2023",
      image: "https://i.pinimg.com/originals/22/50/d0/2250d0859eb01b6dc8cb294c897984e3.jpg"
    },
    {
        title: "Our Village Festival",
        content: "Every year, we celebrate our village festival with music, food, and dance.",
        date: "February 7, 2023",
        image: "https://i.tribune.com.pk/media/images/625864-party-1383327270/625864-party-1383327270.jpg"
    },
    {
        title: "Village Area",
        content: "It's a hilly area with a family peek known as Miran Jani and also there is a meadow here known as Mona Meadow.",
        date: "February 7, 2023",
        image: "https://themapofindia.com/superawesome/2020/10/indian-village.jpg"
      },
      
  ];
  
  const blogPostsContainer = document.querySelector("#blog-posts");
  
  for (const post of blogPosts) 
  {
    const postElement = document.createElement("article");
    postElement.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    `;
    blogPostsContainer.appendChild(postElement);
    
  }

