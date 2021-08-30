export default function Item({ item, category, imageAnimation }) {
  return (
    <div className="item-img col-8 col-sm-6 col-md-4 mb-4">
      <figure class="snip1328">
        <img
          src={item.image}
          alt="sample47"
        />
        <figcaption>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </figcaption>
        <a href={item.link} target="_blank"></a>
      </figure>
    </div>
  );
}
