module.exports = () => {
  const data = {
    friends: [],
  };

  for (let index = 0; index < 500; index++) {
    likesCount = Number(Math.round(Math.random() * 100));

    data.friends.push({
      id: index + 1,
      likes: likesCount + index,
      name: `Amigo ${index + 1}`,
    });
  }

  return data;
};
