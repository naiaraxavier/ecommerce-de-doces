from flask import Blueprint, request, jsonify
from flask_login import login_required
from models.product_model import ProductModel
from database.db import db

product_controller = Blueprint("product_controller", __name__)


# Rota para adicionar um produto no banco de dados(BD)
@product_controller.route("/api/products/add", methods=["POST"])
@login_required
def add_product():
    data = request.json
    if "name" in data and "price" in data:
        product = ProductModel(
            name=data["name"],
            price=data["price"],
            description=data.get("description", ""),
            image=data.get("image", ""),  # noqa
        )
        db.session.add(product)
        db.session.commit()
        return jsonify({"message": "Product added successfully"})
    return jsonify({"message": "invalid product data"}), 400


# Rota para deletar um produto no BD
@product_controller.route(
    "/api/products/delete/<int:product_id>", methods=["DELETE"]
)  # noqa
@login_required
def delete_product(product_id):
    # Recuperar o produto da base de dados
    # Verificar se o produto existe
    # Se existe, apagar da base de dados
    # Se não existe, retornar 404
    product = ProductModel.query.get(product_id)
    if product:
        db.session.delete(product)
        db.session.commit()
        return jsonify({"message": "Product deleted successfully"})
    return jsonify({"message": "Product not found"}), 404


# Rota para 'recuperar' um produto pelo id do BD
@product_controller.route("/api/products/<int:product_id>", methods=["GET"])
def get_product_details(product_id):
    product = ProductModel.query.get(product_id)
    if product:
        return jsonify(
            {
                "id": product.id,
                "name": product.name,
                "price": product.price,
                "description": product.description,
                "image": product.image,
            }
        )
    return jsonify({"message": "Product not found"}), 404


# Rota para alterar informações de um produto no BD
@product_controller.route(
    "/api/products/update/<int:product_id>", methods=["PUT"]
)  # noqa
@login_required
def update_product(product_id):
    product = ProductModel.query.get(product_id)
    if not product:
        return jsonify({"message": "Product not found"}), 404

    data = request.json
    if "name" in data:
        product.name = data["name"]

    if "price" in data:
        product.price = data["price"]

    if "description" in data:
        product.description = data["description"]

    if "image" in data:
        product.image = data["image"]

    db.session.commit()
    return jsonify({"message": "Product updated successfully"})


# Rota para listar os produtos cadastrados
@product_controller.route("/api/products", methods=["GET"])
def get_products():
    products = ProductModel.query.all()
    product_list = []
    for product in products:
        product_data = {
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "image": product.image,
        }
        product_list.append(product_data)
    return jsonify(product_list)


# Rota de pesquisa de produtos pelo nome do produto
@product_controller.route("/api/products/search", methods=["GET"])
def search_products():
    search_query = request.args.get("q")

    if search_query:
        products = ProductModel.query.filter(
            ProductModel.name.ilike(f"%{search_query}%")
        ).all()

        if products:
            product_list = []
            for product in products:
                product_data = {
                    "id": product.id,
                    "name": product.name,
                    "price": product.price,
                    "description": product.description,
                    "image": product.image,
                }
                product_list.append(product_data)
            return jsonify(product_list), 200

    return (
        jsonify({"message": "Not Found. No products found."}),  # noqa
        404,
    )
