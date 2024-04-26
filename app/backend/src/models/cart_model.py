from database.db import db


# CartItem (id, user_id, product_id)
class CartModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.Integer, db.ForeignKey("user_model.id"), nullable=False
    )  # noqa
    product_id = db.Column(
        db.Integer, db.ForeignKey("product_model.id"), nullable=False
    )  # noqa
