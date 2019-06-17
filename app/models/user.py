from app import db
from app import bcrypt


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False, unique=True)
    email = db.Column(db.String(80), nullable=False, unique=True)
    password_hash = db.Column(db.String(80))
    posts = db.relationship('Post', backref="author", lazy="dynamic")

    def hash_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password)

    def verify_password(self, candidate):
        return bcrypt.check_password_hash(self.password_hash, candidate)

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update(self, updated):
        updated.id = self.id
        db.session.merge(updated)
        db.session.commit()
