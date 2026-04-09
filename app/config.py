import os

class Config:

    SECRET_KEY = os.getenv(
        "SECRET_KEY",
        "estatex_secret"
    )

    SQLALCHEMY_DATABASE_URI = "sqlite:///estatex.db"

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    JWT_SECRET_KEY = os.getenv(
        "JWT_SECRET_KEY",
        "estatex_jwt_secret"
    )