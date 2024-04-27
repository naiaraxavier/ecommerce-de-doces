from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from models.product_model import ProductModel
from models.user_model import UserModel
from models.cart_model import CartModel
from database.db import db

cart_controller = Blueprint("cart_controller", __name__)


# Rota que adiciona um produto no carrinho de compras
@cart_controller.route("/api/cart/add/<int:product_id>", methods=["POST"])
def add_to_cart(product_id):
    user_id = current_user.id if current_user.is_authenticated else None
    product = ProductModel.query.get(product_id)

    if product:
        cart_item = CartModel(user_id=user_id, product_id=product_id)
        db.session.add(cart_item)
        db.session.commit()
        return jsonify({"message": "Item added to the cart successfully"})
    return jsonify({"message": "Failed to add item to the cart"}), 400


# Rota que remove um produto do carrinho de compras
@cart_controller.route("/api/cart/remove/<int:product_id>", methods=["DELETE"])
def remove_from_cart(product_id):
    user_id = current_user.id if current_user.is_authenticated else None
    cart_item = CartModel.query.filter_by(
        user_id=user_id, product_id=product_id
    ).first()

    if cart_item:
        db.session.delete(cart_item)
        db.session.commit()
        return jsonify({"message": "Item removed from the cart successfully"})
    return jsonify({"message": "Failed to remove item from the cart"}), 400


# Rota que lista todos os produtos que estão no carrinho de compras do usuário
@cart_controller.route("/api/cart", methods=["GET"])
def view_cart():
    # Carregar os itens do carrinho em uma única consulta
    cart_items = (
        db.session.query(CartModel, ProductModel)
        .join(ProductModel, CartModel.product_id == ProductModel.id)
        .all()
    )

    cart_content = []
    for cart_item, product in cart_items:
        cart_content.append(
            {
                "id": cart_item.id,
                "user_id": cart_item.user_id,
                "product_id": cart_item.product_id,
                "product_name": product.name,
                "product_price": product.price,
            }
        )
    return jsonify(cart_content)


# Rota de checkout - nesse caso ele não direciona para
# nenhuma "forma de pagamento"
# Apenas limpa o carrinho do usuário que está autenticado
@cart_controller.route("/api/cart/checkout", methods=["POST"])
@login_required
def checkout():
    user = UserModel.query.get(int(current_user.id))
    cart_items = user.cart
    for cart_item in cart_items:
        db.session.delete(cart_item)
    db.session.commit()
    return jsonify({"message": "Checkout successful. Cart has been clared"})
