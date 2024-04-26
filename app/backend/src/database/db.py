from flask_sqlalchemy import SQLAlchemy
from flask import Flask
import os


db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "minha_chave_123"

    current_dir = os.path.abspath(os.path.dirname(__file__))
    database_path = os.path.join(current_dir, "ecommerce.db")
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + database_path

    db.init_app(app)

    return app
