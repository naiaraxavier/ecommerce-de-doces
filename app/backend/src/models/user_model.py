from database.db import db
from flask_login import UserMixin


# User (id, username, password)
class UserModel(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False, unique=True)
    password = db.Column(db.String(80), nullable=True)
    cart = db.relationship(
        "CartModel", backref="user", lazy=True, cascade="all, delete-orphan"
    )
