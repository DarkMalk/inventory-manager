import subprocess
import platform


def get_manufacturer_windows():
    command = (
        "Get-WmiObject Win32_ComputerSystem | Select-Object -Property Manufacturer"
    )

    try:
        result = subprocess.run(
            ["powershell", "-Command", command],
            capture_output=True,
            text=True,
            shell=True,
        )

        return result.stdout.split("\n")[3].strip()
    except:
        return "No disponible"


def get_manufacturer_darwin():
    try:
        result = subprocess.run(
            ["system_profiler", "SPHardwareDataType"], capture_output=True, text=True
        )

        for line in result.stdout.split("\n"):
            if "Model Name" in line:
                return line.split(": ")[1]
    except Exception:
        return "No disponible"


def get_manufacturer():
    if platform.system() == "Windows":
        return get_manufacturer_windows()
    elif platform.system() == "Darwin":
        return get_manufacturer_darwin()

    return "No disponible"
