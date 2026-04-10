from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from .config import Config

db = SQLAlchemy()
jwt = JWTManager()

def create_app():

    app = Flask(__name__)

    app.config.from_object(Config)

    CORS(app)

    db.init_app(app)
    jwt.init_app(app)

    from . import models
    from .routes import main
    from .auth import auth
    from .property_routes import property_bp

    app.register_blueprint(main)

    app.register_blueprint(
        auth,
        url_prefix="/api/auth"
    )

    app.register_blueprint(
        property_bp,
        url_prefix="/api/properties"
    )

    return app