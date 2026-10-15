import { Item } from "../Item/Item";
import "./itemDetail.css";

export const ItemDetail = ({ item }) => {
    return (
        <div className="detail-wrapper">
            <Item {...item}>
                <button className="add-to-cart-button">Agregar al carrito</button>
            </Item>
        </div>
    );    
};