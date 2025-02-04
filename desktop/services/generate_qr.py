import qrcode


def generate_qr(data: dict):
    return qrcode.make(data)
