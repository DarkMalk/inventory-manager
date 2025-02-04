import platform
import subprocess


def get_serialnumber_windows():
    command = "get-ciminstance win32_bios | select SerialNumber"

    try:
        result = subprocess.run(
            ["powershell.exe", "-Command", command],
            capture_output=True,
            text=True,
            shell=True,
        )
        return result.stdout.split("\n")[3].strip()
    except Exception:
        return "No disponible"


def get_serialnumber_darwin():
    try:
        result = subprocess.run(
            ["system_profiler", "SPHardwareDataType"], capture_output=True, text=True
        )
        for line in result.stdout.split("\n"):
            if "Serial Number" in line:
                return line.split(": ")[1]
    except Exception:
        return "No disponible"


def get_serialnumber():
    if platform.system() == "Darwin":
        return get_serialnumber_darwin()
    elif platform.system() == "Windows":
        return get_serialnumber_windows()

    return "No disponible"
