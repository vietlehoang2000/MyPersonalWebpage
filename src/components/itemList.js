export default function Item({ item, category, imageAnimation }) {
  return (
    <div className='item-img col-8 col-sm-6 col-md-4 mb-4'>
      <a href={item.link} target='_blank' rel='noreferrer'>
        <figure className='snip1328 animate__animated animate__fadeInLeft'>
          <img width='100%' src={item.image} alt='sample47' />
          <figcaption>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </figcaption>
        </figure>
      </a>
    </div>
  );
}
