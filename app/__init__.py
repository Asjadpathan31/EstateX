from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from .config import Config

db = SQLAlchemy()
jwt = JWTManager()

def create_app():

    app = Flask(__name__)

    # Load config
    app.config.from_object(Config)

    # Enable CORS
    CORS(app)

    # Initialize extensions
    db.init_app(app)
    jwt.init_app(app)

    # Import models
    from . import models

    # Import blueprints
    from .routes import main
    from .auth import auth

    # Register blueprints
    app.register_blueprint(main)

    app.register_blueprint(
        auth,
        url_prefix="/api/auth"
    )

    return app