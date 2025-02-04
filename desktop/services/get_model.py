import subprocess
import platform


def get_model_windows():
    command = "Get-WmiObject Win32_ComputerSystem | Select-Object -Property Model"

    try:
        result = subprocess.run(
            ["powershell", "-Command", command],
            capture_output=True,
            text=True,
            shell=True,
        )

        return result.stdout.split("\n")[3].strip()
    except Exception:
        return "No disponible"


def get_model_darwin():
    try:
        result = subprocess.run(
            ["system_profiler", "SPHardwareDataType"], capture_output=True, text=True
        )

        for line in result.stdout.split("\n"):
            if "Model Identifier" in line:
                return line.split(": ")[1]
    except Exception:
        return "No disponible"


def get_model():
    if platform.system() == "Windows":
        return get_model_windows()
    elif platform.system() == "Darwin":
        return get_model_darwin()

    return "No disponible"
