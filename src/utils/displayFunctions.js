export const postsDisplay = (data) => {

  const displayCard = (data) => {
    const { userId, id, title, body } = data;
    return (
      <div className="post-card" key={id}>
        <div className="user-id">User ID: {userId}</div>
        <div className="post-id">Post ID: {id}</div>
        <div className="title">{title}</div>
        <div className="body">{body}</div>
      </div>
    );
  }

  if (Array.isArray(data)) {
    return data.map((data) => {
      return displayCard(data)
    });
  }
  return displayCard(data)
  
};



export const todoDisplay = (data) => {
  const displayCard = (data) => {
    const { userId, id, title, completed } = data;
    return (
      <div className="post-card" key={id}>
        <div className="user-id">User ID: {userId}</div>
        <div className="post-id">Todo ID: {id}</div>
        <div className="title">{title}</div>
        <div className="body">{completed}</div>
      </div>
    );
  };

  if (Array.isArray(data)) {
    return data.map((data) => {
      return displayCard(data);
    });
  }
  return displayCard(data);
};



export const usersDisplay = (data) => {
  const displayCard = (data) => {
    const {
      id,
      name,
      username,
      email,
      address: { street, suite, city, zipcode },
      phone,
      website,
    } = data;

    return (
      <div className="post-card" key={id}>
        <div>Name: {name}</div>
        <div>Username: {username}</div>
        <div>Email: {email}</div>
        <div>Address: </div>
        <div>{street}</div>
        <div>{suite}</div>
        <div>{city}</div>
        <div>{zipcode}</div>
        <div>{phone}</div>
        <div>{website}</div>
      </div>
    );
  };


  if (Array.isArray(data)) {
    return data.map((data) => {
      return displayCard(data);
    });
  }
  return displayCard(data);
};
