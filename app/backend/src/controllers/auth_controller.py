from flask import Blueprint, request, jsonify
from flask_login import login_required, login_user, logout_user, current_user
from models.user_model import UserModel
from database.db import db


auth_controller = Blueprint("auth_controller", __name__)


# Rota para criação de conta de usuários
@auth_controller.route("/user/add", methods=["POST"])
def add_user():
    data = request.json
    if "username" in data:
        user = UserModel(
            username=data["username"], password=data.get("password", "")
        )  # noqa
        db.session.add(user)
        db.session.commit()
        return jsonify({"message": "User added successfully"})
    return jsonify({"message": "invalid user data"}), 400


# Rota para excluir conta do usuário
@auth_controller.route("/user/delete", methods=["DELETE"])
@login_required
def user_delete():
    user = UserModel.query.get(int(current_user.id))
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "Account deleted successfully"})


# Rota para autenticação do usuário
@auth_controller.route("/login", methods=["POST"])
def login():
    data = request.json

    user = UserModel.query.filter_by(username=data.get("username")).first()

    if user and data.get("password") == user.password:
        login_user(user)
        return jsonify({"message": "Logged in successfully"})
    return jsonify({"message": "Unauthorized. Invalid credentials"}), 401


# Rota para logout do usuário
@auth_controller.route("/logout", methods=["POST"])
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logout successfully"})
