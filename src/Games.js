const Games = ({ image, title, author, price }) => {
  return (
    <section className='game'>
      <img src={image} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <h4>{price}</h4>
    </section>
  );
};

export default Games;
