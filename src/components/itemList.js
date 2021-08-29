export default function Item({item,category,imageAnimation}){
   
    return(
    <div className="item-img col-8 col-sm-6 col-md-4 mb-4">
        <img className={`detail--img ${imageAnimation}`} width="100%" src={item.image}></img>
    </div>
    )
}