from app.api import bp


@bp.route("/posts", methods=["GET"])
def get_many_posts():
    pass


@bp.route("/posts", methods=["POST"])
def create_post():
    pass


@bp.route("/posts/<int:id>", methods=["GET"])
def get_single_post():
    pass


@bp.route("/posts/<int:id>", methods=["PUT"])
def update_post():
    pass


@bp.route("/posts/<int:id>", methods=["DELETE"])
def delete_post():
    pass

