from services import (
    generate_qr,
    get_ip,
    get_hostname,
    get_serialnumber,
    get_model,
    get_manufacturer,
)

from models.window import Window

hostname = get_hostname()
ip = get_ip()
serialnumber = get_serialnumber()
model = get_model()
manufacturer = get_manufacturer()

payload = {
    "hostname": hostname,
    "ip": ip,
    "serialnumber": serialnumber,
    "manufacturer": manufacturer,
    "model": model,
}

qr = generate_qr(payload)

if __name__ == "__main__":
    Window("Data PC", qr, payload)
